# Design Language Architecture

## Overview

Mangekyo supports multiple design languages (Material Design, Cupertino, Metro, etc.) through a three-tier token system and component variant architecture.

## Architecture Principles

### 1. Three-Tier Token System

```
Design Tokens (Primitive)
    ↓
Semantic Tokens (Purpose-based)
    ↓
Component Tokens (Component-specific)
```

**Design Tokens** - Primitive values that define the visual foundation
- Colors (palette)
- Typography scales
- Spacing scales
- Border radius scales
- Shadow definitions

**Semantic Tokens** - Purpose-based tokens that reference design tokens
- `color.background.primary` → references design token
- `color.text.default` → references design token
- Allows themes to override meaning, not just values

**Component Tokens** - Component-specific design decisions
- `button.padding.medium` → combines semantic + design tokens
- `card.shadow.elevated` → design language-specific interpretation

### 2. Component Variant System

Components can render differently based on the design language:

```tsx
// Material Design - elevated cards with sharp shadows
<Card designLanguage="material" />

// Cupertino - subtle shadows, rounded corners
<Card designLanguage="cupertino" />

// Liquid Glass - glassmorphism effect
<Card designLanguage="liquidGlass" />
```

### 3. Design Language Provider

Global control over design language with component-level overrides:

```tsx
<ThemeProvider designLanguage="material" colorScheme="light">
  <Button /> {/* Uses Material Design */}
  <Button designLanguage="cupertino" /> {/* Override to Cupertino */}
</ThemeProvider>
```

## Design Language Characteristics

### Material Design (Google)
- **Philosophy**: Paper metaphor with elevation
- **Shadows**: Bold, directional shadows
- **Corners**: Subtle (4-8px)
- **Typography**: Roboto, scale-based hierarchy
- **Interaction**: Ripple effects, state layers
- **Spacing**: 8dp grid system

### Cupertino (Apple iOS)
- **Philosophy**: Depth through translucency
- **Shadows**: Subtle, soft shadows
- **Corners**: Rounded (12-16px)
- **Typography**: San Francisco, optical sizing
- **Interaction**: Gentle animations, haptics
- **Spacing**: 8pt grid, generous padding

### Metro / Fluent (Microsoft)
- **Philosophy**: Content-first, typography-driven
- **Shadows**: Minimal or acrylic blur
- **Corners**: Sharp (0px) or subtle (2-4px)
- **Typography**: Segoe UI, large headers
- **Interaction**: Reveal effects, responsive animations
- **Spacing**: Grid-based, lots of whitespace

### Liquid Glass (Modern Web)
- **Philosophy**: Glassmorphism, depth through blur
- **Shadows**: Soft, with blur and transparency
- **Corners**: Very rounded (16-24px)
- **Typography**: Modern sans-serif
- **Interaction**: Hover blur, glass refraction
- **Spacing**: Generous, floating elements

### Base (Uber)
- **Philosophy**: Systematic, scalable
- **Shadows**: Functional, layered
- **Corners**: Consistent (8px)
- **Typography**: System fonts, accessibility
- **Interaction**: Clear feedback, states
- **Spacing**: Consistent scale (4, 8, 12, 16...)

### Primer (GitHub)
- **Philosophy**: Functional, accessible
- **Shadows**: Subtle, layered
- **Corners**: Small (6px)
- **Typography**: System fonts, monospace for code
- **Interaction**: Clear states, focus indicators
- **Spacing**: Consistent, dense

## Implementation Strategy

### Phase 1: Token System
1. Define primitive design tokens
2. Create semantic token layer
3. Implement component tokens
4. Build token resolution system

### Phase 2: Component Variants
1. Create variant interfaces
2. Implement style factories per design language
3. Add variant props to components
4. Build variant resolution logic

### Phase 3: Design Language Implementations
1. Implement each design language's token set
2. Create component variants for each language
3. Add platform-specific adaptations
4. Test cross-platform consistency

## Benefits

1. **Flexibility**: Switch design languages globally or per-component
2. **Consistency**: Tokens ensure visual coherence within each design language
3. **Maintainability**: Changes to design tokens cascade automatically
4. **Type Safety**: TypeScript ensures token validity
5. **Performance**: Static styles, no runtime overhead
6. **Tree-shaking**: Only include design languages you use
7. **Extensibility**: Easy to add new design languages

## File Structure

```
src/
├── tokens/
│   ├── primitives/           # Raw values
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── shadows.ts
│   ├── semantic/             # Purpose-based tokens
│   │   └── [designLanguage].ts
│   └── components/           # Component-specific tokens
│       └── [designLanguage]/
│           ├── button.ts
│           ├── card.ts
│           └── input.ts
├── themes/
│   ├── material/
│   ├── cupertino/
│   ├── metro/
│   └── liquidGlass/
└── components/
    ├── Button/
    │   ├── Button.tsx
    │   ├── variants/
    │   │   ├── MaterialButton.tsx
    │   │   ├── CupertinoButton.tsx
    │   │   └── ...
    │   └── index.ts
    └── ...
```

## Usage Examples

### Basic Usage
```tsx
import { ThemeProvider } from '@mangekyo/components';

<ThemeProvider designLanguage="material" colorScheme="light">
  <App />
</ThemeProvider>
```

### Switching Design Languages
```tsx
const { setDesignLanguage } = useTheme();

<Button
  title="Switch to Cupertino"
  onPress={() => setDesignLanguage('cupertino')}
/>
```

### Component-Level Override
```tsx
<View>
  {/* Uses global Material Design */}
  <Button title="Material" />

  {/* Override to Cupertino */}
  <Button title="iOS Style" designLanguage="cupertino" />
</View>
```

### Dark Mode Support
```tsx
<ThemeProvider
  designLanguage="material"
  colorScheme="dark"
>
  <App />
</ThemeProvider>
```

### Custom Tokens
```tsx
import { createTheme } from '@mangekyo/components';

const customTheme = createTheme({
  designLanguage: 'material',
  colorScheme: 'light',
  tokens: {
    colors: {
      primary: '#FF6B6B',
      // ... other overrides
    }
  }
});

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```
