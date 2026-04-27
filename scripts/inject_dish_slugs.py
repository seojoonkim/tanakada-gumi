#!/usr/bin/env python3
"""Inject `dish` slug field into each menu item in menu-data.js
so that the HTML can render per-dish thumbnails."""
import re
from pathlib import Path

ROOT = Path("/Users/gimseojun/sano-workspace/tanakada-gumi")
DATA_PATH = ROOT / "menu-data.js"

# Map (category, English label substring) → dish slug (filename in images/dishes)
# Match by checking item["en"] contains the key
MAP = {
    # beef
    ("beef", "tenderloin"): "wagyu-tenderloin",
    ("beef", "tongue"): "wagyu-tongue",
    ("beef", "cutlet"): "wagyu-cutlet",
    # chickenPork
    ("chickenPork", "chicken thigh"): "chicken-thigh",
    ("chickenPork", "tartar"): "fried-chicken-tartar",
    ("chickenPork", "gizzard"): "chicken-gizzard",
    ("chickenPork", "Grilled pork"): "grilled-pork",
    ("chickenPork", "miso"): "pork-miso",
    # recommended
    ("recommended", "fatty tuna"): "fried-fatty-tuna",
    ("recommended", "abalone"): "abalone-butter",
    ("recommended", "Caviar"): "caviar",
    ("recommended", "Ham cutlet"): "ham-cutlet",
    ("recommended", "Deep fried tiger prawn"): "fried-tiger-prawn",
    ("recommended", "Salt-grilled tiger prawn"): "salt-grilled-prawn",
    ("recommended", "Grilled eel"): "grilled-eel",
    ("recommended", "Unseasoned"): "shirayaki-eel",
    ("recommended", "shiitake"): "grilled-shiitake",
    ("recommended", "tofu"): "agedashi-tofu",
    ("recommended", "House salad"): "house-salad",
    ("recommended", "Potato salad"): "potato-salad",
    # fish
    ("fish", "Grilled nodoguro"): "grilled-nodoguro",
    ("fish", "Salt-grilled fatty"): "salt-grilled-tuna",
    ("fish", "Grilled kichiji"): "grilled-kichiji",
    ("fish", "Braised nodoguro"): "braised-nodoguro",
    ("fish", "Braised kichiji"): "braised-kichiji",
    # donburi
    ("donburi", "Bubble"): "bubble-don",
    ("donburi", "Zetsu"): "zetsu-don",
    ("donburi", "Uni-Don"): "uni-don",
    ("donburi", "Tanakada"): "tanakada-don",
    ("donburi", "Ikura-Don"): "ikura-don",
    ("donburi", "Uni Ikura"): "uni-ikura-don",
    ("donburi", "Torotekka"): "torotekka-don",
    # rice
    ("rice", "Raw egg"): "tkg-rice",
    ("rice", "Beef curry"): "beef-curry",
    ("rice", "cod roe"): "mentaiko-rice",
    # hotPot
    ("hotPot", "Mizutaki"): "mizutaki",
    ("hotPot", "Negima"): "negima",
    # sashimi
    ("sashimi", "Assorted sashimi"): "sashimi-assorted",
    ("sashimi", "Fatty tuna"): "fatty-tuna",
    ("sashimi", "Lean tuna"): "red-meat-tuna",
    ("sashimi", "Flounder/Squid"): "squid",
    ("sashimi", "Grilled fatty tuna"): "grilled-fatty-tuna",
    ("sashimi", "Grilled lean tuna"): "fatty-tuna",  # reuse fatty as fallback for lean grilled (no separate photo)
    ("sashimi", "Marinated mackerel"): "mackerel-sesame",
    # special
    ("special", "Sea urchin"): "sea-urchin",
    ("special", "Steamed crab"): "steamed-crab",
    # miniDishes
    ("miniDishes", "eggplant"): "stewed-eggplant",
    ("miniDishes", "Hakata-style braised"): "hakata-stew",
    ("miniDishes", "Squid ginger"): "squid-ginger-cake",
    ("miniDishes", "Braised chicken wings"): "stewed-wing",
    ("miniDishes", "Fried chicken wings"): "fried-wing",
    ("miniDishes", "kelp roll"): "karasumi",  # closest match
    ("miniDishes", "anchovy"): "tatami-iwashi",
    ("miniDishes", "Flounder fish cake"): "itawasa",
    ("miniDishes", "Salmon roe"): "salmon-roe",
    ("miniDishes", "raw/grilled"): "fresh-mentaiko",
    ("miniDishes", "Canned hairtail"): "canned-mackerel",
    ("miniDishes", "kimbap"): "korean-seaweed",
    ("miniDishes", "Garlic toast"): "garlic-toast",
    ("miniDishes", "Okonomiyaki"): "okonomiyaki",
    ("miniDishes", "Rolled omelet"): "tamagoyaki",
    ("miniDishes", "Steamed vegetables"): "steamed-veggies",
    ("miniDishes", "Cabbage pickles"): "pickled-cabbage",
}


def find_dish_slug(category, en_text):
    """Find the dish slug for a given category + English item text."""
    for (cat, key), slug in MAP.items():
        if cat == category and key.lower() in en_text.lower():
            return slug
    return None


def process():
    src = DATA_PATH.read_text()

    # We'll inject "dish" field by walking the JS-as-text and matching items.
    # Strategy: regex-find each `"en": "<text>"` line, look up in the surrounding
    # context what category we're in, then insert a `"dish": "<slug>"` line.
    lines = src.split("\n")
    out = []
    current_category = None
    pending_inject_at_close = False  # set True after we see "en" so we know to inject before }

    # Trace category context by tracking `"<categoryKey>": {` openings inside categories block
    in_categories = False
    cat_pattern = re.compile(r'^\s*"(\w+)":\s*\{\s*$')

    # Find item-end patterns and inject
    # Simpler approach: walk by item objects.
    # Item objects look like:
    #   {
    #     "ko": "...",
    #     "en": "...",
    #     "ja": "..."[,]
    #     [optional "special": true,]
    #     [optional "desc": {...},]
    #   }
    # We want to inject "dish": "slug", as a sibling field.

    text = src
    # Track category context
    # We'll do a pass: find each category block, then within it find item objects and inject.

    # Locate "categories" block start
    cat_block_match = re.search(r'"categories":\s*\{', text)
    if not cat_block_match:
        print("No categories block found")
        return
    cat_start = cat_block_match.end()

    # We'll iterate over each top-level category inside categories
    # Walk character by character to find balanced braces.
    def find_block_end(s, start):
        depth = 1
        i = start
        while i < len(s) and depth > 0:
            if s[i] == '{':
                depth += 1
            elif s[i] == '}':
                depth -= 1
                if depth == 0:
                    return i
            i += 1
        return -1

    cat_end = find_block_end(text, cat_start)
    cat_body = text[cat_start:cat_end]

    # Now within cat_body, find each "<key>": { ... }
    # The category keys appear at one indentation level inside categories block.
    # Use regex with non-greedy: not safe due to nested braces, so use balanced walk again.

    new_cat_body = ""
    i = 0
    while i < len(cat_body):
        # Find next category key
        m = re.search(r'\n\s*"(\w+)":\s*\{', cat_body[i:])
        if not m:
            new_cat_body += cat_body[i:]
            break
        key = m.group(1)
        block_open_pos = i + m.end()
        block_end_pos = find_block_end(cat_body, block_open_pos)
        if block_end_pos < 0:
            new_cat_body += cat_body[i:]
            break

        # Append text up to and including the open brace
        new_cat_body += cat_body[i:block_open_pos]

        # Process the block content (the category object)
        block_content = cat_body[block_open_pos:block_end_pos]

        # Within block_content, find "items": [ ... ] array
        items_match = re.search(r'"items":\s*\[', block_content)
        if not items_match:
            new_cat_body += block_content
            new_cat_body += cat_body[block_end_pos]
            i = block_end_pos + 1
            continue

        items_open = items_match.end()
        # Find matching ] for items array
        depth = 1
        j = items_open
        while j < len(block_content) and depth > 0:
            if block_content[j] == '[':
                depth += 1
            elif block_content[j] == ']':
                depth -= 1
                if depth == 0:
                    break
            j += 1
        items_close = j
        items_body = block_content[items_open:items_close]

        # For each item object inside items_body, find its open `{` ... close `}`
        new_items_body = ""
        k = 0
        while k < len(items_body):
            obj_open_match = re.search(r'\{', items_body[k:])
            if not obj_open_match:
                new_items_body += items_body[k:]
                break
            obj_open = k + obj_open_match.end() - 1
            depth_o = 1
            l = obj_open + 1
            while l < len(items_body) and depth_o > 0:
                if items_body[l] == '{':
                    depth_o += 1
                elif items_body[l] == '}':
                    depth_o -= 1
                    if depth_o == 0:
                        break
                l += 1
            obj_close = l
            obj_body = items_body[obj_open:obj_close + 1]

            # Append text before object
            new_items_body += items_body[k:obj_open]

            # Find "en" value in this object
            en_match = re.search(r'"en":\s*"([^"]*)"', obj_body)
            if en_match:
                en_text = en_match.group(1)
                slug = find_dish_slug(key, en_text)
                if slug:
                    # Insert "dish": "<slug>" right after the opening {
                    # Find first newline+indent after {
                    insert_at = obj_body.index('{') + 1
                    # Determine indent: look at the next non-newline line
                    rest = obj_body[insert_at:]
                    indent_match = re.match(r'\n(\s*)', rest)
                    indent = indent_match.group(1) if indent_match else "          "
                    new_obj = obj_body[:insert_at] + f'\n{indent}"dish": "{slug}",' + obj_body[insert_at:]
                    new_items_body += new_obj
                    print(f"  ✓ {key:15s} {en_text[:40]:40s} → {slug}")
                else:
                    new_items_body += obj_body
                    print(f"  – {key:15s} {en_text[:40]:40s} (no match)")
            else:
                new_items_body += obj_body

            k = obj_close + 1

        # Reassemble block_content
        new_block_content = block_content[:items_open] + new_items_body + block_content[items_close:]
        new_cat_body += new_block_content
        new_cat_body += cat_body[block_end_pos]
        i = block_end_pos + 1

    new_text = text[:cat_start] + new_cat_body + text[cat_end:]
    DATA_PATH.write_text(new_text)
    print(f"\nWrote {DATA_PATH}")


if __name__ == "__main__":
    process()
