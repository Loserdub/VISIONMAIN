import os
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

results = []
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for idx, a in enumerate(soup.find_all('a')):
        children_tags = [c.name for c in a.find_all()]
        text = a.get_text(strip=True)
        aria = a.get('aria-label')
        # If there's an svg or img or text is short or empty
        if ('svg' in children_tags or 'img' in children_tags or not text or len(text) <= 3):
            href = a.get('href', '')
            results.append((f, idx, href, text, aria, children_tags, str(a)[:160]))

print(f"Total found: {len(results)}")
for r in results:
    text_clean = r[3].encode('ascii', 'backslashreplace').decode('ascii')
    tag_clean = r[6].encode('ascii', 'backslashreplace').decode('ascii')
    print(f"{r[0]:25} [#{r[1]:2}] | href={r[2]:30} | text={repr(text_clean):15} | aria={repr(r[4])} | children={r[5]}")
    if not r[4] or len(r[3]) <= 2:
        print(f"   TAG: {tag_clean}\n")
