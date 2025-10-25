import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Material Design Semantic Tokens (Light Mode)
 */
export const materialSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      inverse: colors.neutral[900],
    },
    surface: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      elevated: colors.white,
      overlay: `rgba(0, 0, 0, ${basePrimitiveTokens.opacity[50]})`,
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.60)',
      tertiary: 'rgba(0, 0, 0, 0.38)',
      inverse: colors.white,
      disabled: 'rgba(0, 0, 0, 0.38)',
      link: colors.primary[700],
    },
    border: {
      primary: colors.neutral[300],
      secondary: colors.neutral[200],
      focus: colors.primary[500],
      error: colors.error[500],
    },
    interactive: {
      primary: colors.primary[600],
      primaryHover: colors.primary[700],
      primaryActive: colors.primary[800],
      primaryDisabled: colors.neutral[300],
      secondary: colors.secondary[600],
      secondaryHover: colors.secondary[700],
      secondaryActive: colors.secondary[800],
      secondaryDisabled: colors.neutral[300],
    },
    feedback: {
      success: colors.success[600],
      successSubtle: colors.success[50],
      warning: colors.warning[600],
      warningSubtle: colors.warning[50],
      error: colors.error[600],
      errorSubtle: colors.error[50],
      info: colors.info[600],
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
      gapMd: spacing[4],
      gapLg: spacing[6],
      gapXl: spacing[8],
    },
    layout: {
      containerPadding: spacing[4],
      sectionGap: spacing[6],
      cardGap: spacing[4],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: typography.fontFamilies.display,
        fontSize: typography.fontSizes['5xl'],
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontFamily: typography.fontFamilies.display,
        fontSize: typography.fontSizes['4xl'],
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h3: {
        fontFamily: typography.fontFamilies.display,
        fontSize: typography.fontSizes['3xl'],
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: typography.fontFamilies.display,
        fontSize: typography.fontSizes['2xl'],
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: typography.fontFamilies.display,
        fontSize: typography.fontSizes.xl,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: typography.fontFamilies.display,
        fontSize: typography.fontSizes.lg,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
    body: {
      large: {
        fontFamily: typography.fontFamilies.body,
        fontSize: typography.fontSizes.base,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.wide,
      },
      medium: {
        fontFamily: typography.fontFamilies.body,
        fontSize: typography.fontSizes.sm,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: typography.fontFamilies.body,
        fontSize: typography.fontSizes.xs,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: typography.fontFamilies.body,
        fontSize: typography.fontSizes.sm,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      medium: {
        fontFamily: typography.fontFamilies.body,
        fontSize: typography.fontSizes.xs,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wider,
      },
      small: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 11,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.wider,
      },
    },
    caption: {
      fontFamily: typography.fontFamilies.body,
      fontSize: typography.fontSizes.xs,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: typography.fontFamilies.body,
      fontSize: 10,
      fontWeight: typography.fontWeights.medium,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.widest,
    },
  },
};

/**
 * Material Design Semantic Tokens (Dark Mode)
 */
export const materialSemanticDark: SemanticTokens = {
  ...materialSemanticLight,
  colors: {
    background: {
      primary: colors.neutral[900],
      secondary: colors.neutral[800],
      tertiary: colors.neutral[700],
      inverse: colors.neutral[50],
    },
    surface: {
      primary: colors.neutral[900],
      secondary: colors.neutral[800],
      tertiary: colors.neutral[700],
      elevated: colors.neutral[850] || '#1F1F1F',
      overlay: `rgba(0, 0, 0, ${basePrimitiveTokens.opacity[70]})`,
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.60)',
      tertiary: 'rgba(255, 255, 255, 0.38)',
      inverse: colors.neutral[900],
      disabled: 'rgba(255, 255, 255, 0.38)',
      link: colors.primary[300],
    },
    border: {
      primary: colors.neutral[700],
      secondary: colors.neutral[800],
      focus: colors.primary[400],
      error: colors.error[400],
    },
    interactive: {
      primary: colors.primary[400],
      primaryHover: colors.primary[300],
      primaryActive: colors.primary[200],
      primaryDisabled: colors.neutral[700],
      secondary: colors.secondary[400],
      secondaryHover: colors.secondary[300],
      secondaryActive: colors.secondary[200],
      secondaryDisabled: colors.neutral[700],
    },
    feedback: {
      success: colors.success[400],
      successSubtle: colors.success[900],
      warning: colors.warning[400],
      warningSubtle: colors.warning[900],
      error: colors.error[400],
      errorSubtle: colors.error[900],
      info: colors.info[400],
      infoSubtle: colors.info[900],
    },
  },
};
