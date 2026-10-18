AGENT WINTHORPE DECK — GITHUB PAGES

Upload the CONTENTS of this folder to the root of a new GitHub repository.
Recommended repo name: agentwinthorpe-deck

Files/folders that should appear at the repo root:
  index.html
  style.css
  script.js
  slides/

Then:
1. GitHub repository > Settings > Pages.
2. Under Build and deployment, choose Deploy from a branch.
3. Branch: main, folder: /(root), then Save.
4. After GitHub Pages publishes, add custom domain: deck.agentwinthorpe.com
5. In your DNS provider, create CNAME:
      Name: docs? NO — use: deck
      Value: zeevchen-sudo.github.io
6. After DNS validates, enable Enforce HTTPS.

Navigation:
- Right arrow / Page Down / Space / Enter: next slide
- Left arrow / Page Up / Backspace: previous slide
- Home / End: first / last slide
- Swipe on touch devices
- URL hashes (#1 ... #8) address individual slides

Slide 6:
The original PDF hyperlink is preserved and points to:
https://docs.agentwinthorpe.com/

Machine readability:
Each slide includes its textual content in the HTML for accessibility and machine parsing while preserving the exact PDF slide as the visible presentation.
