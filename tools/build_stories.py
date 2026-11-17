"""Gộp tools/stories/stories_*.json thành ../stories-data.js và kiểm tra.
Usage: python -I build_stories.py <stories_dir> <project_dir>
"""
import json, sys, os, glob
src, proj = sys.argv[1], sys.argv[2]
ORDER = {"A1": 0, "A2": 1, "B1": 2}
out, problems, ids = [], [], set()
for path in sorted(glob.glob(os.path.join(src, "stories_*.json"))):
    for s in json.load(open(path, encoding="utf-8")):
        if s["id"] in ids: problems.append("dup id " + s["id"])
        ids.add(s["id"])
        if s.get("level") not in ORDER: problems.append(f"{s['id']}: level {s.get('level')}")
        sents = [x for x in s["sentences"] if x.get("de", "").strip() and x.get("vi", "").strip()]
        if len(sents) != len(s["sentences"]): problems.append(f"{s['id']}: empty sentence")
        s["sentences"] = sents
        out.append(s)
out.sort(key=lambda s: (ORDER.get(s["level"], 9), s["title"]))
with open(os.path.join(proj, "stories-data.js"), "w", encoding="utf-8") as f:
    f.write("// Truyện cổ tích kể lại đơn giản (A1–B1), song ngữ Đức – Việt\nconst STORIES = ")
    json.dump(out, f, ensure_ascii=False, indent=1)
    f.write(";\n")
for s in out: print(s["level"], s["title"], len(s["sentences"]))
print("stories:", len(out), "problems:", problems)
