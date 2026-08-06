#!/usr/bin/env python3
"""
Sync Schema & Sitemap Hook Script for Antigravity Workspace.

Automatically scans any newly added or modified HTML page, dynamically determines
its schema entity type (TechArticle, SoftwareApplication, ProfilePage, ContactPage,
CollectionPage, or WebPage), injects/updates an optimized connected JSON-LD @graph,
registers new articles into index.html's rotating Field Notes array,
and keeps sitemap.xml perfectly synchronized.
"""

import sys
import json
import os
import re
from datetime import datetime
import xml.etree.ElementTree as ET

def get_workspace_root(input_data):
    workspace_paths = input_data.get("workspacePaths", [])
    if workspace_paths and os.path.exists(workspace_paths[0]):
        return os.path.abspath(workspace_paths[0])
    return os.getcwd()

def extract_target_file(input_data):
    tool_args = input_data.get("toolCall", {}).get("args", {})
    target = (
        tool_args.get("TargetFile")
        or tool_args.get("target_file")
        or tool_args.get("targetFile")
    )
    if not target and len(sys.argv) > 1:
        target = sys.argv[1]
    return target

def inspect_root_landing_page(index_path):
    base_url = "https://trustnodelogic.com"
    org_name = "Trust Node Logic"
    site_title = "Trust Node Logic | Pioneer of Hybrid AI Music Production"
    author_name = "Justin Tyler Ray"

    if os.path.exists(index_path):
        try:
            with open(index_path, "r", encoding="utf-8") as f:
                index_content = f.read()

            canonical_match = re.search(
                r'<link\s+rel="canonical"\s+href="([^"]+)"', index_content, re.IGNORECASE
            )
            if canonical_match:
                url_val = canonical_match.group(1).strip().rstrip("/")
                domain_match = re.match(r"(https?://[^/]+)", url_val)
                if domain_match:
                    base_url = domain_match.group(1)

            title_match = re.search(
                r'<title>(.*?)</title>', index_content, re.IGNORECASE
            )
            if title_match:
                full_title = title_match.group(1).strip()
                site_title = full_title
                org_name = full_title.split("|")[0].strip()
        except Exception:
            pass

    return base_url, org_name, site_title, author_name

def detect_page_type(file_name, content, title_text, headline, description):
    if file_name == "index.html":
        return "WebPage"

    json_ld_match = re.search(r'<script\s+type="application/ld\+json">(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
    if json_ld_match:
        try:
            parsed = json.loads(json_ld_match.group(1))
            graph_items = parsed.get("@graph", [parsed]) if isinstance(parsed, dict) else []
            for item in graph_items:
                itype = item.get("@type")
                if itype in ["SoftwareApplication", "TechArticle", "Article", "ProfilePage", "ContactPage", "CollectionPage", "AboutPage"]:
                    return "TechArticle" if itype == "Article" else itype
        except Exception:
            pass

    if re.search(r'<meta\s+property="og:type"\s+content="article"', content, re.IGNORECASE) or 'property="article:section"' in content:
        return "TechArticle"

    app_files = ["mixrstudio.html", "subtractive.html", "jdaw.html", "slicer.html", "imagesizer.html", "chordcompose.html"]
    app_keywords = ["mixer", "synth", "slicer", "mastering suite", "audio app", "web app", "daw"]
    if file_name.lower() in app_files or any(kw in title_text.lower() for kw in app_keywords) or "<canvas" in content.lower() or "AudioContext" in content:
        return "SoftwareApplication"

    if file_name == "bio.html" or "biography" in title_text.lower() or "bio" in headline.lower():
        return "ProfilePage"

    if file_name == "contact.html" or "contact" in title_text.lower():
        return "ContactPage"

    if file_name in ["music.html", "projects.html"] or any(kw in title_text.lower() for kw in ["discography", "portfolio", "archive", "projects"]):
        return "CollectionPage"

    article_files = [
        "songstructure.html", "promptingthemachine.html", "lastnewgenre.html",
        "liquidears.html", "agentichybridproduction.html", "musicindustryforecast.html",
        "may2026tools.html", "trainingday.html", "machinehumanhybrid.html",
        "futureofhybrid.html", "Suno101.html", "fingerprint.html",
        "c2pa-music-provenance.html", "hybridproductionstandard.html", "black-mirror.html"
    ]
    if (
        file_name.lower() in [f.lower() for f in article_files]
        or "<article" in content.lower()
        or "field notes" in title_text.lower()
        or "readTime" in content
        or "byline" in content
    ):
        return "TechArticle"

    return "WebPage"

def analyze_target_html(target_path, base_url):
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    file_name = os.path.basename(target_path)

    canonical_match = re.search(
        r'<link\s+rel="canonical"\s+href="([^"]+)"', content, re.IGNORECASE
    )
    if canonical_match:
        canonical_url = canonical_match.group(1).strip()
    else:
        if file_name == "index.html":
            canonical_url = f"{base_url}/"
        else:
            canonical_url = f"{base_url}/{file_name}"

    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    if title_match:
        title_text = title_match.group(1).strip()
        headline = title_text.split("|")[0].strip()
    else:
        title_text = file_name.replace(".html", "").replace("-", " ").title()
        headline = title_text

    desc_match = re.search(
        r'<meta\s+name="description"\s+content="([^"]+)"', content, re.IGNORECASE
    )
    description = desc_match.group(1).strip() if desc_match else headline

    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
    if h1_match:
        clean_h1 = re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
        if clean_h1:
            headline = clean_h1

    page_type = detect_page_type(file_name, content, title_text, headline, description)

    return content, canonical_url, title_text, headline, description, page_type

def build_json_ld_graph(base_url, org_name, site_title, author_name, canonical_url, title_text, headline, description, page_type, file_name):
    org_id = f"{base_url}/#organization"
    website_id = f"{base_url}/#website"
    person_id = f"{base_url}/#person"

    graph = []

    if page_type == "TechArticle":
        article_entity = {
            "@type": "TechArticle",
            "@id": f"{canonical_url}#article",
            "headline": headline,
            "description": description,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonical_url
            },
            "isPartOf": {
                "@id": website_id
            },
            "author": {
                "@id": person_id
            },
            "publisher": {
                "@id": org_id
            },
            "articleSection": "Field Notes",
            "inLanguage": "en-US"
        }
        graph.append(article_entity)
    elif page_type == "SoftwareApplication":
        app_entity = {
            "@type": "SoftwareApplication",
            "@id": f"{canonical_url}#softwareapplication",
            "name": headline,
            "url": canonical_url,
            "description": description,
            "applicationCategory": "MusicApplication",
            "operatingSystem": "Web",
            "creator": {
                "@id": person_id
            },
            "publisher": {
                "@id": org_id
            },
            "isPartOf": {
                "@id": website_id
            }
        }
        graph.append(app_entity)
    else:
        webpage_entity = {
            "@type": page_type if page_type in ["ProfilePage", "ContactPage", "CollectionPage", "AboutPage"] else "WebPage",
            "@id": f"{canonical_url}#webpage",
            "url": canonical_url,
            "name": title_text,
            "description": description,
            "isPartOf": {
                "@id": website_id
            },
            "publisher": {
                "@id": org_id
            },
            "author": {
                "@id": person_id
            },
            "inLanguage": "en-US"
        }
        graph.append(webpage_entity)

    graph.append({
        "@type": "WebSite",
        "@id": website_id,
        "url": f"{base_url}/",
        "name": site_title,
        "publisher": {
            "@id": org_id
        }
    })

    graph.append({
        "@type": "Organization",
        "@id": org_id,
        "name": org_name,
        "url": f"{base_url}/",
        "logo": f"{base_url}/favicon.png",
        "founder": {
            "@id": person_id
        }
    })

    graph.append({
        "@type": "Person",
        "@id": person_id,
        "name": "Justin Tyler Ray",
        "alternateName": ["JRAY", "loserdub", "VISION"],
        "url": f"{base_url}/",
        "jobTitle": [
            "Music Producer",
            "Music Artist",
            "Creative Technologist",
            "Pioneer of Hybrid AI Music Production"
        ],
        "homeLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "East Lansing",
                "addressRegion": "MI",
                "addressCountry": "US"
            }
        },
        "sameAs": [
            "https://github.com/loserdub",
            "https://www.reddit.com/r/hybridproduction/",
            "https://www.linkedin.com/in/jray-me/"
        ]
    })

    if file_name != "index.html":
        parent_name = "Field Notes" if page_type == "TechArticle" else ("Apps & Tools" if page_type == "SoftwareApplication" else "Home")
        parent_url = f"{base_url}/what-is-hybrid.html" if page_type == "TechArticle" else (f"{base_url}/projects.html" if page_type == "SoftwareApplication" else f"{base_url}/")

        graph.append({
            "@type": "BreadcrumbList",
            "@id": f"{canonical_url}#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": f"{base_url}/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": parent_name,
                    "item": parent_url
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": headline,
                    "item": canonical_url
                }
            ]
        })

    return {
        "@context": "https://schema.org",
        "@graph": graph
    }

def update_html_file(target_path, content, json_ld_data):
    json_ld_str = json.dumps(json_ld_data, indent=2)
    script_tag = f'<script type="application/ld+json">\n{json_ld_str}\n</script>'

    if re.search(r'<script\s+type="application/ld\+json">.*?</script>', content, re.DOTALL | re.IGNORECASE):
        updated_content = re.sub(
            r'<script\s+type="application/ld\+json">.*?</script>',
            script_tag,
            content,
            flags=re.DOTALL | re.IGNORECASE
        )
    elif '</head>' in content:
        updated_content = content.replace('</head>', f'{script_tag}\n</head>')
    else:
        updated_content = content + f'\n{script_tag}\n'

    if updated_content != content:
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(updated_content)

def sync_index_field_notes(index_path, headline, description, page_type, file_name):
    if page_type != "TechArticle" or file_name in ["index.html", "sitemap.html"] or not os.path.exists(index_path):
        return

    try:
        with open(index_path, "r", encoding="utf-8") as f:
            index_content = f.read()

        rel_url = f"./{file_name}"
        if rel_url in index_content:
            return  # Already registered

        today_str = datetime.now().strftime("%b %d, %Y").upper()
        clean_title = headline.upper().replace('"', '\\"')
        clean_desc = description.replace('"', '\\"')

        new_entry_js = f"""              {{
                title: "{clean_title}",
                date: "{today_str}",
                category: "FIELD NOTES",
                desc: "{clean_desc}",
                url: "{rel_url}",
                color: "text-emerald-400",
                hoverColor: "group-hover:text-emerald-300",
                readTime: "10 MIN READ",
                isNew: true
              }},"""

        if "const ALL_FIELD_NOTES = [" in index_content:
            updated_content = index_content.replace(
                "const ALL_FIELD_NOTES = [",
                f"const ALL_FIELD_NOTES = [\n{new_entry_js}"
            )
            with open(index_path, "w", encoding="utf-8") as f:
                f.write(updated_content)
    except Exception:
        pass

def update_sitemap_xml(sitemap_path, canonical_url):
    today_str = datetime.now().strftime("%Y-%m-%d")
    ns = "http://www.sitemaps.org/schemas/sitemap/0.9"

    if not os.path.exists(sitemap_path):
        initial_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="{ns}">
  <url>
    <loc>{canonical_url}</loc>
    <lastmod>{today_str}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
"""
        with open(sitemap_path, "w", encoding="utf-8") as f:
            f.write(initial_xml)
        return

    try:
        ET.register_namespace('', ns)
        tree = ET.parse(sitemap_path)
        root = tree.getroot()

        url_exists = False
        for url_elem in root.findall(f"{{{ns}}}url"):
            loc_elem = url_elem.find(f"{{{ns}}}loc")
            if loc_elem is not None and loc_elem.text == canonical_url:
                url_exists = True
                lastmod_elem = url_elem.find(f"{{{ns}}}lastmod")
                if lastmod_elem is not None:
                    lastmod_elem.text = today_str
                break

        if not url_exists:
            new_url_elem = ET.SubElement(root, f"{{{ns}}}url")
            loc_elem = ET.SubElement(new_url_elem, f"{{{ns}}}loc")
            loc_elem.text = canonical_url
            lastmod_elem = ET.SubElement(new_url_elem, f"{{{ns}}}lastmod")
            lastmod_elem.text = today_str
            changefreq_elem = ET.SubElement(new_url_elem, f"{{{ns}}}changefreq")
            changefreq_elem.text = "monthly"
            priority_elem = ET.SubElement(new_url_elem, f"{{{ns}}}priority")
            priority_elem.text = "0.8"

            ET.indent(tree, space="  ", level=0)
            tree.write(sitemap_path, encoding="utf-8", xml_declaration=True)
    except Exception:
        pass

def main():
    try:
        input_raw = sys.stdin.read()
        input_data = json.loads(input_raw) if input_raw.strip() else {}
    except Exception:
        input_data = {}

    target_file = extract_target_file(input_data)
    if not target_file or not target_file.endswith(".html"):
        sys.exit(0)

    file_name = os.path.basename(target_file)
    if file_name in ["sitemap.html"]:
        sys.exit(0)

    if "node_modules" in target_file or ".agents" in target_file:
        sys.exit(0)

    workspace_root = get_workspace_root(input_data)
    target_path = os.path.abspath(target_file)
    if not os.path.exists(target_path):
        sys.exit(0)

    index_path = os.path.join(workspace_root, "index.html")
    sitemap_path = os.path.join(workspace_root, "sitemap.xml")

    base_url, org_name, site_title, author_name = inspect_root_landing_page(index_path)
    content, canonical_url, title_text, headline, description, page_type = analyze_target_html(target_path, base_url)

    json_ld_data = build_json_ld_graph(
        base_url, org_name, site_title, author_name,
        canonical_url, title_text, headline, description, page_type, file_name
    )

    update_html_file(target_path, content, json_ld_data)
    sync_index_field_notes(index_path, headline, description, page_type, file_name)
    update_sitemap_xml(sitemap_path, canonical_url)

if __name__ == "__main__":
    main()
