# Multi-Design Language System - Implementation Summary

## Overview

Mangekyo now supports multiple design languages (Material Design, Cupertino, Metro, and more) through a sophisticated three-tier token system. This allows you to:

- ✅ Switch design languages globally across your entire app
- ✅ Override design language per component
- ✅ Support light and dark modes for each design language
- ✅ Create custom themes while maintaining design language consistency
- ✅ Build platform-adaptive UIs (Material on Android, Cupertino on iOS, etc.)

## Architecture

### Three-Tier Token System

```
┌─────────────────────────────────────┐
│     Primitive Tokens                │
│  (Raw values: colors, spacing)      │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│     Semantic Tokens                 │
│  (Purpose: background, text, etc.)  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│     Component Tokens                │
│  (Component-specific decisions)     │
└─────────────────────────────────────┘
```

**Benefits:**
- Consistent design within each language
- Easy theme customization
- Type-safe token access
- Performance optimized

## What Was Built

### 1. Type System (`src/types/tokens.ts`)
Complete TypeScript definitions for:
- `DesignLanguage` - Available design languages
- `ColorScheme` - Light/dark modes
- `PrimitiveTokens` - Foundation values
- `SemanticTokens` - Purpose-based tokens
- `ComponentTokens` - Component-specific tokens
- `DesignLanguageTheme` - Complete theme structure

### 2. Primitive Tokens (`src/tokens/primitives/`)
Foundation values used across all design languages:
- Color scales (50-950)
- Spacing scale (0-64)
- Typography scales
- Border radius scales
- Shadow definitions
- Opacity values
- Blur values

### 3. Semantic Tokens (`src/tokens/semantic/`)
Purpose-based tokens for each design language:
- **Material** (`material.ts`) - Light & Dark
- **Cupertino** (`cupertino.ts`) - Light & Dark
- **Metro** (`metro.ts`) - Light & Dark

Each includes:
- Background colors (primary, secondary, tertiary)
- Surface colors (elevated, overlay)
- Text colors (primary, secondary, disabled)
- Border colors (default, focus, error)
- Interactive states (hover, active, disabled)
- Feedback colors (success, warning, error, info)
- Component spacing
- Typography styles

### 4. Component Tokens (`src/tokens/components/`)
Design decisions for each component in each language:
- **Button tokens** - Padding, height, typography per size
- **Card tokens** - Shadows, borders, padding
- **Input tokens** - Border, background, typography

### 5. Theme Factory (`src/themes/themeFactory.ts`)
- `createTheme(designLanguage, colorScheme)` - Factory function
- Pre-built themes:
  - `materialLight`, `materialDark`
  - `cupertinoLight`, `cupertinoDark`
  - `metroLight`, `metroDark`

### 6. Design Language Context (`src/themes/DesignLanguageContext.tsx`)
React Context providing:
- `theme` - Current complete theme
- `designLanguage` - Active design language
- `colorScheme` - Active color scheme
- `setDesignLanguage()` - Change design language
- `setColorScheme()` - Change color scheme
- `toggleColorScheme()` - Toggle light/dark
- `setTheme()` - Set custom theme

### 7. V2 Components
Enhanced components with design language support:
- **ButtonV2** (`src/components/Button/ButtonV2.tsx`)
- **CardV2** (`src/components/Card/CardV2.tsx`)
- **InputV2** (`src/components/Input/InputV2.tsx`)

All V2 components:
- Read from design language context
- Support `designLanguage` prop for overrides
- Automatically adapt styling
- Maintain backward compatibility

### 8. Documentation
- **DESIGN_LANGUAGE_ARCHITECTURE.md** - Architecture deep-dive
- **DESIGN_LANGUAGE_GUIDE.md** - Complete usage guide
- **This file** - Implementation summary

## How to Use

### Basic Usage

```tsx
import {
  DesignLanguageProvider,
  ButtonV2,
  CardV2,
  InputV2,
} from '@mangekyo/components';

function App() {
  return (
    <DesignLanguageProvider
      initialDesignLanguage="material"
      initialColorScheme="light"
    >
      <CardV2>
        <InputV2 label="Name" placeholder="Enter name" />
        <ButtonV2 title="Submit" onPress={() => {}} />
      </CardV2>
    </DesignLanguageProvider>
  );
}
```

### Switch Design Languages

```tsx
import { useDesignLanguage } from '@mangekyo/components';

function DesignLanguageSwitcher() {
  const { setDesignLanguage } = useDesignLanguage();

  return (
    <>
      <ButtonV2
        title="Material"
        onPress={() => setDesignLanguage('material')}
      />
      <ButtonV2
        title="iOS"
        onPress={() => setDesignLanguage('cupertino')}
      />
      <ButtonV2
        title="Windows"
        onPress={() => setDesignLanguage('metro')}
      />
    </>
  );
}
```

### Platform-Adaptive

```tsx
import { Platform } from 'react-native';

const designLanguage = Platform.select({
  ios: 'cupertino',
  android: 'material',
  windows: 'metro',
  default: 'material',
});

<DesignLanguageProvider initialDesignLanguage={designLanguage}>
  <App />
</DesignLanguageProvider>
```

### Access Tokens in Custom Components

```tsx
import { useDesignLanguage } from '@mangekyo/components';

function CustomComponent() {
  const { theme } = useDesignLanguage();

  return (
    <View
      style={{
        backgroundColor: theme.semantic.colors.surface.primary,
        padding: theme.semantic.spacing.component.paddingMd,
        borderRadius: theme.components.card.borderRadius,
        ...theme.components.card.shadow.medium,
      }}
    >
      <Text
        style={{
          color: theme.semantic.colors.text.primary,
          fontSize: theme.semantic.typography.body.large.fontSize,
        }}
      >
        Custom Component
      </Text>
    </View>
  );
}
```

## Design Language Characteristics

### Material Design
```tsx
designLanguage="material"
```
- **Shadows**: Bold, directional (elevation-based)
- **Corners**: Subtle (4-8px)
- **Colors**: Vibrant, saturated
- **Typography**: Roboto-inspired, scale-based
- **Spacing**: 8dp grid system
- **Best for**: Android apps, modern web

### Cupertino (iOS)
```tsx
designLanguage="cupertino"
```
- **Shadows**: Soft, subtle
- **Corners**: Rounded (12-16px)
- **Colors**: System colors, translucent surfaces
- **Typography**: San Francisco-inspired
- **Spacing**: 8pt grid, generous padding
- **Best for**: iOS apps, Apple ecosystem

### Metro / Fluent (Windows)
```tsx
designLanguage="metro"
```
- **Shadows**: Minimal, acrylic blur
- **Corners**: Sharp or very subtle (0-4px)
- **Colors**: Accent-driven, high contrast
- **Typography**: Segoe UI-inspired, large headers
- **Spacing**: Grid-based, whitespace-heavy
- **Best for**: Windows apps, enterprise

## File Structure

```
src/
├── types/
│   ├── tokens.ts              # Complete type system
│   └── theme.ts               # Legacy theme types
├── tokens/
│   ├── primitives/
│   │   └── index.ts           # Foundation values
│   ├── semantic/
│   │   ├── material.ts        # Material light/dark
│   │   ├── cupertino.ts       # Cupertino light/dark
│   │   └── metro.ts           # Metro light/dark
│   └── components/
│       ├── material.ts        # Material component tokens
│       ├── cupertino.ts       # Cupertino component tokens
│       └── metro.ts           # Metro component tokens
├── themes/
│   ├── ThemeContext.tsx       # Legacy theme context
│   ├── DesignLanguageContext.tsx  # New DL context
│   ├── themeFactory.ts        # Theme creation
│   ├── default.ts             # Legacy default theme
│   └── material.ts            # Legacy material theme
├── components/
│   ├── Button/
│   │   ├── Button.tsx         # Legacy component
│   │   ├── ButtonV2.tsx       # Design language component
│   │   ├── Button.stories.tsx # Legacy stories
│   │   ├── ButtonV2.stories.tsx # New stories
│   │   └── index.ts           # Exports both
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── CardV2.tsx
│   │   └── index.ts
│   └── Input/
│       ├── Input.tsx
│       ├── InputV2.tsx
│       └── index.ts
└── index.ts                   # Main exports
```

## Backward Compatibility

### Legacy Components Still Work

```tsx
import { ThemeProvider, Button, Card } from '@mangekyo/components';

// Old way still works
<ThemeProvider initialTheme={defaultTheme}>
  <Card>
    <Button title="Submit" />
  </Card>
</ThemeProvider>
```

### Can Mix Both Systems

```tsx
import {
  DesignLanguageProvider,
  ThemeProvider,
  Button,
  ButtonV2,
} from '@mangekyo/components';

<DesignLanguageProvider initialDesignLanguage="material">
  <ThemeProvider initialTheme={defaultTheme}>
    <Button title="Legacy" />
    <ButtonV2 title="New" />
  </ThemeProvider>
</DesignLanguageProvider>
```

## Extending the System

### Add New Design Language

1. Create semantic tokens in `src/tokens/semantic/yourLanguage.ts`
2. Create component tokens in `src/tokens/components/yourLanguage.ts`
3. Update `themeFactory.ts` to include your language
4. Add to `DesignLanguage` type in `src/types/tokens.ts`

### Add New Component

1. Create component with `useDesignLanguage` hook
2. Create component tokens for each design language
3. Update `ComponentTokens` type
4. Create stories showing design language variations

## Performance Considerations

- ✅ **Memoized theme creation** - Themes only recreated when language/scheme changes
- ✅ **Static styles** - No runtime style calculations
- ✅ **Tree-shakeable** - Only bundle design languages you use
- ✅ **Type-safe** - Catch errors at compile time

## Testing

### In Storybook

Run Storybook and use the design language toolbar:
```bash
npm run storybook
```

The toolbar allows switching between:
- Material Design (light/dark)
- Cupertino (light/dark)
- Metro (light/dark)

### In Your App

Test all design languages during development:
```tsx
const [language, setLanguage] = useState('material');

<DesignLanguageProvider initialDesignLanguage={language}>
  <LanguagePicker onChange={setLanguage} />
  <YourApp />
</DesignLanguageProvider>
```

## Next Steps

1. **Try it out**: Use V2 components with different design languages
2. **Create custom themes**: Extend existing themes with your brand colors
3. **Add more components**: Follow the pattern for new components
4. **Add new design languages**: Implement Liquid Glass, Base, Primer
5. **Contribute back**: Share your design languages with the community

## Resources

- **Architecture**: `DESIGN_LANGUAGE_ARCHITECTURE.md`
- **Usage Guide**: `DESIGN_LANGUAGE_GUIDE.md`
- **Component Examples**: Check `.stories.tsx` files
- **Type Definitions**: `src/types/tokens.ts`

## Questions?

- Check the usage guide: `DESIGN_LANGUAGE_GUIDE.md`
- Review the architecture: `DESIGN_LANGUAGE_ARCHITECTURE.md`
- Explore the code: Start with `src/themes/themeFactory.ts`
- Look at examples: Check the `.stories.tsx` files

---

**Built with ❤️ for the React Native community**
