import {
  DesignLanguage,
  ColorScheme,
  DesignLanguageTheme,
  SemanticTokens,
  ComponentTokens,
} from '../types/tokens';
import { basePrimitiveTokens } from '../tokens/primitives';
// Semantic tokens
import { materialSemanticLight, materialSemanticDark } from '../tokens/semantic/material';
import { cupertinoSemanticLight, cupertinoSemanticDark } from '../tokens/semantic/cupertino';
import { metroSemanticLight, metroSemanticDark } from '../tokens/semantic/metro';
import { aquaSemanticLight, aquaSemanticDark } from '../tokens/semantic/aqua';
import { aeroGlassSemanticLight, aeroGlassSemanticDark } from '../tokens/semantic/aeroGlass';
import { fluentSemanticLight, fluentSemanticDark } from '../tokens/semantic/fluent';
import { liquidGlassSemanticLight, liquidGlassSemanticDark } from '../tokens/semantic/liquidGlass';

// Component tokens
import { materialComponentTokens } from '../tokens/components/material';
import { cupertinoComponentTokens } from '../tokens/components/cupertino';
import { metroComponentTokens } from '../tokens/components/metro';
import { aquaComponentTokens } from '../tokens/components/aqua';
import { aeroGlassComponentTokens } from '../tokens/components/aeroGlass';
import { fluentComponentTokens } from '../tokens/components/fluent';
import { liquidGlassComponentTokens } from '../tokens/components/liquidGlass';

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
    aqua: {
      light: aquaSemanticLight,
      dark: aquaSemanticDark,
    },
    aeroGlass: {
      light: aeroGlassSemanticLight,
      dark: aeroGlassSemanticDark,
    },
    metro: {
      light: metroSemanticLight,
      dark: metroSemanticDark,
    },
    fluent: {
      light: fluentSemanticLight,
      dark: fluentSemanticDark,
    },
    liquidGlass: {
      light: liquidGlassSemanticLight,
      dark: liquidGlassSemanticDark,
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
    aqua: aquaComponentTokens,
    aeroGlass: aeroGlassComponentTokens,
    metro: metroComponentTokens,
    fluent: fluentComponentTokens,
    liquidGlass: liquidGlassComponentTokens,
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
  // Material Design (Google)
  materialLight: createTheme('material', 'light'),
  materialDark: createTheme('material', 'dark'),

  // Cupertino (Apple iOS/macOS)
  cupertinoLight: createTheme('cupertino', 'light'),
  cupertinoDark: createTheme('cupertino', 'dark'),

  // Aqua (Classic macOS)
  aquaLight: createTheme('aqua', 'light'),
  aquaDark: createTheme('aqua', 'dark'),

  // Aero Glass (Windows Vista/7)
  aeroGlassLight: createTheme('aeroGlass', 'light'),
  aeroGlassDark: createTheme('aeroGlass', 'dark'),

  // Metro UI (Windows 8)
  metroLight: createTheme('metro', 'light'),
  metroDark: createTheme('metro', 'dark'),

  // Fluent Design (Windows 10/11)
  fluentLight: createTheme('fluent', 'light'),
  fluentDark: createTheme('fluent', 'dark'),

  // Liquid Glass (Modern Glassmorphism)
  liquidGlassLight: createTheme('liquidGlass', 'light'),
  liquidGlassDark: createTheme('liquidGlass', 'dark'),
};

/**
 * Default theme
 */
export const defaultTheme = themes.materialLight;
