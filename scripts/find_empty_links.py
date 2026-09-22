import os, sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

root = '.'
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'):
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for a in soup.find_all('a'):
        text = a.get_text().strip()
        aria = a.get('aria-label', '').strip()
        imgs = a.find_all('img')
        alts = [img.get('alt', '').strip() for img in imgs if img.get('alt', '').strip()]
        svgs = a.find_all('svg')
        
        # Check if empty
        if not text and not aria and not alts:
            print(f"EMPTY: {f} -> href={a.get('href')} | svgs={len(svgs)} | tag={str(a)[:150]}")
        # Check if short or purely non-alphanumeric without aria
        import re
        alnum = re.sub(r'[^a-zA-Z0-9]', '', text)
        if not alnum and not aria and not alts:
            print(f"NO_ALNUM: {f} -> href={a.get('href')} | text={repr(text)} | tag={str(a)[:150]}")
