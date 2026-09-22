import os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

for f in sorted(os.listdir('.')):
    if not f.endswith('.html') or f.startswith('field-notes-'):
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        lines = fp.readlines()
    content = "".join(lines)
    soup = BeautifulSoup(content, 'html.parser')
    for a in soup.find_all('a'):
        raw_text = a.get_text()
        stripped = raw_text.strip()
        aria = a.get('aria-label', '')
        title = a.get('title', '')
        href = a.get('href', '')
        imgs = a.find_all('img')
        svgs = a.find_all('svg')
        img_alts = [img.get('alt', '') for img in imgs]
        
        # Test 1: Absolutely no text, no alt, no aria
        if not stripped and not any(img_alts) and not aria:
            print(f"[EMPTY_NO_LABEL] {f} | href='{href}' | tag: {str(a)[:120]}")
            
        # Test 2: Only non-alphanumeric (symbols only) and no aria, no alt
        elif not re.search(r'[a-zA-Z0-9]', stripped) and not any(img_alts) and not aria:
            print(f"[SYMBOLS_ONLY_NO_LABEL] {f} | href='{href}' | text='{stripped}' | tag: {str(a)[:120]}")
            
        # Test 3: Has SVG but no text, no aria
        elif svgs and not stripped and not aria:
            print(f"[SVG_NO_TEXT_NO_ARIA] {f} | href='{href}' | tag: {str(a)[:120]}")
