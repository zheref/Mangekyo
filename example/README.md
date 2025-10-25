# Mangekyo Component Library - Native Example App

This is a native React Native app that showcases all components from the Mangekyo component library running on real iOS and Android simulators.

## Features

- ✅ **All 7 Design Languages** - Switch between Material, Cupertino, Aqua, Aero Glass, Metro, Fluent, and Liquid Glass
- ✅ **Real Native Environment** - See exactly how components look on actual devices
- ✅ **Light & Dark Mode** - Toggle between color schemes
- ✅ **Platform-Adaptive** - Automatically selects appropriate design language (Cupertino for iOS, Material for Android)
- ✅ **Interactive Showcase** - Test all component variants, sizes, and states
- ✅ **Design Tokens Viewer** - See current theme values and color palette

## Prerequisites

### For iOS Simulator

- macOS required
- Xcode installed (available from App Store)
- Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```

### For Android Emulator

- Android Studio installed
- Android SDK configured
- At least one Android Virtual Device (AVD) created

### For All Platforms

- Node.js 18+ installed
- npm or yarn package manager

## Installation

From the **main project directory** (not the example folder):

```bash
# Install dependencies for the example app
cd example
npm install
cd ..
```

## Running on Simulators

### Option 1: From Main Project Directory (Recommended)

```bash
# Open Expo Dev Tools (choose platform from browser)
npm run example

# Launch directly on iOS Simulator
npm run example:ios

# Launch directly on Android Emulator
npm run example:android

# Run in web browser (for quick testing)
npm run example:web
```

### Option 2: From Example Directory

```bash
cd example

# Open Expo Dev Tools
npm start

# Or launch directly
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web browser
```

## How It Works

The example app:
1. **Imports components directly from `../src/`** - This is the source of the library
2. **Uses DesignLanguageProvider** - Wraps the app with theme context
3. **Auto-selects platform design language** - Cupertino on iOS, Material on Android
4. **Provides interactive showcase** - All components, variants, and design languages

This mirrors exactly how consumers will use your library in their own apps.

## What You'll See

### Design Language Selector
Switch between all 7 design languages:
- **Material Design** (Mobile) - Android's design system
- **Cupertino** (Cross-Platform) - Apple's iOS/macOS design
- **Aqua** (Desktop) - Classic macOS look
- **Aero Glass** (Desktop) - Windows Vista/7 glass effect
- **Metro UI** (Mobile) - Windows Phone 8 flat design
- **Fluent Design** (Desktop) - Modern Windows 10/11
- **Liquid Glass** (Cross-Platform) - Contemporary glassmorphism

### Component Showcase
- **Buttons** - All variants (primary, secondary, tertiary) and sizes (small, medium, large)
- **Cards** - Different elevation levels (none, small, medium, large)
- **Inputs** - Text inputs with labels, placeholders, disabled states
- **Design Tokens** - Current theme's fonts, colors, spacing values

### Theme Controls
- **Color Scheme Toggle** - Switch between light and dark mode
- **Platform Badge** - See which platform category each design language belongs to

## Development Tips

### Hot Reload
- Expo supports hot reload - changes to components will reflect immediately
- Press `r` in terminal to reload manually
- Press `Shift+m` to toggle menu

### Debug Menu
- **iOS Simulator**: Cmd+D
- **Android Emulator**: Cmd+M (Mac) or Ctrl+M (Windows/Linux)

### Testing Design Languages

1. **Mobile-Optimized**: Material Design, Metro UI
   - Best tested on phone-sized simulators
   - Touch-friendly sizing and spacing

2. **Desktop-Optimized**: Fluent, Aero Glass, Aqua
   - May look better with larger screens
   - Test on iPad simulator or in web browser

3. **Cross-Platform**: Cupertino, Liquid Glass
   - Test on both iOS and Android
   - Should adapt well to any screen size

## Troubleshooting

### iOS Simulator Won't Start

```bash
# Open Xcode and select a simulator
open -a Simulator

# Then run the app
npm run example:ios
```

### Android Emulator Won't Start

```bash
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd <device-name>

# Then run the app
npm run example:android
```

### Metro Bundler Issues

```bash
# Clear Metro cache
cd example
npx expo start -c
```

### Module Not Found Errors

```bash
# Make sure dependencies are installed
cd example
npm install
cd ..
```

## Comparing to Web Storybook

| Feature | Web Storybook | Native Example App |
|---------|---------------|-------------------|
| **Environment** | Browser (React Native Web) | Real iOS/Android simulators |
| **Accuracy** | Good approximation | 100% accurate native rendering |
| **Platform APIs** | Limited | Full native API access |
| **Shadows/Blur** | Web-based effects | Native platform effects |
| **Fonts** | Web fonts | Native system fonts |
| **Performance** | Web performance | Native performance |
| **Best For** | Quick iteration, docs | Final testing, demos |

## File Structure

```
example/
├── App.js           # Main showcase app
├── package.json     # Example app dependencies
├── app.json         # Expo configuration
├── index.js         # Entry point
└── assets/          # App assets
```

## Next Steps

1. **Test on Real Device**
   - Scan QR code from Expo Dev Tools
   - Install Expo Go app on your phone
   - Test on actual hardware

2. **Add More Components**
   - Import new components from `../src/`
   - Add showcase sections in `App.js`

3. **Create Platform-Specific Tests**
   - Test iOS-specific features
   - Test Android-specific features
   - Compare cross-platform consistency

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Mangekyo Documentation](../README.md)

---

**Happy Testing!** 🎉

See your components running natively on iOS and Android with all 7 design languages.
