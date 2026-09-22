import os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup
from collections import defaultdict
from urllib.parse import urlparse

sitemap_pages = [
    'index.html', 'Suno101.html', 'about.html', 'agentichybridproduction.html',
    'artistfinder.html', 'black-mirror.html', 'c2pa-music-provenance.html',
    'contact.html', 'field-notes.html', 'fingerprint.html', 'futureofhybrid.html',
    'hp2026.html', 'humanbridge.html', 'hybridproductionstandard.html',
    'lastnewgenre.html', 'liquidears.html', 'machinehumanhybrid.html',
    'may2026tools.html', 'mixrstudio.html', 'music.html',
    'musicindustryforecast.html', 'neuralvocals.html', 'projects.html',
    'promptingthemachine.html', 'saturation.html', 'services.html',
    'songstructure.html', 'staccatoreview.html', 'suno6.html', 'sunonewtos.html',
    'sunov6.html', 'trainingday.html', 'void.html', 'what-is-hybrid.html'
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
    if not os.path.exists(p):
        continue
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
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
