import os, json, re

brain = r'C:\Users\User\.gemini\antigravity-ide\brain'
for conv in os.listdir(brain):
    log_file = os.path.join(brain, conv, '.system_generated', 'logs', 'transcript.jsonl')
    if os.path.exists(log_file):
        with open(log_file, 'r', encoding='utf-8', errors='ignore') as fp:
            for line in fp:
                if 'no anchor text' in line.lower():
                    data = json.loads(line)
                    c = str(data.get('content', ''))
                    for m in re.findall(r'.{0,60}no anchor text.{0,60}', c, re.IGNORECASE):
                        m_clean = m.strip().encode('ascii', 'backslashreplace').decode('ascii')
                        print(f"[{conv[:8]}] {m_clean}")
