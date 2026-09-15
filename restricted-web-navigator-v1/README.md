# Revel Digital Restricted Web Navigator — V1

A simple Revel Digital Gadget that provides:

- Configurable Home URL
- Back button
- Home button
- Embedded web content
- No address bar
- No persistent browser history implemented by the gadget
- Touch-friendly navigation controls

## Test Home URL

The default Home URL is the ReadyOp form currently being used for testing:

https://ro.eprops.hhs.nd.gov/fs/4hBg/78d0fb6f

The URL is a Revel Digital UserPref, so it can be changed from the gadget/template properties without editing this XML.

## Important V1 limitation

The browser security model prevents a parent page from freely reading or controlling navigation history inside a cross-origin iframe. This means the first version cannot guarantee a complete Back function for every external website.

ReadyOp-to-ReadyOp navigation and other embedded pages should be tested first.

Some external websites may also prohibit iframe embedding with X-Frame-Options or Content-Security-Policy. The gadget cannot override those protections.

## Files

- `restricted-web-navigator.xml` — the Revel Digital Gadget
- `README.md` — project notes

## Deployment

Host the XML at a stable HTTPS URL accessible by Revel Digital, such as GitHub Pages, then add that URL as a Gadget in Revel Digital.

The current XML follows the traditional Revel Digital Gadget XML structure documented at:
https://developer.reveldigital.com/gadgets/
