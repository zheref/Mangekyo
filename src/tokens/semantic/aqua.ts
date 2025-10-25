import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Aqua (Classic macOS) Semantic Tokens (Light Mode)
 * Mac OS X through OS X Mavericks (2000-2014)
 */
export const aquaSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#ECECEC',
      secondary: '#D4D4D4',
      tertiary: '#C0C0C0',
      inverse: '#2D2D2D',
    },
    surface: {
      primary: 'linear-gradient(180deg, #FCFCFC 0%, #D8D8D8 100%)', // Brushed metal gradient
      secondary: '#E8E8E8',
      tertiary: '#DCDCDC',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
      primary: '#000000',
      secondary: '#4A4A4A',
      tertiary: '#7D7D7D',
      inverse: '#FFFFFF',
      disabled: '#999999',
      link: '#0000EE',
    },
    border: {
      primary: '#A0A0A0',
      secondary: '#C0C0C0',
      focus: '#4A90D9', // Aqua blue
      error: '#CC0000',
    },
    interactive: {
      primary: '#4A90D9', // Aqua blue
      primaryHover: '#3875D7',
      primaryActive: '#2E5DB3',
      primaryDisabled: '#CCCCCC',
      secondary: '#8E8E93', // Graphite
      secondaryHover: '#6E6E73',
      secondaryActive: '#5E5E63',
      secondaryDisabled: '#CCCCCC',
    },
    feedback: {
      success: '#00AA00',
      successSubtle: '#E6F7E6',
      warning: '#FF9500',
      warningSubtle: '#FFF3E6',
      error: '#CC0000',
      errorSubtle: '#FFE6E6',
      info: '#4A90D9',
      infoSubtle: '#E6F2FF',
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
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 24,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h2: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h3: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 13,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 10,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 13,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 10,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 11,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 10,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 9,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    caption: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 10,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 9,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wider,
    },
  },
};

/**
 * Aqua (Classic macOS) Semantic Tokens (Dark Mode)
 * Note: Classic Aqua didn't have a dark mode, this is an interpretation
 */
export const aquaSemanticDark: SemanticTokens = {
  ...aquaSemanticLight,
  colors: {
    background: {
      primary: '#2D2D2D',
      secondary: '#3A3A3A',
      tertiary: '#4A4A4A',
      inverse: '#ECECEC',
    },
    surface: {
      primary: 'linear-gradient(180deg, #4A4A4A 0%, #2D2D2D 100%)',
      secondary: '#3A3A3A',
      tertiary: '#444444',
      elevated: '#505050',
      overlay: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
      tertiary: '#8E8E8E',
      inverse: '#000000',
      disabled: '#666666',
      link: '#5A9FE5',
    },
    border: {
      primary: '#5A5A5A',
      secondary: '#4A4A4A',
      focus: '#5A9FE5',
      error: '#FF4444',
    },
    interactive: {
      primary: '#5A9FE5',
      primaryHover: '#4A8FD5',
      primaryActive: '#3A7FC5',
      primaryDisabled: '#555555',
      secondary: '#8E8E93',
      secondaryHover: '#9E9EA3',
      secondaryActive: '#AEAEB3',
      secondaryDisabled: '#555555',
    },
    feedback: {
      success: '#00CC00',
      successSubtle: '#1A3A1A',
      warning: '#FFAA00',
      warningSubtle: '#3A2A1A',
      error: '#FF4444',
      errorSubtle: '#3A1A1A',
      info: '#5A9FE5',
      infoSubtle: '#1A2A3A',
    },
  },
};
