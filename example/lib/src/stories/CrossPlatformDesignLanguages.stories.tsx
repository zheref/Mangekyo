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
  title: 'Design Languages/Cross-Platform',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const crossPlatformLanguages: DesignLanguage[] = ['cupertino', 'liquidGlass'];

const languageNames = {
  cupertino: 'Cupertino (iOS & macOS)',
  liquidGlass: 'Liquid Glass (Modern)',
};

const languageDescriptions = {
  cupertino: 'Apple\'s design language for iOS and macOS with translucency and depth',
  liquidGlass: 'Modern glassmorphism design for web and mobile platforms',
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
          title="Cross-Platform Ready"
          subtitle="Works on mobile and desktop"
          elevation="medium"
        >
          <View style={{ gap: 12, marginTop: 12 }}>
            <ButtonV2 title="Primary Action" variant="primary" />
            <ButtonV2 title="Secondary Action" variant="secondary" />
          </View>
        </CardV2>

        <CardV2 title="Adaptive Design" elevation="small">
          <View style={{ gap: 12, marginTop: 12 }}>
            <InputV2
              label="Email"
              placeholder="user@example.com"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <ButtonV2 title="Continue" variant="primary" size="medium" />
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

const DesktopPreview = ({ language }: { language: DesignLanguage }) => {
  const { theme } = useDesignLanguage();
  const [inputValue, setInputValue] = useState('');

  return (
    <View
      style={{
        minHeight: '100vh',
        backgroundColor: theme.semantic.colors.background.primary,
        padding: 40,
      }}
    >
      <View style={{ maxWidth: 1200, marginHorizontal: 'auto' }}>
        <View style={{ marginBottom: 32 }}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: '700',
              color: theme.semantic.colors.text.primary,
              marginBottom: 12,
            }}
          >
            {languageNames[language]}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: theme.semantic.colors.text.secondary,
              marginBottom: 24,
            }}
          >
            Desktop Experience
          </Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}>
          <View style={{ flex: 1, minWidth: 350 }}>
            <CardV2 title="Desktop Application" elevation="medium">
              <View style={{ gap: 16, marginTop: 16 }}>
                <ButtonV2 title="Primary Action" variant="primary" size="large" />
                <ButtonV2 title="Secondary Action" variant="secondary" size="large" />
              </View>
            </CardV2>
          </View>

          <View style={{ flex: 1, minWidth: 350 }}>
            <CardV2 title="Form" elevation="medium">
              <View style={{ gap: 16, marginTop: 16 }}>
                <InputV2
                  label="Username"
                  placeholder="Enter username"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
                <ButtonV2 title="Submit" variant="primary" size="large" />
              </View>
            </CardV2>
          </View>
        </View>
      </View>
    </View>
  );
};

// Mobile Stories
export const CupertinoMobile: Story = {
  render: () => (
    <DeviceFrame deviceType="iphone14Pro">
      <DesignLanguageProvider initialDesignLanguage="cupertino" initialColorScheme="light">
        <DesignLanguagePreview language="cupertino" />
      </DesignLanguageProvider>
    </DeviceFrame>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone14Pro',
    },
  },
};

export const LiquidGlassMobile: Story = {
  render: () => (
    <DeviceFrame deviceType="iphone14">
      <DesignLanguageProvider initialDesignLanguage="liquidGlass" initialColorScheme="light">
        <DesignLanguagePreview language="liquidGlass" />
      </DesignLanguageProvider>
    </DeviceFrame>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone14',
    },
  },
};

// Desktop Stories
export const CupertinoDesktop: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="cupertino" initialColorScheme="light">
      <DesktopPreview language="cupertino" />
    </DesignLanguageProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const LiquidGlassDesktop: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="liquidGlass" initialColorScheme="light">
      <DesktopPreview language="liquidGlass" />
    </DesignLanguageProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Mobile Comparison
export const MobileSideBySide: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 40, padding: 40, flexWrap: 'wrap' }}>
      {crossPlatformLanguages.map((language) => (
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

// Desktop Comparison
export const DesktopSideBySide: Story = {
  render: () => (
    <View style={{ padding: 40, gap: 40 }}>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 36, fontWeight: '700', marginBottom: 12 }}>
          Cross-Platform Design Languages (Desktop)
        </Text>
        <Text style={{ fontSize: 18, color: '#666' }}>
          Compare Cupertino and Liquid Glass on desktop
        </Text>
      </View>
      {crossPlatformLanguages.map((language) => (
        <View key={language}>
          <DesignLanguageProvider initialDesignLanguage={language} initialColorScheme="light">
            <DesktopPreview language={language} />
          </DesignLanguageProvider>
        </View>
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

// Interactive Switcher
const InteractiveSwitcherContent = ({ platform }: { platform: 'mobile' | 'desktop' }) => {
  const { designLanguage, setDesignLanguage } = useDesignLanguage();

  if (platform === 'mobile') {
    return (
      <DeviceFrame deviceType="iphone14">
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 16 }}>
              Switch Design Language
            </Text>
            <View style={{ gap: 12 }}>
              <ButtonV2
                title="Cupertino (iOS/macOS)"
                onPress={() => setDesignLanguage('cupertino')}
                variant={designLanguage === 'cupertino' ? 'primary' : 'secondary'}
              />
              <ButtonV2
                title="Liquid Glass (Modern)"
                onPress={() => setDesignLanguage('liquidGlass')}
                variant={designLanguage === 'liquidGlass' ? 'primary' : 'secondary'}
              />
            </View>
          </View>

          <DesignLanguagePreview language={designLanguage} />
        </View>
      </DeviceFrame>
    );
  }

  return (
    <View>
      <View
        style={{
          padding: 40,
          backgroundColor: '#f5f5f5',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 16 }}>
          Switch Cross-Platform Design Language
        </Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <ButtonV2
            title="Cupertino (iOS/macOS)"
            onPress={() => setDesignLanguage('cupertino')}
            variant={designLanguage === 'cupertino' ? 'primary' : 'secondary'}
          />
          <ButtonV2
            title="Liquid Glass (Modern)"
            onPress={() => setDesignLanguage('liquidGlass')}
            variant={designLanguage === 'liquidGlass' ? 'primary' : 'secondary'}
          />
        </View>
      </View>

      <DesktopPreview language={designLanguage} />
    </View>
  );
};

export const InteractiveSwitcherMobile: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="cupertino">
      <InteractiveSwitcherContent platform="mobile" />
    </DesignLanguageProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone14',
    },
  },
};

export const InteractiveSwitcherDesktop: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="cupertino">
      <InteractiveSwitcherContent platform="desktop" />
    </DesignLanguageProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
};
