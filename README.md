# Forma — Full Stack Development Project 1

A responsive, editorial-style frontend built from the supplied Decodelabs Project 1 brief.

## Run locally
1. Extract/open this folder in VS Code or another editor.
2. Open `index.html` in your browser. For a local server, use the VS Code **Live Server** extension or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.
3. No build step or framework is required.

## Implemented from the brief
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`) and descriptive labels.
- Responsive, mobile-first layout with single-column/small-screen adaptations and breakpoints around 768px and 1024px.
- CSS Grid for page and article layouts; Flexbox for navigation, controls and component alignment.
- Fluid typography using `clamp()`, a restrained palette inspired by the brief (mocha, ethereal blue, moonlit grey/green), and two font families.
- JavaScript interactions: mobile navigation, article category filters, newsletter email validation/demo feedback, dynamic footer year.
- Accessibility basics: skip link, visible keyboard focus, aria labels/states, live form feedback, and reduced-motion preference.

## Project structure
- `index.html` — semantic page structure and content
- `styles.css` — responsive design, layout, visual styles and accessibility states
- `script.js` — small interaction layer
- `README.md` — setup and implementation notes

## Scope / limitations
This is the responsive frontend milestone, not a full backend application. Newsletter submission is intentionally simulated: no address is transmitted or stored. Google Fonts are loaded remotely when an internet connection is available; system fallbacks remain available offline.

## Manual audit checklist
- [ ] Check at 360px, 390px, 768px, 1024px and wide desktop.
- [ ] Navigate links and controls using keyboard only.
- [ ] Confirm category filters update the visible cards and pressed states.
- [ ] Try malformed and valid email addresses; confirm no false claim of subscription.
- [ ] Verify browser console has no JavaScript errors.
