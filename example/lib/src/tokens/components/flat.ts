import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { flatSemanticLight } from '../semantic/flat';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

/**
 * Flat Design Component Tokens (iOS 18)
 * Components with glass morphism, translucency, and fluid design
 */
export const flatComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.xl, // 12px - iOS continuous corner radius
    paddingVertical: {
      small: spacing[1], // 4
      medium: spacing[2], // 8
      large: spacing[3], // 12
    },
    paddingHorizontal: {
      small: spacing[4], // 16
      medium: spacing[6], // 24
      large: spacing[8], // 32
    },
    minHeight: {
      small: 32,
      medium: 44, // iOS standard touch target (44pt)
      large: 50,
    },
    typography: {
      small: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.33, // 20pt
        letterSpacing: -0.23,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 17, // iOS default body size
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.29, // 22pt
        letterSpacing: -0.41,
      },
      large: {
        fontFamily: 'System',
        fontSize: 19,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: 1.26, // 24pt
        letterSpacing: -0.45,
      },
    },
  },

  card: {
    borderRadius: borderRadius['2xl'], // 16px - larger for modern iOS
    padding: {
      none: 0,
      small: spacing[3], // 12
      medium: spacing[4], // 16
      large: spacing[6], // 24
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
        shadowOpacity: 0.04, // Very subtle
        shadowRadius: 3,
        elevation: 1,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 4,
      },
    },
    background: flatSemanticLight.colors.surface.elevated, // Glass effect
    border: {
      width: 0,
      color: 'transparent',
    },
  },

  input: {
    borderRadius: borderRadius.lg, // 10px
    paddingVertical: spacing[2], // 8
    paddingHorizontal: spacing[3], // 12
    minHeight: 44, // iOS touch target
    typography: {
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: typography.fontWeights.regular,
      lineHeight: 1.29,
      letterSpacing: -0.41,
    },
    border: {
      width: 0, // iOS 18 uses filled backgrounds, not borders
      color: {
        default: 'transparent',
        focus: flatSemanticLight.colors.border.focus,
        error: flatSemanticLight.colors.border.error,
        disabled: 'transparent',
      },
    },
    background: {
      default: flatSemanticLight.colors.interactive.secondary, // Filled style
      disabled: 'rgba(120, 120, 128, 0.08)',
    },
  },

  image: {
    borderRadius: borderRadius['2xl'], // 16px for modern look
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9,
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
      opacity: 0.2,
    },
  },

  tag: {
    borderRadius: borderRadius.full, // Pill shape
    paddingVertical: spacing[1], // 4
    paddingHorizontal: spacing[3], // 12
    typography: {
      fontFamily: 'System',
      fontSize: 13,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: 1.38, // 18pt
      letterSpacing: -0.08,
    },
    border: {
      width: 0,
    },
  },

  list: {
    itemSpacing: spacing[2], // 8
    sectionHeaderSpacing: spacing[4], // 16
    contentPadding: spacing[4], // 16
  },

  articleCard: {
    borderRadius: borderRadius['2xl'], // 16px
    padding: spacing[4], // 16
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04, // Very subtle iOS shadow
      shadowRadius: 12,
      elevation: 2,
    },
    background: flatSemanticLight.colors.surface.elevated, // Glass effect
    border: {
      width: 0,
      color: 'transparent',
    },
    spacing: {
      headerGap: spacing[3], // 12
      contentGap: spacing[2], // 8
      tagsGap: spacing[2], // 8
      metaGap: spacing[1], // 4
    },
  },
};

