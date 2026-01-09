# Logo Setup Instructions

## Logo File Location
Your logo (the pink lightbulb with crown) needs to be placed in the `public` folder as:
- `public/logo.png`

The website is already configured to use this logo in:
- Navigation bar (navbar)
- Footer
- Browser favicon

## Logo Specifications
- **Format**: PNG (with transparency preferred)
- **Recommended size**: 200x200px or larger (will be scaled down)
- **Background**: Transparent or black (as per your design)

## Current Status
The code is ready and will automatically use the logo once you add `logo.png` to the `public` folder.

If you need to use a different filename or format, update these files:
- `components/floating-navbar.tsx` (line ~65)
- `components/footer.tsx` (line ~13)
- `app/layout.tsx` (line ~45)

