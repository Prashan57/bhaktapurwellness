from PIL import Image, ImageOps
from pathlib import Path

src = Path('public/icon.png')
out = Path('public/icon.png')
img = Image.open(src).convert('RGBA')
img = ImageOps.fit(img, (64, 64), method=Image.Resampling.LANCZOS)
img.save(out, format='PNG', optimize=True)
print(out, out.stat().st_size)
