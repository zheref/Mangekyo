# IconV2 Component

A design-language-aware icon component that automatically renders appropriate glyphs based on the active design language, with emoji fallbacks when glyphs aren't available.

## Features

- **Design Language Specific**: Different glyphs for each design language
- **Semantic Names**: Use meaningful names like 'search', 'filter', 'settings'
- **Auto-Adaptation**: Changes icon style when design language changes
- **Emoji Fallback**: Uses emoji when design-specific glyph isn't available
- **Theme Integration**: Automatically uses theme colors
- **20 Common Icons**: Covers most app bar and UI needs

## Installation

The component is part of `@mangekyo/components`:

```bash
npm install @mangekyo/components
```

## Basic Usage

```tsx
import { IconV2 } from '@mangekyo/components';

<IconV2 
  name="search" 
  size={24} 
  color="#000000"
/>
```

## With AppBar

```tsx
import { AppBarV2, IconV2 } from '@mangekyo/components';

<AppBarV2
  title="My App"
  leftAction={{
    icon: <IconV2 name="search" size={24} />,
    onPress: handleSearch,
  }}
  rightAction={{
    icon: <IconV2 name="settings" size={24} />,
    onPress: handleSettings,
  }}
/>
```

## Available Icons

### Navigation
- `search` - Search magnifying glass
- `back` - Back arrow
- `menu` - Hamburger menu
- `home` - Home icon
- `chevron-left` - Left chevron
- `chevron-right` - Right chevron

### Actions
- `add` - Plus/add icon
- `edit` - Edit pencil
- `delete` - Trash/delete icon
- `close` - Close X icon
- `check` - Checkmark
- `share` - Share arrow

### Settings & More
- `settings` - Settings gear
- `filter` - Filter icon
- `more` - More dots (horizontal or vertical)

### Social & Status
- `user` - User profile icon
- `star` - Star icon
- `heart` - Heart icon
- `notification` - Bell notification

## Design Language Specific Glyphs

### Meta Horizon 🥽
- Clean, outline-style icons
- Minimal and modern
- Example: `search` → ⌕ (outline search)

### Material Design 🎨
- Bold, filled icons
- Google's Material style
- Example: `star` → ★ (filled star)

### iOS Flat 🍎
- Thin, elegant icons
- San Francisco style
- Example: `back` → ‹ (thin chevron)

### Holo 🤖
- Bold Android icons
- Strong presence
- Example: `more` → ⋮ (vertical dots)

### Metro 📱
- Geometric, bold icons
- Windows Phone style
- Example: `menu` → ≡ (bold lines)

### Others
- **Liquid Glass** 💎 - Modern, minimal
- **Fluent** 🪟 - Windows 11 style
- **Cupertino** - macOS style
- **Aqua** - Classic macOS
- **Aero Glass** - Windows Vista/7

## Props

### `IconV2Props`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | Required | Semantic name of the icon |
| `size` | `number` | `24` | Size in pixels |
| `color` | `string` | Theme color | Icon color |
| `designLanguage` | `DesignLanguage` | Global | Override design language |
| `style` | `TextStyle` | - | Custom text style |

### `IconName` Type

```typescript
type IconName = 
  | 'search' | 'filter' | 'settings' | 'close'
  | 'back' | 'menu' | 'share' | 'more'
  | 'add' | 'edit' | 'delete' | 'check'
  | 'chevron-left' | 'chevron-right'
  | 'home' | 'user' | 'star' | 'heart'
  | 'notification';
```

## Examples

### Basic Icon

```tsx
<IconV2 name="search" />
```

### Custom Size and Color

```tsx
<IconV2 
  name="heart" 
  size={32} 
  color="#FF0000"
/>
```

### With Theme Color

```tsx
const { theme } = useDesignLanguage();

<IconV2 
  name="settings" 
  size={24}
  color={theme.semantic.colors.text.secondary}
/>
```

### Force Specific Design Language

```tsx
<IconV2 
  name="star" 
  size={24}
  designLanguage="material"  // Always use Material style
/>
```

### In a Button

```tsx
<TouchableOpacity onPress={handleLike}>
  <IconV2 
    name="heart" 
    size={24}
    color={isLiked ? '#FF0000' : '#CCCCCC'}
  />
</TouchableOpacity>
```

### Multiple Icons in AppBar

```tsx
<AppBarV2
  title="My App"
  leftActions={[
    { 
      icon: <IconV2 name="menu" size={24} />, 
      onPress: openMenu 
    },
    { 
      icon: <IconV2 name="search" size={24} />, 
      onPress: openSearch 
    },
  ]}
  rightActions={[
    { 
      icon: <IconV2 name="filter" size={24} />, 
      onPress: openFilter 
    },
    { 
      icon: <IconV2 name="more" size={24} />, 
      onPress: openMore 
    },
  ]}
/>
```

## Glyph vs Emoji

The component intelligently chooses between:

1. **Design Language Specific Glyph** (preferred)
   - Unicode characters that match the design language style
   - Examples: ⌕ (search), ☰ (menu), ⚙ (settings)

2. **Emoji Fallback** (when glyph not suitable)
   - Used for complex icons that don't have good Unicode glyphs
   - Examples: 🗑️ (delete), 👤 (user), 🔔 (notification)

### Why Not All Emojis?

Emojis:
- ❌ Look inconsistent across platforms
- ❌ Don't match design language aesthetic
- ❌ Can't be styled with color (some platforms)

Unicode Glyphs:
- ✅ Consistent appearance
- ✅ Match design language style
- ✅ Full color control
- ✅ Better accessibility

## Design Language Comparison

| Icon | Meta Horizon | Material | iOS Flat | Holo |
|------|-------------|----------|----------|------|
| Search | ⌕ (outline) | 🔍 (emoji) | ⌕ (outline) | 🔍 (emoji) |
| Star | ☆ (outline) | ★ (filled) | ☆ (outline) | ★ (filled) |
| More | ⋯ (horizontal) | ⋮ (vertical) | ⋯ (horizontal) | ⋮ (vertical) |
| Menu | ☰ (lines) | ☰ (lines) | ☰ (lines) | ☰ (lines) |

## Accessibility

The component:
- ✅ Uses semantic text rendering (screen reader friendly)
- ✅ Respects text scaling settings
- ✅ Provides clear visual indicators
- ✅ Supports high contrast modes

Always pair with descriptive labels:

```tsx
<TouchableOpacity 
  accessibilityLabel="Search posts"
  accessibilityRole="button"
>
  <IconV2 name="search" />
</TouchableOpacity>
```

## Upgrading from Emojis

**Before:**
```tsx
<Text style={{ fontSize: 24 }}>🔍</Text>
```

**After:**
```tsx
<IconV2 name="search" size={24} />
```

Benefits:
- ✅ Automatic design language adaptation
- ✅ Consistent styling across platforms
- ✅ Theme integration
- ✅ Easier to maintain

## Advanced Usage

### Dynamic Icon Based on State

```tsx
<IconV2 
  name={isOpen ? 'close' : 'menu'} 
  size={24}
/>
```

### Icon with Animation

```tsx
<Animated.View style={{ transform: [{ rotate: rotation }] }}>
  <IconV2 name="settings" size={24} />
</Animated.View>
```

### Custom Styling

```tsx
<IconV2 
  name="heart" 
  size={24}
  style={{
    opacity: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }}
/>
```

## Performance

The component is highly optimized:
- Minimal re-renders
- No external dependencies (uses system fonts)
- Tiny bundle size (just icon mappings)
- Fast rendering

## Future Enhancements

Potential additions:
- SVG icon support for more complex icons
- Custom icon registration
- Icon packs for different styles
- Animated icon variants
- Icon badge support

## Related Components

- **AppBarV2** - Use icons in app bars
- **ButtonV2** - Icons in buttons
- **TagV2** - Small icons in tags

## Support

For issues or questions:
1. Check available icon names in the type definition
2. Test different design languages
3. Verify emoji fallbacks work
4. Check theme color integration

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Design System**: All 10 design languages supported

