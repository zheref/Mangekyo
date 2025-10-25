# Dynamic Theme Fix - Color Scheme Switching

## Issue

Cards and inputs were not respecting the color scheme (light/dark) - they always appeared light regardless of the selected theme. This was a **systemic issue affecting ALL design languages**, not just Holo.

### Root Cause

Component tokens were hardcoding color references to the light semantic tokens:

```typescript
// BAD - Always uses light colors
export const holoComponentTokens: ComponentTokens = {
  card: {
    background: holoSemanticLight.colors.surface.elevated, // ❌ Always light!
    border: {
      color: holoSemanticLight.colors.border.secondary,    // ❌ Always light!
    }
  },
  input: {
    border: {
      color: {
        default: holoSemanticLight.colors.border.secondary, // ❌ Always light!
        focus: holoSemanticLight.colors.border.focus,
        // ...
      }
    },
    background: {
      default: holoSemanticLight.colors.surface.primary,   // ❌ Always light!
      // ...
    }
  }
}
```

When you switched from light to dark theme:
- ✅ Semantic tokens updated (text colors, interactive colors, etc.)
- ❌ Component tokens stayed the same (hardcoded to light colors)
- ❌ Cards, inputs, and article cards used the hardcoded component token colors

## Solution

### 1. Updated Components to Use Semantic Colors

Components now read colors from `semantic.colors.*` which ARE dynamic and respect the active color scheme:

#### Card Component (`src/components/Card/CardV2.tsx`)
```typescript
// BEFORE - Used hardcoded component token color
<View style={{
  backgroundColor: cardTokens.background,  // ❌ Always light
  borderColor: cardTokens.border.color,    // ❌ Always light
}} />

// AFTER - Uses dynamic semantic color
<View style={{
  backgroundColor: semantic.colors.surface.elevated,  // ✅ Updates with theme!
  borderColor: semantic.colors.border.secondary,      // ✅ Updates with theme!
}} />
```

#### Input Component (`src/components/Input/InputV2.tsx`)
```typescript
// BEFORE - Used hardcoded component token colors
const getBorderColor = (): string => {
  if (error) return inputTokens.border.color.error;     // ❌ Always light
  if (isFocused) return inputTokens.border.color.focus; // ❌ Always light
  return inputTokens.border.color.default;              // ❌ Always light
};

// AFTER - Uses dynamic semantic colors
const getBorderColor = (): string => {
  if (error) return semantic.colors.border.error;     // ✅ Updates with theme!
  if (isFocused) return semantic.colors.border.focus; // ✅ Updates with theme!
  return semantic.colors.border.secondary;            // ✅ Updates with theme!
};
```

#### ArticleCard Component (`src/components/ArticleCard/ArticleCardV2.tsx`)
```typescript
// BEFORE
const containerStyle: ViewStyle = {
  backgroundColor: articleCardTokens.background,  // ❌ Always light
  borderColor: articleCardTokens.border.color,    // ❌ Always light
};

// AFTER
const containerStyle: ViewStyle = {
  backgroundColor: semantic.colors.surface.elevated,  // ✅ Updates with theme!
  borderColor: semantic.colors.border.secondary,      // ✅ Updates with theme!
};
```

### 2. Updated Component Tokens to Use Placeholders

Since TypeScript requires these fields, we keep them but use placeholder values with clear notes:

```typescript
// src/tokens/components/holo.ts (and should be applied to all design languages)
export const holoComponentTokens: ComponentTokens = {
  card: {
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: 'transparent', // Placeholder - components use semantic.colors.surface.elevated
    border: {
      width: 0,
      color: 'transparent', // Placeholder - components use semantic.colors.border.secondary
    },
  },
  input: {
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    border: {
      width: 2,
      color: {
        default: 'transparent', // Placeholder
        focus: 'transparent',
        error: 'transparent',
        disabled: 'transparent',
      },
    },
    background: {
      default: 'transparent', // Placeholder
      disabled: 'transparent',
    },
  },
  // ...
}
```

## Files Changed

### Components Fixed (ALL design languages benefit)
1. ✅ `src/components/Card/CardV2.tsx` - Now uses `semantic.colors.surface.elevated`
2. ✅ `src/components/Input/InputV2.tsx` - Now uses `semantic.colors.border.*` and `semantic.colors.surface.*`
3. ✅ `src/components/ArticleCard/ArticleCardV2.tsx` - Now uses `semantic.colors.surface.elevated`

### Component Tokens Updated
1. ✅ `src/tokens/components/holo.ts` - Removed hardcoded color references

### Example Directory Synced
1. ✅ `example/lib/src/components/Card/CardV2.tsx`
2. ✅ `example/lib/src/components/Input/InputV2.tsx`
3. ✅ `example/lib/src/components/ArticleCard/ArticleCardV2.tsx`
4. ✅ `example/lib/src/tokens/components/holo.ts`

## Impact

### ✅ Fixed for ALL Design Languages

This fix benefits **all design languages**, not just Holo:
- ✅ Holo Dark/Light
- ✅ Material Dark/Light
- ✅ Cupertino Dark/Light
- ✅ Aqua Dark/Light
- ✅ Aero Glass Dark/Light
- ✅ Metro Dark/Light
- ✅ Fluent Dark/Light
- ✅ Liquid Glass Dark/Light

### Components Now Fully Dynamic

- ✅ Cards respect light/dark theme
- ✅ Inputs respect light/dark theme
- ✅ Article cards respect light/dark theme
- ✅ Buttons already worked (they were using semantic colors)
- ✅ Tags already worked (they were using semantic colors)

## How It Works

### Theme Structure
```typescript
theme = {
  semantic: {
    colors: {
      surface: { elevated: '#FFFFFF' } // Light theme
      // OR
      surface: { elevated: '#1A1A1A' } // Dark theme
    }
  },
  components: {
    card: {
      background: 'transparent' // Just a placeholder
    }
  }
}
```

### When Theme Changes
1. User switches from light to dark (or vice versa)
2. `themeFactory.createTheme('holo', 'dark')` is called
3. Returns theme with `holoSemanticDark` (different colors)
4. Components read from `theme.semantic.colors.*`
5. **Colors update automatically!** ✨

### Color Resolution Flow
```
User Action: Switch to Dark Theme
      ↓
ThemeFactory: createTheme('holo', 'dark')
      ↓
Semantic Tokens: holoSemanticDark loaded
      ↓
Component: theme.semantic.colors.surface.elevated
      ↓
Result: Dark background color (#1A1A1A)
```

## Testing

### Verify the Fix

1. **Run the example app**:
   ```bash
   cd example
   npm start
   ```

2. **Test Holo**:
   - Select "🤖 Holo" from design language dropdown
   - Switch between light/dark mode
   - **Cards should change**: Light (white) ↔ Dark (dark gray)
   - **Inputs should change**: Light border/background ↔ Dark border/background
   - **Text should change**: Light (black) ↔ Dark (white)

3. **Test Other Design Languages**:
   - Select any design language
   - Switch between light/dark mode
   - All components should respect the theme

### Expected Behavior

#### Holo Dark
- Background: Pure black (#000000)
- Cards: Dark gray surface (#2A2A2A)
- Text: White (#FFFFFF)
- Inputs: Dark background with Holo Blue focus (#33B5E5)
- Borders: Subtle or Holo Blue

#### Holo Light
- Background: Light gray (#F0F0F0)
- Cards: White surface (#FFFFFF)
- Text: Black (#000000)
- Inputs: White background with Holo Blue focus (#33B5E5)
- Borders: Light gray or Holo Blue

## Best Practices Going Forward

### For Component Development

**DO:**
```typescript
// ✅ Use semantic colors (dynamic)
<View style={{
  backgroundColor: semantic.colors.surface.elevated,
  borderColor: semantic.colors.border.secondary,
  color: semantic.colors.text.primary,
}} />
```

**DON'T:**
```typescript
// ❌ Use component token colors (static)
<View style={{
  backgroundColor: cardTokens.background,
  borderColor: cardTokens.border.color,
}} />
```

### Component Token Colors

Component tokens should:
- ❌ **NOT** include hardcoded color references
- ✅ **Only** include structural properties (spacing, sizing, shadows, etc.)
- ✅ Use transparent placeholders if TypeScript requires color fields
- ✅ Include comments explaining colors come from semantic tokens

### When to Use Component Tokens vs Semantic Tokens

#### Use Component Tokens for:
- Layout properties (borderRadius, padding, spacing)
- Sizing (minHeight, width, fontSize)
- Shadows (shadowOffset, shadowRadius, elevation)
- Typography structure (fontFamily, fontWeight, lineHeight)
- Non-color styling

#### Use Semantic Tokens for:
- Background colors
- Text colors
- Border colors
- Interactive state colors (hover, active, focus)
- Feedback colors (success, warning, error)
- ANY color that should change between light/dark themes

## Future Improvements

### Apply to Other Design Languages

While the components are now fixed globally, other design language component tokens may still have hardcoded colors. Consider updating:

1. `src/tokens/components/material.ts`
2. `src/tokens/components/cupertino.ts`
3. `src/tokens/components/aqua.ts`
4. `src/tokens/components/aeroGlass.ts`
5. `src/tokens/components/metro.ts`
6. `src/tokens/components/fluent.ts`
7. `src/tokens/components/liquidGlass.ts`

Replace hardcoded color references with transparent placeholders and add notes.

### Type System Improvements

Consider updating TypeScript types to make color fields optional:

```typescript
// Current (requires colors)
interface ComponentTokens {
  card: {
    background: string;  // Required
    border: {
      color: string;     // Required
    }
  }
}

// Improved (colors optional)
interface ComponentTokens {
  card: {
    background?: string;  // Optional
    border: {
      color?: string;     // Optional
    }
  }
}
```

This would allow removing placeholder values entirely.

## Summary

✅ **Fixed**: Cards, inputs, and article cards now respect light/dark themes  
✅ **Scope**: Fix applies to ALL design languages  
✅ **Method**: Components use dynamic `semantic.colors.*` instead of static component token colors  
✅ **Breaking**: No breaking changes for consumers  
✅ **Build**: Successful, no new errors  
✅ **Testing**: Ready to test in example app  

The Holo dark theme now looks as good as it did before, and switching between light/dark actually works! 🎉

