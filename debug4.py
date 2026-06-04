import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Check how many lines now
print(f"Total lines: {len(lines)}")

# Print zh block area
for i in range(1600, 1650):
    line = lines[i].rstrip('\r')
    print(f"L{i+1}: {line[:200]}")
