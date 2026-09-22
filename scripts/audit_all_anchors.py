import os, re
from bs4 import BeautifulSoup

root = r'c:\Users\User\Documents\📂 2_Coding_and_Development\GitHub\VISIONMAIN'

def check_link(a):
    text = a.get_text().strip()
    imgs = a.find_all('img')
    svgs = a.find_all('svg')
    has_alt = any(bool(img.get('alt', '').strip()) for img in imgs)
    
    # 1. completely empty text and no img alt
    if not text and not has_alt:
        return True, "Empty text & no img alt"
    
    # 2. only non-alphanumeric and no img alt
    if not any(c.isalnum() for c in text) and not has_alt:
        return True, f"Non-alphanumeric text ({repr(text)}) & no img alt"
        
    return False, ""

flagged = []
for f in sorted(os.listdir(root)):
    if not f.endswith('.html') or f.startswith('field-notes-'): continue
    with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
        soup = BeautifulSoup(fp.read(), 'html.parser')
    for idx, a in enumerate(soup.find_all('a')):
        is_bad, reason = check_link(a)
        if is_bad:
            flagged.append((f, idx, a.get('href'), a.get_text().strip(), a.get('aria-label'), reason, str(a)[:160]))

print(f"Total flagged links across entire site: {len(flagged)}")
for item in flagged:
    t_clean = item[3].encode('ascii', 'backslashreplace').decode('ascii')
    reason_clean = item[5].encode('ascii', 'backslashreplace').decode('ascii')
    tag_clean = item[6].encode('ascii', 'backslashreplace').decode('ascii')
    print(f"{item[0]} [#{item[1]}] | href={item[2]} | text={repr(t_clean)} | aria={repr(item[4])} | reason={reason_clean}")
    print(f"   TAG: {tag_clean}\n")

