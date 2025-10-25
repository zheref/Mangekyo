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
        ...materialSemanticLight.typography.label.medium,
        fontWeight: typography.fontWeights.medium,
      },
      medium: {
        ...materialSemanticLight.typography.label.large,
        fontWeight: typography.fontWeights.medium,
      },
      large: {
        fontFamily: typography.fontFamilies.body,
        fontSize: typography.fontSizes.base,
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
};
