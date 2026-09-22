import os
import re
from bs4 import BeautifulSoup
from collections import defaultdict
from urllib.parse import urlparse

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

html_files = [f for f in os.listdir(root) if f.endswith('.html')]

links_from = defaultdict(list)
incoming_links = defaultdict(set)

def normalize_target(href, source_file):
    if not href:
        return None
    href = href.strip()
    if href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'):
        return None
    
    p = urlparse(href)
    netloc = p.netloc.lower()
    path = p.path
    
    if netloc and netloc not in ['trustnodelogic.com', 'www.trustnodelogic.com', 'trustnodelogic.web.app']:
        return None
        
    path = path.lstrip('/')
    if path == '' or path == '/':
        return 'index.html'
    
    fname = os.path.basename(path)
    if not fname:
        return 'index.html'
    return fname

empty_anchors = []
semantic_scores = {}

for fname in sorted(html_files):
    fpath = os.path.join(root, fname)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    for a in soup.find_all('a'):
        href = a.get('href', '')
        text = a.get_text(strip=True)
        aria_label = a.get('aria-label', '').strip()
        aria_labelledby = a.get('aria-labelledby', '').strip()
        title = a.get('title', '').strip()
        imgs = a.find_all('img')
        img_alts = [img.get('alt', '').strip() for img in imgs if img.get('alt', '').strip()]
        svgs = a.find_all('svg')
        svg_titles = [svg.find('title').get_text(strip=True) for svg in svgs if svg.find('title')]
        
        has_anchor_text = bool(text or aria_label or aria_labelledby or title or img_alts or svg_titles)
        if not has_anchor_text:
            empty_anchors.append({
                'source': fname,
                'href': href,
                'tag': str(a)[:250]
            })
            
        target = normalize_target(href, fname)
        if target and target != fname:
            incoming_links[target].add(fname)

    tags = [tag.name for tag in soup.find_all()]
    total_tags = len(tags)
    div_count = tags.count('div')
    span_count = tags.count('span')
    p_count = tags.count('p')
    semantic_tags = ['header', 'nav', 'main', 'article', 'section', 'aside', 'footer']
    sem_counts = {t: tags.count(t) for t in semantic_tags}
    total_sem = sum(sem_counts.values())
    
    has_header = tags.count('header') > 0
    has_nav = tags.count('nav') > 0
    has_main = tags.count('main') > 0
    has_footer = tags.count('footer') > 0
    has_article = tags.count('article') > 0
    has_section = tags.count('section') > 0
    
    sem_ratio = total_sem / (div_count + span_count + 1e-5)
    semantic_scores[fname] = {
        'total_tags': total_tags,
        'div': div_count,
        'span': span_count,
        'sem_counts': sem_counts,
        'total_sem': total_sem,
        'ratio': sem_ratio,
        'has_header': has_header,
        'has_nav': has_nav,
        'has_main': has_main,
        'has_footer': has_footer
    }

print('=== EMPTY ANCHOR TAGS ===')
print(f'Count: {len(empty_anchors)}')
for ea in empty_anchors:
    print(f"{ea['source']}: href={ea['href']} -> tag: {ea['tag']}\n")

print('\n=== SITEMAP PAGES INCOMING LINK COUNTS ===')
with open(os.path.join(root, 'sitemap.xml'), 'r', encoding='utf-8') as f:
    sitemap_xml = f.read()
sitemap_urls = re.findall(r'<loc>https://trustnodelogic\.com/(.*?)</loc>', sitemap_xml)
sitemap_files = [u if u else 'index.html' for u in sitemap_urls]

one_incoming = []
zero_incoming = []
for sf in sitemap_files:
    inc = incoming_links[sf]
    count = len(inc)
    if count == 1:
        one_incoming.append((sf, list(inc)))
    elif count == 0:
        zero_incoming.append(sf)

print(f'Sitemap Pages with 1 incoming link: {len(one_incoming)}')
for p, inc in one_incoming:
    print(f'  {p}: linked from {inc}')

print(f'\nSitemap Pages with 0 incoming links: {len(zero_incoming)}')
for p in zero_incoming:
    print(f'  {p}')

print('\n=== ALL HTML FILES INCOMING LINK COUNTS (COUNT == 1) ===')
for f in sorted(html_files):
    c = len(incoming_links[f])
    if c == 1:
        print(f'  {f}: linked from {list(incoming_links[f])}')

print('\n=== SEMANTIC HTML SCORES (Lowest semantic tags or missing key landmarks) ===')
sorted_sem = sorted(semantic_scores.items(), key=lambda x: (x[1]['total_sem'], x[1]['ratio']))
for fname, stats in sorted_sem[:15]:
    print(f"{fname}: total_sem={stats['total_sem']}, div={stats['div']}, span={stats['span']}, ratio={stats['ratio']:.3f}, header={stats['has_header']}, nav={stats['has_nav']}, main={stats['has_main']}, footer={stats['has_footer']}")
