import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DesignLanguageProvider, useDesignLanguage } from '../themes/DesignLanguageContext';
import { ButtonV2 } from '../components/Button/ButtonV2';
import { CardV2 } from '../components/Card/CardV2';

const meta = {
  title: 'Design Language System/Getting Started',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const GettingStartedContent = () => {
  const { theme } = useDesignLanguage();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.semantic.colors.background.primary,
      padding: 20,
    },
    content: {
      maxWidth: 800,
      marginHorizontal: 'auto',
      width: '100%',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.semantic.colors.text.primary,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 18,
      color: theme.semantic.colors.text.secondary,
      marginBottom: 30,
    },
    section: {
      marginBottom: 30,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.semantic.colors.text.primary,
      marginBottom: 12,
    },
    text: {
      fontSize: 16,
      color: theme.semantic.colors.text.primary,
      lineHeight: 24,
      marginBottom: 12,
    },
    bulletPoint: {
      fontSize: 16,
      color: theme.semantic.colors.text.primary,
      lineHeight: 24,
      marginBottom: 8,
      paddingLeft: 20,
    },
    code: {
      fontFamily: 'monospace',
      backgroundColor: theme.semantic.colors.surface.secondary,
      padding: 16,
      borderRadius: 8,
      marginBottom: 12,
    },
    codeText: {
      fontSize: 14,
      color: theme.semantic.colors.text.primary,
      fontFamily: 'monospace',
    },
    highlight: {
      color: theme.semantic.colors.interactive.primary,
      fontWeight: '600',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Getting Started with Design Languages</Text>
        <Text style={styles.subtitle}>
          Welcome to the Mangekyo component library! This library supports multiple design languages,
          allowing you to build apps that look native on different platforms.
        </Text>

        {/* What are Design Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What are Design Languages?</Text>
          <Text style={styles.text}>
            Design languages are comprehensive design systems that define how your UI should look and behave.
            Mangekyo supports:
          </Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Material Design</Text> (Google) - Bold shadows, vibrant colors</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Cupertino</Text> (Apple iOS) - Soft shadows, rounded corners</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Metro</Text> (Microsoft Windows) - Minimal shadows, sharp edges</Text>
        </View>

        {/* Quick Start */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Start</Text>

          <Text style={[styles.text, { fontWeight: '600', marginTop: 16 }]}>
            1. Wrap your app with DesignLanguageProvider
          </Text>
          <View style={styles.code}>
            <Text style={styles.codeText}>
              {`import { DesignLanguageProvider } from '@mangekyo/components';

function App() {
  return (
    <DesignLanguageProvider
      initialDesignLanguage="material"
      initialColorScheme="light"
    >
      {/* Your app content */}
    </DesignLanguageProvider>
  );
}`}
            </Text>
          </View>

          <Text style={[styles.text, { fontWeight: '600', marginTop: 16 }]}>
            2. Use V2 Components
          </Text>
          <View style={styles.code}>
            <Text style={styles.codeText}>
              {`import { ButtonV2, CardV2, InputV2 } from '@mangekyo/components';

function MyComponent() {
  return (
    <CardV2 elevation="medium" padding="large">
      <InputV2 label="Name" placeholder="Enter name" />
      <ButtonV2 title="Submit" onPress={() => {}} />
    </CardV2>
  );
}`}
            </Text>
          </View>

          <Text style={[styles.text, { fontWeight: '600', marginTop: 16 }]}>
            3. Switch Design Languages
          </Text>
          <View style={styles.code}>
            <Text style={styles.codeText}>
              {`import { useDesignLanguage } from '@mangekyo/components';

function LanguageSwitcher() {
  const { setDesignLanguage } = useDesignLanguage();

  return (
    <>
      <ButtonV2 title="Material" onPress={() => setDesignLanguage('material')} />
      <ButtonV2 title="iOS" onPress={() => setDesignLanguage('cupertino')} />
      <ButtonV2 title="Windows" onPress={() => setDesignLanguage('metro')} />
    </>
  );
}`}
            </Text>
          </View>
        </View>

        {/* Exploring in Storybook */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Exploring in Storybook</Text>
          <Text style={styles.text}>
            Use the toolbar controls at the top of this page:
          </Text>
          <Text style={styles.bulletPoint}>
            1. <Text style={styles.highlight}>Design Language</Text> - Switch between Material, Cupertino, and Metro
          </Text>
          <Text style={styles.bulletPoint}>
            2. <Text style={styles.highlight}>Color Scheme</Text> - Toggle between Light and Dark modes
          </Text>
          <Text style={[styles.text, { marginTop: 12 }]}>
            Watch how all components automatically adapt!
          </Text>
        </View>

        {/* Try These Stories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Try These Stories</Text>
          <Text style={styles.bulletPoint}>1. <Text style={styles.highlight}>Showcase &gt; Interactive Switcher</Text> - Full interactive demo</Text>
          <Text style={styles.bulletPoint}>2. <Text style={styles.highlight}>Showcase &gt; Side By Side Comparison</Text> - See all languages at once</Text>
          <Text style={styles.bulletPoint}>3. <Text style={styles.highlight}>Components V2 &gt; Button</Text> - Explore button variations</Text>
          <Text style={styles.bulletPoint}>4. <Text style={styles.highlight}>Components V2 &gt; Card</Text> - Explore card variations</Text>
          <Text style={styles.bulletPoint}>5. <Text style={styles.highlight}>Components V2 &gt; Input</Text> - Explore input variations</Text>
        </View>

        {/* Platform Adaptive */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Platform-Adaptive Design</Text>
          <Text style={styles.text}>
            Make your app look native on each platform:
          </Text>
          <View style={styles.code}>
            <Text style={styles.codeText}>
              {`import { Platform } from 'react-native';

const designLanguage = Platform.select({
  ios: 'cupertino',
  android: 'material',
  windows: 'metro',
  default: 'material',
});

<DesignLanguageProvider initialDesignLanguage={designLanguage}>
  <App />
</DesignLanguageProvider>`}
            </Text>
          </View>
        </View>

        {/* Learn More */}
        <CardV2 elevation="medium" padding="large" style={{ marginBottom: 30 }}>
          <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>Learn More</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Architecture</Text> - Read DESIGN_LANGUAGE_ARCHITECTURE.md</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Complete Guide</Text> - Read DESIGN_LANGUAGE_GUIDE.md</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Summary</Text> - Read MULTI_DESIGN_LANGUAGE_SUMMARY.md</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.highlight}>Storybook Guide</Text> - Read STORYBOOK_GUIDE.md</Text>
        </CardV2>

        {/* Next Steps */}
        <View style={[styles.section, { marginBottom: 60 }]}>
          <Text style={styles.sectionTitle}>Next Steps</Text>
          <Text style={styles.bulletPoint}>1. Explore the component stories</Text>
          <Text style={styles.bulletPoint}>2. Use the toolbar to switch design languages</Text>
          <Text style={styles.bulletPoint}>3. Check out the "Interactive Switcher" story</Text>
          <Text style={styles.bulletPoint}>4. Read the complete documentation</Text>
          <Text style={styles.bulletPoint}>5. Start building!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export const Introduction: Story = {
  render: () => (
    <DesignLanguageProvider initialDesignLanguage="material">
      <GettingStartedContent />
    </DesignLanguageProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Introduction to the Mangekyo design language system.',
      },
    },
  },
};
