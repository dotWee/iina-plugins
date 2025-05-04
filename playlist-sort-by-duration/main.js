const { core, playlist, console } = iina;

function sortPlaylistByDuration() {
  console.log("Sorting playlist by duration...");
  const items = playlist.getItems();

  if (!items || items.length === 0) {
    console.log("Playlist is empty, nothing to sort.");
    core.osd("Playlist is empty.");
    return;
  }

  // Filter out items without duration (e.g., streams, separators)
  // And sort the valid items by duration (ascending)
  const sortedItems = items
    .filter(item => item.duration && item.duration > 0)
    .sort((a, b) => a.duration - b.duration);

  // Add back items that were filtered out (if any)
  const nonSortableItems = items.filter(item => !item.duration || item.duration <= 0);
  const finalItems = [...sortedItems, ...nonSortableItems];

  // Check if sorting actually changed the order
  if (JSON.stringify(items.map(i => i.url)) === JSON.stringify(finalItems.map(i => i.url))) {
      console.log("Playlist already sorted or only contains unsortable items.");
      core.osd("Playlist already sorted by duration.");
      return;
  }

  playlist.setItems(finalItems);
  console.log("Playlist sorted.");
  core.osd("Playlist sorted by duration.");
}

// Register the context menu item in the playlist
playlist.addContextMenuItem({
  title: "Sort by Duration",
  description: "Sorts the playlist items by their duration (shortest first)",
  order: 10, // Adjust order as needed relative to other items
  action: sortPlaylistByDuration,
});

console.log("Playlist Sort by Duration plugin loaded.");
