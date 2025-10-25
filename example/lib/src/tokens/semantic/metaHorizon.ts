import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { colors, spacing, typography } = basePrimitiveTokens;

/**
 * Meta Horizon Design Semantic Tokens (Light Mode)
 * Based on Meta's official Horizon design system
 * https://developers.meta.com/horizon/design/
 */
export const metaHorizonSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#FFFFFF', // Pure white for main backgrounds
      secondary: '#F3F4F6', // Light gray for secondary surfaces
      tertiary: '#E5E7EB', // Slightly darker for depth
      inverse: '#1C1E21', // Meta's dark gray
    },
    surface: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB', // Very light gray
      tertiary: '#F3F4F6',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.65)',
    },
    text: {
      primary: '#1C1E21', // Meta's primary text color
      secondary: '#65676B', // Meta's secondary text color
      tertiary: '#8A8D91', // Meta's tertiary text color
      inverse: '#FFFFFF',
      disabled: '#BCC0C4',
      link: '#0866FF', // Meta's primary blue
    },
    border: {
      primary: '#CED0D4', // Meta's border color
      secondary: '#E4E6EB',
      focus: '#0866FF',
      error: '#FA383E',
    },
    interactive: {
      primary: '#0866FF', // Meta's primary blue
      primaryHover: '#0654D4',
      primaryActive: '#0551C5',
      primaryDisabled: 'rgba(8, 102, 255, 0.4)',
      secondary: '#E4E6EB',
      secondaryHover: '#D8DADF',
      secondaryActive: '#CCD0D5',
      secondaryDisabled: '#F0F2F5',
    },
    feedback: {
      success: '#31A24C', // Meta's success green
      successSubtle: '#D7F0DD',
      warning: '#F7981C', // Meta's warning orange
      warningSubtle: '#FEF0D9',
      error: '#FA383E', // Meta's error red
      errorSubtle: '#FFE6E7',
      info: '#0866FF',
      infoSubtle: '#E7F3FF',
    },
  },

  spacing: {
    component: {
      paddingXs: spacing[1], // 4px
      paddingSm: spacing[2], // 8px
      paddingMd: spacing[3], // 12px
      paddingLg: spacing[4], // 16px
      paddingXl: spacing[6], // 24px
      gapXs: spacing[1],
      gapSm: spacing[2],
      gapMd: spacing[3],
      gapLg: spacing[4],
      gapXl: spacing[6],
    },
    layout: {
      containerPadding: spacing[4], // 16px
      sectionGap: spacing[6], // 24px
      cardGap: spacing[4], // 16px
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 40,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: -0.5,
      },
      h2: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 32,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: -0.4,
      },
      h3: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 28,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: -0.3,
      },
      h4: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 24,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: -0.2,
      },
      h5: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 20,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.snug,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 17,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 15,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      small: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 11,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
    caption: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 11,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.widest,
    },
  },
};

/**
 * Meta Horizon Design Semantic Tokens (Dark Mode)
 */
export const metaHorizonSemanticDark: SemanticTokens = {
  ...metaHorizonSemanticLight,
  colors: {
    background: {
      primary: '#18191A', // Meta's dark mode background
      secondary: '#242526', // Slightly lighter
      tertiary: '#3A3B3C', // Even lighter for elevated surfaces
      inverse: '#FFFFFF',
    },
    surface: {
      primary: '#242526',
      secondary: '#3A3B3C',
      tertiary: '#4E4F50',
      elevated: '#3A3B3C',
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    text: {
      primary: '#E4E6EB', // Meta's dark mode primary text
      secondary: '#B0B3B8', // Meta's dark mode secondary text
      tertiary: '#8A8D91', // Meta's dark mode tertiary text
      inverse: '#1C1E21',
      disabled: '#5A5C5F',
      link: '#2E89FF', // Lighter blue for dark mode
    },
    border: {
      primary: '#3A3B3C',
      secondary: '#4E4F50',
      focus: '#2E89FF',
      error: '#FF6B70',
    },
    interactive: {
      primary: '#2E89FF', // Lighter blue for dark mode
      primaryHover: '#4E9AFF',
      primaryActive: '#6AABFF',
      primaryDisabled: 'rgba(46, 137, 255, 0.4)',
      secondary: '#3A3B3C',
      secondaryHover: '#4E4F50',
      secondaryActive: '#5A5C5F',
      secondaryDisabled: '#2C2D2E',
    },
    feedback: {
      success: '#42B35C', // Lighter green for dark mode
      successSubtle: '#2A4D33',
      warning: '#FFB340', // Lighter orange for dark mode
      warningSubtle: '#4A3D2A',
      error: '#FF6B70', // Lighter red for dark mode
      errorSubtle: '#4A2A2B',
      info: '#2E89FF',
      infoSubtle: '#1E3A5F',
    },
  },
};

