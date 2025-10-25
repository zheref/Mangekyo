import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';
import { DesignLanguageProvider, useDesignLanguage } from '../themes/DesignLanguageContext';
import { ButtonV2 } from '../components/Button/ButtonV2';
import { CardV2 } from '../components/Card/CardV2';
import { InputV2 } from '../components/Input/InputV2';
import { DeviceFrame } from '../components/DeviceFrame';
import type { DesignLanguage } from '../types/tokens';

const meta = {
  title: 'Design Languages/Mobile',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'iphone14',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, minHeight: '100vh' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const mobileLanguages: DesignLanguage[] = ['material', 'metro'];

const languageNames = {
  material: 'Material Design (Android)',
  metro: 'Metro UI (Windows Phone)',
};

const languageDescriptions = {
  material: 'Google\'s Material Design system, the standard for Android applications',
  metro: 'Microsoft\'s Metro UI, originally designed for Windows Phone 8',
};

const DesignLanguagePreview = ({ language }: { language: DesignLanguage }) => {
  const { theme } = useDesignLanguage();
  const [inputValue, setInputValue] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.semantic.colors.background.primary,
        padding: theme.semantic.spacing.component.padding,
      }}
    >
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: theme.semantic.colors.text.primary,
            marginBottom: 8,
          }}
        >
          {languageNames[language]}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: theme.semantic.colors.text.secondary,
            marginBottom: 16,
          }}
        >
          {languageDescriptions[language]}
        </Text>
      </View>

      <View style={{ gap: 16 }}>
        <CardV2
          title="Welcome to Mobile Design"
          subtitle="Explore mobile-optimized components"
          elevation="medium"
        >
          <View style={{ gap: 12, marginTop: 12 }}>
            <ButtonV2 title="Primary Action" variant="primary" />
            <ButtonV2 title="Secondary Action" variant="secondary" />
          </View>
        </CardV2>

        <CardV2 title="User Input" elevation="small">
          <View style={{ gap: 12, marginTop: 12 }}>
            <InputV2
              label="Email"
              placeholder="Enter your email"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <ButtonV2 title="Submit" variant="primary" size="medium" />
          </View>
        </CardV2>

        <CardV2 title="Design Tokens" elevation="small">
          <View style={{ gap: 8, marginTop: 12 }}>
            <Text style={{ fontSize: 12, color: theme.semantic.colors.text.secondary }}>
              Font: {theme.semantic.typography.body.medium.fontFamily}
            </Text>
            <Text style={{ fontSize: 12, color: theme.semantic.colors.text.secondary }}>
              Border Radius: {theme.components.button.borderRadius}px
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                marginTop: 8,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.semantic.colors.interactive.primary,
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.semantic.colors.interactive.secondary,
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.semantic.colors.feedback.success,
                  borderRadius: 8,
                }}
              />
            </View>
          </View>
        </CardV2>
      </View>
    </View>
  );
};

export const MaterialDesign: Story = {
  render: () => (
    <DeviceFrame deviceType="pixel7">
      <DesignLanguageProvider initialDesignLanguage="material" initialColorScheme="light">
        <DesignLanguagePreview language="material" />
      </DesignLanguageProvider>
    </DeviceFrame>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'pixel7',
    },
  },
};

export const MetroUI: Story = {
  render: () => (
    <DeviceFrame deviceType="iphone14">
      <DesignLanguageProvider initialDesignLanguage="metro" initialColorScheme="light">
        <DesignLanguagePreview language="metro" />
      </DesignLanguageProvider>
    </DeviceFrame>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone14',
    },
  },
};

export const SideBySideComparison: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 40, padding: 40, flexWrap: 'wrap' }}>
      {mobileLanguages.map((language) => (
        <DeviceFrame key={language} deviceType="iphone14">
          <DesignLanguageProvider initialDesignLanguage={language} initialColorScheme="light">
            <DesignLanguagePreview language={language} />
          </DesignLanguageProvider>
        </DeviceFrame>
      ))}
    </View>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
};

const InteractiveSwitcherContent = () => {
  const { designLanguage, setDesignLanguage } = useDesignLanguage();

  return (
    <DeviceFrame deviceType="iphone14">
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 16 }}>
            Switch Mobile Design Language
          </Text>
          <View style={{ gap: 12 }}>
            <ButtonV2
              title="Material Design (Android)"
              onPress={() => setDesignLanguage('material')}
              variant={designLanguage === 'material' ? 'primary' : 'secondary'}
            />
            <ButtonV2
              title="Metro UI (Windows Phone)"
              onPress={() => setDesignLanguage('metro')}
              variant={designLanguage === 'metro' ? 'primary' : 'secondary'}
            />
          </View>
        </View>

        <DesignLanguagePreview language={designLanguage} />
      </View>
    </DeviceFrame>
  );
};

export const InteractiveSwitcher: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="material">
      <InteractiveSwitcherContent />
    </DesignLanguageProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone14',
    },
  },
};
