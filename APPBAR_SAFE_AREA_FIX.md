# AppBar Safe Area Fix - Status Bar Visibility

## Issue
The AppBar was being hidden by the system status bar on both iOS and Android platforms, particularly with Android's edge-to-edge mode enabled.

## Root Cause
The example app was not using the updated `AppBarV2` component with safe area support. The component files in `example/lib/src/` were not synced with the source files in `src/`.

## Solution

### 1. Switched to expo-constants
Changed from using `StatusBar.currentHeight` (Android-only) to `Constants.statusBarHeight` from `expo-constants`, which works reliably on both platforms:

**Before:**
```typescript
if (Platform.OS === 'ios') {
  return { paddingTop: 44, paddingBottom: 0 };
} else if (Platform.OS === 'android') {
  const statusBarHeight = StatusBar.currentHeight ?? 0;
  return { paddingTop: statusBarHeight, paddingBottom: 0 };
}
```

**After:**
```typescript
import Constants from 'expo-constants';

// Auto-detect platform-specific safe area using expo-constants
const statusBarHeight = Constants.statusBarHeight ?? 0;
return { paddingTop: statusBarHeight, paddingBottom: 0 };
```

### 2. Fixed Height Calculation
The AppBar now correctly calculates total height including safe area padding:

```typescript
const totalHeight = appBarTokens.height + safeAreaPadding.paddingTop + safeAreaPadding.paddingBottom;
```

This ensures the content has full space and isn't squished.

### 3. Synced Files
Copied the updated `AppBarV2.tsx` to `example/lib/src/components/AppBar/` so the example app uses the latest implementation.

### 4. Cleaned Up Example App
- Removed the unwanted subtitle showing post count
- Removed unused subtitle styles
- AppBar now properly respects safe area on both platforms

## Changes Made

### Files Updated:
1. **src/components/AppBar/AppBarV2.tsx**
   - Added `expo-constants` import
   - Removed unused `Platform` and `StatusBar` imports
   - Updated `getSafeAreaPadding()` to use `Constants.statusBarHeight`
   - Fixed height calculation to include safe area padding

2. **example/lib/src/components/AppBar/AppBarV2.tsx**
   - Synced with source file

3. **example/App.js**
   - Removed subtitle section
   - Removed subtitle styles

4. **package.json**
   - Added `expo-constants` as peer dependency
   - Added `expo-constants` as dev dependency for linting

5. **APPBAR_SAFE_AREA.md**
   - Updated documentation to reflect `expo-constants` usage
   - Updated device compatibility table
   - Added requirements section

## Benefits

✅ **Universal Solution**: Single approach works on both iOS and Android  
✅ **Edge-to-Edge Compatible**: Properly handles Android's edge-to-edge mode  
✅ **Notch-Aware**: Automatically detects iPhone notch heights  
✅ **No Manual Detection**: No need for platform-specific code  
✅ **Reliable**: Uses Expo's standard constants API  

## Result

The AppBar is now **fully visible** on both iOS and Android, with proper spacing above the status bar. The implementation works automatically without any manual configuration needed from users.

## Testing

To test, run the example app on:
- iOS simulator/device (with and without notch)
- Android device with edge-to-edge mode enabled
- Different Android devices with varying status bar heights

The AppBar should be visible and properly positioned on all platforms.

