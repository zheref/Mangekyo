# Meta Horizon Color Update - #EFEFEF

## Overview

Updated Meta Horizon theme to use `#EFEFEF` as the standard background color for all selected/active actionable items, ensuring consistency across the entire design language.

## Changes Made

### 1. Semantic Tokens (`src/tokens/semantic/metaHorizon.ts`)

Updated `interactive.secondary` color palette:

**Before:**
```typescript
interactive: {
  secondary: '#E4E6EB', // Light gray background for tags
  secondaryHover: '#D8DADF',
  secondaryActive: '#CCD0D5',
  secondaryDisabled: '#F0F2F5',
}
```

**After:**
```typescript
interactive: {
  secondary: '#EFEFEF', // Light gray background for selected/active states
  secondaryHover: '#E5E5E5',
  secondaryActive: '#DADADA',
  secondaryDisabled: '#F5F5F5',
}
```

### 2. Example App (`example/App.js`)

Updated pill bar to use `interactive.secondary` instead of `surface.secondary` for consistency:

**Before:**
```javascript
const selectedBg = isMetaHorizon 
  ? theme.semantic.colors.surface.secondary  // Inconsistent
  : theme.semantic.colors.interactive.primary;
```

**After:**
```javascript
const selectedBg = isMetaHorizon 
  ? theme.semantic.colors.interactive.secondary  // #EFEFEF - Consistent
  : theme.semantic.colors.interactive.primary;
```

## What Uses This Color

The `#EFEFEF` color is now automatically applied to all Meta Horizon actionable items through `interactive.secondary`:

### ✅ Automatically Updated Components

1. **Buttons** (`ButtonV2` with `variant="secondary"`)
   - Uses `semantic.colors.interactive.secondary`
   - Example: Secondary action buttons

2. **Pills** (Design language selector)
   - Selected pill background
   - Active state indicator

3. **Tags** (`TagV2`)
   - Background color for default tags
   - Consistent with Meta's tag design

4. **AppBar Actions** (Settings icon background)
   - Unselected state background
   - Hover/active states

5. **Any Custom Actionable Items**
   - Using `theme.semantic.colors.interactive.secondary`
   - Automatically inherits the new color

## Color Progression

The hover and active states create a smooth interaction:

| State | Color | Hex |
|-------|-------|-----|
| **Secondary (Default)** | Light Gray | `#EFEFEF` |
| **Secondary Hover** | Slightly darker | `#E5E5E5` |
| **Secondary Active** | Even darker | `#DADADA` |
| **Secondary Disabled** | Very light | `#F5F5F5` |

## Design Rationale

### Why #EFEFEF?

1. **Subtle Contrast**: Provides clear visual feedback without being intrusive
2. **Meta Horizon Guidelines**: Aligns with Meta's preference for subtle, flat surfaces
3. **Accessibility**: Sufficient contrast with white backgrounds
4. **Consistency**: Single color used across all actionable items

### Why `interactive.secondary`?

- **Semantic Meaning**: Clearly indicates interactive/actionable elements
- **Consistent Behavior**: All buttons, pills, and tags use the same token
- **Easy Updates**: Change once, updates everywhere
- **Theme-Aware**: Automatically adapts to other design languages

## Benefits

✅ **Consistency**: All actionable items share the same selected/active color  
✅ **Token-Based**: No hardcoded colors, fully integrated with token system  
✅ **Maintainable**: Update one token to change color everywhere  
✅ **Predictable**: Clear visual feedback across all interactions  
✅ **Meta-Compliant**: Follows Meta Horizon's flat design principles  

## Testing

To verify the color is applied correctly:

1. Switch to Meta Horizon theme
2. Check the following components:
   - Selected pill in design language selector → Should be `#EFEFEF`
   - Secondary buttons → Should be `#EFEFEF`
   - Settings icon background in AppBar → Should be `#EFEFEF`
   - Tags → Should be `#EFEFEF`
3. Test hover states → Should darken slightly to `#E5E5E5`
4. Test active/pressed states → Should darken to `#DADADA`

## Files Modified

1. ✅ `src/tokens/semantic/metaHorizon.ts` - Updated `interactive.secondary` palette
2. ✅ `example/App.js` - Updated pill bar to use `interactive.secondary`
3. ✅ `example/lib/src/tokens/semantic/metaHorizon.ts` - Synced

## Related Components

All these components automatically use the new color through tokens:

- `ButtonV2` (variant="secondary")
- `TagV2` (default variant)
- AppBar action buttons (unselected state)
- Pill bar (selected state)
- Any custom components using `semantic.colors.interactive.secondary`

## Result

🎨 **Meta Horizon now has a consistent, subtle `#EFEFEF` color across all actionable items!**

The color is fully integrated into the token system and automatically applies to all components that use `interactive.secondary`, ensuring perfect consistency throughout the design language.

