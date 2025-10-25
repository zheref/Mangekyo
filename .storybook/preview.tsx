import React from 'react';
import type { Preview } from '@storybook/react';
import { DesignLanguageProvider } from '../src/themes/DesignLanguageContext';
import type { DesignLanguage, ColorScheme } from '../src/types/tokens';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we control it with colorScheme
    },
  },
  decorators: [
    (Story, context) => {
      const designLanguage = (context.globals.designLanguage || 'material') as DesignLanguage;
      const colorScheme = (context.globals.colorScheme || 'light') as ColorScheme;

      return (
        <DesignLanguageProvider
          initialDesignLanguage={designLanguage}
          initialColorScheme={colorScheme}
        >
          <div
            style={{
              padding: '20px',
              minHeight: '100vh',
              backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
            }}
          >
            <Story />
          </div>
        </DesignLanguageProvider>
      );
    },
  ],
  globalTypes: {
    designLanguage: {
      name: 'Design Language',
      description: 'Select the design language for components',
      defaultValue: 'material',
      toolbar: {
        icon: 'component',
        items: [
          { value: 'material', title: 'Material Design', icon: 'circle' },
          { value: 'cupertino', title: 'Cupertino (iOS)', icon: 'mobile' },
          { value: 'metro', title: 'Metro (Windows)', icon: 'browser' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    colorScheme: {
      name: 'Color Scheme',
      description: 'Toggle between light and dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
