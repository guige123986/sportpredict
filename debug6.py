import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Find all lines with heroTitle to see which language blocks still have it
for i, line in enumerate(lines):
    if 'heroTitle' in line:
        print(f"L{i+1}: {line.rstrip()[:150]}")
        # Show next 10 lines
        for j in range(1, 12):
            if i+j < len(lines):
                print(f"  L{i+j+1}: {lines[i+j].rstrip()[:150]}")
        print()
