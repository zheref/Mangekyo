import {
  DesignLanguage,
  ColorScheme,
  DesignLanguageTheme,
  SemanticTokens,
  ComponentTokens,
} from '../types/tokens';
import { basePrimitiveTokens } from '../tokens/primitives';
import {
  materialSemanticLight,
  materialSemanticDark,
} from '../tokens/semantic/material';
import {
  cupertinoSemanticLight,
  cupertinoSemanticDark,
} from '../tokens/semantic/cupertino';
import {
  metroSemanticLight,
  metroSemanticDark,
} from '../tokens/semantic/metro';
import { materialComponentTokens } from '../tokens/components/material';
import { cupertinoComponentTokens } from '../tokens/components/cupertino';
import { metroComponentTokens } from '../tokens/components/metro';

/**
 * Get semantic tokens for a design language and color scheme
 */
function getSemanticTokens(
  designLanguage: DesignLanguage,
  colorScheme: ColorScheme
): SemanticTokens {
  const tokenMap = {
    material: {
      light: materialSemanticLight,
      dark: materialSemanticDark,
    },
    cupertino: {
      light: cupertinoSemanticLight,
      dark: cupertinoSemanticDark,
    },
    metro: {
      light: metroSemanticLight,
      dark: metroSemanticDark,
    },
    // Add other design languages here
    liquidGlass: {
      light: materialSemanticLight, // Placeholder
      dark: materialSemanticDark,
    },
    base: {
      light: materialSemanticLight, // Placeholder
      dark: materialSemanticDark,
    },
    primer: {
      light: materialSemanticLight, // Placeholder
      dark: materialSemanticDark,
    },
  };

  return tokenMap[designLanguage][colorScheme];
}

/**
 * Get component tokens for a design language
 */
function getComponentTokens(designLanguage: DesignLanguage): ComponentTokens {
  const tokenMap = {
    material: materialComponentTokens,
    cupertino: cupertinoComponentTokens,
    metro: metroComponentTokens,
    // Add other design languages here
    liquidGlass: materialComponentTokens, // Placeholder
    base: materialComponentTokens, // Placeholder
    primer: materialComponentTokens, // Placeholder
  };

  return tokenMap[designLanguage];
}

/**
 * Create a complete design language theme
 */
export function createTheme(
  designLanguage: DesignLanguage = 'material',
  colorScheme: ColorScheme = 'light'
): DesignLanguageTheme {
  const name = `${designLanguage}-${colorScheme}`;

  return {
    name,
    designLanguage,
    colorScheme,
    primitives: basePrimitiveTokens,
    semantic: getSemanticTokens(designLanguage, colorScheme),
    components: getComponentTokens(designLanguage),
  };
}

/**
 * Pre-built themes for convenience
 */
export const themes = {
  // Material Design
  materialLight: createTheme('material', 'light'),
  materialDark: createTheme('material', 'dark'),

  // Cupertino (iOS)
  cupertinoLight: createTheme('cupertino', 'light'),
  cupertinoDark: createTheme('cupertino', 'dark'),

  // Metro/Fluent
  metroLight: createTheme('metro', 'light'),
  metroDark: createTheme('metro', 'dark'),

  // Add more as needed
};

/**
 * Default theme
 */
export const defaultTheme = themes.materialLight;
