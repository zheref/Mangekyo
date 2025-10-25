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
    viewport: {
      viewports: {
        iphone14: {
          name: 'iPhone 14',
          styles: {
            width: '390px',
            height: '844px',
          },
          type: 'mobile',
        },
        iphone14Pro: {
          name: 'iPhone 14 Pro',
          styles: {
            width: '393px',
            height: '852px',
          },
          type: 'mobile',
        },
        pixel7: {
          name: 'Pixel 7',
          styles: {
            width: '412px',
            height: '915px',
          },
          type: 'mobile',
        },
        galaxyS23: {
          name: 'Galaxy S23',
          styles: {
            width: '360px',
            height: '780px',
          },
          type: 'mobile',
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '1024px',
          },
          type: 'desktop',
        },
      },
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
          { value: 'material', title: 'Material Design (Google)', icon: 'circle' },
          { value: 'cupertino', title: 'Cupertino (iOS/macOS)', icon: 'mobile' },
          { value: 'aqua', title: 'Aqua (Classic Mac)', icon: 'beaker' },
          { value: 'aeroGlass', title: 'Aero Glass (Vista/7)', icon: 'eye' },
          { value: 'metro', title: 'Metro (Windows 8)', icon: 'browser' },
          { value: 'fluent', title: 'Fluent (Windows 10/11)', icon: 'starhollow' },
          { value: 'liquidGlass', title: 'Liquid Glass (Modern)', icon: 'diamond' },
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
