# Meta Horizon Design System Implementation

## Overview

The Meta Horizon design system has been successfully integrated into the Mangekyo component library. This design language is based on Meta's official design guidelines for Horizon and provides a modern, clean aesthetic optimized for both mobile and VR/AR experiences.

## Official Documentation

Based on: [Meta Horizon Design System](https://developers.meta.com/horizon/design/)

> **Font Note**: This implementation uses Inter font (free, open-source) instead of Meta's proprietary Optimist font. See [META_HORIZON_FONT_NOTE.md](./META_HORIZON_FONT_NOTE.md) for detailed information about this choice.

## Design Principles

Meta Horizon's design system emphasizes:

1. **Clarity & Simplicity** - Clean, uncluttered interfaces
2. **Accessibility** - High contrast and readable typography
3. **Consistency** - Unified visual language across experiences
4. **Modern Aesthetics** - Contemporary, friendly design

## Color Palette

### Light Mode

#### Brand Colors
- **Primary Blue**: `#0866FF` - Main interactive elements
- **Primary Hover**: `#0654D4` - Hover states
- **Primary Active**: `#0551C5` - Active/pressed states

#### Text Colors
- **Primary Text**: `#1C1E21` - Main content
- **Secondary Text**: `#65676B` - Supporting text
- **Tertiary Text**: `#8A8D91` - Subtle text
- **Disabled Text**: `#BCC0C4` - Disabled states

#### Background Colors
- **Primary Background**: `#FFFFFF` - Main surfaces
- **Secondary Background**: `#F3F4F6` - Cards and elevated surfaces
- **Tertiary Background**: `#E5E7EB` - Depth and layering

#### Border Colors
- **Primary Border**: `#CED0D4` - Main borders
- **Secondary Border**: `#E4E6EB` - Subtle borders

#### Feedback Colors
- **Success**: `#31A24C` (Green)
- **Warning**: `#F7981C` (Orange)
- **Error**: `#FA383E` (Red)
- **Info**: `#0866FF` (Blue)

### Dark Mode

#### Brand Colors
- **Primary Blue**: `#2E89FF` - Lightened for dark backgrounds
- **Primary Hover**: `#4E9AFF`
- **Primary Active**: `#6AABFF`

#### Text Colors
- **Primary Text**: `#E4E6EB` - Main content
- **Secondary Text**: `#B0B3B8` - Supporting text
- **Tertiary Text**: `#8A8D91` - Subtle text

#### Background Colors
- **Primary Background**: `#18191A` - Main dark background
- **Secondary Background**: `#242526` - Elevated surfaces
- **Tertiary Background**: `#3A3B3C` - Cards and modals

#### Feedback Colors
- **Success**: `#42B35C` (Lighter green)
- **Warning**: `#FFB340` (Lighter orange)
- **Error**: `#FF6B70` (Lighter red)

## Typography

### Font Family

**Primary Font**: Inter (Meta uses Optimist, but Inter is our free open-source alternative)

```
'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
```

> **Note**: Meta's official design system uses Optimist (proprietary font). We use **Inter** as a free, open-source alternative that closely matches Optimist's characteristics. See [Font Implementation Note](./META_HORIZON_FONT_NOTE.md) for details.

### Type Scale

#### Headings
- **H1**: 40px, Bold, -0.5px letter-spacing
- **H2**: 32px, Bold, -0.4px letter-spacing
- **H3**: 28px, Bold, -0.3px letter-spacing
- **H4**: 24px, Semibold, -0.2px letter-spacing
- **H5**: 20px, Semibold, normal letter-spacing
- **H6**: 17px, Semibold, normal letter-spacing

#### Body Text
- **Large**: 17px, Regular, 1.625 line-height
- **Medium**: 15px, Regular, 1.5 line-height
- **Small**: 13px, Regular, 1.5 line-height

#### Labels
- **Large**: 15px, Semibold
- **Medium**: 13px, Semibold, 0.025px letter-spacing
- **Small**: 11px, Semibold, 0.025px letter-spacing

#### Specialized
- **Caption**: 12px, Regular
- **Overline**: 11px, Semibold, 0.1px letter-spacing

## Component Specifications

### Buttons

**Border Radius**: 8px (consistent rounded corners)

**Sizes**:
- Small: 32px min-height, 12px H-padding
- Medium: 36px min-height, 16px H-padding
- Large: 44px min-height, 24px H-padding

**Typography**: Semibold weight across all sizes

### Cards

Based on [Meta Horizon Card Guidelines](https://developers.meta.com/horizon/design/cards)

**Border Radius**: 16px (more pronounced than buttons)

**Padding Options**:
- Small: 12px (more generous)
- Medium: 16px
- Large: 24px

**Elevation**: Very subtle shadows (0.04-0.08 opacity) - Meta prefers minimal shadows

**Border**: None (borderWidth: 0) - Cards rely on subtle shadows for definition instead of borders

### Input Fields

**Border Radius**: 8px (matching buttons)

**Height**: 44px minimum (touch-friendly)

**Padding**: 12px horizontal, 8px vertical

**Background**: Secondary surface color (`#F9FAFB` in light mode)

**Border**: 1px solid, changes color based on state

### Tags

**Border Radius**: 6px (slightly rounded, not fully circular)

**Padding**: 4px vertical, 8px horizontal

**Typography**: 11px, Semibold

**No Border**: Uses background color only

### Images

**Border Radius**: 12px (matching cards)

**Aspect Ratios**:
- Square: 1:1
- Portrait: 4:5
- Landscape: 16:9
- Wide: 21:9

## Usage in Code

### Importing the Theme

```typescript
import { createTheme } from '@mangekyo/components';

// Create Meta Horizon theme
const theme = createTheme('metaHorizon', 'light');
```

### Using with Design Language Provider

```jsx
import { DesignLanguageProvider } from '@mangekyo/components';

function App() {
  return (
    <DesignLanguageProvider
      initialDesignLanguage="metaHorizon"
      initialColorScheme="light"
    >
      {/* Your app content */}
    </DesignLanguageProvider>
  );
}
```

### Switching Between Themes

```jsx
const { setDesignLanguage, setColorScheme } = useDesignLanguage();

// Switch to Meta Horizon
setDesignLanguage('metaHorizon');

// Toggle dark mode
setColorScheme('dark');
```

## Example App Integration

The Meta Horizon theme has been added to the example app's theme selector with:

- **Label**: "Meta"
- **Emoji**: 🥽 (goggles, representing VR/AR)

You can easily test the theme by:

1. Running the example app: `cd example && npm start`
2. Selecting "Meta" from the design language pill bar
3. Toggle between light and dark modes using the theme toggle button

## Component Examples

All Mangekyo components automatically adapt to the Meta Horizon design system:

- **ButtonV2** - Uses Meta's color palette and rounded corners
- **CardV2** - Features Meta's signature card styling with subtle shadows
- **InputV2** - Touch-friendly with Meta's input styling
- **TagV2** - Compact, rounded tags matching Meta's aesthetic
- **ArticleCardV2** - Full article cards with Meta's layout principles

## Design Tokens Structure

### Semantic Tokens
Located in: `/src/tokens/semantic/metaHorizon.ts`

Defines purpose-based tokens like:
- Colors (background, surface, text, borders, interactive, feedback)
- Spacing (component and layout spacing)
- Typography (headings, body, labels, etc.)

### Component Tokens
Located in: `/src/tokens/components/metaHorizon.ts`

Defines component-specific styling:
- Button specifications
- Card specifications
- Input field specifications
- Image specifications
- Tag specifications
- List specifications
- Article card specifications

## Accessibility

Meta Horizon design system prioritizes accessibility:

- **High Contrast Ratios**: Text colors meet WCAG AA standards
- **Touch Targets**: Minimum 44px for interactive elements
- **Clear Focus States**: Distinct focus indicators using brand blue
- **Readable Typography**: Optimist font optimized for readability
- **Semantic Colors**: Clear success, warning, and error states

## Platform Support

The Meta Horizon design system works seamlessly across:

- **React Native** (iOS & Android)
- **Web** (via React Native Web)
- **VR/AR** (Meta Quest platform)

## Differences from Other Design Languages

| Feature | Meta Horizon | Material | Flat Design |
|---------|-------------|----------|-------------|
| Border Radius | 8-12px | 4-8px | 8-12px |
| Shadows | Subtle (0.08-0.15) | Prominent (0.2-0.3) | Minimal |
| Typography | Optimist | Roboto | San Francisco |
| Primary Color | #0866FF | #6750A4 | System Blue |
| Design Era | 2023+ | 2014+ | 2013+ |

## Best Practices

1. **Use Semantic Colors**: Always reference semantic tokens rather than hard-coding colors
2. **Respect Spacing**: Use the provided spacing tokens for consistency
3. **Touch Targets**: Maintain minimum 44px height for interactive elements
4. **Typography Hierarchy**: Use the defined type scale for clear hierarchy
5. **Dark Mode**: Test both light and dark modes for optimal experience

## Future Enhancements

Potential additions to consider:

- VR-specific component adaptations
- Haptic feedback patterns
- 3D spatial design tokens
- Animation presets matching Meta's motion design
- Quest-specific optimizations

## Resources

- [Meta Horizon Design Documentation](https://developers.meta.com/horizon/design/)
- [Meta Design System](https://www.facebook.com/design)
- [Inter Font](https://rsms.me/inter/) - Our free alternative to Optimist
- [Font Implementation Guide](./META_HORIZON_FONT_NOTE.md) - Detailed font information

## Support

For issues or questions about the Meta Horizon design implementation:

1. Check the design tokens in `/src/tokens/semantic/metaHorizon.ts`
2. Review component tokens in `/src/tokens/components/metaHorizon.ts`
3. Test in the example app to see live examples
4. Refer to the official Meta Horizon documentation

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Maintainer**: Mangekyo Component Library Team

