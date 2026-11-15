# Công cụ tạo dữ liệu

Chạy trong thư mục `tools/` (cần Python 3):

```bash
python -I build_data.py . data_curated.js ../data.js
python -I build_quiz.py content ..
```

- `goethe.json` + `all_out.tsv`: từ vựng A1–B1 (danh sách Goethe) kèm nghĩa tiếng Việt/emoji.
- `vocab2/*.tsv`: từ vựng B2–C2 (luật & thuế). Cột: emoji, từ, nghĩa, số nhiều, câu ví dụ DE, câu ví dụ VI.
- `content/*.json`: ngữ pháp + cụm từ theo cấp độ.
- `data_curated.js`: bộ từ tự soạn ban đầu.

## Bổ sung
- `apply_review.py review/*.tsv`: áp dụng các sửa lỗi thuật ngữ vào `vocab2/` (chạy trước `build_data.py`).
- `verbs.json` → `../verbs-data.js`; `reading_*.json` → `../reading-data.js`; `writing.json` → `../writing-data.js` (chuyển bằng Node, xem lịch sử).
- `make_icons.py ..`: vẽ lại icon-192/512.png.
- Sau khi sửa file web, tăng `CACHE` trong `../sw.js` (vd. "dw-v2") để máy đã cài bản offline nhận bản mới.
