# Meta Horizon Design System - Font Implementation Note

## About the Typography

### Official Meta Font: Optimist

Meta's official design system uses **Optimist** as its primary font family. Optimist is Meta's proprietary typeface designed specifically for their products and brand identity.

**However**, Optimist is **not freely available** for public use and distribution. It's a licensed font exclusive to Meta's products.

### Our Solution: Inter

For the Mangekyo implementation of Meta Horizon design system, we use **Inter** as a free, open-source alternative that closely matches Optimist's characteristics:

```typescript
fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
```

##Why Inter?

### Visual Similarity
- **Modern geometric design** similar to Optimist
- **Excellent readability** at all sizes
- **Complete weight range** (400, 500, 600, 700)
- **Optimized for screens** with careful letter-spacing

### Practical Advantages
- ✅ **Free and open-source** (SIL Open Font License)
- ✅ **Widely supported** across all platforms
- ✅ **Easy integration** via `@expo-google-fonts/inter`
- ✅ **Production-ready** used by major companies
- ✅ **Active maintenance** and updates

### Comparison

| Aspect | Optimist (Meta) | Inter (Our Choice) |
|--------|-----------------|-------------------|
| **License** | Proprietary | SIL Open Font License |
| **Availability** | Meta only | Free for all |
| **Style** | Modern, geometric | Modern, geometric |
| **Weights** | Multiple | 400, 500, 600, 700 |
| **Screen Optimization** | Excellent | Excellent |
| **Integration** | Not available | expo-google-fonts |

## Installation

The Inter font is automatically installed in the example app:

```bash
npm install @expo-google-fonts/inter
```

## Loading Fonts in Your App

```jsx
import { useFonts,  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';

function App() {
  const [fontsLoaded] = useFonts({
    'Inter': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return <YourApp />;
}
```

## Font Weights in Meta Horizon

### Typography Scale
```typescript
// Headings - Bold weight (700)
h1: 40px, fontWeight: '700'
h2: 32px, fontWeight: '700'
h3: 28px, fontWeight: '700'

// Subheadings - Semibold weight (600)
h4: 24px, fontWeight: '600'
h5: 20px, fontWeight: '600'
h6: 17px, fontWeight: '600'

// Body - Regular weight (400)
body.large:  17px, fontWeight: '400'
body.medium: 15px, fontWeight: '400'
body.small:  13px, fontWeight: '400'

// Labels - Semibold weight (600)
label.large:  15px, fontWeight: '600'
label.medium: 13px, fontWeight: '600'
label.small:  11px, fontWeight: '600'
```

## System Font Fallbacks

The font stack includes comprehensive fallbacks:

```
Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
```

This ensures:
1. **Inter** loads first (when available)
2. **-apple-system** falls back on Apple devices (San Francisco)
3. **BlinkMacSystemFont** for older WebKit browsers
4. **system-ui** for other platforms' system fonts
5. **sans-serif** as final fallback

## If You Have Access to Optimist

If you're working on an official Meta project and have access to Optimist, you can easily swap it in:

### 1. Add Optimist Font Files
Place your Optimist font files in your project:
```
assets/fonts/
  ├── Optimist-Regular.otf
  ├── Optimist-Medium.otf
  ├── Optimist-SemiBold.otf
  └── Optimist-Bold.otf
```

### 2. Update Token Files
In `/src/tokens/semantic/metaHorizon.ts`, change:

```diff
- fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
+ fontFamily: 'Optimist, Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
```

### 3. Load Fonts
```jsx
import * as Font from 'expo-font';

await Font.loadAsync({
  'Optimist': require('./assets/fonts/Optimist-Regular.otf'),
  'Optimist-Medium': require('./assets/fonts/Optimist-Medium.otf'),
  'Optimist-SemiBold': require('./assets/fonts/Optimist-SemiBold.otf'),
  'Optimist-Bold': require('./assets/fonts/Optimist-Bold.otf'),
});
```

## Other Free Alternatives

If Inter doesn't meet your needs, consider these other free alternatives:

### 1. **Work Sans**
- Similar geometric design
- Available via expo-google-fonts
- Great for headings

### 2. **IBM Plex Sans**
- Professional, modern
- Complete family
- Excellent readability

### 3. **System Fonts**
Simply use system fonts by updating to:
```typescript
fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif'
```

## Best Practices

### 1. Consistent Loading
Always load all required font weights before rendering:

```jsx
if (!fontsLoaded) {
  return <ActivityIndicator />;
}
```

### 2. Proper Font Names
Use exact font family names from the tokens:

```jsx
// ✅ Correct
<Text style={{ fontFamily: 'Inter' }}>

// ❌ Incorrect
<Text style={{ fontFamily: 'inter' }}>
```

### 3. Weight Mapping
React Native uses string weights:

```jsx
fontWeight: '400'  // Regular
fontWeight: '500'  // Medium
fontWeight: '600'  // SemiBold
fontWeight: '700'  // Bold
```

## Performance Considerations

### Font Loading Time
- Inter loads quickly (optimized for web)
- Total size: ~100-150KB for all weights
- Cached after first load

### Optimization Tips
1. **Only load needed weights** (400, 500, 600, 700)
2. **Use font-display: swap** for web builds
3. **Preload fonts** in app initialization
4. **Cache fonts** on device after first download

## Web Support

For React Native Web, Inter is automatically available via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Or use the CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## Resources

- **Inter Font**: https://rsms.me/inter/
- **Google Fonts**: https://fonts.google.com/specimen/Inter
- **Expo Google Fonts**: https://github.com/expo/google-fonts
- **Meta Design System**: https://developers.meta.com/horizon/design/

## Summary

✅ **Inter is an excellent free alternative to Optimist**  
✅ **Pre-configured and ready to use**  
✅ **Closely matches Meta's design aesthetic**  
✅ **Full weight range included**  
✅ **Production-ready and well-tested**  

The choice of Inter ensures that the Meta Horizon design system is accessible to everyone while maintaining the visual quality and characteristics of Meta's official design language.

---

**Note**: This is a community implementation of Meta's design system using freely available resources. For official Meta products, use Optimist as specified in Meta's brand guidelines.

