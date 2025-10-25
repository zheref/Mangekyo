# Design Language Platform Categorization

Mangekyo's 7 design languages are now organized by platform focus, with appropriate preview modes for each category.

## Platform Categories

### 📱 Mobile Design Languages

**Best for:** Mobile applications, touch interfaces, phone screens

Design languages optimized for mobile experiences are displayed within device frames for accurate preview:

#### Material Design (Google)
- **Platform:** Android, Mobile Web
- **Device Frame:** Pixel 7 (412×915)
- **Characteristics:** Touch-friendly components, bold shadows, vibrant colors
- **Font:** Roboto
- **Colors:** Material 3 palette (#6750A4 primary)

#### Metro UI (Windows Phone)
- **Platform:** Windows Phone 8
- **Device Frame:** iPhone 14 (390×844)
- **Characteristics:** Flat design, sharp corners, typography-driven
- **Font:** Segoe UI (Light, Semilight)
- **Colors:** Flat vibrant colors (#0078D7 accent)

**View in Storybook:** `Design Languages / Mobile`

---

### 🖥️ Desktop Design Languages

**Best for:** Desktop applications, large screens, mouse/keyboard interaction

Design languages optimized for desktop experiences use full desktop viewport:

#### Fluent Design (Windows 10/11)
- **Platform:** Windows Desktop, Xbox
- **Viewport:** Desktop (1280×1024)
- **Characteristics:** Acrylic materials, layered shadows, reveal effects
- **Font:** Segoe UI Variable
- **Colors:** Acrylic backgrounds, #0078D4 accent

#### Aero Glass (Windows Vista/7)
- **Platform:** Windows Vista/7 Desktop
- **Viewport:** Desktop (1280×1024)
- **Characteristics:** Frosted glass blur, translucency, reflections
- **Font:** Segoe UI
- **Colors:** Glass with tint (#0078D7)

#### Aqua (Classic macOS)
- **Platform:** Mac OS X through OS X Mavericks
- **Viewport:** Desktop (1280×1024)
- **Characteristics:** Brushed metal, glossy buttons, pinstripes
- **Font:** Lucida Grande, Helvetica Neue
- **Colors:** Aqua blue (#4A90D9)

**View in Storybook:** `Design Languages / Desktop`

---

### 🌐 Cross-Platform Design Languages

**Best for:** Applications that need to work on both mobile and desktop

Design languages that adapt to both mobile and desktop contexts:

#### Cupertino (iOS & macOS)
- **Platforms:** iOS (mobile) + macOS (desktop)
- **Mobile Frame:** iPhone 14 Pro (393×852)
- **Desktop Viewport:** Desktop (1280×1024)
- **Characteristics:** Vibrancy, translucency, spring animations
- **Font:** SF Pro
- **Colors:** iOS system colors (#007AFF blue)

#### Liquid Glass (Modern)
- **Platforms:** Modern Web, Mobile Web, Progressive Web Apps
- **Mobile Frame:** iPhone 14 (390×844)
- **Desktop Viewport:** Desktop (1280×1024)
- **Characteristics:** Heavy blur, gradient backgrounds, glassmorphism
- **Font:** Inter, SF Pro Display
- **Colors:** Translucent with gradients

**View in Storybook:** `Design Languages / Cross-Platform`

---

## Device Frames

Mobile-focused design languages are displayed within accurate device frames:

### Available Device Types
- **iPhone 14** - 390×844px (standard iPhone)
- **iPhone 14 Pro** - 393×852px (with notch)
- **Pixel 7** - 412×915px (Android reference)
- **Galaxy S23** - 360×780px (compact Android)

### Frame Features
- Realistic device bezels with rounded corners
- Dynamic notch for iPhone Pro models
- Device label showing model name
- Shadow and depth for realism

---

## Viewport Presets

Storybook includes viewport presets accessible from the toolbar:

### Mobile Viewports
- iPhone 14: 390×844
- iPhone 14 Pro: 393×852
- Pixel 7: 412×915
- Galaxy S23: 360×780

### Desktop Viewport
- Desktop: 1280×1024

Switch viewports using the viewport selector in Storybook's toolbar.

---

## Usage in Storybook

### Viewing Mobile Design Languages
1. Navigate to `Design Languages / Mobile`
2. Select a story (Material Design, Metro UI)
3. Components appear within device frames
4. Use viewport selector to change device type

### Viewing Desktop Design Languages
1. Navigate to `Design Languages / Desktop`
2. Select a story (Fluent, Aero Glass, Aqua)
3. Components use full desktop viewport
4. Optimized for large screen layouts

### Viewing Cross-Platform Design Languages
1. Navigate to `Design Languages / Cross-Platform`
2. Stories available in both mobile and desktop variants:
   - `CupertinoMobile` / `CupertinoDesktop`
   - `LiquidGlassMobile` / `LiquidGlassDesktop`
3. Compare same design language across platforms

---

## Component Usage

### Mobile Components with Device Frame

```tsx
import { DeviceFrame } from '@mangekyo/components';
import { DesignLanguageProvider } from '@mangekyo/components';

<DeviceFrame deviceType="pixel7">
  <DesignLanguageProvider initialDesignLanguage="material">
    <YourMobileApp />
  </DesignLanguageProvider>
</DeviceFrame>
```

### Desktop Components

```tsx
import { DesignLanguageProvider } from '@mangekyo/components';

<DesignLanguageProvider initialDesignLanguage="fluent">
  <YourDesktopApp />
</DesignLanguageProvider>
```

### Platform-Adaptive Selection

```tsx
import { Platform } from 'react-native';
import { DesignLanguageProvider } from '@mangekyo/components';

const language = Platform.select({
  ios: 'cupertino',        // iOS → Cupertino
  android: 'material',     // Android → Material
  macos: 'aqua',           // macOS → Aqua (or 'cupertino' for modern)
  windows: 'fluent',       // Windows → Fluent
  web: 'liquidGlass',      // Web → Liquid Glass
  default: 'material',
});

<DesignLanguageProvider initialDesignLanguage={language}>
  <App />
</DesignLanguageProvider>
```

---

## Implementation Details

### Files Added

**Device Frame Component:**
- `src/components/DeviceFrame/DeviceFrame.tsx` - Mobile device frame component
- `src/components/DeviceFrame/index.ts` - Exports

**Platform-Specific Stories:**
- `src/stories/MobileDesignLanguages.stories.tsx` - Material Design, Metro UI
- `src/stories/DesktopDesignLanguages.stories.tsx` - Fluent, Aero Glass, Aqua
- `src/stories/CrossPlatformDesignLanguages.stories.tsx` - Cupertino, Liquid Glass (mobile + desktop)
- `src/stories/DesignLanguageOverview.stories.tsx` - Platform categories overview

**Storybook Configuration:**
- `.storybook/main.ts` - Added viewport addon
- `.storybook/preview.tsx` - Configured mobile/desktop viewport presets

---

## Story Structure

### Mobile Stories
- Individual design language stories with device frames
- Side-by-side comparison with multiple device frames
- Interactive switcher within device frame

### Desktop Stories
- Individual design language stories with desktop layouts
- Side-by-side comparison stacked vertically
- Interactive switcher with toolbar

### Cross-Platform Stories
- Separate mobile and desktop variants for each language
- Mobile: `{Language}Mobile` with device frame
- Desktop: `{Language}Desktop` with desktop layout
- Comparison stories for both platforms

---

## Design Rationale

### Why Mobile Device Frames?

Mobile device frames provide:
- **Accurate context** - See components as users will see them
- **Size constraints** - Understand touch target sizes
- **Realistic preview** - Device bezels and notches included
- **Better presentations** - Professional appearance for demos

### Why Desktop Viewports?

Desktop viewports allow:
- **Full layouts** - Show multi-column and complex layouts
- **Proper spacing** - Desktop components use more whitespace
- **Real estate** - Utilize larger screen dimensions
- **Desktop patterns** - Sidebars, toolbars, multi-pane interfaces

### Why Cross-Platform Category?

Some design languages work on both:
- **Cupertino** - Apple's unified design for iOS and macOS
- **Liquid Glass** - Modern web design scales to all devices
- Showing both contexts demonstrates versatility
- Developers can choose appropriate variant

---

## Future Enhancements

Potential additions:
- Tablet device frames (iPad, Android tablets)
- Responsive breakpoint testing
- Landscape/portrait orientation switching
- Touch event simulation for mobile stories
- Desktop window chrome (title bars, menus)
- Integration with React Native testing tools

---

## Notes

- **GitHub's Primer** and **Uber's Base** were mentioned but not yet implemented
- Current implementation focuses on 7 design languages
- Additional design languages can be added following the same pattern
- Mobile frames work best at 100% zoom in Storybook
- Some visual effects (blur, glassmorphism) may have limited support in React Native

---

**🎉 All 7 Design Languages Now Organized by Platform!**

Run `npm run storybook` to explore mobile, desktop, and cross-platform design languages.
