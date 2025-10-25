import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { spacing, typography } = basePrimitiveTokens;

/**
 * Holo Design (Android 4.0-4.4, 2011-2014)
 * Characteristics: Holographic UI, electric blue accents, dark theme, futuristic
 */
export const holoSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#000000',
      secondary: '#111111',
      tertiary: '#1A1A1A',
      inverse: '#FFFFFF',
    },
    surface: {
      primary: '#1A1A1A',
      secondary: '#222222',
      tertiary: '#2A2A2A',
      elevated: '#2A2A2A',
      overlay: 'rgba(51, 181, 229, 0.1)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B2B2B2',
      tertiary: '#808080',
      inverse: '#000000',
      disabled: '#4D4D4D',
      link: '#33B5E5',
    },
    border: {
      primary: '#33B5E5',
      secondary: '#2A2A2A',
      focus: '#33B5E5',
      error: '#FF4444',
    },
    interactive: {
      primary: '#33B5E5', // Holo blue
      primaryHover: '#5FC3E8',
      primaryActive: '#0099CC',
      primaryDisabled: '#1A5A6E',
      secondary: '#2A2A2A',
      secondaryHover: '#333333',
      secondaryActive: '#1A1A1A',
      secondaryDisabled: '#1A1A1A',
    },
    feedback: {
      success: '#99CC00',
      successSubtle: 'rgba(153, 204, 0, 0.1)',
      warning: '#FFBB33',
      warningSubtle: 'rgba(255, 187, 51, 0.1)',
      error: '#FF4444',
      errorSubtle: 'rgba(255, 68, 68, 0.1)',
      info: '#33B5E5',
      infoSubtle: 'rgba(51, 181, 229, 0.1)',
    },
  },

  spacing: {
    component: {
      paddingXs: spacing[1],
      paddingSm: spacing[2],
      paddingMd: spacing[3],
      paddingLg: spacing[4],
      paddingXl: spacing[6],
      gapXs: spacing[1],
      gapSm: spacing[2],
      gapMd: spacing[3],
      gapLg: spacing[4],
      gapXl: spacing[6],
    },
    layout: {
      containerPadding: spacing[4],
      sectionGap: spacing[6],
      cardGap: spacing[3],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'Roboto, System',
        fontSize: 32,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h2: {
        fontFamily: 'Roboto, System',
        fontSize: 28,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h3: {
        fontFamily: 'Roboto, System',
        fontSize: 24,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Roboto, System',
        fontSize: 20,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Roboto, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Roboto, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Roboto, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Roboto, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Roboto, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Roboto, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    caption: {
      fontFamily: 'Roboto, System',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Roboto, System',
      fontSize: 10,
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wider,
    },
  },
};

export const holoSemanticDark: SemanticTokens = holoSemanticLight; // Holo is always dark

