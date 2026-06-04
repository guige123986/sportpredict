import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Check around each heroTitle to see what hero keys exist
for i, line in enumerate(lines):
    if 'heroTitle' in line and i < 5100:
        print(f"\n--- L{i+1} ---")
        for j in range(i, min(i+10, len(lines))):
            print(f"L{j+1}: {lines[j].rstrip()[:150]}")
