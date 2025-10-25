import { SemanticTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';

const { spacing, typography } = basePrimitiveTokens;

/**
 * Holo Design (Android 4.0-4.4 KitKat, 2011-2014)
 * 
 * Characteristics:
 * - Holographic UI with electric blue accents (#33B5E5)
 * - Hard edges and drop shadows for depth
 * - Both light and dark theme variants
 * - Roboto font family
 * - Neon-like accent colors
 * - Sharp, angular design elements
 */

/**
 * Holo Light Theme
 * Based on Android's Theme.Holo.Light
 * Used for applications with a bright, clean interface
 */
export const holoSemanticLight: SemanticTokens = {
  colors: {
    background: {
      primary: '#F0F0F0',      // bright_foreground_holo_light
      secondary: '#E8E8E8',    // Slightly darker for contrast
      tertiary: '#D8D8D8',     // Even darker for layering
      inverse: '#000000',
    },
    surface: {
      primary: '#FFFFFF',      // Pure white surfaces
      secondary: '#F5F5F5',    // Slightly off-white
      tertiary: '#EEEEEE',     // Light gray
      elevated: '#FFFFFF',     // Elevated surfaces are pure white
      overlay: 'rgba(51, 181, 229, 0.08)',  // Subtle Holo blue tint
    },
    text: {
      primary: '#000000',      // primary_text_holo_light
      secondary: '#808080',    // secondary_text_holo_light
      tertiary: '#A0A0A0',     // tertiary_text_holo_light
      inverse: '#FFFFFF',
      disabled: '#B0B0B0',     // hint_foreground_holo_light
      link: '#33B5E5',         // Holo blue for links
    },
    border: {
      primary: '#CCCCCC',      // Default border color
      secondary: '#E0E0E0',    // Lighter borders
      focus: '#33B5E5',        // Holo blue when focused
      error: '#FF4444',        // Holo red light
    },
    interactive: {
      primary: '#33B5E5',      // holo_blue_light - main interactive color
      primaryHover: '#5FC3E8', // Lighter on hover
      primaryActive: '#0099CC', // holo_blue_dark - pressed state
      primaryDisabled: '#B0D9EA', // Desaturated light blue
      secondary: '#E0E0E0',    // Secondary actions
      secondaryHover: '#D0D0D0',
      secondaryActive: '#C0C0C0',
      secondaryDisabled: '#F0F0F0',
    },
    feedback: {
      success: '#99CC00',      // holo_green_light
      successSubtle: 'rgba(153, 204, 0, 0.1)',
      warning: '#FFBB33',      // holo_orange_light
      warningSubtle: 'rgba(255, 187, 51, 0.1)',
      error: '#FF4444',        // holo_red_light
      errorSubtle: 'rgba(255, 68, 68, 0.1)',
      info: '#33B5E5',         // holo_blue_light
      infoSubtle: 'rgba(51, 181, 229, 0.1)',
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
        fontFamily: 'Roboto',
        fontSize: 34,  // textAppearanceLarge in Holo
        fontWeight: typography.fontWeights.light,  // Roboto Light (300)
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h2: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h3: {
        fontFamily: 'Roboto',
        fontSize: 22,  // textAppearanceMedium
        fontWeight: typography.fontWeights.regular,  // Roboto Regular (400)
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Roboto',
        fontSize: 18,  // textAppearanceSmall
        fontWeight: typography.fontWeights.medium,  // Roboto Medium (500)
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto',
        fontSize: 18,  // Large body text
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Roboto',
        fontSize: 14,  // Standard body text
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Roboto',
        fontSize: 12,  // Small text
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: typography.fontWeights.bold,  // Roboto Bold (700)
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,  // All caps labels
      },
      medium: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      small: {
        fontFamily: 'Roboto',
        fontSize: 11,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Roboto',
      fontSize: 10,
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wider,
    },
  },
};

/**
 * Holo Dark Theme
 * Based on Android's Theme.Holo (default dark variant)
 * Used for applications with a dark, power-saving interface
 * This was the primary Holo theme and more commonly used than Light
 */
export const holoSemanticDark: SemanticTokens = {
  colors: {
    background: {
      primary: '#000000',      // background_holo_dark - Pure black
      secondary: '#111111',    // Slightly lighter for contrast
      tertiary: '#1A1A1A',     // Even lighter for layering
      inverse: '#FFFFFF',
    },
    surface: {
      primary: '#111111',      // Dark surfaces
      secondary: '#1A1A1A',    // Slightly lighter
      tertiary: '#222222',     // Even lighter
      elevated: '#2A2A2A',     // Elevated surfaces are lighter
      overlay: 'rgba(51, 181, 229, 0.15)',  // Holo blue glow effect
    },
    text: {
      primary: '#FFFFFF',      // primary_text_holo_dark
      secondary: '#B2B2B2',    // secondary_text_holo_dark
      tertiary: '#808080',     // tertiary_text_holo_dark
      inverse: '#000000',
      disabled: '#555555',     // hint_foreground_holo_dark
      link: '#33B5E5',         // Holo blue for links
    },
    border: {
      primary: '#33B5E5',      // Holo blue borders (distinctive in dark theme)
      secondary: '#333333',    // Subtle dark borders
      focus: '#33B5E5',        // Bright Holo blue when focused
      error: '#FF4444',        // Holo red light
    },
    interactive: {
      primary: '#33B5E5',      // holo_blue_light - glowing accent
      primaryHover: '#5FC3E8', // Brighter on hover
      primaryActive: '#0099CC', // holo_blue_dark - pressed state
      primaryDisabled: '#1A5A6E', // Dimmed blue
      secondary: '#2A2A2A',    // Secondary actions
      secondaryHover: '#333333',
      secondaryActive: '#222222',
      secondaryDisabled: '#1A1A1A',
    },
    feedback: {
      success: '#99CC00',      // holo_green_light - neon green
      successSubtle: 'rgba(153, 204, 0, 0.15)',
      warning: '#FFBB33',      // holo_orange_light - bright orange
      warningSubtle: 'rgba(255, 187, 51, 0.15)',
      error: '#FF4444',        // holo_red_light - bright red
      errorSubtle: 'rgba(255, 68, 68, 0.15)',
      info: '#33B5E5',         // holo_blue_light
      infoSubtle: 'rgba(51, 181, 229, 0.15)',
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
        fontFamily: 'Roboto',
        fontSize: 34,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h2: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: typography.fontWeights.light,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.normal,
      },
      h3: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h4: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h5: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      h6: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.relaxed,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      small: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      medium: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      small: {
        fontFamily: 'Roboto',
        fontSize: 11,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.normal,
    },
    overline: {
      fontFamily: 'Roboto',
      fontSize: 10,
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: typography.letterSpacing.wider,
    },
  },
};

