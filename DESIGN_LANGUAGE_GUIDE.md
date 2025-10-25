# Design Language System Guide

This guide shows you how to use Mangekyo's multi-design-language system to build apps that can switch between different design languages like Material Design, Cupertino (iOS), Metro (Windows), and more.

## Quick Start

### 1. Basic Setup

Wrap your app with `DesignLanguageProvider`:

```tsx
import React from 'react';
import { DesignLanguageProvider } from '@mangekyo/components';
import { App } from './App';

export default function Root() {
  return (
    <DesignLanguageProvider
      initialDesignLanguage="material"
      initialColorScheme="light"
    >
      <App />
    </DesignLanguageProvider>
  );
}
```

### 2. Use V2 Components

The V2 components automatically adapt to the active design language:

```tsx
import React from 'react';
import { View } from 'react-native';
import { ButtonV2, CardV2, InputV2 } from '@mangekyo/components';

export function MyScreen() {
  return (
    <View style={{ padding: 20 }}>
      <CardV2 elevation="medium" padding="large">
        <InputV2
          label="Email"
          placeholder="email@example.com"
        />
        <ButtonV2
          title="Submit"
          variant="primary"
          onPress={() => console.log('Pressed!')}
        />
      </CardV2>
    </View>
  );
}
```

## Available Design Languages

### Material Design
```tsx
<DesignLanguageProvider initialDesignLanguage="material">
```
- **Philosophy**: Paper metaphor with elevation
- **Best for**: Android apps, modern web apps
- **Characteristics**: Bold shadows, subtle corners, vibrant colors

### Cupertino (iOS)
```tsx
<DesignLanguageProvider initialDesignLanguage="cupertino">
```
- **Philosophy**: Depth through translucency
- **Best for**: iOS apps, Apple ecosystem
- **Characteristics**: Soft shadows, rounded corners, translucent surfaces

### Metro / Fluent (Windows)
```tsx
<DesignLanguageProvider initialDesignLanguage="metro">
```
- **Philosophy**: Content-first, typography-driven
- **Best for**: Windows apps, enterprise applications
- **Characteristics**: Minimal shadows, sharp corners, acrylic blur

### Coming Soon
- **Liquid Glass**: Modern glassmorphism
- **Base (Uber)**: Systematic and scalable
- **Primer (GitHub)**: Functional and accessible

## Switching Design Languages

### Programmatically

```tsx
import { useDesignLanguage } from '@mangekyo/components';

function DesignLanguageSwitcher() {
  const { designLanguage, setDesignLanguage } = useDesignLanguage();

  return (
    <View>
      <ButtonV2
        title="Material Design"
        onPress={() => setDesignLanguage('material')}
        variant={designLanguage === 'material' ? 'primary' : 'outline'}
      />
      <ButtonV2
        title="Cupertino"
        onPress={() => setDesignLanguage('cupertino')}
        variant={designLanguage === 'cupertino' ? 'primary' : 'outline'}
      />
      <ButtonV2
        title="Metro"
        onPress={() => setDesignLanguage('metro')}
        variant={designLanguage === 'metro' ? 'primary' : 'outline'}
      />
    </View>
  );
}
```

### Component-Level Override

You can override the design language for specific components:

```tsx
function MixedDesignExample() {
  return (
    <View>
      {/* Uses global design language */}
      <ButtonV2 title="Global Style" />

      {/* Force Material Design */}
      <ButtonV2
        title="Always Material"
        designLanguage="material"
      />

      {/* Force Cupertino */}
      <ButtonV2
        title="Always iOS Style"
        designLanguage="cupertino"
      />
    </View>
  );
}
```

## Dark Mode Support

### Toggle Dark Mode

```tsx
import { useDesignLanguage } from '@mangekyo/components';

function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useDesignLanguage();

  return (
    <ButtonV2
      title={colorScheme === 'light' ? 'Dark Mode' : 'Light Mode'}
      onPress={toggleColorScheme}
    />
  );
}
```

### Set Color Scheme Directly

```tsx
function ColorSchemeSelector() {
  const { setColorScheme } = useDesignLanguage();

  return (
    <View>
      <ButtonV2
        title="Light"
        onPress={() => setColorScheme('light')}
      />
      <ButtonV2
        title="Dark"
        onPress={() => setColorScheme('dark')}
      />
    </View>
  );
}
```

## Using Pre-built Themes

```tsx
import { DesignLanguageProvider, themes } from '@mangekyo/components';

// Material Light
<DesignLanguageProvider initialTheme={themes.materialLight}>
  <App />
</DesignLanguageProvider>

// Cupertino Dark
<DesignLanguageProvider initialTheme={themes.cupertinoDark}>
  <App />
</DesignLanguageProvider>

// Metro Light
<DesignLanguageProvider initialTheme={themes.metroLight}>
  <App />
</DesignLanguageProvider>
```

## Creating Custom Themes

### Extend an Existing Theme

```tsx
import { createTheme, DesignLanguageProvider } from '@mangekyo/components';

const customMaterialTheme = createTheme('material', 'light');

// Customize specific tokens
customMaterialTheme.semantic.colors.interactive.primary = '#FF6B6B';
customMaterialTheme.primitives.colors.primary[500] = '#FF6B6B';

<DesignLanguageProvider initialTheme={customMaterialTheme}>
  <App />
</DesignLanguageProvider>
```

### Access Theme Tokens in Custom Components

```tsx
import { useDesignLanguage } from '@mangekyo/components';
import { View, Text } from 'react-native';

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
          fontWeight: theme.semantic.typography.body.large.fontWeight,
        }}
      >
        Custom Component with Theme Tokens
      </Text>
    </View>
  );
}
```

## Token System

The design system uses a three-tier token architecture:

### 1. Primitive Tokens
Raw values that define the foundation:
```tsx
theme.primitives.colors.primary[500]
theme.primitives.spacing[4]
theme.primitives.borderRadius.lg
```

### 2. Semantic Tokens
Purpose-based tokens:
```tsx
theme.semantic.colors.background.primary
theme.semantic.colors.text.secondary
theme.semantic.spacing.component.paddingMd
```

### 3. Component Tokens
Component-specific design decisions:
```tsx
theme.components.button.borderRadius
theme.components.card.shadow.medium
theme.components.input.minHeight
```

## Best Practices

### 1. Always Use Semantic Tokens

❌ **Bad:**
```tsx
<View style={{ backgroundColor: '#FFFFFF' }} />
```

✅ **Good:**
```tsx
const { theme } = useDesignLanguage();
<View style={{ backgroundColor: theme.semantic.colors.background.primary }} />
```

### 2. Respect Design Language Patterns

Each design language has its own patterns:

```tsx
function AdaptiveButton() {
  const { designLanguage, theme } = useDesignLanguage();

  // Material uses ripple effects
  // Cupertino uses opacity changes
  // Metro uses reveal effects

  return (
    <ButtonV2
      title="Adaptive"
      // Component automatically adapts behavior
    />
  );
}
```

### 3. Test Across Design Languages

Always test your UI with different design languages:

```tsx
// In Storybook or development
function DesignLanguageTestHarness({ children }) {
  const [language, setLanguage] = useState('material');

  return (
    <DesignLanguageProvider initialDesignLanguage={language}>
      <LanguageSwitcher onSwitch={setLanguage} />
      {children}
    </DesignLanguageProvider>
  );
}
```

### 4. Use Component-Level Overrides Sparingly

Only override design language at the component level when absolutely necessary:

```tsx
// Only when you specifically need iOS-style button in a Material app
<ButtonV2
  title="iOS Only"
  designLanguage="cupertino"
/>
```

## Migration from Legacy Components

### From Old Components to V2

**Before:**
```tsx
import { ThemeProvider, Button, Card, Input } from '@mangekyo/components';

<ThemeProvider initialTheme={defaultTheme}>
  <Card>
    <Input label="Name" />
    <Button title="Submit" />
  </Card>
</ThemeProvider>
```

**After:**
```tsx
import {
  DesignLanguageProvider,
  ButtonV2,
  CardV2,
  InputV2,
} from '@mangekyo/components';

<DesignLanguageProvider
  initialDesignLanguage="material"
  initialColorScheme="light"
>
  <CardV2>
    <InputV2 label="Name" />
    <ButtonV2 title="Submit" />
  </CardV2>
</DesignLanguageProvider>
```

### Gradual Migration

You can use both systems simultaneously:

```tsx
import {
  ThemeProvider,
  DesignLanguageProvider,
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

## Advanced Usage

### Platform-Specific Design Languages

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

### Persist User Preference

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

function usePersistedDesignLanguage() {
  const [language, setLanguage] = useState('material');

  useEffect(() => {
    AsyncStorage.getItem('designLanguage').then((saved) => {
      if (saved) setLanguage(saved);
    });
  }, []);

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    AsyncStorage.setItem('designLanguage', newLanguage);
  };

  return [language, updateLanguage];
}
```

## Component Reference

All V2 components support the `designLanguage` prop for overriding the global design language.

### ButtonV2
- Adapts padding, border radius, typography per design language
- Supports all variants: primary, secondary, outline, ghost
- Sizes: small, medium, large

### CardV2
- Adapts elevation/shadow style per design language
- Material: Bold shadows
- Cupertino: Soft shadows
- Metro: Minimal shadows with borders

### InputV2
- Adapts border style, padding, typography
- Material: Filled background
- Cupertino: Translucent background
- Metro: Clear background with border

## Troubleshooting

### Components Not Updating

Make sure you're using V2 components and `DesignLanguageProvider`:

```tsx
// ❌ Won't respond to design language changes
import { Button } from '@mangekyo/components';

// ✅ Will respond to design language changes
import { ButtonV2 } from '@mangekyo/components';
```

### Theme Not Found

Ensure you've wrapped your app with `DesignLanguageProvider`:

```tsx
// Error: useDesignLanguage must be used within a DesignLanguageProvider
```

### TypeScript Errors

Import types from the correct location:

```tsx
import type {
  DesignLanguage,
  ColorScheme,
  DesignLanguageTheme,
} from '@mangekyo/components';
```

## Next Steps

1. Explore the token system in `src/tokens/`
2. Check component implementations in `src/components/`
3. Read the architecture document in `DESIGN_LANGUAGE_ARCHITECTURE.md`
4. Create custom design languages following the patterns
5. Contribute new design languages to the library!
