# Getting Started with Mangekyo

This guide will help you get started with developing and using the Mangekyo component library.

## For Library Developers

### Initial Setup

1. **Clone the repository** (if you haven't already)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start Storybook** to see your components in action:
   ```bash
   npm run storybook
   ```
   This will open Storybook at `http://localhost:6006`

4. **Build the library**:
   ```bash
   npm run build
   ```

### Development Workflow

1. **Create a new component**:
   - Create a new folder in `src/components/YourComponent/`
   - Add `YourComponent.tsx` for the component implementation
   - Add `YourComponent.stories.tsx` for Storybook stories
   - Add `index.ts` to export your component
   - Update `src/components/index.ts` to export from your component

2. **Use the theme system**:
   ```tsx
   import { useTheme } from '../../themes';

   export const YourComponent = () => {
     const { theme } = useTheme();

     return (
       <View style={{ backgroundColor: theme.colors.primary }}>
         {/* Your component */}
       </View>
     );
   };
   ```

3. **Test your changes**:
   - View components in Storybook: `npm run storybook`
   - Type check: `npm run type-check`
   - Lint: `npm run lint`

4. **Build for production**:
   ```bash
   npm run build
   ```

## For Library Users

### Installation

```bash
npm install @mangekyo/components
```

### Basic Usage

1. **Wrap your app with ThemeProvider**:
   ```tsx
   import { ThemeProvider, defaultTheme } from '@mangekyo/components';

   export default function App() {
     return (
       <ThemeProvider initialTheme={defaultTheme}>
         {/* Your app */}
       </ThemeProvider>
     );
   }
   ```

2. **Use components**:
   ```tsx
   import { Button, Card, Input } from '@mangekyo/components';

   function MyScreen() {
     return (
       <Card>
         <Input label="Name" placeholder="Enter name" />
         <Button title="Submit" onPress={() => {}} />
       </Card>
     );
   }
   ```

### Customizing Themes

Create your own theme:

```tsx
import { Theme, ThemeProvider } from '@mangekyo/components';

const myTheme: Theme = {
  name: 'MyTheme',
  colors: {
    primary: '#YOUR_COLOR',
    // ... other colors
  },
  // ... other theme properties
};

<ThemeProvider initialTheme={myTheme}>
  <App />
</ThemeProvider>
```

## Available Themes

- **defaultTheme** - iOS-inspired default theme
- **materialTheme** - Google Material Design theme

## Component Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | required | Button text |
| variant | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Visual style |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| disabled | boolean | false | Disable interactions |
| loading | boolean | false | Show loading spinner |
| fullWidth | boolean | false | Take full container width |
| onPress | () => void | - | Press handler |

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Card content |
| elevation | 'none' \| 'sm' \| 'md' \| 'lg' | 'md' | Shadow elevation |
| padding | 'none' \| 'sm' \| 'md' \| 'lg' | 'md' | Internal padding |

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label |
| error | string | - | Error message |
| helperText | string | - | Helper text |
| disabled | boolean | false | Disable input |
| fullWidth | boolean | false | Take full container width |
| ...TextInputProps | - | - | All React Native TextInput props |

## Tips

1. **Always use ThemeProvider** at the root of your app
2. **Use the `useTheme` hook** to access theme values in your custom components
3. **Check Storybook** for interactive examples of all components
4. **TypeScript support** - All components are fully typed for better DX

## Need Help?

- Check the [README.md](./README.md) for more information
- View examples in Storybook: `npm run storybook`
- Look at component source code in `src/components/`

## Next Steps

- Explore the example components
- Create your own custom theme
- Add new components following the existing patterns
- Contribute back to the library!
