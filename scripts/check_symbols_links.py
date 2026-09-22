import os, sys, re
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

def clean_text(text):
    return re.sub(r'[\s\u2190-\u21ff\u25a0-\u25ff\u2022\u00b7\u2013\u2014\u2192\u2190\u2191\u2193\u21d2\u21d4\u21e2\u2197\u2196\u2198\u2199\u2794\u279c\u27a1\u27b2\u27be]+', '', text)

all_links = []
for f in sorted(os.listdir(root)):
    if not f.endswith('.html'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for a in soup.find_all('a'):
        raw_text = a.get_text()
        stripped = raw_text.strip()
        cleaned = clean_text(stripped)
        href = a.get('href', '')
        aria = a.get('aria-label', '')
        imgs = a.find_all('img')
        img_alts = [img.get('alt', '').strip() for img in imgs]
        has_img_alt = any(bool(alt) for alt in img_alts)
        
        if not stripped and not has_img_alt:
            all_links.append((f, 'COMPLETELY_EMPTY', href, aria, str(a)))
        elif not cleaned and not has_img_alt:
            all_links.append((f, 'ONLY_SYMBOLS_NO_TEXT', href, aria, str(a)))

print(f"Total flagged: {len(all_links)}")
for item in all_links:
    tag_clean = item[4][:200].encode('ascii', 'backslashreplace').decode('ascii')
    print(f"File: {item[0]} | Type: {item[1]} | Href: {item[2]} | Aria: {repr(item[3])}")
    print(f"Tag: {tag_clean}\n")

