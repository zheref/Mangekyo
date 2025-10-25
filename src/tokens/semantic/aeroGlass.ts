import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Aero Glass (Windows Vista/7) Semantic Tokens (Light Mode)
 * Windows Vista/7 (2006-2012)
 */
export const aeroGlassSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#F0F0F0',
      secondary: '#E5E5E5',
      tertiary: '#D9D9D9',
      inverse: '#1F1F1F',
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.8)', // Frosted glass effect
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.6)',
      elevated: 'rgba(255, 255, 255, 0.9)',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
      primary: '#000000',
      secondary: '#5A5A5A',
      tertiary: '#7A7A7A',
      inverse: '#FFFFFF',
      disabled: '#A0A0A0',
      link: '#0066CC',
    },
    border: {
      primary: 'rgba(76, 76, 76, 0.6)', // Glass border
      secondary: 'rgba(140, 140, 140, 0.4)',
      focus: '#0078D7',
      error: '#C42B1C',
    },
    interactive: {
      primary: '#0078D7', // Windows blue
      primaryHover: '#0063B1',
      primaryActive: '#004E8C',
      primaryDisabled: 'rgba(0, 120, 215, 0.3)',
      secondary: '#5B5B5B',
      secondaryHover: '#6B6B6B',
      secondaryActive: '#7B7B7B',
      secondaryDisabled: 'rgba(91, 91, 91, 0.3)',
    },
    feedback: {
      success: '#107C10',
      successSubtle: 'rgba(16, 124, 16, 0.1)',
      warning: '#FFB900',
      warningSubtle: 'rgba(255, 185, 0, 0.1)',
      error: '#C42B1C',
      errorSubtle: 'rgba(196, 43, 28, 0.1)',
      info: '#0078D7',
      infoSubtle: 'rgba(0, 120, 215, 0.1)',
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
        fontFamily: 'Segoe UI, System',
        fontSize: 24,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h2: {
        fontFamily: 'Segoe UI, System',
        fontSize: 20,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h3: {
        fontFamily: 'Segoe UI, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Segoe UI, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Segoe UI, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Segoe UI, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Segoe UI, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Segoe UI, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Segoe UI, System',
        fontSize: 9,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Segoe UI, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Segoe UI, System',
        fontSize: 9,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Segoe UI, System',
        fontSize: 8,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    caption: {
      fontFamily: 'Segoe UI, System',
      fontSize: 9,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Segoe UI, System',
      fontSize: 8,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wide,
    },
  },
};

/**
 * Aero Glass (Windows Vista/7) Semantic Tokens (Dark Mode)
 * Note: Aero didn't have true dark mode, this is an interpretation
 */
export const aeroGlassSemanticDark: SemanticTokens = {
  ...aeroGlassSemanticLight,
  colors: {
    background: {
      primary: '#1F1F1F',
      secondary: '#2A2A2A',
      tertiary: '#353535',
      inverse: '#F0F0F0',
    },
    surface: {
      primary: 'rgba(40, 40, 40, 0.8)',
      secondary: 'rgba(50, 50, 50, 0.7)',
      tertiary: 'rgba(60, 60, 60, 0.6)',
      elevated: 'rgba(70, 70, 70, 0.9)',
      overlay: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C8C8C8',
      tertiary: '#A0A0A0',
      inverse: '#000000',
      disabled: '#6D6D6D',
      link: '#4CC2FF',
    },
    border: {
      primary: 'rgba(140, 140, 140, 0.6)',
      secondary: 'rgba(100, 100, 100, 0.4)',
      focus: '#4CC2FF',
      error: '#FF9A96',
    },
    interactive: {
      primary: '#4CC2FF',
      primaryHover: '#6BD3FF',
      primaryActive: '#8AE0FF',
      primaryDisabled: 'rgba(76, 194, 255, 0.3)',
      secondary: '#8E8E93',
      secondaryHover: '#9E9EA3',
      secondaryActive: '#AEAEB3',
      secondaryDisabled: 'rgba(142, 142, 147, 0.3)',
    },
    feedback: {
      success: '#6CCB5F',
      successSubtle: 'rgba(108, 203, 95, 0.1)',
      warning: '#FFD83D',
      warningSubtle: 'rgba(255, 216, 61, 0.1)',
      error: '#FF99A4',
      errorSubtle: 'rgba(255, 153, 164, 0.1)',
      info: '#4CC2FF',
      infoSubtle: 'rgba(76, 194, 255, 0.1)',
    },
  },
};
