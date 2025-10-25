import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Metro/Fluent Design Semantic Tokens (Light Mode)
 */
export const metroSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      inverse: colors.neutral[900],
    },
    surface: {
      primary: colors.white,
      secondary: 'rgba(249, 249, 249, 0.7)', // Acrylic effect
      tertiary: colors.neutral[50],
      elevated: colors.white,
      overlay: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[600],
      tertiary: colors.neutral[500],
      inverse: colors.white,
      disabled: colors.neutral[400],
      link: '#0078D4', // Microsoft blue
    },
    border: {
      primary: colors.neutral[300],
      secondary: colors.neutral[200],
      focus: '#0078D4',
      error: '#E81123', // Fluent red
    },
    interactive: {
      primary: '#0078D4', // Microsoft blue
      primaryHover: '#106EBE',
      primaryActive: '#005A9E',
      primaryDisabled: colors.neutral[300],
      secondary: '#8764B8', // Fluent purple
      secondaryHover: '#744DA9',
      secondaryActive: '#5C2E91',
      secondaryDisabled: colors.neutral[300],
    },
    feedback: {
      success: '#107C10', // Fluent green
      successSubtle: colors.success[50],
      warning: '#FFB900', // Fluent yellow
      warningSubtle: colors.warning[50],
      error: '#E81123', // Fluent red
      errorSubtle: colors.error[50],
      info: '#00B7C3', // Fluent teal
      infoSubtle: colors.info[50],
    },
  },

  spacing: {
    component: {
      paddingXs: spacing[1],
      paddingSm: spacing[2],
      paddingMd: spacing[3], // Metro uses 12pt
      paddingLg: spacing[6],
      paddingXl: spacing[8],
      gapXs: spacing[1],
      gapSm: spacing[2],
      gapMd: spacing[3],
      gapLg: spacing[4],
      gapXl: spacing[6],
    },
    layout: {
      containerPadding: spacing[6],
      sectionGap: spacing[12],
      cardGap: spacing[4],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'System', // Segoe UI on Windows
        fontSize: 46,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h2: {
        fontFamily: 'System',
        fontSize: 34,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h3: {
        fontFamily: 'System',
        fontSize: 28,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'System',
        fontSize: 24,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    caption: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wider,
    },
  },
};

/**
 * Metro/Fluent Design Semantic Tokens (Dark Mode)
 */
export const metroSemanticDark: SemanticTokens = {
  ...metroSemanticLight,
  colors: {
    background: {
      primary: '#1F1F1F', // Fluent dark background
      secondary: '#2B2B2B',
      tertiary: '#383838',
      inverse: colors.white,
    },
    surface: {
      primary: '#1F1F1F',
      secondary: 'rgba(43, 43, 43, 0.7)', // Acrylic
      tertiary: '#2B2B2B',
      elevated: '#2B2B2B',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
      primary: colors.white,
      secondary: '#C8C8C8',
      tertiary: '#A0A0A0',
      inverse: colors.neutral[900],
      disabled: '#6D6D6D',
      link: '#4CC2FF', // Fluent dark blue
    },
    border: {
      primary: '#484848',
      secondary: '#383838',
      focus: '#4CC2FF',
      error: '#FF99A4',
    },
    interactive: {
      primary: '#4CC2FF', // Fluent dark blue
      primaryHover: '#6BD3FF',
      primaryActive: '#8AE0FF',
      primaryDisabled: '#6D6D6D',
      secondary: '#B4A0FF', // Fluent dark purple
      secondaryHover: '#C7B8FF',
      secondaryActive: '#DAD0FF',
      secondaryDisabled: '#6D6D6D',
    },
    feedback: {
      success: '#6CCB5F', // Fluent dark green
      successSubtle: colors.success[900],
      warning: '#FFD83D', // Fluent dark yellow
      warningSubtle: colors.warning[900],
      error: '#FF99A4', // Fluent dark red
      errorSubtle: colors.error[900],
      info: '#3FF0FF', // Fluent dark teal
      infoSubtle: colors.info[900],
    },
  },
};
