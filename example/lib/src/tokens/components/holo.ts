import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { holoSemanticLight } from '../semantic/holo';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

/**
 * Holo Design Component Tokens
 * Android 4.0-4.4 (Ice Cream Sandwich, Jelly Bean, KitKat)
 */
export const holoComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.none, // Sharp edges in Holo
    paddingVertical: {
      small: spacing[1],
      medium: spacing[2],
      large: spacing[3],
    },
    paddingHorizontal: {
      small: spacing[4],
      medium: spacing[6],
      large: spacing[8],
    },
    minHeight: {
      small: 32,
      medium: 48, // Standard touch target
      large: 56,
    },
    typography: {
      small: {
        fontFamily: 'Roboto, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Roboto, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      large: {
        fontFamily: 'Roboto, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
  },

  card: {
    borderRadius: borderRadius.none,
    padding: {
      none: 0,
      small: spacing[3],
      medium: spacing[4],
      large: spacing[6],
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
        shadowColor: '#33B5E5',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
      },
      medium: {
        shadowColor: '#33B5E5',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 4,
      },
      large: {
        shadowColor: '#33B5E5',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        elevation: 8,
      },
    },
    background: holoSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: holoSemanticLight.colors.border.primary,
    },
  },

  input: {
    borderRadius: borderRadius.none,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 48,
    typography: {
      fontFamily: 'Roboto, System',
      fontSize: 16,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    border: {
      width: 1,
      color: {
        default: holoSemanticLight.colors.border.secondary,
        focus: holoSemanticLight.colors.border.focus,
        error: holoSemanticLight.colors.border.error,
        disabled: holoSemanticLight.colors.text.disabled,
      },
    },
    background: {
      default: holoSemanticLight.colors.surface.secondary,
      disabled: holoSemanticLight.colors.surface.tertiary,
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
    borderRadius: borderRadius.none,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    typography: {
      fontFamily: 'Roboto, System',
      fontSize: 12,
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
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
    borderRadius: borderRadius.none,
    padding: spacing[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#33B5E5',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    background: holoSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: holoSemanticLight.colors.border.primary,
    },
    spacing: {
      headerGap: spacing[3],
      contentGap: spacing[2],
      tagsGap: spacing[2],
      metaGap: spacing[1],
    },
  },
};

