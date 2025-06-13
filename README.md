# videoprocess

## Cấu trúc dự án (2025)

```
/src
  /electron      # Main process Electron
    main.js
    preload.js
  /web           # Frontend (HTML, CSS, JS)
    index.html
    index.css
    renderer.js
/assets          # Ảnh, icon, font, v.v.
/backend
  /video_engine  # Python package backend
    __init__.py
    caption.py
    export.py
    processor.py
README.md
package.json
pyproject.toml
.gitignore
```

- Mọi tài nguyên tĩnh (ảnh, icon, font) để trong `assets/`.
- Mã nguồn frontend để trong `src/web/`, backend Python trong `backend/video_engine/`, Electron main process trong `src/electron/`.
- Đã chuẩn hóa tên thư mục, dễ mở rộng và bảo trì.
