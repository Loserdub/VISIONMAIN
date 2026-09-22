import subprocess, os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup

# Check commit HEAD for all HTML files
result = subprocess.run(['git', 'ls-tree', '-r', '--name-only', 'HEAD'], capture_output=True, text=True)
files = [f.strip() for f in result.stdout.splitlines() if f.strip().endswith('.html') and not f.strip().startswith('field-notes-')]

print(f"Checking {len(files)} HTML files in HEAD...")

for f in sorted(files):
    p = subprocess.run(['git', 'show', f'HEAD:{f}'], capture_output=True, text=True, encoding='utf-8', errors='ignore')
    soup = BeautifulSoup(p.stdout, 'html.parser')
    for idx, a in enumerate(soup.find_all('a')):
        text = a.get_text().strip()
        aria = a.get('aria-label', '').strip()
        title = a.get('title', '').strip()
        imgs = a.find_all('img')
        img_alts = [img.get('alt', '').strip() for img in imgs if img.get('alt', '').strip()]
        
        # What has no text?
        if not text and not img_alts:
            print(f"[NO TEXT NO IMG_ALT] {f} | href={a.get('href')} | aria='{aria}' | tag: {str(a)[:120]}")
        
        # What has only non-alphanumeric symbols?
        alnum = re.sub(r'[\W_]+', '', text)
        if not alnum and not img_alts:
            print(f"[SYMBOLS ONLY] {f} | href={a.get('href')} | text='{text}' | aria='{aria}' | tag: {str(a)[:120]}")
