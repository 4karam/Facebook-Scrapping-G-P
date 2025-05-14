# 📥 Facebook Group Scraper – Chrome Extension

A lightweight Chrome extension that scrapes posts from Facebook groups directly when browsing any group. A floating button appears at the bottom-right corner of the page, allowing users to extract posts and export them in JSON format.

![Facebook Group Scraper Icon](assets/icon.png)

---

## ✅ Features

- Automatically activates when you visit any Facebook group.
- Displays a floating button at the **bottom-right corner** of the page.
- Scrapes key post information including:
    - Poster name
    - Post content
    - Number of likes
    - Number of comments
- Simple JSON output format.
- Supports **fullscreen mode** when the browser is launched via CLI.

---

## 🧩 Installation

1. Open Google Chrome.
2. Navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode** from the top right.
4. Click **Load unpacked**.
5. Select the main project folder that contains:
    - `manifest.json`
    - `script/content.js`
    - `assets/icon.png`

---

## 🚀 Usage

1. Open any Facebook group.
2. A button will appear in the bottom-right corner.
3. Click the button to start scraping group posts.
4. Posts will be exported or shown in JSON format.

---

## 🗃️ Sample Output

```json
[
  {
    "name": "Default Group Sorting Label",
    "content": "No text available",
    "comment": "No comments",
    "like": "No likes"
  },
  {
    "name": "John Smith",
    "content": "Hello everyone! This is my first post here.",
    "comment": "5 comments",
    "like": "20 likes"
  }
]
```

---

## 🖥️ Fullscreen Mode (Optional)

If you want to launch Chrome in fullscreen when using the extension, use the following command:

```bash
chrome --start-fullscreen --load-extension="path/to/extension"
```

---

## 🛠 Development

- `manifest.json`: Metadata and permissions for the extension.
- `script/content.js`: Core script.
- `assets/icon.png`: Icon used for the extension.

---

## 📚 Keywords (SEO Tags)

```
facebook group scraper
facebook group post extractor
chrome extension facebook posts
scrape facebook groups
facebook group content downloader
facebook post extractor tool
json exporter facebook group
group post scraper extension
facebook automation chrome extension
facebook group parser tool
```

---

## 🪪 License

4karam © 2025
