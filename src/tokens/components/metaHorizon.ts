import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { metaHorizonSemanticLight } from '../semantic/metaHorizon';

const { spacing, borderRadius, shadows, typography } = basePrimitiveTokens;

/**
 * Meta Horizon Design Component Tokens
 * Based on Meta's official Horizon design system
 */
export const metaHorizonComponentTokens: ComponentTokens = {
  button: {
    borderRadius: 8, // Meta uses consistent 8px radius
    paddingVertical: {
      small: spacing[1], // 4px
      medium: spacing[2], // 8px
      large: spacing[2], // 8px
    },
    paddingHorizontal: {
      small: spacing[3], // 12px
      medium: spacing[4], // 16px
      large: spacing[6], // 24px
    },
    minHeight: {
      small: 32,
      medium: 36,
      large: 44,
    },
    typography: {
      small: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      large: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 17,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
    },
  },

  card: {
    borderRadius: 12, // Meta uses larger radius for cards
    padding: {
      none: 0,
      small: spacing[2], // 8px
      medium: spacing[4], // 16px
      large: spacing[6], // 24px
    },
    shadow: {
      none: shadows.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
      },
    },
    background: metaHorizonSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: metaHorizonSemanticLight.colors.border.secondary,
    },
  },

  input: {
    borderRadius: 8, // Consistent with button radius
    paddingVertical: spacing[2], // 8px
    paddingHorizontal: spacing[3], // 12px
    minHeight: 44, // Meta's touch-friendly height
    typography: metaHorizonSemanticLight.typography.body.medium,
    border: {
      width: 1,
      color: {
        default: metaHorizonSemanticLight.colors.border.secondary,
        focus: metaHorizonSemanticLight.colors.border.focus,
        error: metaHorizonSemanticLight.colors.border.error,
        disabled: metaHorizonSemanticLight.colors.text.disabled,
      },
    },
    background: {
      default: metaHorizonSemanticLight.colors.surface.secondary,
      disabled: metaHorizonSemanticLight.colors.surface.tertiary,
    },
  },

  image: {
    borderRadius: 12, // Matching card radius for consistency
    aspectRatio: {
      square: 1,
      portrait: 4 / 5,
      landscape: 16 / 9,
      wide: 21 / 9,
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
      opacity: 0.6,
    },
  },

  tag: {
    borderRadius: 6, // Slightly rounded but not fully circular
    paddingVertical: spacing[1], // 4px
    paddingHorizontal: spacing[2], // 8px
    typography: {
      ...metaHorizonSemanticLight.typography.label.small,
      fontWeight: typography.fontWeights.semibold,
    },
    border: {
      width: 0,
    },
  },

  list: {
    itemSpacing: spacing[2], // 8px
    sectionHeaderSpacing: spacing[4], // 16px
    contentPadding: spacing[4], // 16px
  },

  articleCard: {
    borderRadius: 12,
    padding: spacing[4], // 16px
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 3,
    },
    background: metaHorizonSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: metaHorizonSemanticLight.colors.border.secondary,
    },
    spacing: {
      headerGap: spacing[3], // 12px
      contentGap: spacing[2], // 8px
      tagsGap: spacing[2], // 8px
      metaGap: spacing[1], // 4px
    },
  },
};

