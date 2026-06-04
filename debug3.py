import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Print lines around 1625
for i in range(1623, 1635):
    line = lines[i].rstrip('\r')
    print(f"L{i+1}: {repr(line[:200])}")
