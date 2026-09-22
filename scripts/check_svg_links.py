import os
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

count = 0
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for i, a in enumerate(soup.find_all('a')):
        if a.find('svg'):
            count += 1
            a_copy = BeautifulSoup(str(a), 'html.parser').find('a')
            for s in a_copy.find_all('svg'):
                s.decompose()
            text_without_svg = a_copy.get_text().strip().encode('ascii', 'backslashreplace').decode('ascii')
            aria = a.get('aria-label')
            print(f"{count}. {f} [{i}] | href={a.get('href')} | text_without_svg={repr(text_without_svg)} | aria={repr(aria)}")
            if not text_without_svg:
                print(f"   --> PURE SVG LINK WITH NO TEXT!\n")
