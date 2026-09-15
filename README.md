# Revel Restricted Web Navigator

This build uses a Revel Digital Gadget overlay for the Back/Home buttons and the Android Web Page zone as the actual browser surface.

## Architecture
- Web Page zone: loads the configured website directly.
- Navigator Gadget: provides Back/Home buttons.
- Android RevelScript: listens for the Gadget callback on the Web Page control and performs WebView navigation.

## RevelScript
Paste `revelscript-android.txt` into the Android RevelScript Editor.

## Gadget
Use `navigator-controller/restricted-web-navigator.xml` as the Gadget source. Set its Home URL property to the same URL used by the Web Page zone.

The existing V1 `restricted-web-navigator.xml` can remain in the repository as a fallback.
