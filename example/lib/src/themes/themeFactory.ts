import {
  DesignLanguage,
  ColorScheme,
  DesignLanguageTheme,
  SemanticTokens,
  ComponentTokens,
} from '../types/tokens';
import { basePrimitiveTokens } from '../tokens/primitives';
// Semantic tokens
import { holoSemanticLight, holoSemanticDark } from '../tokens/semantic/holo';
import { materialSemanticLight, materialSemanticDark } from '../tokens/semantic/material';
import { flatSemanticLight, flatSemanticDark } from '../tokens/semantic/flat';
import { liquidGlassSemanticLight, liquidGlassSemanticDark } from '../tokens/semantic/liquidGlass';
import { metroSemanticLight, metroSemanticDark } from '../tokens/semantic/metro';
import { fluentSemanticLight, fluentSemanticDark } from '../tokens/semantic/fluent';
import { metaHorizonSemanticLight, metaHorizonSemanticDark } from '../tokens/semantic/metaHorizon';
import { cupertinoSemanticLight, cupertinoSemanticDark } from '../tokens/semantic/cupertino';
import { aquaSemanticLight, aquaSemanticDark } from '../tokens/semantic/aqua';
import { aeroGlassSemanticLight, aeroGlassSemanticDark } from '../tokens/semantic/aeroGlass';

// Component tokens
import { holoComponentTokens } from '../tokens/components/holo';
import { materialComponentTokens } from '../tokens/components/material';
import { flatComponentTokens } from '../tokens/components/flat';
import { liquidGlassComponentTokens } from '../tokens/components/liquidGlass';
import { metroComponentTokens } from '../tokens/components/metro';
import { fluentComponentTokens } from '../tokens/components/fluent';
import { metaHorizonComponentTokens } from '../tokens/components/metaHorizon';
import { cupertinoComponentTokens } from '../tokens/components/cupertino';
import { aquaComponentTokens } from '../tokens/components/aqua';
import { aeroGlassComponentTokens } from '../tokens/components/aeroGlass';

/**
 * Get semantic tokens for a design language and color scheme
 */
function getSemanticTokens(
  designLanguage: DesignLanguage,
  colorScheme: ColorScheme
): SemanticTokens {
  const tokenMap = {
    holo: {
      light: holoSemanticLight,
      dark: holoSemanticDark,
    },
    material: {
      light: materialSemanticLight,
      dark: materialSemanticDark,
    },
    flat: {
      light: flatSemanticLight,
      dark: flatSemanticDark,
    },
    liquidGlass: {
      light: liquidGlassSemanticLight,
      dark: liquidGlassSemanticDark,
    },
    metro: {
      light: metroSemanticLight,
      dark: metroSemanticDark,
    },
    fluent: {
      light: fluentSemanticLight,
      dark: fluentSemanticDark,
    },
    metaHorizon: {
      light: metaHorizonSemanticLight,
      dark: metaHorizonSemanticDark,
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
  };

  return tokenMap[designLanguage][colorScheme];
}

/**
 * Get component tokens for a design language
 */
function getComponentTokens(designLanguage: DesignLanguage): ComponentTokens {
  const tokenMap = {
    holo: holoComponentTokens,
    material: materialComponentTokens,
    flat: flatComponentTokens,
    liquidGlass: liquidGlassComponentTokens,
    metro: metroComponentTokens,
    fluent: fluentComponentTokens,
    metaHorizon: metaHorizonComponentTokens,
    cupertino: cupertinoComponentTokens,
    aqua: aquaComponentTokens,
    aeroGlass: aeroGlassComponentTokens,
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
  // Holo Design (Android 4.0-4.4)
  holoLight: createTheme('holo', 'light'),
  holoDark: createTheme('holo', 'dark'),

  // Material Design (Google)
  materialLight: createTheme('material', 'light'),
  materialDark: createTheme('material', 'dark'),

  // Flat Design (iOS 7-18)
  flatLight: createTheme('flat', 'light'),
  flatDark: createTheme('flat', 'dark'),

  // Liquid Glass (Modern)
  liquidGlassLight: createTheme('liquidGlass', 'light'),
  liquidGlassDark: createTheme('liquidGlass', 'dark'),

  // Metro UI (Windows 8)
  metroLight: createTheme('metro', 'light'),
  metroDark: createTheme('metro', 'dark'),

  // Fluent 2 (Windows 11)
  fluentLight: createTheme('fluent', 'light'),
  fluentDark: createTheme('fluent', 'dark'),

  // Meta Horizon (Meta VR/AR)
  metaHorizonLight: createTheme('metaHorizon', 'light'),
  metaHorizonDark: createTheme('metaHorizon', 'dark'),

  // Legacy: Cupertino (Apple iOS/macOS)
  cupertinoLight: createTheme('cupertino', 'light'),
  cupertinoDark: createTheme('cupertino', 'dark'),

  // Legacy: Aqua (Classic macOS)
  aquaLight: createTheme('aqua', 'light'),
  aquaDark: createTheme('aqua', 'dark'),

  // Legacy: Aero Glass (Windows Vista/7)
  aeroGlassLight: createTheme('aeroGlass', 'light'),
  aeroGlassDark: createTheme('aeroGlass', 'dark'),
};

/**
 * Default theme
 */
export const defaultTheme = themes.materialLight;
