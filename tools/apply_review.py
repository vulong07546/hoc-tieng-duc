"""Apply reviewer corrections to vocab2/*.tsv.
Usage: python -I apply_review.py <review.tsv> [<review.tsv> ...]
Correction line: file<TAB>german<TAB>column<TAB>new value<TAB>reason
"""
import sys, os

COLS = {"emoji": 0, "german": 1, "vietnamese": 2, "plural": 3, "example_de": 4, "example_vi": 5}
here = os.path.dirname(os.path.abspath(__file__))
applied = missing = 0
for rv in sys.argv[1:]:
    for line in open(rv, encoding="utf-8"):
        parts = line.rstrip("\n").split("\t")
        if len(parts) < 4:
            continue
        fname, word, col, new = parts[0].strip(), parts[1].strip(), parts[2].strip(), parts[3].strip()
        fname = os.path.basename(fname)
        if not fname.endswith(".tsv"):
            fname += ".tsv"
        path = os.path.join(here, "vocab2", fname)
        rows = [l.rstrip("\n").split("\t") for l in open(path, encoding="utf-8")]
        hit = False
        for r in rows:
            if len(r) > 1 and r[1].strip() == word and col in COLS:
                while len(r) < 6:
                    r.append("")
                r[COLS[col]] = new
                hit = True
                break
        if hit:
            with open(path, "w", encoding="utf-8") as f:
                f.write("\n".join("\t".join(r) for r in rows) + "\n")
            applied += 1
        else:
            missing += 1
            print("NOT FOUND:", fname, word, col)
print("applied", applied, "missing", missing)
