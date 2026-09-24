import os
import glob
import json
import re
from bs4 import BeautifulSoup

def audit_repo():
    print("=" * 60)
    print("STARTING DEEP REPOSITORY AUDIT: VISIONMAIN")
    print("=" * 60)

    # Get all html files
    all_html_files = sorted(glob.glob('**/*.html', recursive=True))
    
    # Classify files
    social_cards = [f for f in all_html_files if f.startswith('field-notes-') or 'asset' in f.lower()]
    sub_apps = ['void/index.html', 'void15new.html']
    utility_pages = ['404.html', 'bio.html']
    
    # Main pages are all top-level content and application pages
    main_pages = [
        f for f in all_html_files 
        if f not in social_cards and f not in sub_apps and f not in utility_pages and not f.startswith('assets')
    ]
    
    print(f"Total HTML files: {len(all_html_files)}")
    print(f"Main site pages: {len(main_pages)}")
    print(f"Social card templates: {len(social_cards)}")
    print(f"Sub-apps / Utilities: {len(sub_apps) + len(utility_pages)}")
    print("-" * 60)
    
    # Read sitemap to ensure full coverage
    with open('sitemap.xml', 'r', encoding='utf-8') as f:
        sitemap_content = f.read()
    sitemap_soup = BeautifulSoup(sitemap_content, 'xml')
    sitemap_locs = [loc.text.strip() for loc in sitemap_soup.find_all('loc')]
    
    # Collect all existing IDs across all files for anchor verification
    file_ids = {}
    for fpath in all_html_files:
        try:
            with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                soup = BeautifulSoup(f.read(), 'html.parser')
            ids = set(tag.get('id') for tag in soup.find_all(id=True))
            file_ids[fpath.replace('\\', '/')] = ids
        except Exception as e:
            file_ids[fpath.replace('\\', '/')] = set()
            
    findings = {}

    for fpath in sorted(all_html_files):
        fpath_norm = fpath.replace('\\', '/')
        is_main = fpath in main_pages
        file_issues = []
        
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            raw_content = f.read()
            
        soup = BeautifulSoup(raw_content, 'html.parser')
        
        # 1. Corrupted UTF-8 / Replacement chars
        if '\ufffd' in raw_content:
            file_issues.append("Corrupted characters detected (\\ufffd)")
            
        # 2. Em-Dashes in user-facing pages
        if not fpath.startswith('assets') and fpath not in social_cards:
            em_dashes = re.findall(r'—|&mdash;|&#8212;', raw_content)
            if em_dashes:
                file_issues.append(f"Em-dashes (— or &mdash;) found: {len(em_dashes)}")
                
        # 3. Main Page Validations
        if is_main:
            # Expected Canonical URL
            expected_canon = "https://trustnodelogic.com/" if fpath == 'index.html' else f"https://trustnodelogic.com/{fpath}"
            
            # Check in sitemap
            if expected_canon not in sitemap_locs:
                file_issues.append(f"Missing from sitemap.xml: {expected_canon}")
                
            # Charset & Viewport
            charset = soup.find('meta', charset=True)
            if not charset or charset.get('charset', '').lower() != 'utf-8':
                file_issues.append("Missing or invalid <meta charset='UTF-8'>")
                
            viewport = soup.find('meta', attrs={'name': 'viewport'})
            if not viewport or 'width=device-width' not in viewport.get('content', ''):
                file_issues.append("Missing or invalid <meta name='viewport'>")
                
            # Robots
            robots = soup.find('meta', attrs={'name': 'robots'})
            if not robots:
                file_issues.append("Missing <meta name='robots'>")
                
            # Title
            title_tag = soup.find('title')
            if not title_tag or not title_tag.string or not title_tag.string.strip():
                file_issues.append("Missing <title> tag")
            else:
                title_str = title_tag.string.strip()
                if len(title_str) > 75:
                    file_issues.append(f"Title length is {len(title_str)} (> 75 chars): '{title_str}'")
                if '—' in title_str:
                    file_issues.append(f"Title contains em-dash: '{title_str}'")
                    
            # H1 Structure
            h1s = soup.find_all('h1')
            if len(h1s) == 0:
                file_issues.append("Missing <h1> tag")
            elif len(h1s) > 1:
                file_issues.append(f"Multiple <h1> tags found: {len(h1s)}")
                
            # Canonical Link
            canon_link = soup.find('link', rel='canonical')
            if not canon_link or not canon_link.get('href'):
                file_issues.append("Missing <link rel='canonical'>")
            elif canon_link.get('href') != expected_canon:
                file_issues.append(f"Canonical URL mismatch: found '{canon_link.get('href')}', expected '{expected_canon}'")
                
            # Meta Description
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            og_desc = soup.find('meta', attrs={'property': 'og:description'})
            tw_desc = soup.find('meta', attrs={'name': 'twitter:description'})
            
            meta_desc_val = None
            if not meta_desc or not meta_desc.get('content'):
                file_issues.append("Missing <meta name='description'>")
            else:
                meta_desc_val = meta_desc.get('content').strip()
                d_len = len(meta_desc_val)
                if not (120 <= d_len <= 155):
                    file_issues.append(f"Meta description length {d_len} (must be 120-155 chars): '{meta_desc_val}'")
                if og_desc and og_desc.get('content', '').strip() != meta_desc_val:
                    file_issues.append(f"og:description mismatch with meta description")
                elif not og_desc:
                    file_issues.append("Missing og:description")
                if tw_desc and tw_desc.get('content', '').strip() != meta_desc_val:
                    file_issues.append(f"twitter:description mismatch with meta description")
                elif not tw_desc:
                    file_issues.append("Missing twitter:description")
                    
            # OpenGraph & Twitter required tags
            og_title = soup.find('meta', attrs={'property': 'og:title'})
            if not og_title:
                file_issues.append("Missing og:title")
            og_url = soup.find('meta', attrs={'property': 'og:url'})
            if not og_url:
                file_issues.append("Missing og:url")
            og_image = soup.find('meta', attrs={'property': 'og:image'})
            if not og_image:
                file_issues.append("Missing og:image")
            tw_card = soup.find('meta', attrs={'name': 'twitter:card'})
            if not tw_card:
                file_issues.append("Missing twitter:card")
                
            # JSON-LD Schema
            ld_scripts = soup.find_all('script', type='application/ld+json')
            if not ld_scripts:
                file_issues.append("Missing JSON-LD structured data")
            else:
                for idx, js_tag in enumerate(ld_scripts):
                    raw_ld = js_tag.string or ''
                    if 'Ø' in raw_ld:
                        file_issues.append(f"JSON-LD [{idx}] contains slashed Ø; replace with ASCII O")
                    try:
                        ld_data = json.loads(raw_ld)
                        if '@context' not in ld_data:
                            file_issues.append(f"JSON-LD [{idx}] missing @context")
                            
                        # Graph checks
                        if '@graph' in ld_data:
                            graph = ld_data['@graph']
                            types = [item.get('@type') for item in graph if isinstance(item, dict)]
                            flat_types = []
                            for t in types:
                                if isinstance(t, list):
                                    flat_types.extend(t)
                                elif t:
                                    flat_types.append(t)
                                    
                            # Check Person entity
                            has_person = any(t == 'Person' for t in flat_types)
                            if not has_person:
                                file_issues.append(f"JSON-LD @graph missing Person entity")
                                
                            # Check BreadcrumbList entity
                            has_bread = any(t == 'BreadcrumbList' for t in flat_types)
                            if not has_bread:
                                file_issues.append(f"JSON-LD @graph missing BreadcrumbList entity")
                                
                            # Check Description consistency
                            for item in graph:
                                if isinstance(item, dict) and item.get('@type') in ['Article', 'TechArticle', 'WebPage', 'SoftwareApplication', 'WebApplication']:
                                    if 'description' in item and meta_desc_val:
                                        item_desc = item.get('description', '').strip()
                                        if item_desc != meta_desc_val:
                                            file_issues.append(f"JSON-LD ({item.get('@type')}) description mismatch: '{item_desc[:40]}...' vs meta '{meta_desc_val[:40]}...'")
                                            
                    except Exception as ex:
                        file_issues.append(f"JSON-LD [{idx}] parse error: {str(ex)}")
                        
        # 4. Check Internal Links
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href'].strip()
            if not href or href.startswith(('javascript:', 'mailto:', 'tel:', 'http://', 'https://')):
                continue
                
            parts = href.split('#')
            target_file = parts[0].split('?')[0].lstrip('/')
            target_anchor = parts[1] if len(parts) > 1 else None
            
            # Root path '/'
            if target_file == '':
                target_file = 'index.html' if href.startswith('/') or href == '' else ''
                
            if target_file and target_file != '':
                target_file_clean = target_file.split('?')[0]
                if not os.path.exists(target_file_clean):
                    file_issues.append(f"Broken link target: href='{href}'")
                    
        # 5. Check Local Images
        images = soup.find_all('img', src=True)
        for idx, img in enumerate(images):
            src = img['src'].strip()
            if not src.startswith(('http://', 'https://', 'data:')):
                clean_src = src.split('?')[0].lstrip('/')
                if not os.path.exists(clean_src):
                    file_issues.append(f"Broken image src: '{src}'")
                    
        # 6. Check Local Scripts & Stylesheets
        for script in soup.find_all('script', src=True):
            src = script['src'].strip()
            if not src.startswith(('http://', 'https://', '//')):
                clean_src = src.split('?')[0].lstrip('/')
                if not os.path.exists(clean_src):
                    file_issues.append(f"Broken script src: '{src}'")
                    
        for link in soup.find_all('link', rel=lambda r: r and 'stylesheet' in r, href=True):
            href = link['href'].strip()
            if not href.startswith(('http://', 'https://', '//')):
                clean_href = href.split('?')[0].lstrip('/')
                if not os.path.exists(clean_href):
                    file_issues.append(f"Broken stylesheet href: '{href}'")
                    
        if file_issues:
            findings[fpath] = file_issues

    with open('audit_out.json', 'w', encoding='utf-8') as out_f:
        json.dump(findings, out_f, indent=2)
        
    print(f"\nAUDIT SUMMARY: {len(findings)} files with issues written to audit_out.json")
    for fpath, issues in findings.items():
        print(f"\nFILE: {fpath} ({len(issues)} issues):")
        for iss in issues:
            print(f"  [-] {iss}")
            
    return findings

if __name__ == '__main__':
    audit_repo()
