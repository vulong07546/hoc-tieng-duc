"""Parse Goethe TSV lists into deduplicated JSON entries per level.
Usage: python -I parse_goethe.py <download_dir> <out.json>
"""
import json, re, sys, glob, os

src, out = sys.argv[1], sys.argv[2]
seen = set()
result = {}
odd = []
for lv in ["a1", "a2", "b1"]:
    entries = {}
    for path in sorted(glob.glob(os.path.join(src, lv, "*.tsv"))):
        with open(path, encoding="utf-8") as f:
            for line in f:
                parts = line.rstrip("\n").split("\t")
                if len(parts) < 3 or parts[0] == "german word":
                    continue
                raw, de_sent, en_sent = parts[0].strip(), parts[1].strip(), parts[2].strip()
                head = re.sub(r"\(\d+\)\s*$", "", raw).strip()
                if re.match(r"^(ist|war|hat|hatte|wird|wurde) ", head):
                    continue  # conjugation rows, not headwords
                plural = ""
                if "," in head:
                    head, plural = head.split(",", 1)
                    head, plural = head.strip(), plural.strip()
                head = re.sub(r"\((pl\.|Sg\.|Sing\.|Pl\.)\)", "", head)
                head = head.replace("(sich)", "").replace("(e)", "").replace("(s)", "")
                head = re.sub(r"\s+", " ", head).strip()
                if head.endswith("-") or not head:
                    odd.append(raw)
                    continue
                if "/" in head:
                    m = re.match(r"^(der|die|das)/(der|die|das) (.+)$", head)
                    if m:
                        head = f"{m.group(1)} {m.group(3)}"
                    else:
                        head = head.split("/")[0].strip()
                        if len(head) < 2 or head.endswith("-"):
                            odd.append(raw)
                            continue
                if "(" in head or ")" in head:
                    odd.append(raw)
                    continue
                key = head.lower()
                if key in entries:
                    if len(entries[key]["ex"]) < 2:
                        entries[key]["ex"].append([de_sent, en_sent])
                    continue
                if key in seen:
                    continue
                entries[key] = {"de": head, "pl": plural, "ex": [[de_sent, en_sent]]}
    for k in entries:
        seen.add(k)
    result[lv.upper()] = list(entries.values())
    print(lv, len(entries))

with open(out, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=0)
print("odd:", len(odd))
print("\n".join(odd[:80]))
