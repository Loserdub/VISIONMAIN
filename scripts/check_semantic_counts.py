import os, sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

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

results = []
for p in sitemap_pages:
    soup = BeautifulSoup(open(p, encoding='utf-8', errors='ignore'), 'html.parser')
    tags = [t.name for t in soup.find_all()]
    divs = tags.count('div')
    spans = tags.count('span')
    mains = tags.count('main')
    articles = tags.count('article')
    sections = tags.count('section')
    headers = tags.count('header')
    footers = tags.count('footer')
    navs = tags.count('nav')
    asides = tags.count('aside')
    total_sem = mains + articles + sections + headers + footers + navs + asides
    ratio = total_sem / (divs + spans + 1e-5)
    results.append({
        'page': p,
        'divs': divs,
        'spans': spans,
        'main': mains,
        'article': articles,
        'section': sections,
        'header': headers,
        'footer': footers,
        'nav': navs,
        'aside': asides,
        'total_sem': total_sem,
        'ratio': ratio
    })

results.sort(key=lambda x: (x['main'] == 0, x['article'] == 0, x['ratio']))

print(f"{'Page':30s} | {'main':4s} {'art':4s} {'sec':4s} {'hdr':4s} {'ftr':4s} {'nav':4s} {'asd':4s} | {'div':4s} {'spn':4s} | {'sem_ratio':9s}")
print("-" * 80)
for r in results:
    print(f"{r['page']:30s} | {r['main']:4d} {r['article']:4d} {r['section']:4d} {r['header']:4d} {r['footer']:4d} {r['nav']:4d} {r['aside']:4d} | {r['divs']:4d} {r['spans']:4d} | {r['ratio']:.3f}")
