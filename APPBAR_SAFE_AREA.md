# AppBar Safe Area Implementation

## Overview

The `AppBarV2` component now includes intelligent safe area handling to prevent the app bar from being hidden by the system status bar on both iOS and Android.

## Features

### 🎯 Smart Auto-Detection
- **iOS**: Automatically applies 44px padding for status bar area
- **Android**: Uses `StatusBar.currentHeight` to detect device-specific status bar height (typically 24-30px)
- **Cross-platform**: Works consistently across all platforms

### 🔧 Flexible Configuration

The `safeArea` prop accepts three types of values:

#### 1. **Auto-detect (Default)**
```tsx
<AppBarV2 
  title="My App" 
  safeArea={true} // Default - auto-detects platform
/>
```

#### 2. **Disabled**
```tsx
<AppBarV2 
  title="My App" 
  safeArea={false} // No safe area padding
/>
```

#### 3. **Manual Control**
```tsx
<AppBarV2 
  title="My App" 
  safeArea={{ top: 50, bottom: 0 }} // Custom values in pixels
/>
```

## Implementation Details

### Platform Detection

The AppBar uses `expo-constants` for reliable status bar height detection across all platforms:

```typescript
import Constants from 'expo-constants';

const getSafeAreaPadding = (): { paddingTop: number; paddingBottom: number } => {
  if (safeArea === false) {
    return { paddingTop: 0, paddingBottom: 0 };
  }

  if (typeof safeArea === 'object') {
    return {
      paddingTop: safeArea.top ?? 0,
      paddingBottom: safeArea.bottom ?? 0,
    };
  }

  // Auto-detect platform-specific safe area using expo-constants
  // This works reliably on both iOS and Android with edge-to-edge mode
  const statusBarHeight = Constants.statusBarHeight ?? 0;
  return { paddingTop: statusBarHeight, paddingBottom: 0 };
};
```

### Height Calculation

The AppBar automatically adjusts its total height to include safe area padding:

```typescript
const getAppBarStyle = (): ViewStyle => {
  const safeAreaPadding = getSafeAreaPadding();
  
  // Total height includes the safe area padding + the app bar content height
  const totalHeight = appBarTokens.height + safeAreaPadding.paddingTop + safeAreaPadding.paddingBottom;
  
  return {
    height: totalHeight,
    paddingTop: safeAreaPadding.paddingTop,
    paddingBottom: safeAreaPadding.paddingBottom,
    // ... other styles
  };
};
```

**Example Calculation:**
- AppBar content height: 56px (from tokens)
- Android status bar: 30px (device-specific)
- **Total AppBar height: 86px** (56 + 30 + 0)

### Usage in Example App

The example app now uses auto-detection:

```tsx
<AppBarV2
  title="Now in React Native"
  leftAction={{
    icon: <IconV2 name="search" size={24} />,
    onPress: () => console.log('Search'),
  }}
  rightAction={{
    icon: <IconV2 name="settings" size={24} />,
    onPress: () => setShowFilters(!showFilters),
  }}
  elevation={true}
  safeArea={true} // Auto-detect and apply safe area
/>
```

## Benefits

✅ **No Manual Calculation**: The component handles all platform-specific logic internally  
✅ **Consistent Behavior**: Works the same way across iOS and Android  
✅ **Flexible Override**: Can be disabled or customized when needed  
✅ **Design Language Aware**: Safe area works with all 10 design languages  

## Migration

### Before
```tsx
<View style={{ paddingTop: Platform.OS === 'ios' ? 44 : 0 }}>
  <AppBarV2 title="My App" />
</View>
```

### After
```tsx
<AppBarV2 
  title="My App" 
  safeArea={true} // Handles both iOS and Android
/>
```

## Device Compatibility

| Platform | Status Bar Height | Handling |
|----------|------------------|----------|
| iOS (Standard) | 20px | Auto-detected via `Constants.statusBarHeight` |
| iOS (with Notch) | 44-47px | Auto-detected via `Constants.statusBarHeight` |
| Android | 24-30px | Auto-detected via `Constants.statusBarHeight` |
| Android (Edge-to-Edge) | Device-specific | Auto-detected via `Constants.statusBarHeight` |

## Requirements

- **expo-constants**: ^16.0.0 or later (peer dependency)
- This package uses `Constants.statusBarHeight` for reliable cross-platform status bar detection

## Notes

- Uses `expo-constants` for reliable status bar height detection on both iOS and Android
- Works automatically with edge-to-edge mode on Android (Android 15+)
- The safe area padding is applied to `paddingTop` of the AppBar container
- **The total height is automatically calculated** as `appBarTokens.height + paddingTop + paddingBottom`
- All design language-specific styling (shadows, borders, colors) works correctly with safe area enabled
- No need for manual platform detection or conditional rendering

## Related Files

- `src/components/AppBar/AppBarV2.tsx` - Main implementation
- `example/App.js` - Usage example
- `src/tokens/components/*.ts` - Design language-specific AppBar tokens

