# Storybook Guide

This guide shows you how to use Storybook to explore and test Mangekyo components across different design languages.

## Running Storybook

```bash
npm run storybook
```

Storybook will start at `http://localhost:6006`

## Toolbar Controls

Storybook includes two powerful toolbar controls for testing design languages:

### Design Language Selector

Located in the top toolbar, click the **Design Language** dropdown to switch between:

- **Material Design** - Google's design system
- **Cupertino (iOS)** - Apple's design system
- **Metro (Windows)** - Microsoft's design system

**All components update in real-time** when you change the design language!

### Color Scheme Toggle

Click the **Color Scheme** dropdown to toggle between:

- **Light** - Light mode colors and backgrounds
- **Dark** - Dark mode colors and backgrounds

Both design languages and color schemes can be combined (e.g., Material Dark, Cupertino Light).

## Story Categories

### 🎨 Design Language System

#### Getting Started
Introduction and quick start guide for the design language system.

#### Showcase
- **Side By Side Comparison** - See all design languages at once
- **Interactive Switcher** - Full interactive playground
- **Mixed Design Languages** - Components with different languages in one view

### 🧩 Components V2

Enhanced components with design language support:

#### Button
- All variants (primary, secondary, outline, ghost)
- All sizes (small, medium, large)
- Design language comparisons
- Interactive demos

#### Card
- Different elevations
- Different paddings
- Design language comparisons
- Nested cards
- Form examples

#### Input
- All input types
- States (default, error, disabled)
- Design language comparisons
- Interactive forms

### 📦 Components (Legacy)

Original components for backward compatibility.

## Using the Toolbar

### Step-by-Step Example

1. **Start Storybook**
   ```bash
   npm run storybook
   ```

2. **Navigate to a Story**
   - Click "Components V2" → "Button" → "Primary"

3. **Change Design Language**
   - Click "Design Language" in toolbar
   - Select "Cupertino (iOS)"
   - Watch the button style change!

4. **Toggle Dark Mode**
   - Click "Color Scheme" in toolbar
   - Select "Dark"
   - See the dark mode colors

5. **Try Different Combinations**
   - Material + Dark
   - Cupertino + Light
   - Metro + Dark

## Best Stories to Explore

### For Beginners

1. **Design Language System > Getting Started**
   - Read the introduction
   - Understand core concepts

2. **Design Language System > Showcase > Side By Side Comparison**
   - See all languages at once
   - Compare visual differences

3. **Components V2 > Button > Design Language Comparison**
   - See how buttons differ
   - Simple, focused example

### For Interactive Testing

1. **Design Language System > Showcase > Interactive Switcher**
   - Full playground
   - Switch languages dynamically
   - Test all components together

2. **Components V2 > Button > Interactive Design Language Switcher**
   - Real-time button switching
   - See immediate updates

3. **Components V2 > Input > Interactive Design Language**
   - Real-time input switching
   - Test form interactions

### For Real-World Examples

1. **Components V2 > Card > With Form**
   - Complete login form
   - Multiple components together

2. **Components V2 > Input > Interactive Form**
   - Form with validation
   - Real user interactions

3. **Components V2 > Card > Nested Cards**
   - Complex layouts
   - Hierarchical structures

## Testing Scenarios

### Scenario 1: Testing Dark Mode Compatibility

1. Navigate to "Showcase > Interactive Switcher"
2. Toggle "Color Scheme" to "Dark"
3. Check all components for:
   - Readable text
   - Proper contrast
   - Appropriate colors

### Scenario 2: Cross-Platform Design

1. Navigate to "Showcase > Side By Side Comparison"
2. Compare Material, Cupertino, and Metro
3. Notice differences in:
   - Shadow styles
   - Border radius
   - Spacing
   - Typography

### Scenario 3: Component Variants

1. Navigate to "Components V2 > Button > All Variants"
2. Use toolbar to switch design languages
3. See how each variant adapts:
   - Primary button
   - Secondary button
   - Outline button
   - Ghost button

### Scenario 4: Form Testing

1. Navigate to "Components V2 > Input > Interactive Form"
2. Test the form in each design language:
   - Material Design
   - Cupertino
   - Metro
3. Test in both light and dark modes
4. Verify:
   - Input borders
   - Error states
   - Focus states
   - Disabled states

## Controls Panel

Each story includes a **Controls** panel at the bottom where you can:

### Button Controls
- `title` - Change button text
- `variant` - Switch between primary/secondary/outline/ghost
- `size` - Change button size
- `disabled` - Toggle disabled state
- `loading` - Toggle loading state
- `fullWidth` - Toggle full width
- `designLanguage` - Override design language for this component

### Card Controls
- `elevation` - Change shadow level
- `padding` - Change internal padding
- `designLanguage` - Override design language

### Input Controls
- `label` - Set input label
- `placeholder` - Set placeholder text
- `error` - Set error message
- `helperText` - Set helper text
- `disabled` - Toggle disabled state
- `designLanguage` - Override design language

## Keyboard Shortcuts

- `F` - Toggle fullscreen
- `D` - Toggle dark mode (Storybook UI, not component color scheme)
- `A` - Toggle addons panel
- `S` - Toggle sidebar
- `/` - Search stories

## Creating New Stories

### Basic Story Template

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';
import { DesignLanguageProvider } from '../../themes/DesignLanguageContext';

const meta = {
  title: 'Components V2/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="material">
        <Story />
      </DesignLanguageProvider>
    ),
  ],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Your props
  },
};
```

### Design Language Comparison Story

```tsx
export const DesignLanguageComparison: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <YourComponent designLanguage="material" />
      <YourComponent designLanguage="cupertino" />
      <YourComponent designLanguage="metro" />
    </View>
  ),
};
```

### Interactive Demo Story

```tsx
export const Interactive: Story = {
  render: () => {
    const Demo = () => {
      const { designLanguage, setDesignLanguage } = useDesignLanguage();

      return (
        <View style={{ gap: 16 }}>
          <ButtonV2
            title="Material"
            onPress={() => setDesignLanguage('material')}
            variant={designLanguage === 'material' ? 'primary' : 'outline'}
          />
          {/* Add switcher buttons */}

          <YourComponent />
        </View>
      );
    };

    return <Demo />;
  },
};
```

## Tips and Tricks

### Tip 1: Use Keyboard Navigation

Navigate stories quickly with:
- Arrow keys to move between stories
- Enter to select a story
- `/` to search

### Tip 2: Compare Side by Side

Open multiple browser windows with different design languages:
1. Open Storybook in two windows
2. Set first to Material Design
3. Set second to Cupertino
4. Navigate to same story in both
5. Compare visually side by side

### Tip 3: Screenshot All Variants

Use browser dev tools to capture screenshots:
1. Navigate to comparison stories
2. Open dev tools (F12)
3. Use screenshot tool
4. Capture all design languages at once

### Tip 4: Test Responsive Behavior

Use Storybook's viewport addon:
1. Click viewport icon in toolbar
2. Select mobile/tablet/desktop
3. See how components adapt

### Tip 5: Use Story Links

Link between related stories in documentation:
```mdx
See also: [Button Interactive Demo](?path=/story/components-v2-button--interactive-design-language-switcher)
```

## Troubleshooting

### Components Not Updating

**Problem**: Components don't change when switching design language

**Solution**: Make sure you're viewing V2 components, not legacy components
- Use "Components V2" category, not "Components"
- V2 components have design language support

### Dark Mode Not Working

**Problem**: Dark mode toggle doesn't work

**Solution**: Use the "Color Scheme" control, not Storybook's dark mode
- "Color Scheme" = Component color scheme (what you want)
- Storybook dark mode = Storybook UI theme (different)

### Toolbar Controls Missing

**Problem**: Can't find design language controls

**Solution**: Controls are in the top toolbar, not the addons panel
- Look for "Design Language" dropdown in top bar
- Look for "Color Scheme" dropdown in top bar

### Story Not Loading

**Problem**: Story shows empty or broken

**Solution**: Check browser console for errors
- Missing DesignLanguageProvider wrapper?
- Check component import paths
- Verify all dependencies installed

## Advanced Usage

### Custom Story Parameters

```tsx
export const YourStory: Story = {
  parameters: {
    layout: 'fullscreen', // Use full screen
    backgrounds: { disable: true }, // Disable backgrounds
    docs: {
      description: {
        story: 'Your story description here',
      },
    },
  },
};
```

### Story-Specific Design Language

Force a specific design language for a story:

```tsx
export const MaterialOnly: Story = {
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="material">
        <Story />
      </DesignLanguageProvider>
    ),
  ],
};
```

### Multiple Decorators

Add multiple wrappers:

```tsx
decorators: [
  (Story) => (
    <DesignLanguageProvider initialDesignLanguage="material">
      <ScrollView>
        <Story />
      </ScrollView>
    </DesignLanguageProvider>
  ),
];
```

## Resources

- **Storybook Docs**: https://storybook.js.org/docs/react/get-started/introduction
- **Design Language Guide**: See `DESIGN_LANGUAGE_GUIDE.md`
- **Architecture**: See `DESIGN_LANGUAGE_ARCHITECTURE.md`

## Next Steps

1. Explore all the stories
2. Use toolbar controls to switch languages
3. Test components in different scenarios
4. Create your own stories
5. Share screenshots with your team!

Happy exploring! 🚀
