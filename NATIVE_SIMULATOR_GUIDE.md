# Running Components on Native Simulators

This guide explains how to test your Mangekyo components on real iOS and Android simulators to see exactly how they'll look in production native apps.

## Why Test on Native Simulators?

The web-based Storybook (using React Native Web) is great for rapid development and documentation, but it has limitations:

### Web Storybook Limitations

- **Rendering Differences** - React Native Web approximates native behavior but isn't identical
- **Shadows & Effects** - Web shadows don't match native platform shadows
- **Blur Effects** - Limited or no support for backdrop blur (Aero Glass, Liquid Glass themes)
- **System Fonts** - Web fonts don't match native system fonts exactly
- **Touch Interactions** - Mouse events behave differently than touch events
- **Performance** - JavaScript performance differs from native
- **Platform APIs** - No access to native platform features

### Native Simulator Benefits

✅ **100% Accurate Rendering** - Exactly what users will see
✅ **Real Platform Shadows** - iOS and Android native shadow rendering
✅ **Native Blur Effects** - Full support for backdrop blur and glassmorphism
✅ **System Fonts** - Uses actual system fonts (SF Pro, Roboto, Segoe UI)
✅ **Touch Interactions** - Real touch event handling
✅ **Platform-Specific Behavior** - Different rendering per platform
✅ **Performance Testing** - Real-world app performance

## Quick Start

### 1. Start the Example App

From the main project directory:

```bash
# Option 1: Open Expo Dev Tools (choose platform from browser)
npm run example

# Option 2: Launch directly on iOS
npm run example:ios

# Option 3: Launch directly on Android
npm run example:android
```

### 2. Sync Source Code (Important!)

The example app uses a **local copy** of your library source code located in `example/lib/src/`. When you make changes to the main library (`src/`), you need to resync:

```bash
# From the main project directory (Mangekyo/)
cp -r src example/lib/

# Metro will hot-reload automatically
```

**Why this approach?**
- ✅ Avoids React Native module duplication issues
- ✅ Prevents `TurboModuleRegistry` errors
- ✅ Standard pattern for React Native example apps
- ✅ Works reliably on all platforms

**Development Workflow:**
1. Make changes to components in `src/`
2. Run `cp -r src example/lib/` to sync
3. Changes appear automatically in the simulator (hot reload)

### 3. What You'll See

The example app automatically showcases:
- All 7 design languages (Material, Cupertino, Aqua, Aero Glass, Metro, Fluent, Liquid Glass)
- Light and dark color schemes
- All component variants and sizes
- Design token values
- Platform-adaptive design (Cupertino on iOS, Material on Android)

### 3. Interactive Features

- **Design Language Switcher** - Tap buttons to switch between all 7 languages
- **Color Scheme Toggle** - Switch between light and dark mode
- **Component Showcase** - Scroll through all components
- **Design Tokens Viewer** - See current theme values

## Prerequisites

### macOS (for iOS Simulator)

1. **Install Xcode** from the App Store
2. **Install Command Line Tools**:
   ```bash
   xcode-select --install
   ```
3. **Open Simulator** (first time):
   ```bash
   open -a Simulator
   ```

### Any OS (for Android Emulator)

1. **Install Android Studio** from [developer.android.com](https://developer.android.com/studio)
2. **Install Android SDK** (via Android Studio SDK Manager)
3. **Create Virtual Device**:
   - Open Android Studio
   - Tools → AVD Manager
   - Create Virtual Device
   - Choose a device definition (e.g., Pixel 7)
   - Download system image
   - Finish setup

4. **Start Emulator** (optional, auto-starts with npm script):
   ```bash
   emulator -list-avds  # List available
   emulator -avd Pixel_7_API_34  # Start specific one
   ```

## Testing Different Design Languages

### Mobile-Optimized Designs

Test these on phone-sized simulators:

**Material Design (Android)**
```bash
npm run example:android
# App auto-selects Material Design on Android
# Switch to other languages using in-app buttons
```

**Metro UI (Windows Phone)**
```bash
npm run example:ios
# Switch to Metro UI using in-app design language selector
# Sharp corners, flat colors, tile-based layout
```

### Desktop-Optimized Designs

Test these on iPad simulator or larger screens:

**Fluent Design (Windows 10/11)**
```bash
npm run example:ios
# Switch to Fluent using in-app selector
# Notice acrylic blur, layered shadows
# Best viewed on iPad simulator for desktop-like experience
```

**Aero Glass (Windows Vista/7)**
- Frosted glass effects
- Gaussian blur backgrounds
- Translucent surfaces

**Aqua (Classic macOS)**
- Brushed metal textures
- Glossy button effects
- Pinstripe backgrounds

### Cross-Platform Designs

Test on both iOS and Android:

**Cupertino (iOS/macOS)**
```bash
# iOS
npm run example:ios

# Android
npm run example:android
```
- App auto-selects Cupertino on iOS
- Vibrancy, translucency, SF Pro font
- Works beautifully on both platforms

**Liquid Glass (Modern)**
- Heavy backdrop blur
- Gradient backgrounds
- Works across all platforms

## Design Language Comparison on Simulators

| Design Language | Best Simulator | Key Visual Effects to Test |
|-----------------|----------------|----------------------------|
| **Material** | Android (Pixel) | Bold shadows, elevation layers |
| **Cupertino** | iOS (iPhone/iPad) | Translucency, vibrancy, blur |
| **Aqua** | iOS (iPad) | Brushed metal, glossy surfaces |
| **Aero Glass** | iOS or Android | Frosted glass blur, translucency |
| **Metro** | Any | Sharp corners, flat colors, no shadows |
| **Fluent** | iOS (iPad) | Acrylic blur, reveal effects |
| **Liquid Glass** | iOS | Heavy blur, gradient meshes |

## Testing Checklist

### Visual Accuracy

- [ ] Shadows render correctly (especially Material and Fluent)
- [ ] Blur effects work (Aero Glass, Liquid Glass)
- [ ] Fonts match design specifications
- [ ] Colors are accurate (compare to design tokens)
- [ ] Border radius matches specifications
- [ ] Spacing is consistent

### Interactivity

- [ ] Button touch responses are immediate
- [ ] Input focus states work correctly
- [ ] Disabled states are visually clear
- [ ] Card tap interactions work (if implemented)
- [ ] Design language switching is smooth
- [ ] Color scheme toggle works

### Platform Differences

- [ ] iOS and Android render consistently
- [ ] Platform-specific shadows (iOS soft, Android bold)
- [ ] System font rendering
- [ ] Touch target sizes are appropriate
- [ ] Performance is smooth on both platforms

### Design Languages

- [ ] Material Design - Bold shadows visible
- [ ] Cupertino - Translucency effects work
- [ ] Aqua - Brushed metal gradient visible
- [ ] Aero Glass - Glass blur renders
- [ ] Metro - No shadows, sharp corners
- [ ] Fluent - Acrylic blur visible
- [ ] Liquid Glass - Heavy blur effects

## Comparing Web Storybook vs Native

### When to Use Web Storybook

✅ **Development** - Fast hot reload, component iteration
✅ **Documentation** - Easy to share links, accessible to anyone
✅ **Component Organization** - Structured stories and controls
✅ **Team Demos** - No simulator setup required
✅ **CI/CD** - Build static site for deployment

### When to Use Native Simulator

✅ **Final Testing** - Before releasing new components
✅ **Visual QA** - Ensure pixel-perfect accuracy
✅ **Design Review** - Show stakeholders real rendering
✅ **Platform Testing** - iOS vs Android differences
✅ **Performance Testing** - Real-world performance
✅ **Client Demos** - Show actual app experience

### Recommended Workflow

1. **Develop in Web Storybook** - Fast iteration with `npm run storybook`
2. **Test in Native Simulator** - Verify accuracy with `npm run example:ios`
3. **Final QA on Both Platforms** - Test iOS and Android
4. **Deploy to Production** - Ship with confidence

## Advanced Usage

### Testing on Real Devices

```bash
# Start Expo dev server
npm run example

# Scan QR code with Expo Go app on your phone
# Install Expo Go: iOS (App Store) | Android (Play Store)
```

### Debugging

**iOS Simulator:**
```bash
# Open React Native Debugger
Cmd+D → Debug JS Remotely
```

**Android Emulator:**
```bash
# Open React Native Debugger
Cmd+M (Mac) or Ctrl+M (Windows/Linux) → Debug JS Remotely
```

### Hot Reload

- **Automatic** - Changes reflect immediately
- **Manual** - Press `r` in terminal
- **Full Reload** - Press `R` in terminal (shift+r)

### Metro Bundler

```bash
# Clear cache if you encounter issues
cd example
npx expo start -c
```

## Troubleshooting

### iOS Simulator Not Found

```bash
# List available simulators
xcrun simctl list devices

# Boot a simulator
xcrun simctl boot "iPhone 15"

# Or open Simulator app manually
open -a Simulator
```

### Android Emulator Not Starting

```bash
# Check if Android SDK is in PATH
echo $ANDROID_HOME

# If not, add to ~/.zshrc or ~/.bashrc:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

# List emulators
emulator -list-avds

# Start manually
emulator -avd Pixel_7_API_34
```

### Metro Bundler Port Conflict

```bash
# Kill process on port 8081
lsof -ti:8081 | xargs kill -9

# Or use different port
npm run example -- --port 8082
```

### Component Not Updating

```bash
# Clear all caches
cd example
rm -rf node_modules
rm -rf .expo
npm install
npx expo start -c
```

## Performance Tips

### iOS Simulator

- **Enable Metal** - Xcode → Simulator → Window → Graphics Quality → Metal
- **Reduce Motion** - Settings → Accessibility → Reduce Motion
- **Close Unused Apps** - Simulators use significant CPU/RAM

### Android Emulator

- **Enable Hardware Acceleration** - AVD Manager → Edit → Graphics → Hardware
- **Allocate More RAM** - AVD Manager → Edit → Advanced → RAM (4GB+)
- **Use x86_64 Images** - Faster than ARM images on Intel Macs

## Next Steps

1. **Run on Simulator** - `npm run example:ios` or `npm run example:android`
2. **Switch Design Languages** - Test all 7 in-app
3. **Toggle Dark Mode** - See color scheme changes
4. **Test Interactions** - Tap buttons, type in inputs
5. **Compare Platforms** - Run on both iOS and Android
6. **Test on Device** - Scan QR code with Expo Go

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [iOS Simulator Guide](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device)
- [Android Emulator Guide](https://developer.android.com/studio/run/emulator)
- [React Native Debugging](https://reactnative.dev/docs/debugging)

---

**See your components come to life on real simulators!** 🚀

Test all 7 design languages with native rendering, shadows, blur effects, and system fonts.
