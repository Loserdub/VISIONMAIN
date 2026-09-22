import os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup
from collections import defaultdict

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

incoming_a_tags = defaultdict(lambda: defaultdict(list))

for p in sitemap_pages:
    soup = BeautifulSoup(open(p, encoding='utf-8', errors='ignore'), 'html.parser')
    for a in soup.find_all('a', href=True):
        href = a['href'].strip()
        if href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'):
            continue
        # check domain
        if '://' in href:
            if not any(d in href for d in ['trustnodelogic.com', 'trustnodelogic.web.app', 'localhost']):
                continue
            path = href.split('://', 1)[1].split('/', 1)[-1] if '/' in href.split('://', 1)[1] else ''
        else:
            path = href
        path = path.split('?')[0].split('#')[0].strip('/')
        if path.startswith('./'): path = path[2:]
        target = canonical_map.get(os.path.basename(path).lower())
        if not path and ('trustnodelogic.com' in href or href == '/'):
            target = 'index.html'
        
        if target and target != p:
            incoming_a_tags[target][p].append({
                'text': a.get_text(strip=True)[:40],
                'aria': a.get('aria-label', ''),
                'href': a['href']
            })

print("=== EXACT REAL INCOMING <a> LINKS ===")
for p in sorted(sitemap_pages, key=lambda x: (len(incoming_a_tags[x]), x)):
    sources = incoming_a_tags[p]
    print(f"{p:32s}: {len(sources):2d} linking pages: {list(sources.keys())}")
