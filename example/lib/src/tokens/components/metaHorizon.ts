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
    borderRadius: borderRadius.full, // Meta Horizon uses fully rounded pill buttons (like "Communities Beta")
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
    borderRadius: 16, // Meta Horizon uses 16px for cards (more pronounced than buttons)
    padding: {
      none: 0,
      small: spacing[3], // 12px - More generous padding
      medium: spacing[4], // 16px
      large: spacing[6], // 24px
    },
    shadow: {
      none: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0, // No shadow on Android
      },
      small: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0, // No shadows per Meta Horizon guidelines
        shadowRadius: 0,
        elevation: 0, // No shadow on Android
      },
      medium: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0, // No shadows per Meta Horizon guidelines
        shadowRadius: 0,
        elevation: 0, // No shadow on Android
      },
      large: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0, // No shadows per Meta Horizon guidelines
        shadowRadius: 0,
        elevation: 0, // No shadow on Android
      },
    },
    background: metaHorizonSemanticLight.colors.surface.elevated,
    border: {
      width: 0, // Meta Horizon cards use background color contrast, not borders or shadows
      color: 'transparent',
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
    borderRadius: 12, // Images within cards use 12px (slightly less than card itself)
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
    borderRadius: borderRadius.md, // Moderate rounding (8px) - not full pills like buttons
    paddingVertical: spacing[1], // 4px - Compact vertical
    paddingHorizontal: spacing[3], // 12px - More generous horizontal
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
    borderRadius: 16, // Match card border radius (16px for Meta Horizon)
    padding: spacing[4], // 16px - Generous padding around content
    imageHeight: 200,
    shadow: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0, // No shadows per Meta Horizon guidelines
      shadowRadius: 0,
      elevation: 0, // No shadow on Android
    },
    background: metaHorizonSemanticLight.colors.surface.elevated,
    border: {
      width: 0, // No border - Meta Horizon uses background color contrast only
      color: 'transparent',
    },
    spacing: {
      headerGap: spacing[4], // 16px - More breathing room
      contentGap: spacing[3], // 12px - Increased spacing between elements
      tagsGap: spacing[3], // 12px - More space before tags
      metaGap: spacing[2], // 8px - Slightly more space for meta info
    },
  },

  appBar: {
    height: 56, // Standard app bar height matching Meta's design
    paddingHorizontal: spacing[4], // 16px horizontal padding
    backgroundColor: metaHorizonSemanticLight.colors.background.primary, // Pure white
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0, // NO shadow - completely flat like Meta's design
      shadowRadius: 0,
      elevation: 0,
    },
    border: {
      width: 0, // No border - completely clean separation
      color: 'transparent',
    },
    title: {
      ...metaHorizonSemanticLight.typography.heading.h6, // 17px, Semibold
      fontWeight: typography.fontWeights.semibold, // Emphasize title
    },
    iconSize: 24, // Standard icon size for app bar actions
  },

  pill: {
    borderRadius: borderRadius.full, // Fully rounded pills like buttons
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
    border: {
      width: 0, // No border for Meta Horizon pills
    },
    // No shadow for Meta Horizon pills
  },

  pillBar: {
    backgroundColor: metaHorizonSemanticLight.colors.surface.elevated,
    paddingVertical: 10,
    contentPaddingHorizontal: spacing[4], // 16px
    gap: spacing[2], // 8px
    shadow: {
      // Meta Horizon: completely flat with absolutely no shadow
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
  },
};

