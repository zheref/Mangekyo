# Mangekyo Component Library

A modern, themeable React Native component library built with TypeScript. Mangekyo provides a set of reusable UI components with support for multiple design languages and easy customization.

## Features

- 🎨 **Multi-theme support** - Built-in Default and Material Design themes
- 📱 **React Native** - Works seamlessly with React Native applications
- 🎯 **TypeScript** - Fully typed for better developer experience
- 📚 **Storybook** - Interactive component documentation and testing
- 🎨 **Customizable** - Easy to extend and customize themes
- ⚡ **Tree-shakeable** - Optimized bundle size with ES modules

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

## Components

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
