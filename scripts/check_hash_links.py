import os, sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

for f in sorted(os.listdir('.')):
    if not f.endswith('.html') or f.startswith('field-notes-'):
        continue
    soup = BeautifulSoup(open(f, encoding='utf-8', errors='ignore'), 'html.parser')
    for a in soup.find_all('a'):
        href = a.get('href', '')
        if href.startswith('#'):
            text = a.get_text().strip()
            print(f"{f}: href={href} | text={repr(text)} | aria={repr(a.get('aria-label'))} | id={repr(a.get('id'))}")
