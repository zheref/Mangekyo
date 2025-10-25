# Design Languages Specification

Complete specification for all 7 supported design languages.

## 1. Material Design (Google)

**Era**: 2014-Present
**Platform**: Android, Web, Cross-platform
**Philosophy**: Paper and ink metaphor with bold use of color and motion

### Visual Characteristics
- **Shadows**: Bold, directional shadows for elevation (2-24dp)
- **Corners**: Subtle rounded (4-8px)
- **Colors**: Vibrant, saturated colors with clear hierarchy
- **Typography**: Roboto family
- **Grid**: 8dp baseline grid
- **Motion**: Material motion with easing curves

### Color Palette
- Primary: #6200EE (Deep Purple 500)
- Secondary: #03DAC6 (Teal 200)
- Error: #B00020
- Background: #FFFFFF / #121212 (dark)
- Surface: #FFFFFF / #121212 (dark)

### Typography
- Font Family: Roboto
- Scale: 12, 14, 16, 20, 24, 34, 48, 60, 96

## 2. Cupertino (Apple iOS/macOS)

**Era**: 2013-Present (iOS 7+)
**Platform**: iOS, macOS, watchOS
**Philosophy**: Depth through translucency and clarity

### Visual Characteristics
- **Shadows**: Soft, subtle shadows
- **Corners**: Rounded (8-16px)
- **Colors**: System colors with vibrancy and translucency
- **Typography**: San Francisco (SF Pro)
- **Grid**: 8pt baseline grid
- **Motion**: Spring animations with bounce

### Color Palette
- Primary Blue: #007AFF (light) / #0A84FF (dark)
- Red: #FF3B30 / #FF453A
- Green: #34C759 / #32D74B
- Orange: #FF9500 / #FF9F0A
- Background: #FFFFFF / #000000
- Secondary Background: #F2F2F7 / #1C1C1E

### Typography
- Font Family: San Francisco (SF Pro)
- Scale: 11, 13, 15, 17, 20, 22, 28, 34

## 3. Aqua (Classic macOS)

**Era**: 2000-2014 (Mac OS X - OS X Mavericks)
**Platform**: macOS
**Philosophy**: Liquid, gel-like interface with depth

### Visual Characteristics
- **Shadows**: Glossy, gel-like with inner shadows
- **Corners**: Rounded (6-12px)
- **Colors**: Blue and graphite with translucency
- **Typography**: Lucida Grande
- **Materials**: Brushed metal, pinstripes, glossy
- **Motion**: Genie effect, smooth animations

### Color Palette
- Aqua Blue: #4A90D9
- Graphite: #8E8E93
- Selection: #3875D7
- Background: #ECECEC
- Window: #D4D4D4 with gradient
- Stripes: Pinstripe texture

### Typography
- Font Family: Lucida Grande, Helvetica Neue
- Scale: 10, 11, 13, 14, 18, 24

## 4. Aero Glass (Windows Vista/7)

**Era**: 2006-2012
**Platform**: Windows Vista, Windows 7
**Philosophy**: Glass-like transparency with reflections

### Visual Characteristics
- **Shadows**: Soft with gaussian blur
- **Corners**: Slightly rounded (3-5px)
- **Colors**: Glass with color tinting (frost effect)
- **Typography**: Segoe UI
- **Materials**: Frosted glass, reflections
- **Motion**: Flip 3D, smooth transitions

### Color Palette
- Glass Tint: rgba(255,255,255,0.8) with blur
- Blue: #0078D7
- Border: #4C4C4C with glass effect
- Selection: #CCE8FF
- Background: #F0F0F0
- Glass Highlight: rgba(255,255,255,0.4)

### Typography
- Font Family: Segoe UI
- Scale: 9, 11, 12, 14, 16, 20, 24

## 5. Metro UI (Windows 8)

**Era**: 2012-2015
**Platform**: Windows 8, Windows Phone
**Philosophy**: Content before chrome, authentically digital

### Visual Characteristics
- **Shadows**: None or minimal
- **Corners**: Sharp (0px) or very subtle (2px)
- **Colors**: Flat, vibrant accent colors
- **Typography**: Segoe UI (Light, Semilight)
- **Grid**: Tile-based layout
- **Motion**: Slide animations, parallax

### Color Palette
- Accent: #0078D7
- Background: #FFFFFF / #000000
- Chrome: Minimal, mostly transparent
- Text: #000000 / #FFFFFF
- Borders: #D2D2D2

### Typography
- Font Family: Segoe UI (Light for headers)
- Scale: 9, 11, 15, 20, 24, 42, 72

## 6. Fluent Design (Windows 10/11)

**Era**: 2017-Present
**Platform**: Windows 10/11, Xbox
**Philosophy**: Light, depth, motion, material, scale

### Visual Characteristics
- **Shadows**: Layered shadows with multiple levels
- **Corners**: Rounded (4-8px)
- **Colors**: Acrylic materials with transparency
- **Typography**: Segoe UI Variable
- **Materials**: Acrylic, reveal, mica
- **Motion**: Connected animations, reveal on hover

### Color Palette
- Accent: #0078D4
- Acrylic Background: rgba(243,243,243,0.7) with blur
- Card Background: #F3F3F3 / #202020
- Text: #000000 / #FFFFFF
- Mica: Backdrop-aware tinted background

### Typography
- Font Family: Segoe UI Variable
- Scale: 12, 14, 16, 20, 24, 28, 32, 40

## 7. Liquid Glass (Modern Web)

**Era**: 2020-Present
**Platform**: Modern Web, Cross-platform
**Philosophy**: Glassmorphism with depth and clarity

### Visual Characteristics
- **Shadows**: Soft, ambient shadows
- **Corners**: Very rounded (16-24px)
- **Colors**: Translucent with heavy backdrop blur
- **Typography**: Inter, SF Pro, Modern sans-serif
- **Materials**: Frosted glass, gradient borders
- **Motion**: Smooth, fluid animations

### Color Palette
- Glass: rgba(255,255,255,0.1) with blur(20px)
- Border: rgba(255,255,255,0.2)
- Accent: Gradient overlays
- Background: Gradient backgrounds
- Shadow: rgba(0,0,0,0.1)

### Typography
- Font Family: Inter, SF Pro Display
- Scale: 14, 16, 18, 20, 24, 32, 48

## Key Differences Summary

| Feature | Material | Cupertino | Aqua | Aero | Metro | Fluent | Liquid Glass |
|---------|----------|-----------|------|------|-------|--------|--------------|
| Shadows | Bold | Soft | Glossy | Blur | None | Layered | Ambient |
| Corners | 4-8px | 8-16px | 6-12px | 3-5px | 0-2px | 4-8px | 16-24px |
| Colors | Vibrant | System | Blue/Gray | Glass | Flat | Acrylic | Translucent |
| Font | Roboto | SF Pro | Lucida | Segoe UI | Segoe UI | Segoe Var | Inter |
| Material | Paper | Blur | Gel | Glass | Flat | Acrylic | Glass |

## Implementation Notes

### Fonts
Since we can't embed custom fonts in React Native easily, we'll use:
- **System** font as fallback for all
- Font weights and sizes will differentiate designs
- Web implementations can use actual fonts

### Colors
All colors are specified with both light and dark mode variants where applicable.

### Blur Effects
- **Cupertino**: Vibrancy blur
- **Aero Glass**: Frosted glass blur
- **Fluent**: Acrylic blur (hostBackdrop aware)
- **Liquid Glass**: Heavy backdrop blur (20px+)

### Shadows
Each design language has distinct shadow characteristics that help define its visual identity.
