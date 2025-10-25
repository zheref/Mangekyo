# AppBarV2 Component

A flexible, design-system-aware app bar component that automatically adapts to different design languages (Meta Horizon, Material Design, iOS Flat, etc.).

## Features

- **Design System Integration**: Automatically styles itself based on the active design language
- **Centered or Left-Aligned Titles**: Meta Horizon, iOS Flat, and Cupertino center the title; Material and others left-align
- **Flexible Actions**: Supports multiple action buttons on both left and right sides
- **Elevation Control**: Optional shadow/elevation for depth
- **Accessibility**: Full accessibility support with ARIA labels
- **Touch-Friendly**: 40px touch targets for all action buttons

## Installation

The component is part of the `@mangekyo/components` library:

```bash
npm install @mangekyo/components
```

## Basic Usage

```tsx
import { AppBarV2 } from '@mangekyo/components';
import { View } from 'react-native';

function MyScreen() {
  return (
    <AppBarV2
      title="Chats"
      leftAction={{
        icon: <SearchIcon />,
        onPress: () => console.log('Search'),
        accessibilityLabel: 'Search',
      }}
      rightAction={{
        icon: <FilterIcon />,
        onPress: () => console.log('Filter'),
        accessibilityLabel: 'Filter',
      }}
    />
  );
}
```

## Meta Horizon Design Example

Following the Meta Horizon design system with centered title and action buttons on both sides:

```tsx
import { AppBarV2, DesignLanguageProvider } from '@mangekyo/components';
import { View, Image } from 'react-native';

function CommunityScreen() {
  return (
    <DesignLanguageProvider
      initialDesignLanguage="metaHorizon"
      initialColorScheme="light"
    >
      <View style={{ flex: 1 }}>
        <AppBarV2
          title="Communities"
          leftAction={{
            icon: <Image source={require('./search-icon.png')} />,
            onPress: handleSearch,
            accessibilityLabel: 'Search for communities',
          }}
          rightAction={{
            icon: <Image source={require('./filter-icon.png')} />,
            onPress: handleFilter,
            accessibilityLabel: 'Filter communities',
          }}
          elevation={true}
        />
        
        {/* Your content here */}
      </View>
    </DesignLanguageProvider>
  );
}
```

## Props

### `AppBarV2Props`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | The title text displayed in the app bar |
| `leftAction` | `ActionButton` | - | Single left action button |
| `rightAction` | `ActionButton` | - | Single right action button |
| `leftActions` | `ActionButton[]` | `[]` | Array of left action buttons |
| `rightActions` | `ActionButton[]` | `[]` | Array of right action buttons |
| `style` | `ViewStyle` | - | Custom style for the app bar container |
| `titleStyle` | `TextStyle` | - | Custom style for the title text |
| `designLanguage` | `DesignLanguage` | - | Override global design language |
| `elevation` | `boolean` | `true` | Whether to show shadow/elevation |

### `ActionButton` Interface

```tsx
interface ActionButton {
  icon: ReactNode;
  onPress: () => void;
  accessibilityLabel?: string;
}
```

## Multiple Actions

You can have multiple actions on either side:

```tsx
<AppBarV2
  title="Messages"
  leftAction={{
    icon: <SearchIcon />,
    onPress: handleSearch,
  }}
  rightActions={[
    {
      icon: <FilterIcon />,
      onPress: handleFilter,
      accessibilityLabel: 'Filter',
    },
    {
      icon: <ComposeIcon />,
      onPress: handleCompose,
      accessibilityLabel: 'Compose new message',
    },
  ]}
/>
```

## Design Language Behavior

### Meta Horizon
- **Title Position**: Centered
- **Background**: Pure white (#FFFFFF)
- **Shadow**: Very subtle (opacity 0.05)
- **Font**: Inter, 17px, Semibold
- **Icon Size**: 24px

### Material Design
- **Title Position**: Left-aligned
- **Background**: Surface primary
- **Shadow**: Standard elevation (opacity 0.1)
- **Font**: Roboto, 20px, Medium
- **Icon Size**: 24px

### iOS Flat Design
- **Title Position**: Centered
- **Background**: System background
- **Shadow**: Very subtle (opacity 0.05)
- **Font**: System, 17px, Semibold
- **Icon Size**: 24px

## Accessibility

The component follows accessibility best practices:

- All action buttons have a minimum 40px touch target
- Supports `accessibilityLabel` for screen readers
- Buttons have `accessibilityRole="button"`
- Title text is properly structured in the component hierarchy

## Customization

### Custom Styling

```tsx
<AppBarV2
  title="My App"
  style={{
    backgroundColor: '#custom-color',
    paddingHorizontal: 24,
  }}
  titleStyle={{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  }}
/>
```

### Override Design Language

```tsx
// Force Material Design even if global context is different
<AppBarV2
  title="Settings"
  designLanguage="material"
  leftAction={{ icon: <BackIcon />, onPress: goBack }}
/>
```

### Remove Elevation

```tsx
// Flat appearance without shadow
<AppBarV2
  title="Profile"
  elevation={false}
/>
```

## Icon Guidelines

For best results with different design languages:

### Meta Horizon Icons
- Use 24x24px icons
- Prefer outlined style
- Use #65676B for neutral actions
- Use #0866FF for primary actions
- Support both light and dark modes

### Material Icons
- Use Material Icons library (24px)
- Standard icon colors from theme
- Consider filled vs outlined based on emphasis

### iOS Icons
- Use SF Symbols or similar
- 24x24pt size
- Tinted with system colors

## Examples

### Simple App Bar
```tsx
<AppBarV2 title="Home" />
```

### With Search
```tsx
<AppBarV2
  title="Search"
  leftAction={{
    icon: <BackIcon />,
    onPress: goBack,
    accessibilityLabel: 'Go back',
  }}
/>
```

### Full Featured
```tsx
<AppBarV2
  title="Messages"
  leftActions={[
    { icon: <MenuIcon />, onPress: openMenu },
    { icon: <SearchIcon />, onPress: openSearch },
  ]}
  rightActions={[
    { icon: <FilterIcon />, onPress: openFilter },
    { icon: <MoreIcon />, onPress: openMore },
  ]}
  elevation={true}
/>
```

## Design Tokens

The AppBar uses the following design tokens from the active design language:

```typescript
{
  height: 56,                    // Standard app bar height
  paddingHorizontal: 16,         // Horizontal padding
  backgroundColor: string,       // From semantic tokens
  shadow: ShadowDefinition,      // Shadow/elevation
  border: BorderDefinition,      // Optional border
  title: TypographyStyle,        // Title typography
  iconSize: 24,                  // Icon dimensions
}
```

## Platform Support

- ✅ React Native (iOS)
- ✅ React Native (Android)
- ✅ React Native Web
- ✅ Expo

## Performance

The component is optimized for:
- Minimal re-renders
- Efficient style calculations
- Proper memoization of action buttons

## Related Components

- `ButtonV2` - For action buttons within app bar
- `CardV2` - For content cards below app bar
- `InputV2` - For search bars in app bar

## Support

For issues or questions:
1. Check the [Storybook examples](./AppBarV2.stories.tsx)
2. Review the [design tokens](../../tokens/components/metaHorizon.ts)
3. Consult the [Meta Horizon Design Guide](../../../META_HORIZON_DESIGN_GUIDE.md)

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Design System**: Meta Horizon compatible

