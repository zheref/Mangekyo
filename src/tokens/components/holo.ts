import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { holoSemanticLight } from '../semantic/holo';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

/**
 * Holo Design Component Tokens
 * Android 4.0-4.4 KitKat (Ice Cream Sandwich, Jelly Bean, KitKat)
 * 
 * Key Characteristics:
 * - Sharp edges (no border radius)
 * - Drop shadows for depth
 * - Holo blue (#33B5E5) as primary accent
 * - Hard-edged, angular aesthetic
 * - 48dp minimum touch targets
 * - Roboto font family
 * - Support for both light and dark themes
 * 
 * Icon Guidelines:
 * - Action bar icons: 32×32dp with 8dp padding (total 48×48dp touch target)
 * - Small/contextual icons: 24×24dp
 * - Notification icons: 24×24dp (white)
 * - Launcher icons: 48×48dp
 * - Use white icons on dark backgrounds, black icons on light backgrounds
 * - Icons should be simple, geometric, and flat
 * - Standard Holo icon set available in the Android SDK
 */
export const holoComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.none, // Sharp edges - no rounding in Holo
    paddingVertical: {
      small: spacing[1],      // 8dp
      medium: spacing[2],     // 16dp
      large: spacing[3],      // 24dp
    },
    paddingHorizontal: {
      small: spacing[4],      // 32dp
      medium: spacing[6],     // 48dp
      large: spacing[8],      // 64dp
    },
    minHeight: {
      small: 32,
      medium: 48,  // Standard 48dp touch target (Android guideline)
      large: 56,
    },
    typography: {
      small: {
        fontFamily: 'Roboto',
        fontSize: 14,  // Standard button text
        fontWeight: typography.fontWeights.bold,  // Buttons use bold
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,  // Slightly wider for buttons
      },
      medium: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      large: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
  },

  card: {
    borderRadius: borderRadius.none,  // Hard edges, no rounding
    padding: {
      none: 0,
      small: spacing[3],   // 24dp
      medium: spacing[4],  // 32dp
      large: spacing[6],   // 48dp
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
      small: {
        shadowColor: '#000',  // Standard black shadow, not blue
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 8,
      },
    },
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: 'transparent', // Placeholder - components use semantic.colors.surface.elevated
    border: {
      width: 0,  // Cards typically don't have borders in Holo, they use shadows
      color: 'transparent', // Placeholder - components use semantic.colors.border.secondary
    },
  },

  input: {
    borderRadius: borderRadius.none,  // No rounding
    paddingVertical: spacing[2],      // 16dp
    paddingHorizontal: spacing[3],    // 24dp
    minHeight: 48,  // Standard touch target
    typography: {
      fontFamily: 'Roboto',
      fontSize: 16,  // Comfortable reading size
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    border: {
      width: 2,  // Slightly thicker borders for definition
      // NOTE: Components now use theme.semantic.colors for dynamic theme support
      color: {
        default: 'transparent', // Placeholder - components use semantic.colors.border.*
        focus: 'transparent',
        error: 'transparent',
        disabled: 'transparent',
      },
    },
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: {
      default: 'transparent', // Placeholder - components use semantic.colors.surface.primary
      disabled: 'transparent',
    },
  },

  image: {
    borderRadius: borderRadius.none,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9,
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(51,181,229,0) 0%, rgba(51,181,229,0.6) 100%)',
      opacity: 0.6,
    },
  },

  tag: {
    borderRadius: borderRadius.none,  // Sharp edges
    paddingVertical: spacing[1],      // 8dp
    paddingHorizontal: spacing[2],    // 16dp
    typography: {
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.wide,  // Better legibility for small text
    },
    border: {
      width: 1,
    },
  },

  list: {
    itemSpacing: spacing[2],
    sectionHeaderSpacing: spacing[4],
    contentPadding: spacing[4],
  },

  articleCard: {
    borderRadius: borderRadius.none,  // Sharp edges
    padding: spacing[4],              // 32dp
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',  // Standard drop shadow
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: 'transparent', // Placeholder - components use semantic.colors.surface.elevated
    border: {
      width: 0,  // Use shadows instead of borders
      color: 'transparent', // Placeholder - components use semantic.colors.border.secondary
    },
    spacing: {
      headerGap: spacing[3],   // 24dp
      contentGap: spacing[2],  // 16dp
      tagsGap: spacing[2],     // 16dp
      metaGap: spacing[1],     // 8dp
    },
  },
};

