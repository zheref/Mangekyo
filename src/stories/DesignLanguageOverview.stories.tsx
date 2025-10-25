import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';
import { CardV2 } from '../components/Card/CardV2';
import { ButtonV2 } from '../components/Button/ButtonV2';
import { DesignLanguageProvider } from '../themes/DesignLanguageContext';

const meta = {
  title: 'Design Language System/Overview',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlatformCategories: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="material">
      <View
        style={{
          padding: 40,
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
        }}
      >
        <View style={{ maxWidth: 1200, marginHorizontal: 'auto' }}>
          <View style={{ marginBottom: 48 }}>
            <Text
              style={{
                fontSize: 48,
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: 16,
              }}
            >
              Design Language System
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#666',
                lineHeight: 32,
              }}
            >
              Mangekyo provides 7 complete design languages organized by platform focus.
              Each design language includes accurate colors, fonts, and design characteristics
              from the original design systems.
            </Text>
          </View>

          <View style={{ gap: 32 }}>
            {/* Mobile Design Languages */}
            <CardV2 title="Mobile Design Languages" elevation="medium">
              <View style={{ marginTop: 16, gap: 16 }}>
                <Text style={{ fontSize: 16, color: '#666', lineHeight: 24 }}>
                  Optimized for mobile applications with touch-friendly interfaces.
                  Stories are displayed within mobile device frames for accurate preview.
                </Text>

                <View
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: 20,
                    borderRadius: 12,
                    gap: 12,
                  }}
                >
                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Material Design (Google)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Android's primary design system featuring bold shadows, vibrant colors,
                      and the 8dp grid system. Material 3 colors with #6750A4 primary.
                    </Text>
                  </View>

                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Metro UI (Windows Phone)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Microsoft's flat design for Windows Phone 8 with sharp corners,
                      no shadows, and typography-driven interface.
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#0066cc',
                      marginBottom: 8,
                    }}
                  >
                    View in Stories:
                  </Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>
                    → Design Languages / Mobile
                  </Text>
                </View>
              </View>
            </CardV2>

            {/* Desktop Design Languages */}
            <CardV2 title="Desktop Design Languages" elevation="medium">
              <View style={{ marginTop: 16, gap: 16 }}>
                <Text style={{ fontSize: 16, color: '#666', lineHeight: 24 }}>
                  Designed for desktop applications with larger screens and mouse/keyboard
                  interaction. Stories use full desktop viewport.
                </Text>

                <View
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: 20,
                    borderRadius: 12,
                    gap: 12,
                  }}
                >
                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Fluent Design (Windows 10/11)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Microsoft's modern design system featuring acrylic materials, layered
                      shadows, and reveal effects. Uses #0078D4 Windows blue.
                    </Text>
                  </View>

                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Aero Glass (Windows Vista/7)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Iconic frosted glass design with Gaussian blur, translucency, and
                      glass tint coloring. Features #0078D7 accent color.
                    </Text>
                  </View>

                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Aqua (Classic macOS)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Apple's classic design (2000-2014) with brushed metal textures,
                      glossy buttons, and #4A90D9 aqua blue.
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#0066cc',
                      marginBottom: 8,
                    }}
                  >
                    View in Stories:
                  </Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>
                    → Design Languages / Desktop
                  </Text>
                </View>
              </View>
            </CardV2>

            {/* Cross-Platform Design Languages */}
            <CardV2 title="Cross-Platform Design Languages" elevation="medium">
              <View style={{ marginTop: 16, gap: 16 }}>
                <Text style={{ fontSize: 16, color: '#666', lineHeight: 24 }}>
                  Versatile design languages that work beautifully on both mobile and desktop.
                  Stories are available in both device frame and desktop layouts.
                </Text>

                <View
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: 20,
                    borderRadius: 12,
                    gap: 12,
                  }}
                >
                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Cupertino (iOS & macOS)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Apple's unified design language with vibrancy, translucency, and
                      system colors (#007AFF blue). Uses SF Pro font family.
                    </Text>
                  </View>

                  <View style={{ gap: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#1a1a1a' }}>
                      Liquid Glass (Modern)
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Contemporary glassmorphism with heavy backdrop blur, gradient
                      backgrounds, and very rounded corners (16-24px).
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#0066cc',
                      marginBottom: 8,
                    }}
                  >
                    View in Stories:
                  </Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>
                    → Design Languages / Cross-Platform
                  </Text>
                </View>
              </View>
            </CardV2>

            {/* Features */}
            <CardV2 title="Key Features" elevation="large">
              <View style={{ marginTop: 16, gap: 16 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 24,
                    flexWrap: 'wrap',
                  }}
                >
                  <View style={{ flex: 1, minWidth: 250 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                      📱 Mobile Device Frames
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Mobile stories render within accurate device frames (iPhone, Pixel)
                      for realistic preview
                    </Text>
                  </View>

                  <View style={{ flex: 1, minWidth: 250 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                      🎨 Accurate Design Tokens
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Official colors, fonts, and measurements from each design system
                    </Text>
                  </View>

                  <View style={{ flex: 1, minWidth: 250 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                      🌓 Light & Dark Modes
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      All 7 design languages support both light and dark color schemes
                    </Text>
                  </View>

                  <View style={{ flex: 1, minWidth: 250 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                      📐 Viewport Controls
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      Switch between device sizes using Storybook's viewport toolbar
                    </Text>
                  </View>
                </View>
              </View>
            </CardV2>

            {/* Usage */}
            <CardV2 title="Getting Started" elevation="medium">
              <View style={{ marginTop: 16, gap: 16 }}>
                <View
                  style={{
                    backgroundColor: '#1a1a1a',
                    padding: 20,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 14,
                      color: '#00ff00',
                      lineHeight: 22,
                    }}
                  >
                    {`import { DesignLanguageProvider } from '@mangekyo/components';\n\n`}
                    {`<DesignLanguageProvider\n`}
                    {`  initialDesignLanguage="fluent"\n`}
                    {`  initialColorScheme="dark"\n`}
                    {`>\n`}
                    {`  <App />\n`}
                    {`</DesignLanguageProvider>`}
                  </Text>
                </View>

                <View style={{ gap: 8 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600' }}>
                    Platform-Adaptive Design:
                  </Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>
                    Automatically select the right design language based on the platform
                    using React Native's Platform.select():
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: '#1a1a1a',
                    padding: 20,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 14,
                      color: '#00ff00',
                      lineHeight: 22,
                    }}
                  >
                    {`const language = Platform.select({\n`}
                    {`  ios: 'cupertino',\n`}
                    {`  android: 'material',\n`}
                    {`  macos: 'aqua',\n`}
                    {`  windows: 'fluent',\n`}
                    {`  web: 'liquidGlass',\n`}
                    {`});`}
                  </Text>
                </View>
              </View>
            </CardV2>
          </View>
        </View>
      </View>
    </DesignLanguageProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
