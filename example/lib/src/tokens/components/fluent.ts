import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { fluentSemanticLight } from '../semantic/fluent';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

export const fluentComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.sm,
    paddingVertical: { small: spacing[1], medium: spacing[2], large: spacing[3] },
    paddingHorizontal: { small: spacing[4], medium: spacing[6], large: spacing[8] },
    minHeight: { small: 24, medium: 32, large: 40 },
    typography: {
      small: { fontFamily: 'Segoe UI Variable, System', fontSize: 12, fontWeight: typography.fontWeights.semibold, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
      medium: { fontFamily: 'Segoe UI Variable, System', fontSize: 14, fontWeight: typography.fontWeights.semibold, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
      large: { fontFamily: 'Segoe UI Variable, System', fontSize: 16, fontWeight: typography.fontWeights.semibold, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    },
  },
  card: {
    borderRadius: borderRadius.md,
    padding: { none: 0, small: spacing[3], medium: spacing[4], large: spacing[6] },
    shadow: {
      none: { shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0 },
      small: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
      medium: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 4, elevation: 4 },
      large: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 8, elevation: 8 },
    },
    background: fluentSemanticLight.colors.surface.elevated,
    border: { width: 1, color: fluentSemanticLight.colors.border.secondary },
  },
  input: {
    borderRadius: borderRadius.sm,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 32,
    typography: { fontFamily: 'Segoe UI Variable, System', fontSize: 14, fontWeight: typography.fontWeights.regular, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    border: {
      width: 1,
      color: {
        default: fluentSemanticLight.colors.border.primary,
        focus: fluentSemanticLight.colors.border.focus,
        error: fluentSemanticLight.colors.border.error,
        disabled: fluentSemanticLight.colors.text.disabled,
      },
    },
    background: { default: fluentSemanticLight.colors.surface.primary, disabled: fluentSemanticLight.colors.background.tertiary },
  },
};
