import os
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

count = 0
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    links = soup.find_all('a')
    for i, a in enumerate(links):
        text = a.get_text().strip()
        aria = a.get('aria-label')
        has_alphanumeric = any(c.isalnum() for c in text)
        if not has_alphanumeric:
            count += 1
            t_clean = text.encode('ascii', 'backslashreplace').decode('ascii')
            tag_clean = str(a)[:140].encode('ascii', 'backslashreplace').decode('ascii')
            print(f"{count}. {f} [#{i}] href={a.get('href')} text={repr(t_clean)} aria={repr(aria)}")
            print(f"   TAG: {tag_clean}\n")

print(f"Total non-alphanumeric links: {count}")
