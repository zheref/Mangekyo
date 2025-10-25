import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { spacing, typography } = basePrimitiveTokens;

/**
 * Flat Design (iOS 18 Design Language)
 * Modern iOS design with gaussian blurs, translucency, and fluid animations
 * Based on Apple's latest Human Interface Guidelines
 */
export const flatSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#F2F2F7', // iOS System Gray 6
      secondary: '#FFFFFF',
      tertiary: '#FFFFFF',
      inverse: '#000000',
    },
    surface: {
      primary: '#FFFFFF',
      secondary: 'rgba(242, 242, 247, 0.8)', // Translucent for glass effect
      tertiary: '#E5E5EA',
      elevated: 'rgba(255, 255, 255, 0.72)', // Glass morphism
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(60, 60, 67, 0.6)', // iOS System Gray with opacity
      tertiary: '#8E8E93',
      inverse: '#FFFFFF',
      disabled: 'rgba(199, 199, 204, 0.6)',
      link: '#007AFF', // iOS Blue
    },
    border: {
      primary: 'rgba(60, 60, 67, 0.12)', // Subtle borders
      secondary: 'rgba(60, 60, 67, 0.06)',
      focus: '#007AFF',
      error: '#FF3B30',
    },
    interactive: {
      primary: '#007AFF', // iOS Blue
      primaryHover: '#0051D5',
      primaryActive: '#004EBC',
      primaryDisabled: 'rgba(0, 122, 255, 0.3)',
      secondary: 'rgba(120, 120, 128, 0.16)', // iOS Fill color
      secondaryHover: 'rgba(120, 120, 128, 0.24)',
      secondaryActive: 'rgba(120, 120, 128, 0.32)',
      secondaryDisabled: 'rgba(120, 120, 128, 0.08)',
    },
    feedback: {
      success: '#34C759', // iOS Green
      successSubtle: 'rgba(52, 199, 89, 0.15)',
      warning: '#FF9500', // iOS Orange
      warningSubtle: 'rgba(255, 149, 0, 0.15)',
      error: '#FF3B30', // iOS Red
      errorSubtle: 'rgba(255, 59, 48, 0.15)',
      info: '#007AFF', // iOS Blue
      infoSubtle: 'rgba(0, 122, 255, 0.15)',
    },
  },

  spacing: {
    component: {
      paddingXs: spacing[1], // 4
      paddingSm: spacing[2], // 8
      paddingMd: spacing[3], // 12
      paddingLg: spacing[4], // 16
      paddingXl: spacing[6], // 24
      gapXs: spacing[1],
      gapSm: spacing[2],
      gapMd: spacing[3],
      gapLg: spacing[4],
      gapXl: spacing[6],
    },
    layout: {
      containerPadding: spacing[4], // 16
      sectionGap: spacing[8], // 32
      cardGap: spacing[4], // 16
    },
  },

  typography: {
    heading: {
      h1: {
        fontFamily: 'System',
        fontSize: 34, // Large Title
        fontWeight: typography.fontWeights.bold,
        lineHeight: 1.21, // 41pt
        letterSpacing: 0.37,
      },
      h2: {
        fontFamily: 'System',
        fontSize: 28, // Title 1
        fontWeight: typography.fontWeights.bold,
        lineHeight: 1.14, // 34pt
        letterSpacing: 0.36,
      },
      h3: {
        fontFamily: 'System',
        fontSize: 22, // Title 2
        fontWeight: typography.fontWeights.bold,
        lineHeight: 1.27, // 28pt
        letterSpacing: 0.35,
      },
      h4: {
        fontFamily: 'System',
        fontSize: 20, // Title 3
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.25, // 25pt
        letterSpacing: 0.38,
      },
      h5: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.33, // 24pt
        letterSpacing: -0.41,
      },
      h6: {
        fontFamily: 'System',
        fontSize: 17, // Headline
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.29, // 22pt
        letterSpacing: -0.41,
      },
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 17, // Body - iOS standard
        fontWeight: typography.fontWeights.regular,
        lineHeight: 1.29, // 22pt
        letterSpacing: -0.41,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15, // Subheadline
        fontWeight: typography.fontWeights.regular,
        lineHeight: 1.33, // 20pt
        letterSpacing: -0.23,
      },
      small: {
        fontFamily: 'System',
        fontSize: 13, // Footnote
        fontWeight: typography.fontWeights.regular,
        lineHeight: 1.38, // 18pt
        letterSpacing: -0.08,
      },
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.29,
        letterSpacing: -0.41,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.33,
        letterSpacing: -0.23,
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.38,
        letterSpacing: -0.08,
      },
    },
    caption: {
      fontFamily: 'System',
      fontSize: 12, // Caption 1
      fontWeight: typography.fontWeights.regular,
      lineHeight: 1.33, // 16pt
      letterSpacing: 0,
    },
    overline: {
      fontFamily: 'System',
      fontSize: 11, // Caption 2
      fontWeight: typography.fontWeights.medium,
      lineHeight: 1.18, // 13pt
      letterSpacing: 0.06,
    },
  },
};

export const flatSemanticDark: SemanticTokens = {
  ...flatSemanticLight,
  colors: {
    ...flatSemanticLight.colors,
    background: {
      primary: '#000000', // Pure black for OLED
      secondary: '#1C1C1E', // System Gray 6 Dark
      tertiary: '#2C2C2E', // System Gray 5 Dark
      inverse: '#FFFFFF',
    },
    surface: {
      primary: '#1C1C1E',
      secondary: 'rgba(44, 44, 46, 0.8)', // Translucent for glass effect
      tertiary: '#3A3A3C',
      elevated: 'rgba(44, 44, 46, 0.72)', // Glass morphism dark
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(235, 235, 245, 0.6)', // iOS Label Secondary
      tertiary: '#8E8E93', // System Gray
      inverse: '#000000',
      disabled: 'rgba(235, 235, 245, 0.3)',
      link: '#0A84FF', // iOS Blue Dark
    },
    border: {
      primary: 'rgba(84, 84, 88, 0.6)', // Separator Dark
      secondary: 'rgba(84, 84, 88, 0.3)',
      focus: '#0A84FF',
      error: '#FF453A',
    },
    interactive: {
      primary: '#0A84FF', // iOS Blue Dark
      primaryHover: '#409CFF',
      primaryActive: '#0070E0',
      primaryDisabled: 'rgba(10, 132, 255, 0.3)',
      secondary: 'rgba(120, 120, 128, 0.32)', // iOS Fill Dark
      secondaryHover: 'rgba(120, 120, 128, 0.40)',
      secondaryActive: 'rgba(120, 120, 128, 0.48)',
      secondaryDisabled: 'rgba(120, 120, 128, 0.16)',
    },
    feedback: {
      success: '#30D158', // iOS Green Dark
      successSubtle: 'rgba(48, 209, 88, 0.15)',
      warning: '#FF9F0A', // iOS Orange Dark
      warningSubtle: 'rgba(255, 159, 10, 0.15)',
      error: '#FF453A', // iOS Red Dark
      errorSubtle: 'rgba(255, 69, 58, 0.15)',
      info: '#0A84FF', // iOS Blue Dark
      infoSubtle: 'rgba(10, 132, 255, 0.15)',
    },
  },
};

