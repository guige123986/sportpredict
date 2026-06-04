import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Check en block area - where do hero keys appear?
for i in range(1720, 1770):
    line = lines[i].rstrip('\r')
    if 'hero' in line.lower() or 'en:' in line.lower() or line.strip() == '},' :
        print(f"L{i+1}: {line[:200]}")
