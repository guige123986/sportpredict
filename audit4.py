import sys, re
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'
with open(filepath, 'rb') as f:
    raw = f.read()

# Search raw bytes for heroTitle
idx = 0
count = 0
while True:
    idx = raw.find(b'heroTitle', idx)
    if idx == -1:
        break
    # Get surrounding context
    start = max(0, idx - 30)
    end = min(len(raw), idx + 300)
    ctx = raw[start:end].decode('utf-8', errors='replace')
    line_approx = raw[:idx].count(b'\n') + 1
    print(f"heroTitle at byte {idx}, line ~{line_approx}:")
    print(f"  {ctx[:200]}")
    print()
    count += 1
    idx += 1
print(f"Total heroTitle occurrences: {count}")
