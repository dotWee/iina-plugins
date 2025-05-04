/*  Sort Playlist by Filename  */

const { playlist, menu, core, console: log } = iina;

/**
 * Extracts the visible filename (no path, no query string).
 */
function basename(path) {
  // Handles local files, SMB paths and URLs.
  return path
    .replace(/[?#].*$/, "")        // strip query / fragment if any
    .split(/[\\/]/)                // works for / and \\
    .pop();
}

/**
 * Sort the whole playlist alphabetically by basename.
 * Currently-playing item keeps playing.
 */
function sortPlaylist() {
  const items = playlist.list();
  if (items.length <= 1) {
    core.osd("Nothing to sort 🙂");
    return;
  }

  // Remember which entry is playing so we can resume it later.
  const playingPath =
    items.find((it) => it.isPlaying)?.filename ?? null;

  // Collect paths and sort by base-name.
  const pathsSorted = items
    .map((it) => it.filename)
    .sort((a, b) =>
      basename(a).localeCompare(basename(b), undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  /* -------- Re-build the playlist in sorted order -------- */

  // 1. Remove every item (back-to-front to avoid index shifts).
  for (let idx = items.length - 1; idx >= 0; idx--) {
    playlist.remove(idx);
  }

  // 2. Re-add in sorted order.
  pathsSorted.forEach((p, idx) => playlist.add(p, idx));

  // 3. Resume previously-playing item if we had one.
  if (playingPath) {
    const newIdx = pathsSorted.indexOf(playingPath);
    if (newIdx !== -1) playlist.play(newIdx);
  }

  core.osd("Playlist sorted by filename ✔︎");
  log.log("[SortPlaylist] Done");
}

/* --------- Menu integration --------- */

// ① Global “Plugins” menu entry
menu.add(menu.item("Sort playlist by filename", sortPlaylist));

// ② Context-menu entry inside the playlist panel
playlist.registerMenuBuilder(() => [
  menu.item("Sort playlist by filename", sortPlaylist),
]);

