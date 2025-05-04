# IINA Plugins Collection

This repository contains a collection of plugins developed for the [IINA](https://iina.io/) media player.

## Available Plugins

Below is a list of the plugins currently available in this collection:

1. **[Playlist Sort by Duration](./playlist-sort-by-duration/)**
    * Adds a context menu item to the playlist panel to sort items based on their video duration (shortest first).
    * See the [plugin's README](./playlist-sort-by-duration/README.md) for detailed installation and usage instructions.

2. **[Playlist Sort by Filename](./playlist-sort-by-filename/)**
    * Adds menu items (global Plugins menu and playlist context menu) to sort items alphabetically by their filename.
    * See the [plugin's README](./playlist-sort-by-filename/README.md) for detailed installation and usage instructions.

## General Installation Notes

Each plugin is contained within its own directory. There are two primary ways to install a plugin:

1. **From Source Directory:**
    * Navigate into the specific plugin's directory (e.g., `playlist-sort-by-duration`).
    * Follow the installation instructions provided in that plugin's `README.md` file. Typically, this involves renaming the directory to end with `.iinaplugin` and placing it in IINA's plugin folder.

2. **From GitHub Releases (Recommended):**
    * Go to the [Releases page](https://github.com/dotWee/iina-plugins/releases) of this repository.
    * Find the latest release and download the `.iinaplgz` file for the desired plugin (e.g., `playlist-sort-by-duration.iinaplgz`).
    * Double-click the downloaded `.iinaplgz` file. IINA will automatically recognize it and prompt you to install the plugin.

## Contributing

Feel free to contribute to existing plugins or add new ones via pull requests.

## Resources

* [IINA Official Website](https://iina.io/)
* [IINA Plugin Documentation](https://docs.iina.io/)
