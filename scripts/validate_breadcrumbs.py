import xml.etree.ElementTree as ET
import json
import os
import re
from bs4 import BeautifulSoup

def validate_all_breadcrumbs():
    tree = ET.parse('sitemap.xml')
    urls = [child.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text.strip() for child in tree.getroot()]

    print(f"=== DETAILED BREADCRUMB VALIDATION ON {len(urls)} SITEMAP PAGES ===\n")

    issues_found = []

    for url in urls:
        fn = url.replace('https://trustnodelogic.com/', '')
        if not fn:
            fn = 'index.html'
        if not os.path.exists(fn):
            issues_found.append((fn, f"File does not exist: {fn}"))
            continue

        with open(fn, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()

        soup = BeautifulSoup(html, 'html.parser')
        
        # 1. Canonical tag
        canonical = soup.find('link', rel='canonical')
        canonical_href = canonical.get('href') if canonical else None
        if not canonical_href:
            issues_found.append((fn, "Missing canonical link"))
        elif canonical_href != url:
            issues_found.append((fn, f"Canonical href '{canonical_href}' does not match sitemap url '{url}'"))

        # 2. JSON-LD scripts
        scripts = soup.find_all('script', type='application/ld+json')
        if not scripts:
            issues_found.append((fn, "Missing JSON-LD script"))
            continue

        bc_found = None
        webpage_found = None
        
        for s in scripts:
            if not s.string:
                continue
            try:
                data = json.loads(s.string)
                graph = data.get('@graph', [data] if isinstance(data, dict) else data)
                for entity in graph:
                    if entity.get('@type') == 'BreadcrumbList':
                        bc_found = entity
                    if entity.get('@type') in ['WebPage', 'AboutPage', 'ItemPage', 'ContactPage', 'CollectionPage'] or 'WebPage' in str(entity.get('@type')):
                        webpage_found = entity
            except Exception as e:
                issues_found.append((fn, f"JSON parse error: {e}"))

        if not bc_found:
            if fn != 'index.html':
                issues_found.append((fn, "No BreadcrumbList entity found in JSON-LD"))
            continue

        # Check BreadcrumbList properties
        items = bc_found.get('itemListElement')
        if not isinstance(items, list):
            issues_found.append((fn, "itemListElement is not a list"))
            continue

        if len(items) < 2 and fn != 'index.html':
            issues_found.append((fn, f"BreadcrumbList has fewer than 2 items ({len(items)})"))

        # Check items
        for expected_pos, item in enumerate(items, 1):
            if not isinstance(item, dict):
                issues_found.append((fn, f"Item {expected_pos} is not a dictionary"))
                continue
            
            if item.get('@type') != 'ListItem':
                issues_found.append((fn, f"Item {expected_pos} has invalid @type: {item.get('@type')}"))

            pos = item.get('position')
            if pos != expected_pos:
                issues_found.append((fn, f"Item has position {pos}, expected {expected_pos}"))

            name = item.get('name')
            if not name or not str(name).strip():
                issues_found.append((fn, f"Item {expected_pos} missing name"))

            item_url = item.get('item')
            if not item_url or not str(item_url).strip():
                issues_found.append((fn, f"Item {expected_pos} missing 'item' URL"))
            elif not item_url.startswith('https://trustnodelogic.com'):
                issues_found.append((fn, f"Item {expected_pos} 'item' URL not absolute on trustnodelogic.com: {item_url}"))

        # Check last item matches canonical
        if items and fn != 'index.html':
            last_item_url = items[-1].get('item')
            if last_item_url != canonical_href:
                issues_found.append((fn, f"Last breadcrumb item URL '{last_item_url}' does not match canonical '{canonical_href}'"))

        # Check WebPage breadcrumb reference
        if webpage_found:
            wp_bc = webpage_found.get('breadcrumb')
            bc_id = bc_found.get('@id')
            if wp_bc:
                wp_bc_id = wp_bc.get('@id') if isinstance(wp_bc, dict) else wp_bc
                if bc_id and wp_bc_id != bc_id:
                    issues_found.append((fn, f"WebPage breadcrumb reference '{wp_bc_id}' does not match BreadcrumbList @id '{bc_id}'"))

    print(f"Total issues found: {len(issues_found)}")
    for fn, iss in issues_found:
        print(f"  [{fn}] {iss}")

if __name__ == '__main__':
    validate_all_breadcrumbs()
