import os, re
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

with open(os.path.join(root, 'sitemap.xml'), 'r', encoding='utf-8') as f:
    sitemap_xml = f.read()

sitemap_urls = re.findall(r'<loc>https://trustnodelogic\.com/(.*?)</loc>', sitemap_xml)

results = []
for u in sitemap_urls:
    fname = u if u else 'index.html'
    fpath = os.path.join(root, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    
    divs = len(soup.find_all('div'))
    spans = len(soup.find_all('span'))
    headers = len(soup.find_all('header'))
    navs = len(soup.find_all('nav'))
    mains = len(soup.find_all('main'))
    articles = len(soup.find_all('article'))
    sections = len(soup.find_all('section'))
    asides = len(soup.find_all('aside'))
    footers = len(soup.find_all('footer'))
    h_tags = len(soup.find_all(re.compile('^h[1-6]$')))
    
    total_sem = headers + navs + mains + articles + sections + asides + footers
    generic = divs + spans
    ratio = total_sem / (generic + 1e-5)
    
    results.append({
        'page': fname,
        'divs': divs,
        'spans': spans,
        'generic': generic,
        'headers': headers,
        'navs': navs,
        'mains': mains,
        'articles': articles,
        'sections': sections,
        'footers': footers,
        'asides': asides,
        'h_tags': h_tags,
        'total_sem': total_sem,
        'ratio': ratio
    })

# Also check other html files in root
for f in os.listdir(root):
    if f.endswith('.html') and f not in [r['page'] for r in results] and not f.startswith('field-notes-'):
        fpath = os.path.join(root, f)
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            soup = BeautifulSoup(fp.read(), 'html.parser')
        divs = len(soup.find_all('div'))
        spans = len(soup.find_all('span'))
        headers = len(soup.find_all('header'))
        navs = len(soup.find_all('nav'))
        mains = len(soup.find_all('main'))
        articles = len(soup.find_all('article'))
        sections = len(soup.find_all('section'))
        asides = len(soup.find_all('aside'))
        footers = len(soup.find_all('footer'))
        h_tags = len(soup.find_all(re.compile('^h[1-6]$')))
        total_sem = headers + navs + mains + articles + sections + asides + footers
        generic = divs + spans
        ratio = total_sem / (generic + 1e-5)
        results.append({
            'page': f + " (non-sitemap)",
            'divs': divs,
            'spans': spans,
            'generic': generic,
            'headers': headers,
            'navs': navs,
            'mains': mains,
            'articles': articles,
            'sections': sections,
            'footers': footers,
            'asides': asides,
            'h_tags': h_tags,
            'total_sem': total_sem,
            'ratio': ratio
        })

sorted_res = sorted(results, key=lambda x: (x['total_sem'], x['ratio']))
for r in sorted_res:
    print(f"{r['page']:35} | sem:{r['total_sem']:2} (hdr:{r['headers']} nav:{r['navs']} main:{r['mains']} art:{r['articles']} sec:{r['sections']} ftr:{r['footers']}) | gen:{r['generic']:4} (div:{r['divs']:3} span:{r['spans']:3}) | h:{r['h_tags']:2} | ratio:{r['ratio']:.4f}")
