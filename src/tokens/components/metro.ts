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
        fontSize: 13,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography.fontWeights.semibold,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal,
      },
      large: {
        fontFamily: 'System',
        fontSize: 18,
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
};
