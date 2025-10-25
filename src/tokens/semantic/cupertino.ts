import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Cupertino (iOS) Semantic Tokens (Light Mode)
 */
export const cupertinoSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      inverse: colors.neutral[900],
    },
    surface: {
      primary: colors.white,
      secondary: 'rgba(242, 242, 247, 0.8)', // Translucent background
      tertiary: colors.neutral[100],
      elevated: colors.white,
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
      primary: colors.black,
      secondary: colors.neutral[600],
      tertiary: colors.neutral[500],
      inverse: colors.white,
      disabled: colors.neutral[400],
      link: '#007AFF', // iOS blue
    },
    border: {
      primary: colors.neutral[300],
      secondary: colors.neutral[200],
      focus: '#007AFF',
      error: '#FF3B30', // iOS red
    },
    interactive: {
      primary: '#007AFF', // iOS blue
      primaryHover: '#0051D5',
      primaryActive: '#003D99',
      primaryDisabled: colors.neutral[300],
      secondary: '#5856D6', // iOS purple
      secondaryHover: '#4644B8',
      secondaryActive: '#35349A',
      secondaryDisabled: colors.neutral[300],
    },
    feedback: {
      success: '#34C759', // iOS green
      successSubtle: colors.success[50],
      warning: '#FF9500', // iOS orange
      warningSubtle: colors.warning[50],
      error: '#FF3B30', // iOS red
      errorSubtle: colors.error[50],
      info: '#5AC8FA', // iOS teal
      infoSubtle: colors.info[50],
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
      gapMd: spacing[3], // iOS uses 12pt grid
      gapLg: spacing[6],
      gapXl: spacing[8],
    },
    layout: {
      containerPadding: spacing[4],
      sectionGap: spacing[8],
      cardGap: spacing[4],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'System', // San Francisco on iOS
        fontSize: typography.fontSizes['5xl'],
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontFamily: 'System',
        fontSize: typography.fontSizes['4xl'],
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h3: {
        fontFamily: 'System',
        fontSize: typography.fontSizes['3xl'],
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'System',
        fontSize: typography.fontSizes['2xl'],
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.xl,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.lg,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 17, // iOS default
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      medium: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.base,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.sm,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.base,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      medium: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.sm,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'System',
        fontSize: typography.fontSizes.xs,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    caption: {
      fontFamily: 'System',
      fontSize: typography.fontSizes.xs,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wide,
    },
  },
};

/**
 * Cupertino (iOS) Semantic Tokens (Dark Mode)
 */
export const cupertinoSemanticDark: SemanticTokens = {
  ...cupertinoSemanticLight,
  colors: {
    background: {
      primary: colors.black,
      secondary: '#1C1C1E', // iOS dark secondary
      tertiary: '#2C2C2E', // iOS dark tertiary
      inverse: colors.white,
    },
    surface: {
      primary: colors.black,
      secondary: 'rgba(28, 28, 30, 0.8)', // Translucent
      tertiary: '#2C2C2E',
      elevated: '#1C1C1E',
      overlay: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
      primary: colors.white,
      secondary: '#98989D', // iOS secondary text
      tertiary: '#636366', // iOS tertiary text
      inverse: colors.black,
      disabled: '#48484A',
      link: '#0A84FF', // iOS dark mode blue
    },
    border: {
      primary: '#38383A',
      secondary: '#2C2C2E',
      focus: '#0A84FF',
      error: '#FF453A',
    },
    interactive: {
      primary: '#0A84FF', // iOS dark blue
      primaryHover: '#409CFF',
      primaryActive: '#72B4FF',
      primaryDisabled: '#48484A',
      secondary: '#5E5CE6', // iOS dark purple
      secondaryHover: '#7D7AFF',
      secondaryActive: '#9C9AFF',
      secondaryDisabled: '#48484A',
    },
    feedback: {
      success: '#32D74B', // iOS dark green
      successSubtle: colors.success[900],
      warning: '#FF9F0A', // iOS dark orange
      warningSubtle: colors.warning[900],
      error: '#FF453A', // iOS dark red
      errorSubtle: colors.error[900],
      info: '#64D2FF', // iOS dark teal
      infoSubtle: colors.info[900],
    },
  },
};
