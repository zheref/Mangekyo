# Now in React Native - Example App

This example app demonstrates the Mangekyo Design System by showcasing the React Native blog feed, similar to the "Now in Android" app concept.

## Features

### 📱 Cross-Platform Design Language Support

The app supports 7 different design languages, each with their own visual characteristics:

- **Material Design** (Google) - Paper metaphor with elevation
- **Cupertino** (Apple iOS) - Depth through translucency
- **Aqua** (Classic macOS) - Polished, glossy interface
- **Aero Glass** (Windows Vista/7) - Glass-like transparency
- **Metro UI** (Windows 8) - Content-first, typography-driven
- **Fluent Design** (Windows 10/11) - Acrylic blur and reveal effects
- **Liquid Glass** (Modern Web) - Glassmorphism with depth

### 🎨 Dynamic Theme Switching

- Switch between design languages in real-time
- Toggle between light and dark modes
- All components adapt automatically to the selected theme

### 📰 Blog Feed

- Displays the latest posts from the React Native blog
- Each post shows:
  - Title and excerpt
  - Publication date and author
  - Tags for categorization
  - Read time estimate
  - Featured image
  
### 🔍 Advanced Filtering

- **Filter by Tags**: Select one or multiple tags (e.g., "announcement", "release", "engineering")
- **Filter by Year**: Browse posts from specific years
- **Clear Filters**: Reset all filters with one tap
- **Results Summary**: See how many posts match your filters

### 🏗️ Design System Components

The app demonstrates several reusable components from the Mangekyo library:

1. **ArticleCard** - Displays blog post previews with images, tags, and metadata
2. **Tag/Chip** - Shows categorization labels with interactive capabilities
3. **Image** - Responsive image component with aspect ratio support
4. **Button** - Action buttons with multiple variants and sizes
5. **Card** - Container components with elevation and borders

## Architecture

### Component Isolation

All design language-specific logic is isolated within the library. The example app uses generic components that automatically adapt to the selected design language through the `DesignLanguageProvider`.

```jsx
<DesignLanguageProvider initialDesignLanguage="material">
  <ArticleCardV2 {...props} />
</DesignLanguageProvider>
```

### Component Tokens

Each design language has its own set of component tokens that define:

- Border radius
- Padding and spacing
- Shadows and elevation
- Typography styles
- Colors and backgrounds

Example from Material Design:
```typescript
articleCard: {
  borderRadius: 12,
  padding: 16,
  imageHeight: 200,
  shadow: { /* Material elevation */ },
  spacing: {
    headerGap: 12,
    contentGap: 8,
    tagsGap: 8,
  },
}
```

### Service Layer

The blog service (`blogService.ts`) provides:

- `fetchBlogPosts()` - Retrieves all blog posts
- `filterBlogPosts()` - Filters posts by tags, year, or search term
- `getAllTags()` - Gets unique tags from posts
- `getAllYears()` - Gets unique years from posts

## Running the App

```bash
# Install dependencies
npm install

# Start the Expo development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## File Structure

```
example/
├── App.js                    # Main app with blog feed
├── lib/
│   └── src/
│       ├── components/       # Reusable UI components
│       │   ├── ArticleCard/
│       │   ├── Image/
│       │   ├── Tag/
│       │   ├── Button/
│       │   ├── Card/
│       │   └── Input/
│       ├── services/         # Data fetching services
│       │   └── blogService.ts
│       ├── types/           # TypeScript definitions
│       │   └── blog.ts
│       └── themes/          # Design language tokens
```

## Design Philosophy

This example follows key principles:

1. **Platform Awareness** - Automatically selects appropriate design language based on platform
2. **Flexibility** - Easy to switch design languages without code changes
3. **Consistency** - All components maintain visual coherence within their design language
4. **Reusability** - Components can be used in any app, not just this example
5. **Type Safety** - Full TypeScript support ensures design token validity

## Learning from Now in Android

This app takes inspiration from Google's "Now in Android" by:

- Showcasing real-world content (React Native blog)
- Demonstrating best practices for component architecture
- Providing a reference implementation for developers
- Making it easy to explore different design patterns
- Offering a practical example of a news/blog feed app

## Next Steps

To use these components in your own app:

1. Install the Mangekyo Design System
2. Wrap your app in `DesignLanguageProvider`
3. Import and use components from `@mangekyo/components`
4. Customize with your own theme tokens if needed

```jsx
import { DesignLanguageProvider, ArticleCardV2 } from 'mangekyo';

function MyApp() {
  return (
    <DesignLanguageProvider initialDesignLanguage="material">
      <ArticleCardV2 {...yourPostData} />
    </DesignLanguageProvider>
  );
}
```
