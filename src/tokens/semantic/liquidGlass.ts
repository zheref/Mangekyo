import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Liquid Glass (Modern Glassmorphism) Semantic Tokens (Light Mode)
 * Modern Web/Cross-platform (2020-Present)
 */
export const liquidGlassSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tertiary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      inverse: '#0F0F0F',
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.1)', // Heavy glass blur
      secondary: 'rgba(255, 255, 255, 0.08)',
      tertiary: 'rgba(255, 255, 255, 0.06)',
      elevated: 'rgba(255, 255, 255, 0.15)',
      overlay: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.75)',
      tertiary: 'rgba(255, 255, 255, 0.55)',
      inverse: 'rgba(0, 0, 0, 0.9)',
      disabled: 'rgba(255, 255, 255, 0.35)',
      link: 'rgba(100, 200, 255, 1)',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.2)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      focus: 'rgba(255, 255, 255, 0.4)',
      error: 'rgba(255, 100, 100, 0.8)',
    },
    interactive: {
      primary: 'rgba(100, 150, 255, 0.8)',
      primaryHover: 'rgba(120, 170, 255, 0.9)',
      primaryActive: 'rgba(140, 190, 255, 1)',
      primaryDisabled: 'rgba(100, 150, 255, 0.3)',
      secondary: 'rgba(255, 255, 255, 0.15)',
      secondaryHover: 'rgba(255, 255, 255, 0.2)',
      secondaryActive: 'rgba(255, 255, 255, 0.25)',
      secondaryDisabled: 'rgba(255, 255, 255, 0.05)',
    },
    feedback: {
      success: 'rgba(100, 255, 150, 0.9)',
      successSubtle: 'rgba(100, 255, 150, 0.1)',
      warning: 'rgba(255, 200, 100, 0.9)',
      warningSubtle: 'rgba(255, 200, 100, 0.1)',
      error: 'rgba(255, 100, 100, 0.9)',
      errorSubtle: 'rgba(255, 100, 100, 0.1)',
      info: 'rgba(100, 200, 255, 0.9)',
      infoSubtle: 'rgba(100, 200, 255, 0.1)',
    },
  },

  spacing: {
    component: {
      paddingXs: spacing[2],
      paddingSm: spacing[3],
      paddingMd: spacing[4],
      paddingLg: spacing[6],
      paddingXl: spacing[8],
      gapXs: spacing[2],
      gapSm: spacing[3],
      gapMd: spacing[4],
      gapLg: spacing[6],
      gapXl: spacing[8],
    },
    layout: {
      containerPadding: spacing[8],
      sectionGap: spacing[12],
      cardGap: spacing[6],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 48,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 32,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h3: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 24,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 20,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Inter, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Inter, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Inter, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Inter, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Inter, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Inter, System',
        fontSize: 12,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
    caption: {
      fontFamily: 'Inter, System',
      fontSize: 14,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Inter, System',
      fontSize: 12,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.widest,
    },
  },
};

/**
 * Liquid Glass (Modern Glassmorphism) Semantic Tokens (Dark Mode)
 */
export const liquidGlassSemanticDark: SemanticTokens = {
  ...liquidGlassSemanticLight,
  colors: {
    background: {
      primary: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      secondary: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
      tertiary: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
      inverse: '#FFFFFF',
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.05)',
      secondary: 'rgba(255, 255, 255, 0.03)',
      tertiary: 'rgba(255, 255, 255, 0.02)',
      elevated: 'rgba(255, 255, 255, 0.08)',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)',
      inverse: 'rgba(0, 0, 0, 0.9)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      link: 'rgba(100, 200, 255, 1)',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.15)',
      secondary: 'rgba(255, 255, 255, 0.08)',
      focus: 'rgba(255, 255, 255, 0.3)',
      error: 'rgba(255, 120, 120, 0.8)',
    },
    interactive: {
      primary: 'rgba(120, 170, 255, 0.8)',
      primaryHover: 'rgba(140, 190, 255, 0.9)',
      primaryActive: 'rgba(160, 210, 255, 1)',
      primaryDisabled: 'rgba(120, 170, 255, 0.3)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      secondaryHover: 'rgba(255, 255, 255, 0.15)',
      secondaryActive: 'rgba(255, 255, 255, 0.2)',
      secondaryDisabled: 'rgba(255, 255, 255, 0.04)',
    },
    feedback: {
      success: 'rgba(120, 255, 170, 0.9)',
      successSubtle: 'rgba(120, 255, 170, 0.1)',
      warning: 'rgba(255, 210, 120, 0.9)',
      warningSubtle: 'rgba(255, 210, 120, 0.1)',
      error: 'rgba(255, 120, 120, 0.9)',
      errorSubtle: 'rgba(255, 120, 120, 0.1)',
      info: 'rgba(120, 210, 255, 0.9)',
      infoSubtle: 'rgba(120, 210, 255, 0.1)',
    },
  },
};
