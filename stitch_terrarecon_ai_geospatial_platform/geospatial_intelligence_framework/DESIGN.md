---
name: Geospatial Intelligence Framework
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434654'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#737686'
  outline-variant: '#c3c6d6'
  surface-tint: '#0f55d2'
  primary: '#0043ae'
  on-primary: '#ffffff'
  primary-container: '#1a5ad7'
  on-primary-container: '#d7dfff'
  inverse-primary: '#b3c5ff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#90efef'
  on-secondary-container: '#006e6e'
  tertiary: '#005076'
  on-tertiary: '#ffffff'
  tertiary-container: '#236893'
  on-tertiary-container: '#c4e3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa5'
  secondary-fixed: '#93f2f2'
  secondary-fixed-dim: '#76d6d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#cae6ff'
  tertiary-fixed-dim: '#90cdfd'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b70'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  sidebar-width: 260px
---

## Brand & Style

The design system is rooted in the precision of Earth Observation and the reliability required by enterprise-grade scientific analysis. It avoids the fleeting trends of typical AI startups—such as high-contrast dark modes or neon accents—in favor of a "Scientific Academic" aesthetic. This approach prioritizes clarity, data density, and long-term visual comfort for researchers and analysts.

The style is **Modern Corporate with a Tonal Focus**. It utilizes a sophisticated "light-on-light" layering technique, where depth is communicated through subtle shifts in temperature rather than heavy shadows. The UI should feel like a high-end laboratory instrument: clean, structured, and profoundly functional. Visual motifs are inspired by cartography, atmospheric physics, and satellite instrumentation, emphasizing thin lines and expansive, airy canvases.

## Colors

The palette is anchored by a warm, ivory foundation (#FDFCF8) that reduces eye strain during prolonged data analysis. 

- **Primary Blue (#1A5AD7):** Used for primary actions, active navigation states, and critical data points. It represents authority and depth.
- **Teal Accent (#008080):** Specifically reserved for scientific overlays, successful status indicators, and vegetation/environmental data visualizations.
- **Sky Blue (#7CB9E8):** Used for secondary UI elements, selection highlights, and atmospheric data layers.
- **Neutrality:** Off-white (#FFFFFF) is used for foreground cards to create a "lifted" effect against the ivory background. Borders use a muted, warm grey-gold (#E5E1D3) to maintain a soft but defined structure.

## Typography

The design system exclusively uses **Inter** for its systematic, utilitarian qualities and exceptional legibility at small sizes. For technical metadata, coordinates, and sensor readings, **JetBrains Mono** is introduced to provide a distinct visual break and ensure character alignment in data tables.

Headlines should be kept concise. Information density is prioritized over large type; therefore, body-md (14px) is the standard for most interface text, allowing for complex dashboard layouts without overwhelming the user.

## Layout & Spacing

This design system utilizes a **Fixed-Fluid Hybrid** model. The sidebar remains at a fixed 260px width to ensure navigation stability, while the main content area utilizes a fluid grid that optimizes for wide-screen data visualization.

- **Grid:** A 12-column grid with 24px gutters.
- **Margins:** 32px external margins for desktop; 16px for mobile.
- **Density:** High density is preferred. Components use an 8px-based spacing rhythm for vertical flow, but internal component padding often scales down to 4px to accommodate complex satellite metadata.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** rather than traditional drop shadows. 

1.  **Level 0 (Base):** The ivory (#FDFCF8) background canvas.
2.  **Level 1 (Surface):** Pure white (#FFFFFF) cards and panels with a 1px border (#E5E1D3). No shadow.
3.  **Level 2 (Interactive):** When hovered or active, cards gain a very soft, diffused ambient shadow (0px 4px 12px rgba(26, 90, 215, 0.05)).
4.  **Level 3 (Overlay):** Modals and dropdowns use a slightly more pronounced shadow and a thin primary-tinted border to differentiate from the background.

Use "Glassmorphism" sparingly, only for map-top HUDs or floating toolbars, using a 12px backdrop blur and 80% opacity white fill to ensure the map imagery remains visible beneath.

## Shapes

The shape language is **Soft and Professional**. A radius of 0.25rem (4px) is the standard for almost all UI elements, including buttons, input fields, and small cards. This maintains a disciplined, scientific feel while appearing more modern than sharp 0px corners.

- **Standard Elements:** 4px radius.
- **Outer Containers/Large Cards:** 8px radius.
- **Special Elements:** Image viewfinders and mask overlays should maintain sharp 0px corners to emphasize precision and technical accuracy.

## Components

### Sidebar Navigation
The sidebar should be a solid vertical block in a slightly darker off-white or the primary background color. Nav items use `label-md` for headers and `body-md` for links. Active states are indicated by a 3px left-aligned vertical bar in Primary Blue and a subtle sky-blue background tint.

### Buttons & Inputs
- **Primary Button:** Solid Primary Blue with white text. 4px radius.
- **Secondary Button:** White background with a 1px border in #E5E1D3.
- **Inputs:** Standardized height of 36px for high-density forms. Use a subtle inner shadow to indicate "well" depth for drag-and-drop areas.

### Scientific Data Visualization
- **Charts:** Use a palette of Primary Blue, Teal, and Sky Blue. Avoid vibrant reds unless indicating data errors or deforestation.
- **Comparison Sliders:** Vertical split-screens with a 2px white divider and a circular "grabber" handle.
- **Stats Cards:** Large numeric value in `headline-lg` with a small `label-md` descriptor above it. Use subtle "trend" sparklines within the card.

### Image Viewers
Viewers should occupy the largest possible area. Controls (zoom, layer toggle, mask opacity) should be floating "HUD" style elements with glassmorphism effects (white blur) to prevent blocking the satellite imagery.