# Mangekyo Component Library

A modern, themeable React Native component library built with TypeScript. Mangekyo provides a set of reusable UI components with support for **multiple design languages** including Material Design, Cupertino (iOS), and Metro (Windows).

## ✨ New: Multi-Design Language System

Switch between different design systems seamlessly! Your components can now look native on every platform:

- **Material Design** (Google) - Bold shadows, vibrant colors
- **Cupertino** (Apple iOS) - Soft shadows, rounded corners
- **Metro** (Microsoft Windows) - Minimal shadows, sharp edges

**[📖 Read the Design Language Guide →](./DESIGN_LANGUAGE_GUIDE.md)**

## Features

- 🎨 **Multi-Design Language Support** - Material, Cupertino, Metro, and more
- 🌓 **Dark Mode** - Full dark mode support for every design language
- 📱 **React Native** - Works seamlessly with React Native applications
- 🎯 **TypeScript** - Fully typed with comprehensive token system
- 📚 **Interactive Storybook** - Explore components across all design languages
- 🔧 **Customizable** - Three-tier token system for easy customization
- ⚡ **Tree-shakeable** - Optimized bundle size with ES modules
- 🎨 **Platform-Adaptive** - Automatically use native design language per platform

## Installation

```bash
npm install @mangekyo/components
# or
yarn add @mangekyo/components
```

## Quick Start

Wrap your app with the `ThemeProvider`:

```tsx
import React from 'react';
import { ThemeProvider, defaultTheme } from '@mangekyo/components';
import { App } from './App';

export default function Root() {
  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <App />
    </ThemeProvider>
  );
}
```

Then use the components:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Card, Input } from '@mangekyo/components';

export function App() {
  return (
    <View style={{ padding: 20 }}>
      <Card elevation="md" padding="lg">
        <Input
          label="Username"
          placeholder="Enter username"
        />
        <Button
          title="Submit"
          variant="primary"
          onPress={() => console.log('Pressed!')}
        />
      </Card>
    </View>
  );
}
```

## 🎨 Exploring with Storybook

Storybook provides an interactive playground to explore all components across different design languages:

```bash
npm run storybook
```

Then open `http://localhost:6006` to:

- **Switch design languages** using the toolbar (Material, Cupertino, Metro)
- **Toggle dark mode** to see all components in both light and dark themes
- **Test all component variants** interactively
- **See side-by-side comparisons** of design languages
- **Explore real-world examples** like forms and cards

### Storybook Highlights

- **Getting Started** - Introduction to the design language system
- **Showcase > Interactive Switcher** - Full playground with all components
- **Showcase > Side by Side** - Compare all design languages at once
- **Components V2** - All components with design language support

**[📖 Read the Storybook Guide →](./STORYBOOK_GUIDE.md)**

## Design Language System (V2)

Use the new V2 components for full design language support:

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
      initialDesignLanguage="material"  // or "cupertino" or "metro"
      initialColorScheme="light"        // or "dark"
    >
      <CardV2 elevation="medium" padding="large">
        <InputV2 label="Name" placeholder="Enter name" />
        <ButtonV2 title="Submit" variant="primary" />
      </CardV2>
    </DesignLanguageProvider>
  );
}
```

### Switch Design Languages

```tsx
import { useDesignLanguage } from '@mangekyo/components';

function LanguageSwitcher() {
  const { setDesignLanguage, toggleColorScheme } = useDesignLanguage();

  return (
    <>
      <ButtonV2 title="Material" onPress={() => setDesignLanguage('material')} />
      <ButtonV2 title="iOS" onPress={() => setDesignLanguage('cupertino')} />
      <ButtonV2 title="Windows" onPress={() => setDesignLanguage('metro')} />
      <ButtonV2 title="Toggle Dark Mode" onPress={toggleColorScheme} />
    </>
  );
}
```

### Platform-Adaptive Design

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

## Components (Legacy)

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button
  title="Click me"
  variant="primary" // primary | secondary | outline | ghost
  size="medium" // small | medium | large
  onPress={() => {}}
  disabled={false}
  loading={false}
  fullWidth={false}
/>
```

### Card

A container component with elevation and padding options.

```tsx
<Card
  elevation="md" // none | sm | md | lg
  padding="md" // none | sm | md | lg
>
  {/* Your content */}
</Card>
```

### Input

A text input component with label, error, and helper text support.

```tsx
<Input
  label="Email"
  placeholder="email@example.com"
  error="Invalid email"
  helperText="We'll never share your email"
  disabled={false}
  fullWidth={false}
/>
```

## Theming

### Using Built-in Themes

```tsx
import { ThemeProvider, defaultTheme, materialTheme } from '@mangekyo/components';

<ThemeProvider initialTheme={materialTheme}>
  <App />
</ThemeProvider>
```

### Creating Custom Themes

```tsx
import { Theme } from '@mangekyo/components';

const customTheme: Theme = {
  name: 'Custom',
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    // ... other colors
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  // ... other theme properties
};

<ThemeProvider initialTheme={customTheme}>
  <App />
</ThemeProvider>
```

### Switching Themes Dynamically

```tsx
import { useTheme, materialTheme } from '@mangekyo/components';

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <Button
      title="Switch to Material"
      onPress={() => setTheme(materialTheme)}
    />
  );
}
```

## Development

### Install Dependencies

```bash
npm install
```

### Build the Library

```bash
npm run build
```

### Run Storybook

```bash
npm run storybook
```

Then open your browser to `http://localhost:6006` to view the component documentation.

### Type Check

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

## Project Structure

```
mangekyo/
├── src/
│   ├── components/       # Component implementations
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Input/
│   ├── themes/          # Theme system
│   │   ├── ThemeContext.tsx
│   │   ├── default.ts
│   │   └── material.ts
│   ├── types/           # TypeScript type definitions
│   └── index.ts         # Main entry point
├── .storybook/          # Storybook configuration
├── dist/                # Built files (generated)
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
