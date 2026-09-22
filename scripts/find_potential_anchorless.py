import os
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

results = []
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for a in soup.find_all('a'):
        href = a.get('href', '')
        text = a.get_text().strip()
        imgs = a.find_all('img')
        svgs = a.find_all('svg')
        aria = a.get('aria-label', '')
        title = a.get('title', '')
        
        # 1. Image links
        if imgs:
            for img in imgs:
                results.append((f, 'IMAGE_LINK', href, text, aria, f"alt={repr(img.get('alt'))}", str(a)[:160]))
        # 2. SVG links
        elif svgs:
            results.append((f, 'SVG_LINK', href, text, aria, f"svg_count={len(svgs)}", str(a)[:160]))
        # 3. JS control or hash link
        elif href in ['#', '', 'javascript:void(0)', 'javascript:;'] or href.startswith('javascript:'):
            results.append((f, 'JS_OR_HASH_LINK', href, text, aria, '', str(a)[:160]))
        # 4. Icon link without text
        elif not text and (a.find(['i', 'span']) or not a.contents):
            results.append((f, 'EMPTY_OR_ICON', href, text, aria, '', str(a)[:160]))

print(f"Total found: {len(results)}")
for r in results:
    text_clean = r[3].encode('ascii', 'backslashreplace').decode('ascii')
    aria_clean = r[4].encode('ascii', 'backslashreplace').decode('ascii')
    tag_clean = r[6].encode('ascii', 'backslashreplace').decode('ascii')
    print(f"{r[0]:25} | {r[1]:16} | href={r[2]:35} | text={repr(text_clean):20} | aria={repr(aria_clean):20} | extra={r[5]}")
    print(f"   TAG: {tag_clean}\n")

