import os
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

# Let's inspect every single <a> tag across all HTML files
links_no_aria = []
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for idx, a in enumerate(soup.find_all('a')):
        text = a.get_text(strip=True)
        aria = a.get('aria-label')
        # What if Semrush flagged a link with no aria-label AND no text, or no aria-label and only an image/svg/icon?
        has_img = bool(a.find('img'))
        has_svg = bool(a.find('svg'))
        has_icon = bool(a.find(['i', 'span']))
        if not aria and (has_img or has_svg or len(text) < 4):
            links_no_aria.append((f, idx, a.get('href'), text, has_img, has_svg, str(a)[:160]))

print(f"Total links without aria matching condition: {len(links_no_aria)}")
for item in links_no_aria:
    f, idx, href, text, has_img, has_svg, tag = item
    t_clean = text.encode('ascii', 'backslashreplace').decode('ascii')
    tag_clean = tag.encode('ascii', 'backslashreplace').decode('ascii')
    print(f"{f} [#{idx}] | href={href} | text={repr(t_clean)} | img={has_img} | svg={has_svg}")
    print(f"   TAG: {tag_clean}\n")
