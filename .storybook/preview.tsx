import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, defaultTheme, materialTheme } from '../src/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme || 'default';
      const theme = themeName === 'material' ? materialTheme : defaultTheme;

      return (
        <ThemeProvider initialTheme={theme}>
          <div style={{ padding: '20px' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default Theme' },
          { value: 'material', title: 'Material Theme' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
