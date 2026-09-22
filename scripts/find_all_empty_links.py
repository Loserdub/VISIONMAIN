import os
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

found = []
for r, d, files in os.walk(root):
    if '.git' in r: continue
    for f in files:
        if not f.endswith('.html'): continue
        fpath = os.path.join(r, f)
        rel = os.path.relpath(fpath, root)
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            soup = BeautifulSoup(fp.read(), 'html.parser')
        for idx, a in enumerate(soup.find_all('a')):
            txt = a.get_text(strip=True)
            aria = a.get('aria-label', '')
            title = a.get('title', '')
            imgs = a.find_all('img')
            has_alt = any(bool(img.get('alt', '').strip()) for img in imgs)
            svgs = a.find_all('svg')
            href = a.get('href', '')
            
            if not txt and not has_alt:
                found.append((rel, idx, 'NO_TEXT_NO_ALT', href, txt, aria, title, str(a)[:160]))
            elif txt in ['↗', '→', '•', '>', '>>', '...', '🔗', '↑', '↓', '#']:
                found.append((rel, idx, 'SYMBOL_ONLY', href, txt, aria, title, str(a)[:160]))

print(f"Total links flagged: {len(found)}")
for item in found:
    rel, idx, kind, href, txt, aria, title, tag = item
    txt_clean = txt.encode('ascii', 'backslashreplace').decode('ascii')
    tag_clean = tag.encode('ascii', 'backslashreplace').decode('ascii')
    print(f"{rel} [#{idx}] | {kind} | href={href} | txt={repr(txt_clean)} | aria={repr(aria)}")
    print(f"   TAG: {tag_clean}\n")
