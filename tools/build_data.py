"""Build data.js: Goethe A1-B1 (+ Vietnamese/emoji) merged with curated words.
Usage: python -I build_data.py <scratchpad> <old_data.js> <out_data.js>
"""
import json, re, sys, random

sp, old_js, out_js = sys.argv[1], sys.argv[2], sys.argv[3]

FIXES = {
    "entgegenkommen": "nhượng bộ, đi ngược chiều",
    "der Friseurin": None,  # source typo, replaced below
}

# Goethe headwords written as stems ("dein-", "all-", ...) that the parser dropped.
EXTRA = {
    "A1": [
        ["🌐", "alle", "tất cả, mọi người", "", "Sind alle da?", "Is everyone here?"],
        ["📦", "alles", "mọi thứ, tất cả", "", "Hast du alles?", "Do you have everything?"],
        ["🔄", "andere", "khác, cái khác", "", "Nein, ich möchte die andere Jacke.", "No, I'd like the other jacket."],
        ["🥇", "am besten", "tốt nhất", "", "Am besten treffen wir uns morgen.", "It's best if we meet tomorrow."],
        ["🫵", "dein", "của bạn", "", "Ist das dein Auto?", "Is that your car?"],
        ["👉", "dieser", "này, cái này", "", "Ich nehme lieber diesen Kuchen.", "I'd prefer to take this cake."],
        ["1️⃣", "ein", "một", "", "Ich nehme ein Bier.", "I'll have a beer."],
        ["🍻", "der Feierabend", "giờ tan làm", "", "Wann hast du Feierabend?", "When do you finish work?"],
        ["🌡️", "der Grad", "độ (nhiệt độ)", "", "Heute haben wir dreißig Grad.", "Today we have thirty degrees."],
        ["🎬", "der Lieblingsfilm", "bộ phim yêu thích", "", "Mein Lieblingsfilm ist Schwarze Augen.", "My favorite movie is Black Eyes."],
        ["🔁", "jeder", "mỗi, mọi", "", "Blumen kannst du in jedem Bahnhof kaufen.", "You can buy flowers at any train station."],
        ["⏮️", "letzte", "cuối cùng, vừa qua", "", "Morgen ist der letzte Kurstag.", "Tomorrow is the last day of the course."],
        ["💌", "lieb", "thân mến, dễ thương", "", "Liebe Susanne, lieber Hans,", "Dear Susanne, dear Hans,"],
        ["📊", "die meisten", "hầu hết, phần lớn", "", "Die meisten Norddeutschen sind sehr groß.", "Most North Germans are very tall."],
        ["⏭️", "nächste", "tiếp theo, tới", "", "Sehen wir uns nächste Woche?", "Shall we see each other next week?"],
        ["👨‍👩‍👧", "unser", "của chúng tôi", "", "Das ist unsere Lehrerin.", "This is our teacher."],
        ["❓", "welcher", "cái nào", "", "Welches Buch möchtest du?", "Which book do you want?"],
    ],
    "A2": [
        ["🏡", "eigene", "riêng, của chính mình", "", "Nicht alle Kinder haben ein eigenes Zimmer.", "Not all children have their own room."],
        ["🔢", "einige", "một vài", "", "In diesem Text sind einige Fehler.", "There are some mistakes in this text."],
        ["🤏", "manche", "một số", "", "Manche Nachbarn sind unfreundlich.", "Some neighbors are unfriendly."],
        ["🎩", "sehr geehrte", "kính gửi (thư trang trọng)", "", "Sehr geehrte Damen und Herren,", "Dear Ladies and Gentlemen,"],
    ],
}
MOVE_TO_A1 = {"jeder", "welcher", "nächste", "lieb", "die kreditkarte", "der feierabend", "der feiertag"}

goethe = json.load(open(f"{sp}/goethe.json", encoding="utf-8"))
trans = {}
for line in open(f"{sp}/all_out.tsv", encoding="utf-8"):
    parts = line.rstrip("\n").split("\t")
    if len(parts) == 3:
        trans[parts[0]] = (parts[1].replace("‍", "‍").strip(), parts[2].strip())

# Curated words from the original data.js
curated = {}
level = None
for line in open(old_js, encoding="utf-8"):
    m = re.match(r"\s*(A1|A2|B1|B2|C1): \[", line)
    if m:
        level = m.group(1); curated[level] = []; continue
    m = re.match(r'\s*\["(.+?)", "(.+?)", "(.+?)"\]', line)
    if m and level:
        curated[level].append(list(m.groups()))
cur_by_word = {w[1].lower(): w for lv in curated for w in curated[lv]}

out = {}
seen = set()
goethe_all = {e["de"].lower() for lv in goethe for e in goethe[lv]}
for lv in ["A1", "A2", "B1"]:
    rows = []
    for i, e in enumerate(goethe[lv]):
        emoji, vi = trans.get(f"{lv}-{i}", ("", "SKIP"))
        de = e["de"]
        if de == "der Friseurin":
            de = "die Friseurin"
        if vi == "SKIP" or not vi:
            continue
        vi = FIXES.get(de, vi) or vi
        if de.lower() in cur_by_word:
            emoji = cur_by_word[de.lower()][0]
        ex = e["ex"][0] if e["ex"] else ["", ""]
        rows.append([emoji or "📝", de, vi, e["pl"], ex[0], ex[1]])
        seen.add(de.lower())
    for w in curated.get(lv, []):
        if w[1].lower() not in seen and w[1].lower() not in goethe_all:
            rows.append([w[0], w[1], w[2], "", "", ""])
            seen.add(w[1].lower())
    for w in EXTRA.get(lv, []):
        if w[1].lower() not in seen:
            rows.append(w)
            seen.add(w[1].lower())
    out[lv] = rows

# Goethe A1 words that were parsed into a higher level (their A1 row had odd markup)
for lv in ["A2", "B1"]:
    moving = [r for r in out[lv] if r[1].lower() in MOVE_TO_A1]
    out[lv] = [r for r in out[lv] if r[1].lower() not in MOVE_TO_A1]
    have = {r[1].lower() for r in out["A1"]}
    out["A1"].extend(r for r in moving if r[1].lower() not in have)
for lv in ["A1", "A2", "B1"]:
    random.Random(f"lessons-{lv}").shuffle(out[lv])
import glob, os
for lv in ["B2", "C1", "C2"]:
    rows = [[w[0], w[1], w[2]] for w in curated.get(lv, []) if w[1].lower() not in seen]
    have = {r[1].lower() for r in rows}
    for path in sorted(glob.glob(f"{sp}/vocab2/{lv}?.tsv")):
        for line in open(path, encoding="utf-8"):
            c = line.rstrip("\n").split("\t")
            if len(c) < 3 or not c[1].strip():
                continue
            c = [x.strip() for x in c] + [""] * (6 - len(c))
            k = c[1].lower()
            if k in seen or k in have:
                continue
            have.add(k)
            rows.append(c[:6])
    for r in rows:
        seen.add(r[1].lower())
    out[lv] = rows

with open(out_js, "w", encoding="utf-8") as f:
    f.write("// Tự động tạo bởi build_data.py – từ vựng A1–B1 theo danh sách Goethe-Zertifikat\n")
    f.write("// (nguồn: github.com/ilkermeliksitki/goethe-institute-wordlist), B2–C2 (luật & thuế) biên soạn thêm.\n")
    f.write("// Mỗi mục: [emoji, tiếng Đức, tiếng Việt, số nhiều, câu ví dụ DE, câu ví dụ EN]\n")
    f.write("const VOCAB = {\n")
    for lv, rows in out.items():
        f.write(f"  {lv}: [\n")
        for r in rows:
            f.write("    " + json.dumps(r, ensure_ascii=False) + ",\n")
        f.write("  ],\n")
    f.write("};\n")
for lv, rows in out.items():
    print(lv, len(rows))
