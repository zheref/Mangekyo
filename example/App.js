import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DesignLanguageProvider, useDesignLanguage } from './lib/src/themes/DesignLanguageContext';
import { ButtonV2 } from './lib/src/components/Button/ButtonV2';
import { CardV2 } from './lib/src/components/Card/CardV2';
import { InputV2 } from './lib/src/components/Input/InputV2';

const ComponentShowcase = () => {
  const { theme, designLanguage, setDesignLanguage, colorScheme, setColorScheme } = useDesignLanguage();
  const [inputValue, setInputValue] = useState('');

  const languages = [
    { value: 'material', label: 'Material Design', platform: 'Mobile' },
    { value: 'cupertino', label: 'Cupertino', platform: 'Cross-Platform' },
    { value: 'aqua', label: 'Aqua', platform: 'Desktop' },
    { value: 'aeroGlass', label: 'Aero Glass', platform: 'Desktop' },
    { value: 'metro', label: 'Metro UI', platform: 'Mobile' },
    { value: 'fluent', label: 'Fluent Design', platform: 'Desktop' },
    { value: 'liquidGlass', label: 'Liquid Glass', platform: 'Cross-Platform' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.semantic.colors.background.primary }]}
      contentContainerStyle={styles.contentContainer}
    >
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.semantic.colors.text.primary }]}>
          Mangekyo Component Library
        </Text>
        <Text style={[styles.subtitle, { color: theme.semantic.colors.text.secondary }]}>
          {Platform.OS.charAt(0).toUpperCase() + Platform.OS.slice(1)} Native Preview
        </Text>
      </View>

      {/* Theme Selector */}
      <CardV2 title="Design Language" elevation="medium">
        <View style={styles.themeSelector}>
          <Text style={[styles.currentTheme, { color: theme.semantic.colors.text.primary }]}>
            Current: {languages.find(l => l.value === designLanguage)?.label || designLanguage}
          </Text>
          <Text style={[styles.platformBadge, { color: theme.semantic.colors.text.secondary }]}>
            {languages.find(l => l.value === designLanguage)?.platform}
          </Text>
        </View>

        <View style={styles.buttonGrid}>
          {languages.map((lang) => (
            <View key={lang.value} style={styles.buttonWrapper}>
              <ButtonV2
                title={lang.label}
                onPress={() => setDesignLanguage(lang.value)}
                variant={designLanguage === lang.value ? 'primary' : 'secondary'}
                size="small"
              />
            </View>
          ))}
        </View>
      </CardV2>

      {/* Color Scheme Toggle */}
      <CardV2 title="Color Scheme" elevation="small">
        <View style={styles.toggleRow}>
          <Text style={[styles.toggleLabel, { color: theme.semantic.colors.text.primary }]}>
            {colorScheme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </Text>
          <Switch
            value={colorScheme === 'dark'}
            onValueChange={(value) => setColorScheme(value ? 'dark' : 'light')}
            trackColor={{
              false: theme.semantic.colors.border.secondary,
              true: theme.semantic.colors.interactive.primary,
            }}
            thumbColor={colorScheme === 'dark' ? '#fff' : '#f4f3f4'}
          />
        </View>
      </CardV2>

      {/* Button Showcase */}
      <CardV2 title="Buttons" subtitle="All button variants" elevation="medium">
        <View style={styles.componentSection}>
          <ButtonV2 title="Primary Button" variant="primary" />
          <ButtonV2 title="Secondary Button" variant="secondary" />
          <ButtonV2 title="Tertiary Button" variant="tertiary" />
          <ButtonV2 title="Disabled Button" variant="primary" disabled />
        </View>
      </CardV2>

      {/* Button Sizes */}
      <CardV2 title="Button Sizes" elevation="small">
        <View style={styles.componentSection}>
          <ButtonV2 title="Small" variant="primary" size="small" />
          <ButtonV2 title="Medium" variant="primary" size="medium" />
          <ButtonV2 title="Large" variant="primary" size="large" />
        </View>
      </CardV2>

      {/* Input Showcase */}
      <CardV2 title="Inputs" subtitle="Text input components" elevation="medium">
        <View style={styles.componentSection}>
          <InputV2
            label="Email"
            placeholder="Enter your email"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <InputV2
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <InputV2
            label="Disabled Input"
            placeholder="This is disabled"
            disabled
          />
        </View>
      </CardV2>

      {/* Card Elevations */}
      <CardV2 title="Card Elevations" elevation="medium">
        <View style={styles.componentSection}>
          <CardV2 title="No Elevation" elevation="none">
            <Text style={[styles.cardContent, { color: theme.semantic.colors.text.secondary }]}>
              Flat card with no shadow
            </Text>
          </CardV2>

          <CardV2 title="Small Elevation" elevation="small">
            <Text style={[styles.cardContent, { color: theme.semantic.colors.text.secondary }]}>
              Subtle shadow for gentle depth
            </Text>
          </CardV2>

          <CardV2 title="Medium Elevation" elevation="medium">
            <Text style={[styles.cardContent, { color: theme.semantic.colors.text.secondary }]}>
              Standard shadow for common cards
            </Text>
          </CardV2>

          <CardV2 title="Large Elevation" elevation="large">
            <Text style={[styles.cardContent, { color: theme.semantic.colors.text.secondary }]}>
              Prominent shadow for important content
            </Text>
          </CardV2>
        </View>
      </CardV2>

      {/* Design Tokens */}
      <CardV2 title="Design Tokens" subtitle="Current theme values" elevation="large">
        <View style={styles.tokenSection}>
          <View style={styles.tokenRow}>
            <Text style={[styles.tokenLabel, { color: theme.semantic.colors.text.secondary }]}>
              Font Family:
            </Text>
            <Text style={[styles.tokenValue, { color: theme.semantic.colors.text.primary }]}>
              {theme.semantic.typography.body.medium.fontFamily}
            </Text>
          </View>

          <View style={styles.tokenRow}>
            <Text style={[styles.tokenLabel, { color: theme.semantic.colors.text.secondary }]}>
              Border Radius:
            </Text>
            <Text style={[styles.tokenValue, { color: theme.semantic.colors.text.primary }]}>
              {theme.components.button.borderRadius}px
            </Text>
          </View>

          <View style={styles.tokenRow}>
            <Text style={[styles.tokenLabel, { color: theme.semantic.colors.text.secondary }]}>
              Button Height:
            </Text>
            <Text style={[styles.tokenValue, { color: theme.semantic.colors.text.primary }]}>
              {theme.components.button.minHeight.medium}px
            </Text>
          </View>
        </View>

        <Text style={[styles.colorTitle, { color: theme.semantic.colors.text.primary }]}>
          Color Palette
        </Text>
        <View style={styles.colorPalette}>
          <View
            style={[
              styles.colorSwatch,
              { backgroundColor: theme.semantic.colors.interactive.primary },
            ]}
          />
          <View
            style={[
              styles.colorSwatch,
              { backgroundColor: theme.semantic.colors.interactive.secondary },
            ]}
          />
          <View
            style={[
              styles.colorSwatch,
              { backgroundColor: theme.semantic.colors.feedback.success },
            ]}
          />
          <View
            style={[
              styles.colorSwatch,
              { backgroundColor: theme.semantic.colors.feedback.warning },
            ]}
          />
          <View
            style={[
              styles.colorSwatch,
              { backgroundColor: theme.semantic.colors.feedback.error },
            ]}
          />
          <View
            style={[
              styles.colorSwatch,
              { backgroundColor: theme.semantic.colors.feedback.info },
            ]}
          />
        </View>
      </CardV2>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.semantic.colors.text.secondary }]}>
          Running on {Platform.OS} • {colorScheme} mode
        </Text>
      </View>
    </ScrollView>
  );
};

export default function App() {
  // Auto-select design language based on platform
  const defaultLanguage = Platform.select({
    ios: 'cupertino',
    android: 'material',
    default: 'material',
  });

  return (
    <DesignLanguageProvider
      initialDesignLanguage={defaultLanguage}
      initialColorScheme="light"
    >
      <ComponentShowcase />
    </DesignLanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  themeSelector: {
    marginBottom: 16,
  },
  currentTheme: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  platformBadge: {
    fontSize: 14,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  buttonWrapper: {
    flexBasis: '48%',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  componentSection: {
    gap: 12,
    marginTop: 12,
  },
  cardContent: {
    fontSize: 14,
    marginTop: 8,
  },
  tokenSection: {
    gap: 12,
    marginTop: 12,
  },
  tokenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tokenLabel: {
    fontSize: 14,
  },
  tokenValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  colorTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 12,
  },
  colorPalette: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  colorSwatch: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  footer: {
    marginTop: 32,
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});
