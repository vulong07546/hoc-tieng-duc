"""Merge mc/mc_*.json (multiple-choice grammar banks) into ../mc-data.js and validate.
Usage: python -I build_mc.py <mc_dir> <project_dir>
"""
import json, sys, os, glob, collections

src, proj = sys.argv[1], sys.argv[2]
LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]
bank = {lv: [] for lv in LEVELS}
problems = []
for path in sorted(glob.glob(os.path.join(src, "mc_*.json"))):
    d = json.load(open(path, encoding="utf-8"))
    lv = d.get("level")
    if lv not in bank:
        problems.append(f"{path}: bad level {lv}"); continue
    for t in d.get("topics", []):
        qs = []
        for q in t.get("questions", []):
            opts = q.get("options", [])
            a = q.get("answer")
            if len(opts) != 4 or len(set(opts)) != 4 or not isinstance(a, int) or not 0 <= a < 4:
                problems.append(f"{lv} '{t.get('title')}': bad options/answer: {q.get('q')!r}"); continue
            if "___" in q["q"] and q["q"].count("___") != 1:
                problems.append(f"{lv}: multiple gaps: {q['q']!r}"); continue
            qs.append({k: q.get(k, "") for k in ["q", "options", "answer", "vi", "explain"]})
        bank[lv].append({"title": t["title"], "intro": t.get("intro", ""), "questions": qs})

seen = collections.Counter(q["q"] + "|" + "|".join(sorted(q["options"])) for lv in bank for t in bank[lv] for q in t["questions"])
dups = [q for q, n in seen.items() if n > 1]
with open(os.path.join(proj, "mc-data.js"), "w", encoding="utf-8") as f:
    f.write("// Trắc nghiệm ngữ pháp A1–C2: mỗi chủ đề có lý thuyết + 15 câu 4 lựa chọn\nconst MCQ = ")
    json.dump(bank, f, ensure_ascii=False, indent=1)
    f.write(";\n")
for lv in LEVELS:
    dist = collections.Counter(q["answer"] for t in bank[lv] for q in t["questions"])
    print(lv, len(bank[lv]), "topics,", sum(len(t["questions"]) for t in bank[lv]), "questions, answer idx", dict(sorted(dist.items())))
print("duplicates:", len(dups), "problems:", len(problems))
for p in problems[:30]:
    print(" ", p)
