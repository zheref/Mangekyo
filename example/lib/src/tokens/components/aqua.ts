import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { aquaSemanticLight } from '../semantic/aqua';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

/**
 * Aqua (Classic macOS) Component Tokens
 */
export const aquaComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.md, // Aqua uses rounded corners
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
    minHeight: {
      small: 22,
      medium: 32,
      large: 40,
    },
    typography: {
      small: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      large: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
  },

  card: {
    borderRadius: borderRadius.lg,
    padding: {
      none: 0,
      small: spacing[2],
      medium: spacing[3],
      large: spacing[4],
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6,
      },
    },
    background: aquaSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: aquaSemanticLight.colors.border.secondary,
    },
  },

  input: {
    borderRadius: borderRadius.md,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 22,
    typography: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 13,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    border: {
      width: 1,
      color: {
        default: aquaSemanticLight.colors.border.secondary,
        focus: aquaSemanticLight.colors.border.focus,
        error: aquaSemanticLight.colors.border.error,
        disabled: aquaSemanticLight.colors.text.disabled,
      },
    },
    background: {
      default: '#FFFFFF',
      disabled: '#F0F0F0',
    },
  },

  image: {
    borderRadius: borderRadius.lg,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9,
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)',
      opacity: 0.35,
    },
  },

  tag: {
    borderRadius: borderRadius.md,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    typography: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 11,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    border: {
      width: 1,
    },
  },

  list: {
    itemSpacing: spacing[2],
    sectionHeaderSpacing: spacing[3],
    contentPadding: spacing[3],
  },

  articleCard: {
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    imageHeight: 180,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    background: aquaSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: aquaSemanticLight.colors.border.secondary,
    },
    spacing: {
      headerGap: spacing[2],
      contentGap: spacing[2],
      tagsGap: spacing[2],
      metaGap: spacing[1],
    },
  },
};
