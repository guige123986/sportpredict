filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Print lines around 1625 (0-indexed: 1624)
for i in range(1623, 1635):
    print(f"L{i+1}: {repr(lines[i][:150])}")
