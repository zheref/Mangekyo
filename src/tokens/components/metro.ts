import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { metroSemanticLight } from '../semantic/metro';

const { spacing, borderRadius, shadows, typography } = basePrimitiveTokens;

/**
 * Metro/Fluent Design Component Tokens
 */
export const metroComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.xs, // Metro uses sharp or very subtle corners
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
      medium: 40,
      large: 48,
    },
    typography: {
      small: {
        fontFamily: 'System', // Segoe UI
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      large: {
        fontFamily: 'System',
        fontSize: 19,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
  },

  card: {
    borderRadius: borderRadius.sm,
    padding: {
      none: 0,
      small: spacing[3],
      medium: spacing[4],
      large: spacing[8],
    },
    shadow: {
      none: shadows.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 1,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 3,
        elevation: 3,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.16,
        shadowRadius: 4,
        elevation: 5,
      },
    },
    background: metroSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: metroSemanticLight.colors.border.secondary,
    },
  },

  input: {
    borderRadius: borderRadius.xs,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 40,
    typography: {
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    border: {
      width: 1,
      color: {
        default: metroSemanticLight.colors.border.primary,
        focus: metroSemanticLight.colors.border.focus,
        error: metroSemanticLight.colors.border.error,
        disabled: metroSemanticLight.colors.text.disabled,
      },
    },
    background: {
      default: metroSemanticLight.colors.background.primary,
      disabled: metroSemanticLight.colors.surface.tertiary,
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
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
      opacity: 0.6,
    },
  },

  tag: {
    borderRadius: borderRadius.xs,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    typography: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.wide,
    },
    border: {
      width: 1,
    },
  },

  list: {
    itemSpacing: spacing[3],
    sectionHeaderSpacing: spacing[4],
    contentPadding: spacing[4],
  },

  articleCard: {
    borderRadius: borderRadius.sm,
    padding: spacing[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.12,
      shadowRadius: 3,
      elevation: 3,
    },
    background: metroSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: metroSemanticLight.colors.border.secondary,
    },
    spacing: {
      headerGap: spacing[3],
      contentGap: spacing[2],
      tagsGap: spacing[2],
      metaGap: spacing[1],
    },
  },

  appBar: {
    height: 56,
    paddingHorizontal: spacing[4],
    backgroundColor: metroSemanticLight.colors.surface.primary,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    border: {
      width: 1,
      color: metroSemanticLight.colors.border.secondary,
    },
    title: {
      fontFamily: typography.fontFamilies.body,
      fontSize: 18,
      fontWeight: typography.fontWeights.light,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    iconSize: 24,
  },

  pill: {
    borderRadius: borderRadius.none, // Metro flat design, no rounding
    paddingVertical: {
      small: spacing[1],
      medium: spacing[2],
      large: spacing[3],
    },
    paddingHorizontal: {
      small: spacing[3],
      medium: spacing[4],
      large: spacing[6],
    },
    typography: {
      small: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      large: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
    border: {
      width: 1, // Metro uses borders
    },
    // No shadow for Metro
  },

  pillBar: {
    backgroundColor: metroSemanticLight.colors.surface.elevated,
    paddingVertical: 10,
    contentPaddingHorizontal: spacing[4],
    gap: spacing[2],
    // No shadow for Metro - flat design
  },
};
