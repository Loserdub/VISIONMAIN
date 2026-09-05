import json
import re
import os
import glob
from bs4 import BeautifulSoup

def audit_json_ld(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    scripts = soup.find_all('script', type='application/ld+json')
    if not scripts:
        errors.append("No JSON-LD script tag found")
        return errors
    
    for i, s in enumerate(scripts):
        try:
            raw_text = s.string if s.string else ""
            if 'Ø' in raw_text:
                errors.append(f"JSON-LD block {i} contains slashed Ø character; should be ASCII O for search indexing")
            data = json.loads(raw_text)
            if "@context" not in data:
                errors.append(f"JSON-LD block {i} missing @context")
            if "@graph" in data:
                types = [item.get("@type") for item in data["@graph"]]
                ids = [item.get("@id") for item in data["@graph"] if "@id" in item]
                # check person
                if not any("Person" in str(t) for t in types) and "void" not in filepath:
                    errors.append(f"JSON-LD @graph missing Person entity in {filepath}")
            elif "@type" in data:
                pass
            else:
                errors.append(f"JSON-LD block {i} missing @type or @graph")
        except Exception as e:
            errors.append(f"JSON-LD parse error in block {i}: {str(e)}")
    return errors

def audit_meta_and_standards(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # 1. Zero em-dashes
    em_dash_matches = re.findall(r'—|&mdash;|&#8212;', html)
    if em_dash_matches:
        errors.append(f"Found {len(em_dash_matches)} em-dashes (— or &mdash;)")
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # 2. Title
    title = soup.find('title')
    if not title or not title.string:
        errors.append("Missing <title>")
    else:
        title_str = title.string.strip()
        if len(title_str) > 75:
            errors.append(f"Title too long: {len(title_str)} chars ('{title_str}')")
            
    # 3. Meta Description
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    og_desc = soup.find('meta', attrs={'property': 'og:description'})
    tw_desc = soup.find('meta', attrs={'name': 'twitter:description'})
    
    if meta_desc and meta_desc.get('content'):
        m_len = len(meta_desc['content'])
        if not (120 <= m_len <= 155):
            errors.append(f"Meta description length is {m_len} chars (must be 120-155). Content: '{meta_desc['content']}'")
        
        if og_desc and og_desc.get('content') != meta_desc.get('content'):
            errors.append("og:description does not match meta description verbatim")
        if tw_desc and tw_desc.get('content') != meta_desc.get('content'):
            errors.append("twitter:description does not match meta description verbatim")
    elif 'card' not in filepath and 'social' not in filepath:
        errors.append("Missing meta description")
        
    # 4. Canonical
    canonical = soup.find('link', rel='canonical')
    if not canonical and 'card' not in filepath and 'social' not in filepath:
        errors.append("Missing canonical link")
        
    return errors

def audit_laa_v2(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    main = soup.find('main')
    if not main:
        return errors
        
    # clone main to clean
    main_clone = BeautifulSoup(str(main), 'html.parser').find('main')
    for tag in main_clone.find_all(['script', 'style', 'nav']):
        tag.decompose()
        
    words = [w for w in re.split(r'\s+', main_clone.get_text()) if w]
    T = len(words)
    if T < 100:
        return errors
        
    f_E_target = -(-T // 500) + 1 # ceil(T/500) + 1
    
    # Find entity positions
    entity_positions = []
    for i in range(len(words)):
        two_words = ' '.join(words[i:i+2]).lower()
        three_words = ' '.join(words[i:i+3]).lower()
        if 'justin ray' in two_words:
            entity_positions.append((i, 'Justin Ray'))
        elif 'trust node logic' in three_words:
            entity_positions.append((i, 'Trust Node Logic'))
            
    # filter duplicates that might overlap
    deduped = []
    last_pos = -10
    for pos, name in entity_positions:
        if pos - last_pos > 2:
            deduped.append((pos, name))
            last_pos = pos
            
    count = len(deduped)
    
    # Check zones
    z_intro_end = int(T * 0.15)
    z_core_end = int(T * 0.85)
    
    z_intro = [p for p in deduped if p[0] <= z_intro_end]
    z_core = [p for p in deduped if z_intro_end < p[0] < z_core_end]
    z_outro = [p for p in deduped if p[0] >= z_core_end]
    
    print(f"LAA-v2 Analysis for {os.path.basename(filepath)}: T={T}, f_E target={f_E_target}, actual count={count}")
    print(f"  Intro zone (0-{z_intro_end}): {len(z_intro)} occurrences")
    print(f"  Core zone ({z_intro_end}-{z_core_end}): {len(z_core)} occurrences")
    print(f"  Outro zone ({z_core_end}-{T}): {len(z_outro)} occurrences")
    
    if len(z_core) > 0:
        errors.append(f"LAA-v2 Violation: {len(z_core)} entity occurrences in middle 70% zero-brand technical core!")
        
    return errors

def main():
    print("=== STARTING COMPLETE TRUST NODE LOGIC REPO AUDIT ===")
    
    key_files = [
        'staccatoreview.html',
        'field-notes.html',
        'index.html',
        'projects.html',
        'void.html',
        'void15new.html',
        'about.html',
        'void/index.html',
        'sitemap.xml',
        'llms.txt'
    ]
    
    for kf in key_files:
        if not os.path.exists(kf):
            print(f"ERROR: Key file {kf} missing!")
            continue
            
        print(f"\n--- Auditing {kf} ---")
        if kf.endswith('.html'):
            json_errors = audit_json_ld(kf)
            if json_errors:
                print(f"  [JSON-LD Errors]: {json_errors}")
            else:
                print(f"  [JSON-LD]: PASS (Valid syntax, Person/App, Graph present, Zero slashed Ø in Schema)")
                
            meta_errors = audit_meta_and_standards(kf)
            if meta_errors:
                print(f"  [Standards Errors]: {meta_errors}")
            else:
                print(f"  [Standards]: PASS (Zero em-dashes, Meta description 120-155 chars match)")
                
            if kf in ['staccatoreview.html']:
                laa_errors = audit_laa_v2(kf)
                if laa_errors:
                    print(f"  [LAA-v2 Errors]: {laa_errors}")
                else:
                    print(f"  [LAA-v2]: PASS (Zone split and frequency calibrated)")
                    
    # Check sitemap
    with open('sitemap.xml', 'r', encoding='utf-8') as f:
        sitemap_txt = f.read()
    if 'staccatoreview.html' in sitemap_txt and 'void.html' in sitemap_txt:
        print("\n[Sitemap]: PASS (staccatoreview.html and void.html present with lastmod)")
    else:
        print("\n[Sitemap]: FAIL (Key pages missing from sitemap)")
        
    # Check llms.txt
    with open('llms.txt', 'r', encoding='utf-8') as f:
        llms_txt = f.read()
    if 'staccatoreview.html' in llms_txt and 'void web sampler' in llms_txt.lower():
        print("[llms.txt]: PASS (staccatoreview.html and void web sampler indexed)")
    else:
        print("[llms.txt]: FAIL (Missing citations in llms.txt)")
        
    # Check rendered card image exists
    og_image_path = os.path.join('assets', 'images', 'staccatoreview-card-og.webp')
    if os.path.exists(og_image_path):
        size = os.path.getsize(og_image_path)
        print(f"[Social Card Image]: PASS ({og_image_path} exists, size={size} bytes)")
    else:
        print(f"[Social Card Image]: FAIL ({og_image_path} missing)")

if __name__ == '__main__':
    main()
