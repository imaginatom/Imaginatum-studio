# Theme Switching Guide

## Overview

The color theme system has been centralized in `app/themes.css` using the `oklch` color space format. This makes it easy to switch between different color themes.

## Current Theme Structure

The active theme is defined in the `:root` and `.dark` blocks at the top of `app/themes.css`. Currently, **THEME 1: Default (Yellow/Orange Theme)** is active.

## How to Switch Themes

### Method 1: Comment/Uncomment Themes

1. Open `app/themes.css`
2. Comment out the current active theme (`:root` and `.dark` blocks)
3. Uncomment the theme you want to use
4. Save the file

**Example:**
```css
/* Comment out current theme */
/*
:root {
  --background: oklch(1.0000 0 0);
  ...
}
*/

/* Uncomment desired theme */
:root {
  --background: oklch(0.9711 0.0074 80.7211);
  ...
}
```

### Method 2: Replace the Active Theme

1. Open `app/themes.css`
2. Find the active `:root` and `.dark` blocks (currently THEME 1)
3. Replace the entire `:root` and `.dark` blocks with your new theme values
4. Save the file

## Available Themes

### THEME 1: Default (Yellow/Orange Theme) - **ACTIVE**
- Primary color: Yellow/Orange (`oklch(0.7686 0.1647 70.0804)`)
- Fonts: Inter, Source Serif 4, JetBrains Mono
- Radius: 0.375rem

### THEME 2: Green/Teal Theme
- Primary color: Green/Teal (`oklch(0.5234 0.1347 144.1672)`)
- Fonts: Montserrat, Merriweather, Source Code Pro
- Radius: 0.5rem

### THEME 3: Pink Theme (Imaginatum Brand)
- Primary color: Pink (`oklch(0.6368 0.2078 330.0000)`)
- Fonts: Poppins, Georgia, Fira Code
- Radius: 0.875rem

## Adding a New Theme

1. Copy one of the existing theme blocks (including both `:root` and `.dark`)
2. Paste it at the end of `app/themes.css`
3. Modify the color values to your desired theme
4. Add a comment header describing the theme
5. To activate it, comment out the current theme and uncomment your new theme

## Theme Format

All themes follow this structure:

```css
:root {
  /* Color variables */
  --background: oklch(...);
  --foreground: oklch(...);
  --primary: oklch(...);
  /* ... other color variables ... */
  
  /* Typography */
  --font-sans: ...;
  --font-serif: ...;
  --font-mono: ...;
  
  /* Spacing & Layout */
  --radius: ...;
  --spacing: ...;
  
  /* Shadows */
  --shadow-xs: ...;
  --shadow-sm: ...;
  /* ... other shadow variables ... */
  
  /* Animations */
  --animate-fade-up: ...;
  /* ... other animation variables ... */
}

.dark {
  /* Same structure for dark mode */
  --background: oklch(...);
  /* ... */
}
```

## Important Notes

- All colors use the `oklch()` format for better color consistency
- Each theme must include both `:root` (light mode) and `.dark` (dark mode) blocks
- The `--font-poppins` variable is set but will be overridden by `layout.tsx` if Poppins is loaded
- Animation and delay variables are shared across all themes
- Radius variants are calculated from the base `--radius` value

## Testing Your Theme

After switching themes:

1. Save `app/themes.css`
2. Restart your development server if needed
3. Check both light and dark modes
4. Verify all UI components display correctly
5. Test responsive breakpoints

## Troubleshooting

- **Colors not updating?** Make sure you've saved `app/themes.css` and the dev server has reloaded
- **Missing variables?** Ensure your theme includes all required variables (see format above)
- **Font issues?** Check that font variables match fonts loaded in `layout.tsx`

