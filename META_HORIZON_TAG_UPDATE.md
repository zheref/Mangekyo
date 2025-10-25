# Meta Horizon Tag Styling Update

**Date**: October 25, 2025

## Overview
Updated the Meta Horizon tag component to match the authentic pill-shaped badge design seen in Meta's official Horizon interface.

## Changes Made

### 1. **Border Radius** (Fully Rounded Pills)
```diff
- borderRadius: 6, // Slightly rounded but not fully circular
+ borderRadius: 100, // Fully rounded pill shape (Meta Horizon style) - large value ensures perfect pills
```

**Why**: Meta Horizon uses fully rounded pill-shaped badges (like "Communities Beta" in Meta's interface). Using `borderRadius: 100` (a value larger than the element's height) ensures perfect pill shapes with fully rounded ends, regardless of content length.

### 2. **Horizontal Padding** (More Prominent)
```diff
- paddingHorizontal: spacing[2], // 8px
+ paddingHorizontal: spacing[3], // 12px - More generous horizontal for pill shape
```

**Why**: The increased horizontal padding creates a more prominent, balanced pill shape that matches Meta's design language.

### 3. **Vertical Padding** (Kept Compact)
```
paddingVertical: spacing[1], // 4px - Compact vertical
```

**Why**: Maintained compact vertical padding to keep tags sleek and avoid excessive height.

## Visual Comparison

### Before:
```
┌──────────┐
│ Tag Text │  ← Slightly rounded, less padding
└──────────┘
```

### After:
```
╭────────────╮
│  Tag Text  │  ← Fully rounded pills, more generous padding
╰────────────╯
```

## Tag Specifications

### Light Mode
- **Background**: `#E4E6EB` (light gray)
- **Text Color**: Based on variant (primary text for secondary variant)
- **Border**: None (`width: 0`)
- **Border Radius**: `100px` (fully rounded pill - perfect circular ends)
- **Padding**: `4px vertical × 12px horizontal`
- **Typography**: 
  - Font: Inter
  - Size: 11px
  - Weight: 600 (SemiBold)
  - Letter Spacing: Wide

### Dark Mode
- **Background**: `#3A3B3C` (dark gray)
- **Text Color**: Based on variant (light text for secondary variant)
- **Border**: None (`width: 0`)
- **Border Radius**: `100px` (fully rounded pill - perfect circular ends)
- **Padding**: `4px vertical × 12px horizontal`
- **Typography**: Same as light mode

## Integration

The updated tag styling is automatically applied when using the `metaHorizon` design language:

```typescript
<TagV2
  label="announcement"
  variant="secondary"
  designLanguage="metaHorizon"
  onPress={() => console.log('Tag pressed')}
/>
```

## Files Modified

1. **`/src/tokens/components/metaHorizon.ts`**
   - Updated `tag.borderRadius` from 6 → 16 → **100** (for true pill shape)
   - Updated `tag.paddingHorizontal` from `spacing[2]` (8px) to `spacing[3]` (12px)
   - Added clarifying comments
   - **Final update**: Increased borderRadius to 100 to match Meta's "Communities Beta" pill style

2. **`/src/tokens/semantic/metaHorizon.ts`**
   - Updated comment for `interactive.secondary` to clarify it's used for tag backgrounds

## Design Rationale

The pill-shaped tag design aligns with Meta Horizon's overall design philosophy:
- **Clean & Modern**: Fully rounded pills feel contemporary and sophisticated
- **Clear Categorization**: More prominent styling helps tags stand out as categorical metadata
- **Visual Hierarchy**: Positioned at the bottom of cards, they provide clear navigation without competing with primary content
- **Consistency**: Matches the badge styling seen throughout Meta's Horizon interface

## References

- **Meta Horizon Design System**: https://developers.meta.com/horizon/design/
- **Tag Component**: `/src/components/Tag/TagV2.tsx`
- **Article Card Component**: `/src/components/ArticleCard/ArticleCardV2.tsx`

---

*These changes ensure that Mangekyo's Meta Horizon implementation accurately reflects Meta's authentic design language.*

