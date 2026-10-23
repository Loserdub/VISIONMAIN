import os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup
from collections import defaultdict
from urllib.parse import urlparse

script_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(script_dir, '..'))

# Automatically discover all site HTML pages (excluding template cards, 404, and bio redirect stub)
sitemap_pages = [
    f for f in sorted(os.listdir(root_dir))
    if f.endswith('.html') and not f.startswith('field-notes-') and f not in ('404.html', 'bio.html')
]

canonical_map = {p.lower(): p for p in sitemap_pages}
canonical_map[''] = 'index.html'

def resolve_target(href, source_file):
    if not href:
        return None
    href = href.strip()
    if href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'):
        return None
    p = urlparse(href)
    netloc = p.netloc.lower()
    if netloc and netloc not in ['trustnodelogic.com', 'www.trustnodelogic.com', 'trustnodelogic.web.app', 'localhost']:
        return None
    path = p.path.strip()
    # If path is empty, could be query or hash on same domain or root
    if not path:
        if netloc:
            return 'index.html'
        return None
    
    # Clean leading slashes or relative ./
    path = path.lstrip('/')
    if path.startswith('./'):
        path = path[2:]
    
    basename = os.path.basename(path)
    if not basename:
        return 'index.html'
    
    if basename.lower() in canonical_map:
        return canonical_map[basename.lower()]
    return None

incoming = defaultdict(set)
outgoing = defaultdict(set)

for p in sitemap_pages:
    filepath = os.path.join(root_dir, p)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    for a in soup.find_all('a', href=True):
        target = resolve_target(a['href'], p)
        if target and target != p:
            incoming[target].add(p)
            outgoing[p].add(target)

print("=== INCOMING LINKS COUNT PER SITEMAP PAGE ===")
for p in sorted(sitemap_pages, key=lambda x: (len(incoming[x]), x)):
    sources = sorted(list(incoming[p]))
    print(f"{p:35s}: {len(sources):2d} incoming -> {sources}")
