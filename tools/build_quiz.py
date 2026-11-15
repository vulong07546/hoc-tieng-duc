"""Merge content/<LEVEL>.json into grammar-data.js and phrases-data.js.
Usage: python -I build_quiz.py <content_dir> <project_dir>
"""
import json, sys, os

src, proj = sys.argv[1], sys.argv[2]
grammar, phrases, problems = {}, {}, []
for lv in ["A1", "A2", "B1", "B2", "C1", "C2"]:
    p = os.path.join(src, f"{lv}.json")
    if not os.path.exists(p):
        problems.append(f"{lv}: missing"); continue
    d = json.load(open(p, encoding="utf-8"))
    g = []
    for t in d.get("grammar", []):
        qs = []
        for q in t.get("questions", []):
            if q.get("q", "").count("___") != 1 or not q.get("answers"):
                problems.append(f"{lv} grammar '{t.get('title')}': bad q {q.get('q')!r}"); continue
            qs.append({k: q.get(k, "") for k in ["q", "hint", "answers", "vi", "explain"]})
        g.append({"title": t["title"], "intro": t.get("intro", ""), "questions": qs})
    ph = []
    for t in d.get("phrases", []):
        items = [{"e": i.get("e", "💬"), "vi": i["vi"], "de": i["de"], "alt": i.get("alt", [])}
                 for i in t.get("items", []) if i.get("de") and i.get("vi")]
        ph.append({"title": t["title"], "emoji": t.get("emoji", "💬"), "items": items})
    grammar[lv], phrases[lv] = g, ph
    print(lv, "grammar", len(g), sum(len(t["questions"]) for t in g),
          "| phrases", len(ph), sum(len(t["items"]) for t in ph))

def dump(name, var, data, note):
    with open(os.path.join(proj, name), "w", encoding="utf-8") as f:
        f.write(f"// {note}\nconst {var} = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

dump("grammar-data.js", "GRAMMAR", grammar, "Bài tập ngữ pháp A1–C2: mỗi chủ đề có lý thuyết + câu điền từ.")
dump("phrases-data.js", "PHRASES", phrases, "Cụm từ & mẫu câu A1–C2 theo chủ đề.")
print("problems:", len(problems))
for p in problems: print(" ", p)
