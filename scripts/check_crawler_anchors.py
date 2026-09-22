import os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

root = '.'
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for idx, a in enumerate(soup.find_all('a')):
        text = a.get_text()
        stripped = text.strip()
        aria = a.get('aria-label', '').strip()
        imgs = a.find_all('img')
        svgs = a.find_all('svg')
        img_alts = [img.get('alt', '').strip() for img in imgs if img.get('alt', '').strip()]
        
        # Check if only non-alphanumeric
        alnum = re.sub(r'[\W_]+', '', stripped)
        if not alnum and not img_alts and not aria:
            print(f"SYMBOL_ONLY_NO_ARIA: {f} | href={a.get('href')} | text={repr(stripped)} | tag={str(a)[:120]}")
        
        # Check if text is completely empty
        if not stripped and not img_alts and not aria:
            print(f"EMPTY_NO_ARIA: {f} | href={a.get('href')} | tag={str(a)[:120]}")
