import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DesignLanguageProvider, useDesignLanguage } from '../themes/DesignLanguageContext';
import { ButtonV2 } from '../components/Button/ButtonV2';
import { CardV2 } from '../components/Card/CardV2';
import { InputV2 } from '../components/Input/InputV2';
import type { DesignLanguage } from '../types/tokens';

const meta = {
  title: 'Design Language System/Showcase',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Component to show all variants in a design language
const DesignLanguagePreview = ({ language }: { language: DesignLanguage }) => {
  const languageNames = {
    material: 'Material Design',
    cupertino: 'Cupertino (iOS)',
    metro: 'Metro (Windows)',
    liquidGlass: 'Liquid Glass',
    base: 'Base (Uber)',
    primer: 'Primer (GitHub)',
  };

  return (
    <DesignLanguageProvider initialDesignLanguage={language}>
      <DesignLanguagePreviewInner title={languageNames[language]} />
    </DesignLanguageProvider>
  );
};

const DesignLanguagePreviewInner = ({ title }: { title: string }) => {
  const { theme } = useDesignLanguage();

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: theme.semantic.colors.background.primary,
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          fontSize: theme.semantic.typography.heading.h5.fontSize,
          fontWeight: theme.semantic.typography.heading.h5.fontWeight,
          color: theme.semantic.colors.text.primary,
          marginBottom: 16,
        }}
      >
        {title}
      </Text>

      <View style={{ gap: 16 }}>
        {/* Buttons */}
        <View style={{ gap: 8 }}>
          <Text
            style={{
              fontSize: theme.semantic.typography.label.medium.fontSize,
              fontWeight: theme.semantic.typography.label.medium.fontWeight,
              color: theme.semantic.colors.text.secondary,
              marginBottom: 4,
            }}
          >
            Buttons
          </Text>
          <View style={{ gap: 8 }}>
            <ButtonV2 title="Primary" variant="primary" />
            <ButtonV2 title="Secondary" variant="secondary" />
            <ButtonV2 title="Outline" variant="outline" />
          </View>
        </View>

        {/* Card */}
        <View>
          <Text
            style={{
              fontSize: theme.semantic.typography.label.medium.fontSize,
              fontWeight: theme.semantic.typography.label.medium.fontWeight,
              color: theme.semantic.colors.text.secondary,
              marginBottom: 8,
            }}
          >
            Card
          </Text>
          <CardV2 elevation="medium" padding="medium">
            <Text
              style={{
                fontSize: theme.semantic.typography.body.medium.fontSize,
                color: theme.semantic.colors.text.primary,
              }}
            >
              This is a card with elevation and padding
            </Text>
          </CardV2>
        </View>

        {/* Inputs */}
        <View style={{ gap: 8 }}>
          <Text
            style={{
              fontSize: theme.semantic.typography.label.medium.fontSize,
              fontWeight: theme.semantic.typography.label.medium.fontWeight,
              color: theme.semantic.colors.text.secondary,
              marginBottom: 4,
            }}
          >
            Inputs
          </Text>
          <InputV2 label="Text Input" placeholder="Enter text..." />
          <InputV2 label="With Error" placeholder="Has error" error="This is an error message" />
        </View>
      </View>
    </View>
  );
};

export const SideBySideComparison: Story = {
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20, gap: 20 }}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}>
            Design Language Comparison
          </Text>
          <Text style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
            See how the same components look across different design languages
          </Text>
        </View>

        <View style={{ gap: 20 }}>
          <DesignLanguagePreview language="material" />
          <DesignLanguagePreview language="cupertino" />
          <DesignLanguagePreview language="metro" />
        </View>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all design languages showing how components adapt their styling.',
      },
    },
  },
};

export const InteractiveSwitcher: Story = {
  render: () => {
    const InteractiveDemo = () => {
      const { designLanguage, setDesignLanguage, colorScheme, toggleColorScheme, theme } =
        useDesignLanguage();

      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: theme.semantic.colors.background.primary,
          }}
        >
          <View style={{ maxWidth: 800, marginHorizontal: 'auto', width: '100%' }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                marginBottom: 8,
                color: theme.semantic.colors.text.primary,
              }}
            >
              Interactive Design Language Demo
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: theme.semantic.colors.text.secondary,
                marginBottom: 30,
              }}
            >
              Switch between design languages and color schemes to see components adapt in real-time
            </Text>

            {/* Controls */}
            <CardV2 elevation="medium" padding="large" style={{ marginBottom: 20 }}>
              <View style={{ gap: 20 }}>
                <View>
                  <Text
                    style={{
                      fontSize: theme.semantic.typography.heading.h6.fontSize,
                      fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                      color: theme.semantic.colors.text.primary,
                      marginBottom: 12,
                    }}
                  >
                    Design Language
                  </Text>
                  <View style={{ gap: 8 }}>
                    <ButtonV2
                      title="Material Design"
                      onPress={() => setDesignLanguage('material')}
                      variant={designLanguage === 'material' ? 'primary' : 'outline'}
                      fullWidth
                    />
                    <ButtonV2
                      title="Cupertino (iOS)"
                      onPress={() => setDesignLanguage('cupertino')}
                      variant={designLanguage === 'cupertino' ? 'primary' : 'outline'}
                      fullWidth
                    />
                    <ButtonV2
                      title="Metro (Windows)"
                      onPress={() => setDesignLanguage('metro')}
                      variant={designLanguage === 'metro' ? 'primary' : 'outline'}
                      fullWidth
                    />
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: theme.semantic.typography.heading.h6.fontSize,
                      fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                      color: theme.semantic.colors.text.primary,
                      marginBottom: 12,
                    }}
                  >
                    Color Scheme
                  </Text>
                  <ButtonV2
                    title={`Switch to ${colorScheme === 'light' ? 'Dark' : 'Light'} Mode`}
                    onPress={toggleColorScheme}
                    variant="secondary"
                    fullWidth
                  />
                </View>
              </View>
            </CardV2>

            {/* Component Showcase */}
            <View style={{ gap: 20 }}>
              {/* Buttons Section */}
              <CardV2 elevation="medium" padding="large">
                <Text
                  style={{
                    fontSize: theme.semantic.typography.heading.h6.fontSize,
                    fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 16,
                  }}
                >
                  Buttons
                </Text>
                <View style={{ gap: 10 }}>
                  <View style={{ gap: 8 }}>
                    <ButtonV2 title="Primary Button" variant="primary" fullWidth />
                    <ButtonV2 title="Secondary Button" variant="secondary" fullWidth />
                    <ButtonV2 title="Outline Button" variant="outline" fullWidth />
                    <ButtonV2 title="Ghost Button" variant="ghost" fullWidth />
                  </View>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{ flex: 1 }}>
                      <ButtonV2 title="Small" size="small" fullWidth />
                    </View>
                    <View style={{ flex: 1 }}>
                      <ButtonV2 title="Medium" size="medium" fullWidth />
                    </View>
                    <View style={{ flex: 1 }}>
                      <ButtonV2 title="Large" size="large" fullWidth />
                    </View>
                  </View>
                </View>
              </CardV2>

              {/* Cards Section */}
              <CardV2 elevation="medium" padding="large">
                <Text
                  style={{
                    fontSize: theme.semantic.typography.heading.h6.fontSize,
                    fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 16,
                  }}
                >
                  Cards with Different Elevations
                </Text>
                <View style={{ gap: 12 }}>
                  <CardV2 elevation="small" padding="medium">
                    <Text
                      style={{
                        color: theme.semantic.colors.text.primary,
                        fontSize: theme.semantic.typography.body.medium.fontSize,
                      }}
                    >
                      Small elevation
                    </Text>
                  </CardV2>
                  <CardV2 elevation="medium" padding="medium">
                    <Text
                      style={{
                        color: theme.semantic.colors.text.primary,
                        fontSize: theme.semantic.typography.body.medium.fontSize,
                      }}
                    >
                      Medium elevation
                    </Text>
                  </CardV2>
                  <CardV2 elevation="large" padding="medium">
                    <Text
                      style={{
                        color: theme.semantic.colors.text.primary,
                        fontSize: theme.semantic.typography.body.medium.fontSize,
                      }}
                    >
                      Large elevation
                    </Text>
                  </CardV2>
                </View>
              </CardV2>

              {/* Form Section */}
              <CardV2 elevation="medium" padding="large">
                <Text
                  style={{
                    fontSize: theme.semantic.typography.heading.h6.fontSize,
                    fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 16,
                  }}
                >
                  Form Example
                </Text>
                <View style={{ gap: 16 }}>
                  <InputV2 label="Name" placeholder="Enter your name" />
                  <InputV2
                    label="Email"
                    placeholder="email@example.com"
                    helperText="We'll never share your email"
                  />
                  <InputV2
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry
                  />
                  <InputV2
                    label="Confirm Password"
                    placeholder="Confirm password"
                    error="Passwords do not match"
                  />
                  <ButtonV2 title="Submit Form" variant="primary" fullWidth />
                </View>
              </CardV2>

              {/* Info Card */}
              <CardV2 elevation="large" padding="large">
                <View style={{ gap: 12 }}>
                  <Text
                    style={{
                      fontSize: theme.semantic.typography.heading.h6.fontSize,
                      fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                      color: theme.semantic.colors.text.primary,
                    }}
                  >
                    Current Settings
                  </Text>
                  <View style={{ gap: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text
                        style={{
                          color: theme.semantic.colors.text.secondary,
                          fontSize: theme.semantic.typography.body.medium.fontSize,
                        }}
                      >
                        Design Language:
                      </Text>
                      <Text
                        style={{
                          color: theme.semantic.colors.interactive.primary,
                          fontSize: theme.semantic.typography.body.medium.fontSize,
                          fontWeight: '600',
                        }}
                      >
                        {designLanguage.charAt(0).toUpperCase() + designLanguage.slice(1)}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text
                        style={{
                          color: theme.semantic.colors.text.secondary,
                          fontSize: theme.semantic.typography.body.medium.fontSize,
                        }}
                      >
                        Color Scheme:
                      </Text>
                      <Text
                        style={{
                          color: theme.semantic.colors.interactive.primary,
                          fontSize: theme.semantic.typography.body.medium.fontSize,
                          fontWeight: '600',
                        }}
                      >
                        {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
                      </Text>
                    </View>
                  </View>
                </View>
              </CardV2>
            </View>
          </View>
        </View>
      );
    };

    return (
      <DesignLanguageProvider initialDesignLanguage="material">
        <InteractiveDemo />
      </DesignLanguageProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test all components across different design languages and color schemes. Switch between Material, Cupertino, and Metro, and toggle between light and dark modes.',
      },
    },
  },
};

export const MixedDesignLanguages: Story = {
  render: () => {
    const MixedDemo = () => {
      const { theme } = useDesignLanguage();

      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: theme.semantic.colors.background.primary,
          }}
        >
          <View style={{ maxWidth: 800, marginHorizontal: 'auto', width: '100%' }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                marginBottom: 8,
                color: theme.semantic.colors.text.primary,
              }}
            >
              Mixed Design Languages
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: theme.semantic.colors.text.secondary,
                marginBottom: 30,
              }}
            >
              Components can override the global design language individually
            </Text>

            <View style={{ gap: 20 }}>
              <CardV2 elevation="medium" padding="large">
                <Text
                  style={{
                    fontSize: theme.semantic.typography.heading.h6.fontSize,
                    fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                    color: theme.semantic.colors.text.primary,
                    marginBottom: 16,
                  }}
                >
                  Same View, Different Languages
                </Text>
                <View style={{ gap: 12 }}>
                  <ButtonV2
                    title="Material Design Button"
                    designLanguage="material"
                    fullWidth
                  />
                  <ButtonV2
                    title="Cupertino (iOS) Button"
                    designLanguage="cupertino"
                    fullWidth
                  />
                  <ButtonV2
                    title="Metro (Windows) Button"
                    designLanguage="metro"
                    fullWidth
                  />
                </View>
              </CardV2>

              <View style={{ gap: 12 }}>
                <CardV2 elevation="medium" padding="medium" designLanguage="material">
                  <Text style={{ color: theme.semantic.colors.text.primary }}>
                    Material Design Card
                  </Text>
                </CardV2>
                <CardV2 elevation="medium" padding="medium" designLanguage="cupertino">
                  <Text style={{ color: theme.semantic.colors.text.primary }}>
                    Cupertino Card
                  </Text>
                </CardV2>
                <CardV2 elevation="medium" padding="medium" designLanguage="metro">
                  <Text style={{ color: theme.semantic.colors.text.primary }}>
                    Metro Card
                  </Text>
                </CardV2>
              </View>
            </View>
          </View>
        </View>
      );
    };

    return (
      <DesignLanguageProvider initialDesignLanguage="material">
        <MixedDemo />
      </DesignLanguageProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how different components can use different design languages in the same view using the designLanguage prop override.',
      },
    },
  },
};
