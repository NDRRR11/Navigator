# Revel Restricted Web Navigator

## Architecture

- **Revel Web Page zone** named `Web Page` is the actual browser surface.
- **Navigator Gadget** provides persistent Back and Home controls.
- **Android RevelScript** receives `navigator.back` and `navigator.home` commands and controls the Web Page.
- The Home URL is configurable through the Gadget's `Home URL` preference.

## Revel setup

1. Add `navigator-controller/restricted-web-navigator.xml` as the Gadget.
2. Set the Gadget's **Home URL** to the desired home page.
3. Keep a separate Revel **Web Page** zone named exactly `Web Page`.
4. Set the Web Page zone's **Uri** to the same home page.
5. Place the Navigator Gadget above the Web Page so its buttons remain touchable.
6. In the Android RevelScript Editor, paste `revelscript-android.txt` and save/publish.

## Important

Do not put the ReadyOp URL into the source code. It belongs in the Gadget's Home URL preference and the Web Page zone's Uri.

The controller uses Revel Digital's documented `sendCommand()` API. The Android player script uses `Controller.addOnCommandListener()` / `onCommand()` to receive those commands.
