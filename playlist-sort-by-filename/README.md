# IINA Playlist Sort by Filename

**Sort your IINA playlist alphabetically by filename (ignoring folder paths) with a single click!**

This plugin adds a menu item to both the global Plugins menu and the playlist context menu, allowing you to instantly reorder your playlist by the visible filename of each entry.

---

## Features

- **Sorts the entire playlist** alphabetically by filename (ignoring folder paths).
- **Keeps the currently playing item** playing after sorting.
- **Accessible from both:**
  - The global `Plugins` menu.
  - The right-click context menu in the playlist panel.
- Works with local files, network paths, and URLs.

---

## Installation

1. **Download or clone this repository.**
2. Ensure the folder contains at least:
   - `Info.json`
   - `main.js`
3. **Pack the plugin** (optional, for distribution):
   - Use the [IINA CLI tool](https://docs.iina.io/pages/creating-plugins.html#the-cli-tool) or compress the folder and rename it with a `.iinaplugin` extension.
4. **Install in IINA:**
   - Open IINA.
   - Go to `Preferences → Plugins`.
   - Click "Install from a local package…" and select your `.iinaplugin` folder or packed file.
5. **(For development):**  
   You can symlink the folder to `~/Library/Application Support/com.colliderli.iina/plugins/YourPluginName.iinaplugin-dev` for hot-reloading. See [IINA Plugin Development Guide](https://docs.iina.io/pages/creating-plugins.html#loading-a-development-plugin).

---

## Usage

1. **Open a playlist** in IINA with multiple items.
2. **Sort via menu:**
   - Go to the top menu bar: `Plugins → Sort playlist by filename`
3. **Or sort via context menu:**
   - Right-click inside the playlist panel and select `Sort playlist by filename`
4. The playlist will be reordered alphabetically by the visible filename (not the full path).
5. The currently playing item will continue playing after sorting.

---

## Example

Before sorting:
```
/Users/you/Videos/episode10.mp4
/Users/you/Videos/episode2.mp4
/Users/you/Videos/episode1.mp4
```
After sorting:
```
/Users/you/Videos/episode1.mp4
/Users/you/Videos/episode2.mp4
/Users/you/Videos/episode10.mp4
```

---

## Requirements

- IINA 1.3 or later
- macOS 10.11 or later

---

## How it Works

- The plugin uses the [IINA Plugin API](https://docs.iina.io/) to access and manipulate the playlist.
- It extracts the base filename from each playlist entry, sorts the list, and rebuilds the playlist in the new order.
- The currently playing item is detected and playback resumes at the correct file after sorting.

---

## Documentation & Resources

- [IINA Plugin API Documentation](https://docs.iina.io/)
- [Getting Started with IINA Plugins](https://docs.iina.io/pages/getting-started.html)
- [Creating Plugins for IINA](https://docs.iina.io/pages/creating-plugins.html)

---

## License

MIT (or your preferred license)

---

## Feedback & Contributions

Feel free to open issues or pull requests to improve this plugin!

---

**Enjoy a tidy, alphabetically sorted playlist in IINA!**
