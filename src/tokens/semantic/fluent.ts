import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Fluent Design (Windows 10/11) Semantic Tokens (Light Mode)
 * Windows 10/11 (2017-Present)
 */
export const fluentSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#F3F3F3',
      secondary: '#FAFAFA',
      tertiary: '#F5F5F5',
      inverse: '#202020',
    },
    surface: {
      primary: 'rgba(243, 243, 243, 0.9)', // Acrylic
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(249, 249, 249, 0.8)',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      tertiary: 'rgba(0, 0, 0, 0.45)',
      inverse: '#FFFFFF',
      disabled: 'rgba(0, 0, 0, 0.38)',
      link: '#0078D4',
    },
    border: {
      primary: 'rgba(0, 0, 0, 0.08)',
      secondary: 'rgba(0, 0, 0, 0.05)',
      focus: '#0078D4',
      error: '#E81123',
    },
    interactive: {
      primary: '#0078D4', // Windows blue
      primaryHover: '#005A9E',
      primaryActive: '#004578',
      primaryDisabled: 'rgba(0, 120, 212, 0.3)',
      secondary: '#EDEBE9',
      secondaryHover: '#E1DFDD',
      secondaryActive: '#D2D0CE',
      secondaryDisabled: 'rgba(237, 235, 233, 0.3)',
    },
    feedback: {
      success: '#107C10',
      successSubtle: 'rgba(16, 124, 16, 0.1)',
      warning: '#FFB900',
      warningSubtle: 'rgba(255, 185, 0, 0.1)',
      error: '#E81123',
      errorSubtle: 'rgba(232, 17, 35, 0.1)',
      info: '#00B7C3',
      infoSubtle: 'rgba(0, 183, 195, 0.1)',
    },
  },

  spacing: {
    component: {
      paddingXs: spacing[1],
      paddingSm: spacing[2],
      paddingMd: spacing[4],
      paddingLg: spacing[6],
      paddingXl: spacing[8],
      gapXs: spacing[1],
      gapSm: spacing[2],
      gapMd: spacing[4],
      gapLg: spacing[6],
      gapXl: spacing[8],
    },
    layout: {
      containerPadding: spacing[6],
      sectionGap: spacing[8],
      cardGap: spacing[4],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 40,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 32,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h3: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 28,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 24,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 20,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    caption: {
      fontFamily: 'Segoe UI Variable, System',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Segoe UI Variable, System',
      fontSize: 10,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wider,
    },
  },
};

/**
 * Fluent Design (Windows 10/11) Semantic Tokens (Dark Mode)
 */
export const fluentSemanticDark: SemanticTokens = {
  ...fluentSemanticLight,
  colors: {
    background: {
      primary: '#202020',
      secondary: '#1C1C1C',
      tertiary: '#282828',
      inverse: '#F3F3F3',
    },
    surface: {
      primary: 'rgba(44, 44, 44, 0.9)', // Acrylic dark
      secondary: 'rgba(32, 32, 32, 0.7)',
      tertiary: 'rgba(40, 40, 40, 0.8)',
      elevated: '#2C2C2C',
      overlay: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.78)',
      tertiary: 'rgba(255, 255, 255, 0.54)',
      inverse: '#000000',
      disabled: 'rgba(255, 255, 255, 0.38)',
      link: '#60CDFF',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.08)',
      secondary: 'rgba(255, 255, 255, 0.05)',
      focus: '#60CDFF',
      error: '#FF99A4',
    },
    interactive: {
      primary: '#60CDFF',
      primaryHover: '#70DDFF',
      primaryActive: '#80EDFF',
      primaryDisabled: 'rgba(96, 205, 255, 0.3)',
      secondary: '#373737',
      secondaryHover: '#474747',
      secondaryActive: '#575757',
      secondaryDisabled: 'rgba(55, 55, 55, 0.3)',
    },
    feedback: {
      success: '#6CCB5F',
      successSubtle: 'rgba(108, 203, 95, 0.1)',
      warning: '#FCE100',
      warningSubtle: 'rgba(252, 225, 0, 0.1)',
      error: '#FF99A4',
      errorSubtle: 'rgba(255, 153, 164, 0.1)',
      info: '#00B7C3',
      infoSubtle: 'rgba(0, 183, 195, 0.1)',
    },
  },
};
