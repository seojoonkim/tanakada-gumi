#!/usr/bin/env python3
"""Crop individual dish photos from menu pages using bounding boxes (left, top, right, bottom in %)."""
from PIL import Image, ImageEnhance
from pathlib import Path
import json

ROOT = Path("/Users/gimseojun/sano-workspace/tanakada-gumi")
SRC = ROOT / "images"
OUT = ROOT / "images" / "dishes"
OUT.mkdir(parents=True, exist_ok=True)

# Real file mapping (verified by vision):
#   menu-1: Cover
#   menu-2: Notice + Dinner Course
#   menu-3: Hot Pot + Dessert
#   menu-4: Beef + Chicken + Pork
#   menu-5: Chef's Recommended + Fish
#   menu-6: Donburi + Rice
#   menu-7: Mini Dishes
#   menu-8: Sashimi + Recommend + Condiments

# (page_file, slug, left%, top%, right%, bottom%)
CROPS = [
    # PAGE 8 — Sashimi + Recommend (menu-8.jpg)
    ("menu-8.jpg", "sashimi-assorted",       8, 22, 35, 42),
    ("menu-8.jpg", "mackerel-sesame",       36, 22, 60, 42),
    ("menu-8.jpg", "squid",                 62, 22, 82, 42),
    ("menu-8.jpg", "fatty-tuna",             8, 47, 32, 62),
    ("menu-8.jpg", "grilled-fatty-tuna",    34, 47, 58, 62),
    ("menu-8.jpg", "red-meat-tuna",         60, 47, 82, 62),
    ("menu-8.jpg", "sea-urchin",             8, 65, 40, 87),
    ("menu-8.jpg", "steamed-crab",          42, 65, 82, 87),

    # PAGE 4 — Beef + Chicken + Pork (menu-4.jpg)
    ("menu-4.jpg", "wagyu-tenderloin",       8, 11, 30, 26),
    ("menu-4.jpg", "wagyu-tongue",          37, 11, 58, 26),
    ("menu-4.jpg", "wagyu-cutlet",          67, 10, 85, 26),
    ("menu-4.jpg", "chicken-thigh",         10, 58, 30, 73),
    ("menu-4.jpg", "fried-chicken-tartar",  38, 58, 58, 73),
    ("menu-4.jpg", "chicken-gizzard",       67, 57, 85, 73),
    ("menu-4.jpg", "grilled-pork",          18, 83, 38, 97),
    ("menu-4.jpg", "pork-miso",             58, 83, 80, 97),

    # PAGE 5 — Chef's Recommended + Fish (menu-5.jpg)
    ("menu-5.jpg", "fried-fatty-tuna",      10, 11, 30, 23),
    ("menu-5.jpg", "abalone-butter",        37, 11, 60, 23),
    ("menu-5.jpg", "caviar",                67, 11, 88, 23),
    ("menu-5.jpg", "ham-cutlet",            10, 25, 30, 37),
    ("menu-5.jpg", "fried-tiger-prawn",     35, 25, 58, 37),
    ("menu-5.jpg", "salt-grilled-prawn",    63, 25, 88, 37),
    ("menu-5.jpg", "grilled-eel",           10, 39, 30, 49),
    ("menu-5.jpg", "shirayaki-eel",         37, 39, 60, 49),
    ("menu-5.jpg", "grilled-shiitake",      63, 39, 88, 49),
    ("menu-5.jpg", "agedashi-tofu",         10, 50, 30, 61),
    ("menu-5.jpg", "house-salad",           35, 50, 60, 63),
    ("menu-5.jpg", "potato-salad",          65, 50, 85, 61),
    ("menu-5.jpg", "grilled-nodoguro",      10, 67, 33, 80),
    ("menu-5.jpg", "salt-grilled-tuna",     38, 68, 62, 80),
    ("menu-5.jpg", "grilled-kichiji",       65, 67, 90, 80),
    ("menu-5.jpg", "braised-nodoguro",      18, 82, 42, 95),
    ("menu-5.jpg", "braised-kichiji",       57, 82, 80, 95),

    # PAGE 7 — Mini Dishes (menu-7.jpg)
    ("menu-7.jpg", "stewed-eggplant",       13, 12, 30, 24),
    ("menu-7.jpg", "hakata-stew",           35, 10, 60, 24),
    ("menu-7.jpg", "squid-ginger-cake",     72, 12, 90, 24),
    ("menu-7.jpg", "stewed-wing",           13, 27, 30, 39),
    ("menu-7.jpg", "fried-wing",            35, 27, 58, 39),
    ("menu-7.jpg", "karasumi",              68, 27, 88, 39),
    ("menu-7.jpg", "tatami-iwashi",         15, 42, 32, 54),
    ("menu-7.jpg", "itawasa",               38, 42, 57, 54),
    ("menu-7.jpg", "salmon-roe",            65, 42, 85, 54),
    ("menu-7.jpg", "fresh-mentaiko",        15, 57, 30, 68),
    ("menu-7.jpg", "grilled-mentaiko",      37, 57, 58, 68),
    ("menu-7.jpg", "canned-mackerel",       67, 57, 87, 68),
    ("menu-7.jpg", "korean-seaweed",        15, 71, 33, 81),
    ("menu-7.jpg", "garlic-toast",          38, 71, 58, 81),
    ("menu-7.jpg", "okonomiyaki",           67, 71, 90, 81),
    ("menu-7.jpg", "tamagoyaki",            16, 85, 32, 96),
    ("menu-7.jpg", "steamed-veggies",       38, 85, 58, 96),
    ("menu-7.jpg", "pickled-cabbage",       68, 87, 88, 96),

    # PAGE 6 — Donburi + Rice (menu-6.jpg)
    ("menu-6.jpg", "bubble-don",            13, 14, 45, 32),
    ("menu-6.jpg", "zetsu-don",             50, 14, 82, 32),
    ("menu-6.jpg", "uni-don",               12, 37, 35, 53),
    ("menu-6.jpg", "tanakada-don",          37, 37, 62, 53),
    ("menu-6.jpg", "ikura-don",             63, 37, 85, 53),
    ("menu-6.jpg", "uni-ikura-don",         13, 57, 37, 74),
    ("menu-6.jpg", "torotekka-don",         38, 57, 62, 74),
    ("menu-6.jpg", "tkg-rice",              12, 83, 35, 96),
    ("menu-6.jpg", "beef-curry",            38, 83, 62, 96),
    ("menu-6.jpg", "mentaiko-rice",         65, 83, 85, 96),

    # PAGE 3 — Hot Pot + Dessert (menu-3.jpg)
    ("menu-3.jpg", "mizutaki",              10, 12, 28, 28),
    ("menu-3.jpg", "negima",                10, 42, 28, 57),
    ("menu-3.jpg", "matcha-ice",            11, 65, 27, 76),
    ("menu-3.jpg", "umegae-mochi",          37, 65, 55, 76),
    ("menu-3.jpg", "milk-pudding",          62, 65, 80, 78),
    ("menu-3.jpg", "honey-sweet-potato",    11, 79, 27, 91),
    ("menu-3.jpg", "balloon-ice",           68, 82, 88, 93),
]

def crop_one(page, slug, left, top, right, bottom):
    img_path = SRC / page
    img = Image.open(img_path).convert("RGB")
    W, H = img.size

    # The vision model's box typically includes a caption strip below the photo.
    box_h = bottom - top
    box_w = right - left
    inset_x = box_w * 0.05           # 5% horizontal
    inset_top = box_h * 0.04         # 4% top
    label_trim = box_h * 0.36        # 36% bottom (caption + safety)
    L = max(0, left + inset_x)
    T = max(0, top + inset_top)
    R = min(100, right - inset_x)
    B = min(100, bottom - label_trim)

    box = (int(W * L / 100), int(H * T / 100),
           int(W * R / 100), int(H * B / 100))
    crop = img.crop(box)

    # Light enhancement
    crop = ImageEnhance.Contrast(crop).enhance(1.05)
    crop = ImageEnhance.Color(crop).enhance(1.10)
    crop = ImageEnhance.Sharpness(crop).enhance(1.10)

    # Keep native aspect; resize so longest edge is 600px.
    w, h = crop.size
    max_edge = max(w, h)
    if max_edge > 600:
        ratio = 600 / max_edge
        crop = crop.resize((int(w*ratio), int(h*ratio)), Image.LANCZOS)

    out_path = OUT / f"{slug}.jpg"
    crop.save(out_path, "JPEG", quality=85, optimize=True)
    return out_path, crop.size

if __name__ == "__main__":
    results = []
    for entry in CROPS:
        out_path, size = crop_one(*entry)
        results.append({"slug": entry[1], "size": size})
        print(f"  ✓ {entry[1]:25s}  {size[0]}x{size[1]}")
    print(f"\nTotal: {len(results)} dish images cropped → {OUT}")

    index_path = OUT / "_index.json"
    index_path.write_text(json.dumps([r["slug"] for r in results], indent=2))
