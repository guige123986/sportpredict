import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Read ar block (lines 1940-2005)
for i in range(1939, 2008):
    line = lines[i].rstrip('\r')
    print(f"L{i+1}: {line}")
