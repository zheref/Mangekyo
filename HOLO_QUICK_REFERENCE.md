# Holo Design Quick Reference

## TL;DR

Authentic Android KitKat (4.0-4.4) Holo design with both light and dark themes.

## Key Colors

```typescript
// Primary
holoBlue:       '#33B5E5'  // The iconic Holo color
holoBlueDark:   '#0099CC'  // Pressed state
holoPurple:     '#AA66CC'  // Alternative accent

// Feedback
holoGreen:      '#99CC00'  // Success
holoRed:        '#FF4444'  // Error
holoOrange:     '#FFBB33'  // Warning
```

## Typography

```typescript
// Font Family
fontFamily: 'Roboto'  // Exclusive, no fallbacks

// Sizes
h1: 34sp    // Large headings
h2: 28sp
h3: 22sp    // Medium headings
body: 14sp  // Standard text
small: 12sp
```

## Design Rules

### ✅ Do
- Use sharp edges (borderRadius: 0)
- Use Holo Blue (#33B5E5) for primary actions
- Use drop shadows (black) for elevation
- Maintain 48dp minimum touch targets
- Use Roboto font exclusively
- Implement both light and dark themes

### ❌ Don't
- Don't round corners
- Don't use gradients on UI elements
- Don't use soft shadows
- Don't mix fonts with Roboto
- Don't ignore the 8dp grid
- Don't make touch targets < 48dp

## Usage

### Import
```typescript
import { themes, DesignLanguageProvider } from '@mangekyo/components';
```

### Holo Dark (Classic)
```typescript
<DesignLanguageProvider initialTheme={themes.holoDark}>
  <App />
</DesignLanguageProvider>
```

### Holo Light (Bright)
```typescript
<DesignLanguageProvider initialTheme={themes.holoLight}>
  <App />
</DesignLanguageProvider>
```

### Dynamic Switching
```typescript
const { setDesignLanguage, setColorScheme } = useDesignLanguage();

// Holo Dark
setDesignLanguage('holo');
setColorScheme('dark');

// Holo Light
setDesignLanguage('holo');
setColorScheme('light');
```

### Access Theme
```typescript
const { theme } = useDesignLanguage();

<View style={{
  backgroundColor: theme.colors.background.primary,
  borderColor: theme.colors.interactive.primary,
}}>
  <Text style={{
    fontFamily: 'Roboto',
    fontSize: 14,
    color: theme.colors.text.primary,
  }}>
    Holo Style
  </Text>
</View>
```

## Component Specs

### Button
```typescript
{
  borderRadius: 0,           // Sharp edges
  minHeight: 48,            // Touch target
  fontFamily: 'Roboto',
  fontWeight: 'bold',       // Bold text
  letterSpacing: 'wide',    // Wider spacing
}
```

### Card
```typescript
{
  borderRadius: 0,          // Sharp edges
  borderWidth: 0,           // No borders
  shadow: {
    shadowColor: '#000',    // Black shadows
    elevation: 4,           // Android elevation
  }
}
```

### Input
```typescript
{
  borderRadius: 0,          // Sharp edges
  borderWidth: 2,           // Thicker borders
  minHeight: 48,            // Touch target
  focusBorderColor: '#33B5E5',  // Holo Blue
}
```

## Icon Guidelines

### Sizes
- Action Bar: 32×32dp (48dp with padding)
- Small/Context: 24×24dp
- Notification: 24×24dp
- Launcher: 48×48dp

### Style
- Simple, geometric shapes
- Flat (no gradients/shadows)
- White on dark backgrounds
- Black on light backgrounds

### Touch Targets
All interactive icons: 48×48dp minimum

## Spacing (8dp Grid)

```typescript
xs:  8dp   // spacing[1]
sm:  16dp  // spacing[2]
md:  24dp  // spacing[3]
lg:  32dp  // spacing[4]
xl:  48dp  // spacing[6]
2xl: 64dp  // spacing[8]
```

## Elevation & Shadows

```typescript
// Shadow template
{
  shadowColor: '#000',
  shadowOffset: { width: 0, height: elevation/2 },
  shadowOpacity: 0.25 + (elevation/100),
  shadowRadius: elevation/2,
  elevation: elevation,
}

// Levels
none:   0dp
small:  2dp
medium: 4dp
large:  8dp
xlarge: 16dp
```

## Themes Compared

| Aspect | Holo Dark | Holo Light |
|--------|-----------|------------|
| Background | #000000 (black) | #F0F0F0 (light gray) |
| Surface | #111111 | #FFFFFF (white) |
| Text | #FFFFFF (white) | #000000 (black) |
| Accent | #33B5E5 (Holo Blue) | #33B5E5 (same) |
| Shadow | Black with glow | Black standard |
| Usage | Power saving, OLED | Bright environments |
| Era | Most common (2011-2014) | Alternative option |

## Animation

```typescript
// Timing
fast:     200ms
standard: 300ms
slow:     400ms

// Easing
enter:    decelerate (ease-out)
exit:     accelerate (ease-in)
```

## Full Documentation

- **HOLO_DESIGN_GUIDE.md** - Complete specifications
- **HOLO_IMPLEMENTATION_SUMMARY.md** - Implementation details
- **HOLO_QUICK_REFERENCE.md** - This file

## Example in Action

```typescript
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { DesignLanguageProvider, useDesignLanguage } from '@mangekyo/components';
import { themes } from '@mangekyo/components';

function HoloButton({ title, onPress }) {
  const { theme } = useDesignLanguage();
  
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.interactive.primary,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 4,
        }
      ]}
    >
      <Text style={[
        styles.buttonText,
        { color: theme.colors.text.inverse }
      ]}>
        {title.toUpperCase()}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 0,  // Sharp edges
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});

export default function App() {
  return (
    <DesignLanguageProvider initialTheme={themes.holoDark}>
      <View style={{ flex: 1, padding: 24, backgroundColor: '#000' }}>
        <HoloButton title="Holo Button" onPress={() => {}} />
      </View>
    </DesignLanguageProvider>
  );
}
```

## Resources

- [Android KitKat Docs](https://developer.android.com/about/versions/kitkat) (archived)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)
- [Android SDK Icons](https://developer.android.com/studio/intro/updating) (android-19)

---

**Status**: Production Ready ✅  
**Themes**: Holo Dark ✅ | Holo Light ✅  
**Updated**: October 25, 2025

