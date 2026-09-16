# Revel Navigator Webapp

Reusable Back/Home controller for a Revel Digital Web Page.

## Purpose

This Webapp provides:

- Back button
- Home button
- Transparent background
- No browser address bar
- No browser tabs
- No hard-coded ReadyOp URL
- Revel Digital Player SDK communication

## Build

Install dependencies:

npm install

Build the Webapp:

npm run build

The resulting Webapp files are located in:

dist/

The contents of `dist/` should be archived with `index.html` at the root and renamed:

revel-navigator.webapp

## Revel Configuration

Upload the `.webapp` file to Revel Digital Media.

Assign the Webapp to the appropriate Web Page zone.

The Webapp communicates with the Revel Digital player using:

@reveldigital/client-sdk
