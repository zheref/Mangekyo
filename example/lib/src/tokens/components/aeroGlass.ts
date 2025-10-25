import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { aeroGlassSemanticLight } from '../semantic/aeroGlass';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

export const aeroGlassComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius.sm,
    paddingVertical: { small: spacing[1], medium: spacing[2], large: spacing[3] },
    paddingHorizontal: { small: spacing[3], medium: spacing[4], large: spacing[6] },
    minHeight: { small: 23, medium: 30, large: 38 },
    typography: {
      small: { fontFamily: 'Segoe UI, System', fontSize: 14, fontWeight: typography.fontWeights.regular, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
      medium: { fontFamily: 'Segoe UI, System', fontSize: 16, fontWeight: typography.fontWeights.regular, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
      large: { fontFamily: 'Segoe UI, System', fontSize: 18, fontWeight: typography.fontWeights.regular, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    },
  },
  card: {
    borderRadius: borderRadius.sm,
    padding: { none: 0, small: spacing[2], medium: spacing[3], large: spacing[4] },
    shadow: {
      none: { shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0 },
      small: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 3, elevation: 1 },
      medium: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 5, elevation: 3 },
      large: { shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.16, shadowRadius: 7, elevation: 5 },
    },
    background: aeroGlassSemanticLight.colors.surface.primary,
    border: { width: 1, color: aeroGlassSemanticLight.colors.border.primary },
  },
  input: {
    borderRadius: borderRadius.sm,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 24,
    typography: { fontFamily: 'Segoe UI, System', fontSize: 12, fontWeight: typography.fontWeights.regular, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    border: {
      width: 1,
      color: {
        default: aeroGlassSemanticLight.colors.border.secondary,
        focus: aeroGlassSemanticLight.colors.border.focus,
        error: aeroGlassSemanticLight.colors.border.error,
        disabled: aeroGlassSemanticLight.colors.text.disabled,
      },
    },
    background: { default: 'rgba(255, 255, 255, 0.9)', disabled: 'rgba(240, 240, 240, 0.9)' },
  },
  image: {
    borderRadius: borderRadius.sm,
    aspectRatio: { square: 1, portrait: 3 / 4, landscape: 4 / 3, wide: 16 / 9 },
    overlay: { gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)', opacity: 0.5 },
  },
  tag: {
    borderRadius: borderRadius.sm,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    typography: { fontFamily: 'Segoe UI, System', fontSize: 11, fontWeight: typography.fontWeights.semibold, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    border: { width: 1 },
  },
  list: {
    itemSpacing: spacing[2],
    sectionHeaderSpacing: spacing[3],
    contentPadding: spacing[3],
  },
  articleCard: {
    borderRadius: borderRadius.md,
    padding: spacing[3],
    imageHeight: 180,
    shadow: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, elevation: 3 },
    background: aeroGlassSemanticLight.colors.surface.primary,
    border: { width: 1, color: aeroGlassSemanticLight.colors.border.primary },
    spacing: { headerGap: spacing[2], contentGap: spacing[2], tagsGap: spacing[2], metaGap: spacing[1] },
  },
};
