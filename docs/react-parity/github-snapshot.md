# Refreshing the contribution snapshot

The original `src/Assets/github.png` is a full GitHub profile screenshot containing a January–December contribution grid. The exact original bytes are retained. This is a historical image, not a live integration. No API, token, action, scraping job, or third-party contribution library is used.

To refresh manually:

1. Open the public profile yourself and select the intended full-year contribution view. Keep all month columns visible.
2. Capture a clean screenshot containing the contribution grid, with no private tabs, browser chrome, or personal account controls. Do not reuse an unrelated illustration.
3. Replace `src/Assets/github.png` with the reviewed PNG. Keep the same path so Astro emits a new hashed asset automatically. The legacy mini/backup images are not used by the new component.
4. Update the Projects page's alt text and snapshot caption if the capture date/year is known. Continue to call it a static snapshot.
5. Build locally and inspect `/projects` at phone and desktop widths. Confirm the full-size image link and profile link work. The profile link opens a separate tab.

This task did not contact GitHub or refresh the image from the network. A mobile exception to the original hidden-image rule keeps the graph visible and allows opening the full-resolution local file.
