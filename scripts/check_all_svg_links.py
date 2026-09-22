import os, sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

for f in sorted(os.listdir('.')):
    if not f.endswith('.html') or f.startswith('field-notes-'):
        continue
    soup = BeautifulSoup(open(f, encoding='utf-8', errors='ignore'), 'html.parser')
    for a in soup.find_all('a'):
        svgs = a.find_all('svg')
        if svgs:
            text = a.get_text().strip()
            aria = a.get('aria-label', '')
            print(f"{f:30s} | svgs={len(svgs)} | text={repr(text[:40]):30s} | aria={repr(aria)}")
