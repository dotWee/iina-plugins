# IINA Plugin: Sort Playlist by Duration

This plugin adds a context menu item to the IINA playlist panel to sort the current playlist items based on their video duration (shortest first).

## Installation

1. Download or clone this repository.
2. Rename the folder `playlist-sort-by-duration` to `playlist-sort-by-duration.iinaplugin`.
3. Double-click the `playlist-sort-by-duration.iinaplugin` file, or manually move it to IINA's plugin folder. You can find the plugin folder by opening IINA, going to `Settings...` > `Plugins`, and clicking `Open Plugin Folder`.
4. Restart IINA if it was running.

## Usage

1. Open the Playlist panel in IINA (usually Cmd+Shift+P or via the `Window` menu).
2. Right-click (or Control-click) anywhere within the playlist area.
3. Select the "Sort by Duration" option from the context menu.
4. The playlist will be reordered with the shortest videos appearing first. Items without a valid duration (like streams or separators) will be placed at the end.

## Notes

* The duration information is based on the metadata IINA has for each playlist item. If the duration is not available for an item, it will be moved to the end of the list after sorting.
* Sorting is done in ascending order (shortest to longest).

## References

* [IINA Plugin Documentation](https://docs.iina.io/)
* [IINA Playlist API](https://docs.iina.io/api/playlist.html)
