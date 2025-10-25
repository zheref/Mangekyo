import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';
import { DesignLanguageProvider, useDesignLanguage } from '../themes/DesignLanguageContext';
import { ButtonV2 } from '../components/Button/ButtonV2';
import { CardV2 } from '../components/Card/CardV2';
import { InputV2 } from '../components/Input/InputV2';
import type { DesignLanguage } from '../types/tokens';

const meta = {
  title: 'Design Languages/Desktop',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const desktopLanguages: DesignLanguage[] = ['fluent', 'aeroGlass', 'aqua'];

const languageNames = {
  fluent: 'Fluent Design (Windows 10/11)',
  aeroGlass: 'Aero Glass (Windows Vista/7)',
  aqua: 'Aqua (Classic macOS)',
};

const languageDescriptions = {
  fluent: 'Microsoft\'s modern design system featuring acrylic materials and depth',
  aeroGlass: 'Windows Vista/7 design with frosted glass and translucency',
  aqua: 'Classic macOS design with brushed metal and glossy buttons',
};

const DesignLanguagePreview = ({ language }: { language: DesignLanguage }) => {
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
            {languageDescriptions[language]}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <View style={{ flex: 1, minWidth: 350 }}>
            <CardV2
              title="Desktop Application"
              subtitle="Optimized for desktop experiences"
              elevation="medium"
            >
              <View style={{ gap: 16, marginTop: 16 }}>
                <ButtonV2 title="Primary Action" variant="primary" size="large" />
                <ButtonV2 title="Secondary Action" variant="secondary" size="large" />
                <ButtonV2 title="Tertiary Action" variant="tertiary" size="large" />
              </View>
            </CardV2>
          </View>

          <View style={{ flex: 1, minWidth: 350 }}>
            <CardV2 title="Form Inputs" elevation="medium">
              <View style={{ gap: 16, marginTop: 16 }}>
                <InputV2
                  label="Username"
                  placeholder="Enter your username"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
                <InputV2
                  label="Password"
                  placeholder="Enter your password"
                  secureTextEntry
                />
                <ButtonV2 title="Sign In" variant="primary" size="large" />
              </View>
            </CardV2>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <CardV2 title="Design System Tokens" elevation="large">
            <View
              style={{
                flexDirection: 'row',
                gap: 32,
                marginTop: 16,
                flexWrap: 'wrap',
              }}
            >
              <View style={{ flex: 1, minWidth: 200 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 12,
                  }}
                >
                  Typography
                </Text>
                <View style={{ gap: 6 }}>
                  <Text style={{ fontSize: 14, color: theme.semantic.colors.text.secondary }}>
                    Font: {theme.semantic.typography.body.medium.fontFamily}
                  </Text>
                  <Text style={{ fontSize: 14, color: theme.semantic.colors.text.secondary }}>
                    Body Size: {theme.semantic.typography.body.medium.fontSize}px
                  </Text>
                  <Text style={{ fontSize: 14, color: theme.semantic.colors.text.secondary }}>
                    Heading Size: {theme.semantic.typography.heading.h3.fontSize}px
                  </Text>
                </View>
              </View>

              <View style={{ flex: 1, minWidth: 200 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 12,
                  }}
                >
                  Spacing & Radius
                </Text>
                <View style={{ gap: 6 }}>
                  <Text style={{ fontSize: 14, color: theme.semantic.colors.text.secondary }}>
                    Border Radius: {theme.components.button.borderRadius}px
                  </Text>
                  <Text style={{ fontSize: 14, color: theme.semantic.colors.text.secondary }}>
                    Button Height: {theme.components.button.minHeight.medium}px
                  </Text>
                  <Text style={{ fontSize: 14, color: theme.semantic.colors.text.secondary }}>
                    Card Padding: {theme.components.card.padding.medium}
                  </Text>
                </View>
              </View>

              <View style={{ flex: 1, minWidth: 200 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 12,
                  }}
                >
                  Color Palette
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: theme.semantic.colors.interactive.primary,
                      borderRadius: 12,
                    }}
                  />
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: theme.semantic.colors.interactive.secondary,
                      borderRadius: 12,
                    }}
                  />
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: theme.semantic.colors.feedback.success,
                      borderRadius: 12,
                    }}
                  />
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: theme.semantic.colors.feedback.error,
                      borderRadius: 12,
                    }}
                  />
                </View>
              </View>
            </View>
          </CardV2>
        </View>
      </View>
    </View>
  );
};

export const FluentDesign: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="fluent" initialColorScheme="light">
      <DesignLanguagePreview language="fluent" />
    </DesignLanguageProvider>
  ),
};

export const AeroGlass: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="aeroGlass" initialColorScheme="light">
      <DesignLanguagePreview language="aeroGlass" />
    </DesignLanguageProvider>
  ),
};

export const Aqua: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="aqua" initialColorScheme="light">
      <DesignLanguagePreview language="aqua" />
    </DesignLanguageProvider>
  ),
};

export const SideBySideComparison: Story = {
  render: () => (
    <View style={{ padding: 40 }}>
      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 36, fontWeight: '700', marginBottom: 12 }}>
          Desktop Design Languages
        </Text>
        <Text style={{ fontSize: 18, color: '#666', marginBottom: 24 }}>
          Compare Fluent, Aero Glass, and Aqua side by side
        </Text>
      </View>
      <View style={{ gap: 40 }}>
        {desktopLanguages.map((language) => (
          <View key={language}>
            <DesignLanguageProvider initialDesignLanguage={language} initialColorScheme="light">
              <DesignLanguagePreview language={language} />
            </DesignLanguageProvider>
          </View>
        ))}
      </View>
    </View>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

const InteractiveSwitcherContent = () => {
  const { designLanguage, setDesignLanguage } = useDesignLanguage();

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
          Switch Desktop Design Language
        </Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <ButtonV2
            title="Fluent (Windows 10/11)"
            onPress={() => setDesignLanguage('fluent')}
            variant={designLanguage === 'fluent' ? 'primary' : 'secondary'}
          />
          <ButtonV2
            title="Aero Glass (Vista/7)"
            onPress={() => setDesignLanguage('aeroGlass')}
            variant={designLanguage === 'aeroGlass' ? 'primary' : 'secondary'}
          />
          <ButtonV2
            title="Aqua (Classic Mac)"
            onPress={() => setDesignLanguage('aqua')}
            variant={designLanguage === 'aqua' ? 'primary' : 'secondary'}
          />
        </View>
      </View>

      <DesignLanguagePreview language={designLanguage} />
    </View>
  );
};

export const InteractiveSwitcher: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="fluent">
      <InteractiveSwitcherContent />
    </DesignLanguageProvider>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
