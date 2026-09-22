import os, sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

for f in sorted(os.listdir('.')):
    if not f.endswith('.html') or f.startswith('field-notes-'):
        continue
    soup = BeautifulSoup(open(f, encoding='utf-8', errors='ignore'), 'html.parser')
    for a in soup.find_all('a'):
        imgs = a.find_all('img')
        if imgs:
            for img in imgs:
                alt = img.get('alt')
                text = a.get_text().strip()
                aria = a.get('aria-label')
                print(f"{f}: href={a.get('href')} | text={repr(text)} | aria={repr(aria)} | img alt={repr(alt)}")
