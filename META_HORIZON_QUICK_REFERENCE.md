# Meta Horizon Design System - Quick Reference

## 🎨 Color Palette

### Light Mode
```typescript
// Primary Brand
primary: '#0866FF'      // Meta Blue
hover:   '#0654D4'
active:  '#0551C5'

// Text
primary:   '#1C1E21'    // Near black
secondary: '#65676B'    // Medium gray
tertiary:  '#8A8D91'    // Light gray
disabled:  '#BCC0C4'    // Very light gray

// Backgrounds
primary:   '#FFFFFF'    // White
secondary: '#F3F4F6'    // Light gray
tertiary:  '#E5E7EB'    // Medium gray

// Borders
primary:   '#CED0D4'
secondary: '#E4E6EB'

// Feedback
success: '#31A24C'      // Green
warning: '#F7981C'      // Orange
error:   '#FA383E'      // Red
info:    '#0866FF'      // Blue
```

### Dark Mode
```typescript
// Primary Brand
primary: '#2E89FF'      // Lighter blue
hover:   '#4E9AFF'
active:  '#6AABFF'

// Text
primary:   '#E4E6EB'    // Light gray
secondary: '#B0B3B8'    // Medium gray
tertiary:  '#8A8D91'    // Dark gray

// Backgrounds
primary:   '#18191A'    // Near black
secondary: '#242526'    // Dark gray
tertiary:  '#3A3B3C'    // Medium gray

// Feedback
success: '#42B35C'
warning: '#FFB340'
error:   '#FF6B70'
```

## 📝 Typography

### Font Family
```
Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
```

> **Note**: We use Inter (free, open-source) instead of Meta's proprietary Optimist. [Learn why →](./META_HORIZON_FONT_NOTE.md)

### Type Scale
```typescript
h1: 40px, Bold         // Hero headings
h2: 32px, Bold         // Section titles
h3: 28px, Bold         // Subsection titles
h4: 24px, Semibold     // Card titles
h5: 20px, Semibold     // Small headings
h6: 17px, Semibold     // Inline headings

body.large:  17px, Regular
body.medium: 15px, Regular    // Default body
body.small:  13px, Regular

label.large:  15px, Semibold
label.medium: 13px, Semibold  // Default label
label.small:  11px, Semibold

caption:  12px, Regular
overline: 11px, Semibold, UPPERCASE
```

## 📦 Component Specs

### Buttons
```typescript
borderRadius: 8px

small:  32px height, 12px H-padding, 13px font
medium: 36px height, 16px H-padding, 15px font
large:  44px height, 24px H-padding, 17px font

fontWeight: Semibold
```

### Cards
```typescript
borderRadius: 16px
border: none (0px)

padding:
  small:  12px
  medium: 16px
  large:  24px

shadow: 0.04 - 0.08 opacity (very subtle)
```
> Ref: [Meta Horizon Cards](https://developers.meta.com/horizon/design/cards)

### Input Fields
```typescript
borderRadius: 8px
minHeight: 44px
padding: 12px H, 8px V
border: 1px solid
background: Secondary surface
```

### Tags
```typescript
borderRadius: 6px
padding: 4px V, 8px H
fontSize: 11px
fontWeight: Semibold
border: none
```

## 🔧 Usage Examples

### Basic Setup
```jsx
import { DesignLanguageProvider } from '@mangekyo/components';

<DesignLanguageProvider
  initialDesignLanguage="metaHorizon"
  initialColorScheme="light"
>
  <App />
</DesignLanguageProvider>
```

### Switch Theme
```jsx
const { setDesignLanguage, setColorScheme } = useDesignLanguage();

// Switch to Meta Horizon
setDesignLanguage('metaHorizon');

// Toggle dark mode
setColorScheme('dark');
```

### Access Theme Tokens
```jsx
const { theme } = useDesignLanguage();

// Colors
theme.semantic.colors.interactive.primary  // '#0866FF'
theme.semantic.colors.text.primary         // '#1C1E21'

// Spacing
theme.semantic.spacing.component.paddingMd // 12

// Typography
theme.semantic.typography.body.medium
```

### Use Components
```jsx
import { ButtonV2, CardV2, TagV2 } from '@mangekyo/components';

<CardV2 elevation="medium">
  <ButtonV2 
    title="Get Started" 
    variant="primary" 
    size="large" 
  />
  <TagV2 label="New" variant="primary" />
</CardV2>
```

## 📐 Spacing Scale
```typescript
xs: 4px   (component.paddingXs)
sm: 8px   (component.paddingSm)
md: 12px  (component.paddingMd)  // Most common
lg: 16px  (component.paddingLg)
xl: 24px  (component.paddingXl)
```

## 🎯 Border Radius Scale
```typescript
buttons: 8px    // Subtle rounding
cards:   16px   // More pronounced (Meta Horizon standard)
tags:    100px  // Fully rounded pills (ensures perfect circular ends)
inputs:  8px    // Matching buttons
```

## ✅ Quick Checklist

- [ ] Use Meta blue (#0866FF) for primary actions
- [ ] Maintain 44px minimum touch targets
- [ ] Use Inter font family (with fallbacks)
- [ ] Apply 8-16px border radius (8px buttons, 16px cards/tags)
- [ ] Use very subtle shadows (0.04-0.08 opacity)
- [ ] Ensure proper contrast ratios (WCAG AA)
- [ ] Test in both light and dark modes
- [ ] Use semantic color tokens (not hard-coded values)

## 🚀 Component Availability

All components adapt automatically:
- ✅ ButtonV2
- ✅ CardV2
- ✅ InputV2
- ✅ TagV2
- ✅ ImageV2
- ✅ ArticleCardV2

## 📱 Platform Support
- ✅ iOS
- ✅ Android
- ✅ Web
- ✅ Meta Quest (VR/AR)

## 🔗 Resources
- [Full Guide](./META_HORIZON_DESIGN_GUIDE.md)
- [Implementation Summary](./META_HORIZON_IMPLEMENTATION_SUMMARY.md)
- [Font Implementation Note](./META_HORIZON_FONT_NOTE.md)
- [Card Update Details](./META_HORIZON_CARD_UPDATE.md)
- [Tag Update Details](./META_HORIZON_TAG_UPDATE.md)
- [Official Meta Docs](https://developers.meta.com/horizon/design/)
- [Mangekyo Library Docs](./README.md)
- [Inter Font](https://rsms.me/inter/)

