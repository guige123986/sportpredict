import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Find all heroTitle lines
for i, line in enumerate(lines):
    if 'heroTitle' in line:
        print(f"L{i+1}: {line.rstrip()[:150]}")
