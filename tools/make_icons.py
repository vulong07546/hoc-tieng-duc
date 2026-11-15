"""Draw PNG app icons (192/512) matching icon.svg. Usage: python -I make_icons.py <project_dir>"""
import sys, os
from PIL import Image, ImageDraw, ImageFont

out = sys.argv[1]
for size in (192, 512):
    s = size / 512
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(96 * s), fill="#1f2328")
    for i, col in enumerate(["#000000", "#dd0000", "#ffce00"]):
        y = int((360 + i * 32) * s)
        d.rounded_rectangle([int(56 * s), y, int(456 * s), y + int(28 * s)], radius=max(1, int(6 * s)), fill=col)
    font = None
    for name in ["segoeuib.ttf", "arialbd.ttf", "DejaVuSans-Bold.ttf"]:
        try:
            font = ImageFont.truetype(name, int(230 * s)); break
        except OSError:
            pass
    font = font or ImageFont.load_default()
    d.text((size / 2, int(300 * s)), "DE", font=font, fill="#ffffff", anchor="ms")
    img.save(os.path.join(out, f"icon-{size}.png"))
print("ok")
