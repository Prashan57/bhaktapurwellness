from pathlib import Path
from PIL import Image
p = Path('public/favicon.ico')
img = Image.open(p)
print('format', img.format, 'size', img.size, 'mode', img.mode)
for i in range(10):
    try:
        img.seek(i)
        out = Path(f'public/favicon-frame-{i}.png')
        img.save(out)
        print('frame', i, out, out.stat().st_size)
    except EOFError:
        break
