import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { spacing, typography } = basePrimitiveTokens;

/**
 * Flag Design (Mobile iOS Design Language)
 * iOS-style design optimized for mobile devices
 */
export const flagSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#F2F2F7',
      secondary: '#FFFFFF',
      tertiary: '#FFFFFF',
      inverse: '#000000',
    },
    surface: {
      primary: '#FFFFFF',
      secondary: '#F2F2F7',
      tertiary: '#E5E5EA',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
      primary: '#000000',
      secondary: '#3C3C43',
      tertiary: '#8E8E93',
      inverse: '#FFFFFF',
      disabled: '#C7C7CC',
      link: '#007AFF',
    },
    border: {
      primary: '#C6C6C8',
      secondary: '#E5E5EA',
      focus: '#007AFF',
      error: '#FF3B30',
    },
    interactive: {
      primary: '#007AFF', // iOS Blue
      primaryHover: '#0051D5',
      primaryActive: '#004EBC',
      primaryDisabled: '#B3D7FF',
      secondary: '#F2F2F7',
      secondaryHover: '#E5E5EA',
      secondaryActive: '#D1D1D6',
      secondaryDisabled: '#F2F2F7',
    },
    feedback: {
      success: '#34C759',
      successSubtle: 'rgba(52, 199, 89, 0.1)',
      warning: '#FF9500',
      warningSubtle: 'rgba(255, 149, 0, 0.1)',
      error: '#FF3B30',
      errorSubtle: 'rgba(255, 59, 48, 0.1)',
      info: '#007AFF',
      infoSubtle: 'rgba(0, 122, 255, 0.1)',
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
      sectionGap: spacing[8],
      cardGap: spacing[4],
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'System',
        fontSize: 34,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontFamily: 'System',
        fontSize: 28,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
      h3: {
        fontFamily: 'System',
        fontSize: 22,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      h4: {
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      h5: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      h6: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 17, // iOS standard
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.tight,
      },
    },
    caption: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.tight,
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

export const flagSemanticDark: SemanticTokens = {
  ...flagSemanticLight,
  colors: {
    ...flagSemanticLight.colors,
    background: {
      primary: '#000000',
      secondary: '#1C1C1E',
      tertiary: '#2C2C2E',
      inverse: '#FFFFFF',
    },
    surface: {
      primary: '#1C1C1E',
      secondary: '#2C2C2E',
      tertiary: '#3A3A3C',
      elevated: '#2C2C2E',
      overlay: 'rgba(255, 255, 255, 0.4)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#EBEBF5',
      tertiary: '#8E8E93',
      inverse: '#000000',
      disabled: '#48484A',
      link: '#0A84FF',
    },
    border: {
      primary: '#38383A',
      secondary: '#48484A',
      focus: '#0A84FF',
      error: '#FF453A',
    },
    interactive: {
      primary: '#0A84FF',
      primaryHover: '#409CFF',
      primaryActive: '#0070E0',
      primaryDisabled: '#1C3F5E',
      secondary: '#2C2C2E',
      secondaryHover: '#3A3A3C',
      secondaryActive: '#48484A',
      secondaryDisabled: '#2C2C2E',
    },
    feedback: {
      success: '#32D74B',
      successSubtle: 'rgba(50, 215, 75, 0.1)',
      warning: '#FF9F0A',
      warningSubtle: 'rgba(255, 159, 10, 0.1)',
      error: '#FF453A',
      errorSubtle: 'rgba(255, 69, 58, 0.1)',
      info: '#0A84FF',
      infoSubtle: 'rgba(10, 132, 255, 0.1)',
    },
  },
};

