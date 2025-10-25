import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { materialSemanticLight } from '../semantic/material';

const { spacing, borderRadius, shadows, typography } = basePrimitiveTokens;

/**
 * Material Design Component Tokens
 */
export const materialComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.sm, // Material uses subtle corners
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
      small: 32,
      medium: 40,
      large: 48,
    },
    typography: {
      small: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 15,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      medium: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 17,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      large: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 19,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
  },

  card: {
    borderRadius: borderRadius.sm,
    padding: {
      none: 0,
      small: spacing[2],
      medium: spacing[4],
      large: spacing[6],
    },
    shadow: {
      none: shadows.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      },
    },
    background: materialSemanticLight.colors.surface.elevated,
    border: {
      width: 0,
      color: 'transparent',
    },
  },

  input: {
    borderRadius: borderRadius.sm,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    minHeight: 56, // Material standard
    typography: materialSemanticLight.typography.body.medium,
    border: {
      width: 1,
      color: {
        default: materialSemanticLight.colors.border.secondary,
        focus: materialSemanticLight.colors.border.focus,
        error: materialSemanticLight.colors.border.error,
        disabled: materialSemanticLight.colors.text.disabled,
      },
    },
    background: {
      default: materialSemanticLight.colors.surface.secondary,
      disabled: materialSemanticLight.colors.surface.tertiary,
    },
  },

  image: {
    borderRadius: borderRadius.sm,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9,
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
      opacity: 0.4,
    },
  },

  tag: {
    borderRadius: borderRadius.full,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[3],
    typography: {
      ...materialSemanticLight.typography.label.small,
      fontWeight: typography.fontWeights.medium,
    },
    border: {
      width: 0,
    },
  },

  list: {
    itemSpacing: spacing[2],
    sectionHeaderSpacing: spacing[4],
    contentPadding: spacing[4],
  },

  articleCard: {
    borderRadius: borderRadius.md,
    padding: spacing[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    background: materialSemanticLight.colors.surface.elevated,
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

  appBar: {
    height: 56,
    paddingHorizontal: spacing[4],
    backgroundColor: materialSemanticLight.colors.surface.primary,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    border: {
      width: 0,
      color: 'transparent',
    },
    title: {
      fontFamily: typography.fontFamilies.body,
      fontSize: 20,
      fontWeight: typography.fontWeights.medium,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    iconSize: 24,
  },

  pill: {
    borderRadius: borderRadius.full, // Material uses pill shape
    paddingVertical: {
      small: spacing[1],
      medium: spacing[2],
      large: spacing[2],
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
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      medium: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 15,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
      large: {
        fontFamily: typography.fontFamilies.body,
        fontSize: 17,
        fontWeight: typography.fontWeights.medium,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.wide,
      },
    },
    border: {
      width: 0,
    },
    shadow: {
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
        elevation: 3,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
      },
    },
  },

  pillBar: {
    backgroundColor: materialSemanticLight.colors.surface.elevated,
    paddingVertical: 10,
    contentPaddingHorizontal: spacing[4],
    gap: spacing[2],
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 2,
      elevation: 2,
    },
  },
};
