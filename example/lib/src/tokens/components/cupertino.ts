import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { cupertinoSemanticLight } from '../semantic/cupertino';

const { spacing, borderRadius, shadows, typography } = basePrimitiveTokens;

/**
 * Cupertino (iOS) Component Tokens
 */
export const cupertinoComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.lg, // iOS uses rounded corners
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
      small: 28,
      medium: 44, // iOS standard touch target
      large: 50,
    },
    typography: {
      small: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 17, // iOS default
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
      large: {
        fontFamily: 'System',
        fontSize: 19,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.tight,
      },
    },
  },

  card: {
    borderRadius: borderRadius.xl, // iOS uses very rounded corners
    padding: {
      none: 0,
      small: spacing[3],
      medium: spacing[4],
      large: spacing[6],
    },
    shadow: {
      none: shadows.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 1,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.16,
        shadowRadius: 4,
        elevation: 3,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
      },
    },
    background: cupertinoSemanticLight.colors.surface.secondary,
    border: {
      width: 0,
      color: 'transparent',
    },
  },

  input: {
    borderRadius: borderRadius.lg,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 44, // iOS standard
    typography: {
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.tight,
    },
    border: {
      width: 1,
      color: {
        default: cupertinoSemanticLight.colors.border.secondary,
        focus: cupertinoSemanticLight.colors.border.focus,
        error: cupertinoSemanticLight.colors.border.error,
        disabled: cupertinoSemanticLight.colors.text.disabled,
      },
    },
    background: {
      default: cupertinoSemanticLight.colors.surface.secondary,
      disabled: cupertinoSemanticLight.colors.surface.tertiary,
    },
  },

  image: {
    borderRadius: borderRadius.xl,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9,
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
      opacity: 0.3,
    },
  },

  tag: {
    borderRadius: borderRadius.full,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    typography: {
      fontFamily: 'System',
      fontSize: typography.fontSizes.sm,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.tight,
    },
    border: {
      width: 0,
    },
  },

  list: {
    itemSpacing: spacing[3],
    sectionHeaderSpacing: spacing[4],
    contentPadding: spacing[4],
  },

  articleCard: {
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 3,
    },
    background: cupertinoSemanticLight.colors.surface.secondary,
    border: {
      width: 0,
      color: 'transparent',
    },
    spacing: {
      headerGap: spacing[3],
      contentGap: spacing[2],
      tagsGap: spacing[2],
      metaGap: spacing[1],
    },
  },
};
