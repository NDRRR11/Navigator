# Revel Digital Restricted Web Navigator

## Architecture

This version deliberately does **not** iframe ReadyOp. The Revel Digital **Web Page** zone is the browser surface, which avoids the iframe security failure encountered by V1. A transparent/visible Gadget zone sits above it and sends commands to the Android player script.

### Files
- `navigator-controller/restricted-web-navigator.xml` — reusable Back/Home overlay gadget.
- `navigator-webapp/index.html` — Webapp package placeholder/test target. It is retained as the new Webapp alongside V1, but the working production navigation uses the Web Page zone.
- `revelscript-android.txt` — Android RevelScript for the template.

## Template setup
1. Keep a **Web Page** zone named `Web Page` and put the desired Home URL in its `Uri` property.
2. Add a **Gadget** zone using `navigator-controller/restricted-web-navigator.xml`.
3. Set the gadget's `Home URL` to the same home URL.
4. Put the Gadget zone above the Web Page zone in the template layer/order.
5. Open RevelScript Editor, select Android, and paste `revelscript-android.txt`.
6. Save/publish the template.

The gadget sends `navigator.back` and `navigator.home` through the Revel Digital Client SDK. The Android script receives those commands and operates the Web Page control.

## Important
The `Home URL` default in the XML is intentionally `https://example.com`; replace it in the template. No ReadyOp URL is hard-coded into the reusable project.

V1 remains unchanged and can continue to be used separately.
