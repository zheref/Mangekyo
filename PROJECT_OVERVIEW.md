# Mangekyo Project Overview

## 🎯 What is Mangekyo?

Mangekyo is a **React Native component library** that allows you to build apps that look native on every platform by switching between different **design languages**:

- **Material Design** (Google/Android)
- **Cupertino** (Apple/iOS)
- **Metro/Fluent** (Microsoft/Windows)

## 🏗️ Architecture at a Glance

```
┌─────────────────────────────────────────────────────────┐
│                  Your Application                       │
│  ┌───────────────────────────────────────────────────┐ │
│  │      DesignLanguageProvider                       │ │
│  │  ┌─────────────────────────────────────────────┐  │ │
│  │  │  ButtonV2, CardV2, InputV2, etc.            │  │ │
│  │  │                                              │  │ │
│  │  │  Automatically styled based on:             │  │ │
│  │  │  • Design Language (Material/Cupertino/...)│  │ │
│  │  │  • Color Scheme (Light/Dark)                │  │ │
│  │  └─────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
           ┌──────────────────────────────┐
           │     Three-Tier Token System  │
           ├──────────────────────────────┤
           │  Primitive Tokens            │
           │  (colors, spacing, etc.)     │
           │          ▼                   │
           │  Semantic Tokens             │
           │  (background, text, etc.)    │
           │          ▼                   │
           │  Component Tokens            │
           │  (button, card, etc.)        │
           └──────────────────────────────┘
```

## 📁 Project Structure

```
mangekyo/
│
├── 📄 Documentation
│   ├── README.md                              # Main readme
│   ├── GETTING_STARTED.md                     # Quick start guide
│   ├── DESIGN_LANGUAGE_ARCHITECTURE.md        # Architecture deep-dive
│   ├── DESIGN_LANGUAGE_GUIDE.md               # Usage guide
│   ├── MULTI_DESIGN_LANGUAGE_SUMMARY.md       # Implementation summary
│   ├── STORYBOOK_GUIDE.md                     # Storybook usage
│   ├── STORYBOOK_INTEGRATION_SUMMARY.md       # Storybook changes
│   └── PROJECT_OVERVIEW.md                    # This file
│
├── 🎨 Storybook Configuration
│   ├── .storybook/
│   │   ├── main.ts                            # Storybook config
│   │   └── preview.tsx                        # Design language toolbar
│
├── 📦 Source Code
│   └── src/
│       │
│       ├── 🎨 Design Language System
│       │   ├── types/
│       │   │   ├── tokens.ts                  # Type system
│       │   │   └── theme.ts                   # Legacy types
│       │   │
│       │   ├── tokens/
│       │   │   ├── primitives/
│       │   │   │   └── index.ts               # Colors, spacing, etc.
│       │   │   ├── semantic/
│       │   │   │   ├── material.ts            # Material Design tokens
│       │   │   │   ├── cupertino.ts           # iOS tokens
│       │   │   │   └── metro.ts               # Windows tokens
│       │   │   └── components/
│       │   │       ├── material.ts            # Material component tokens
│       │   │       ├── cupertino.ts           # iOS component tokens
│       │   │       └── metro.ts               # Windows component tokens
│       │   │
│       │   └── themes/
│       │       ├── ThemeContext.tsx           # Legacy context
│       │       ├── DesignLanguageContext.tsx  # New context
│       │       ├── themeFactory.ts            # Theme creation
│       │       ├── default.ts                 # Legacy theme
│       │       └── material.ts                # Legacy theme
│       │
│       ├── 🧩 Components
│       │   ├── Button/
│       │   │   ├── Button.tsx                 # Legacy
│       │   │   ├── Button.stories.tsx         # Legacy stories
│       │   │   ├── ButtonV2.tsx               # ✨ Design language aware
│       │   │   ├── ButtonV2.stories.tsx       # ✨ New stories
│       │   │   └── index.ts
│       │   ├── Card/
│       │   │   ├── Card.tsx                   # Legacy
│       │   │   ├── Card.stories.tsx           # Legacy stories
│       │   │   ├── CardV2.tsx                 # ✨ Design language aware
│       │   │   ├── CardV2.stories.tsx         # ✨ New stories
│       │   │   └── index.ts
│       │   ├── Input/
│       │   │   ├── Input.tsx                  # Legacy
│       │   │   ├── Input.stories.tsx          # Legacy stories
│       │   │   ├── InputV2.tsx                # ✨ Design language aware
│       │   │   ├── InputV2.stories.tsx        # ✨ New stories
│       │   │   └── index.ts
│       │   └── index.ts
│       │
│       ├── 📚 Storybook Stories
│       │   ├── DesignLanguageShowcase.stories.tsx
│       │   └── GettingStarted.stories.mdx
│       │
│       └── index.ts                           # Main exports
│
└── ⚙️ Configuration
    ├── package.json
    ├── tsconfig.json
    ├── rollup.config.js
    ├── babel.config.js
    ├── eslint.config.mjs
    └── .gitignore
```

## 🎨 Design Languages

### Material Design (Google)
```
Characteristics:
├── Shadows: Bold, directional
├── Corners: Subtle (4-8px)
├── Colors: Vibrant
├── Typography: Roboto-inspired
└── Best for: Android, Modern web

Usage:
<DesignLanguageProvider initialDesignLanguage="material">
```

### Cupertino (Apple iOS)
```
Characteristics:
├── Shadows: Soft, subtle
├── Corners: Rounded (12-16px)
├── Colors: Translucent surfaces
├── Typography: San Francisco-inspired
└── Best for: iOS, Apple ecosystem

Usage:
<DesignLanguageProvider initialDesignLanguage="cupertino">
```

### Metro (Microsoft Windows)
```
Characteristics:
├── Shadows: Minimal, acrylic
├── Corners: Sharp (0-4px)
├── Colors: High contrast
├── Typography: Segoe UI-inspired
└── Best for: Windows, Enterprise

Usage:
<DesignLanguageProvider initialDesignLanguage="metro">
```

## 🎯 Components

### V2 Components (Design Language Aware)
```tsx
import { ButtonV2, CardV2, InputV2 } from '@mangekyo/components';

// Automatically adapt to design language
<ButtonV2 title="Submit" />
<CardV2><InputV2 label="Name" /></CardV2>

// Override design language
<ButtonV2 title="iOS Button" designLanguage="cupertino" />
```

### Legacy Components (Backward Compatible)
```tsx
import { Button, Card, Input } from '@mangekyo/components';

// Still work with original theme system
<Button title="Submit" />
<Card><Input label="Name" /></Card>
```

## 🚀 Quick Start Workflows

### 1. Basic Usage
```tsx
import { DesignLanguageProvider, ButtonV2 } from '@mangekyo/components';

function App() {
  return (
    <DesignLanguageProvider initialDesignLanguage="material">
      <ButtonV2 title="Click me" onPress={() => {}} />
    </DesignLanguageProvider>
  );
}
```

### 2. Platform Adaptive
```tsx
import { Platform } from 'react-native';

const language = Platform.select({
  ios: 'cupertino',
  android: 'material',
  windows: 'metro',
});

<DesignLanguageProvider initialDesignLanguage={language}>
  <App />
</DesignLanguageProvider>
```

### 3. Dynamic Switching
```tsx
import { useDesignLanguage } from '@mangekyo/components';

function Switcher() {
  const { setDesignLanguage } = useDesignLanguage();

  return (
    <ButtonV2
      title="Switch to iOS"
      onPress={() => setDesignLanguage('cupertino')}
    />
  );
}
```

### 4. Dark Mode
```tsx
const { toggleColorScheme, colorScheme } = useDesignLanguage();

<ButtonV2
  title={`Switch to ${colorScheme === 'light' ? 'Dark' : 'Light'}`}
  onPress={toggleColorScheme}
/>
```

## 📚 Storybook

### Running Storybook
```bash
npm run storybook
# Opens at http://localhost:6006
```

### Storybook Features
```
Toolbar Controls:
├── Design Language Selector
│   ├── Material Design
│   ├── Cupertino (iOS)
│   └── Metro (Windows)
└── Color Scheme Toggle
    ├── Light
    └── Dark

Story Categories:
├── Design Language System
│   ├── Getting Started
│   └── Showcase
│       ├── Side by Side Comparison
│       ├── Interactive Switcher
│       └── Mixed Design Languages
└── Components V2
    ├── Button (9 stories)
    ├── Card (7 stories)
    └── Input (13 stories)
```

## 🔧 Development Workflows

### Adding a New Component

1. **Create Component File**
   ```tsx
   // src/components/YourComponent/YourComponentV2.tsx
   import { useDesignLanguage } from '../../themes/DesignLanguageContext';

   export const YourComponentV2 = () => {
     const { theme } = useDesignLanguage();
     // Use theme.semantic, theme.components
   };
   ```

2. **Create Component Tokens** (for each design language)
   ```ts
   // src/tokens/components/material.ts
   yourComponent: {
     borderRadius: borderRadius.sm,
     padding: spacing[4],
     // ...
   }
   ```

3. **Create Stories**
   ```tsx
   // src/components/YourComponent/YourComponentV2.stories.tsx
   export const DesignLanguageComparison: Story = {
     render: () => (
       <View style={{ gap: 20 }}>
         <YourComponentV2 designLanguage="material" />
         <YourComponentV2 designLanguage="cupertino" />
         <YourComponentV2 designLanguage="metro" />
       </View>
     ),
   };
   ```

### Adding a New Design Language

1. **Create Semantic Tokens**
   ```ts
   // src/tokens/semantic/yourLanguage.ts
   export const yourLanguageSemanticLight: SemanticTokens = { ... };
   export const yourLanguageSemanticDark: SemanticTokens = { ... };
   ```

2. **Create Component Tokens**
   ```ts
   // src/tokens/components/yourLanguage.ts
   export const yourLanguageComponentTokens: ComponentTokens = { ... };
   ```

3. **Update Theme Factory**
   ```ts
   // src/themes/themeFactory.ts
   // Add to getSemanticTokens and getComponentTokens
   ```

4. **Update Type**
   ```ts
   // src/types/tokens.ts
   export type DesignLanguage = 'material' | 'cupertino' | 'metro' | 'yourLanguage';
   ```

## 📖 Documentation Guide

### For End Users
1. **Start Here**: `README.md`
2. **Quick Start**: `GETTING_STARTED.md`
3. **Usage Guide**: `DESIGN_LANGUAGE_GUIDE.md`
4. **Storybook**: `STORYBOOK_GUIDE.md`

### For Developers
1. **Architecture**: `DESIGN_LANGUAGE_ARCHITECTURE.md`
2. **Implementation**: `MULTI_DESIGN_LANGUAGE_SUMMARY.md`
3. **Storybook Changes**: `STORYBOOK_INTEGRATION_SUMMARY.md`
4. **This Overview**: `PROJECT_OVERVIEW.md`

## 🎯 Key Concepts

### Token System
```
Primitive → Semantic → Component
  (raw)      (purpose)   (specific)

Example:
colors.blue[500] → colors.interactive.primary → button.primary.background
```

### Context Provider
```
DesignLanguageProvider
  ├── Manages current design language
  ├── Manages current color scheme
  ├── Creates theme from tokens
  └── Provides to all components
```

### Component Pattern
```tsx
// Component reads from context
const { theme } = useDesignLanguage();

// Uses semantic tokens
backgroundColor: theme.semantic.colors.surface.primary

// Uses component tokens
borderRadius: theme.components.button.borderRadius
```

## ✨ Highlights

### ✅ Flexibility
- Switch design languages globally or per-component
- Support for light and dark modes
- Platform-adaptive design

### ✅ Type Safety
- Full TypeScript support
- Comprehensive type definitions
- Autocomplete for all tokens

### ✅ Performance
- Memoized theme creation
- Static styles
- Tree-shakeable

### ✅ Developer Experience
- Interactive Storybook
- Comprehensive documentation
- Real-world examples

### ✅ Backward Compatible
- Legacy components still work
- Can mix V1 and V2 components
- Gradual migration path

## 🚦 Getting Started Checklist

- [ ] Read `README.md`
- [ ] Install dependencies: `npm install`
- [ ] Run Storybook: `npm run storybook`
- [ ] Explore "Getting Started" story
- [ ] Try "Interactive Switcher" story
- [ ] Read `DESIGN_LANGUAGE_GUIDE.md`
- [ ] Build your first component
- [ ] Test in all design languages
- [ ] Create stories for your component

## 📊 Stats

- **Design Languages**: 3 (Material, Cupertino, Metro)
- **Components**: 3 V2 components (Button, Card, Input)
- **Stories**: 29 interactive stories
- **Documentation**: 8 comprehensive guides
- **Token Types**: 3 tiers (Primitive, Semantic, Component)
- **Supported Platforms**: iOS, Android, Windows, Web

## 🎉 What Makes Mangekyo Special?

1. **First-class design language support** - Not just theming, true design language adaptation
2. **Three-tier token system** - Industry best practice
3. **Interactive Storybook** - Real-time design language switching
4. **Platform-adaptive** - Look native on every platform
5. **Type-safe** - Full TypeScript support throughout
6. **Well-documented** - Comprehensive guides and examples
7. **Backward compatible** - Legacy components still work
8. **Extensible** - Easy to add new design languages

---

**Ready to build beautiful, platform-native UIs?** 🚀

Start with: `npm run storybook`
