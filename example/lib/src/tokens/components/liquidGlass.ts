import { ComponentTokens } from '../../types/tokens';
import { basePrimitiveTokens } from '../primitives';
import { liquidGlassSemanticLight } from '../semantic/liquidGlass';

const { spacing, borderRadius, typography } = basePrimitiveTokens;

export const liquidGlassComponentTokens: ComponentTokens = {
  button: {
    borderRadius: borderRadius['2xl'], // Very rounded
    paddingVertical: { small: spacing[2], medium: spacing[3], large: spacing[4] },
    paddingHorizontal: { small: spacing[6], medium: spacing[8], large: spacing[12] },
    minHeight: { small: 36, medium: 44, large: 56 },
    typography: {
      small: { fontFamily: 'Inter, System', fontSize: 15, fontWeight: typography.fontWeights.medium, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
      medium: { fontFamily: 'Inter, System', fontSize: 17, fontWeight: typography.fontWeights.medium, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
      large: { fontFamily: 'Inter, System', fontSize: 19, fontWeight: typography.fontWeights.medium, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    },
  },
  card: {
    borderRadius: borderRadius['2xl'],
    padding: { none: 0, small: spacing[4], medium: spacing[6], large: spacing[8] },
    shadow: {
      none: { shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0 },
      small: { shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 2 },
      medium: { shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 24, elevation: 4 },
      large: { shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.2, shadowRadius: 40, elevation: 8 },
    },
    background: liquidGlassSemanticLight.colors.surface.primary,
    border: { width: 1, color: liquidGlassSemanticLight.colors.border.primary },
  },
  input: {
    borderRadius: borderRadius.xl,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    minHeight: 48,
    typography: { fontFamily: 'Inter, System', fontSize: 16, fontWeight: typography.fontWeights.regular, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    border: {
      width: 1,
      color: {
        default: liquidGlassSemanticLight.colors.border.secondary,
        focus: liquidGlassSemanticLight.colors.border.focus,
        error: liquidGlassSemanticLight.colors.border.error,
        disabled: liquidGlassSemanticLight.colors.text.disabled,
      },
    },
    background: { default: liquidGlassSemanticLight.colors.surface.secondary, disabled: liquidGlassSemanticLight.colors.surface.tertiary },
  },
  image: {
    borderRadius: borderRadius['2xl'],
    aspectRatio: { square: 1, portrait: 3 / 4, landscape: 4 / 3, wide: 16 / 9 },
    overlay: { gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)', opacity: 0.25 },
  },
  tag: {
    borderRadius: borderRadius.full,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[4],
    typography: { fontFamily: 'Inter, System', fontSize: 13, fontWeight: typography.fontWeights.medium, lineHeight: typography.lineHeights.normal, letterSpacing: typography.letterSpacing.normal },
    border: { width: 1 },
  },
  list: {
    itemSpacing: spacing[4],
    sectionHeaderSpacing: spacing[6],
    contentPadding: spacing[6],
  },
  articleCard: {
    borderRadius: borderRadius['2xl'],
    padding: spacing[6],
    imageHeight: 240,
    shadow: { shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 24, elevation: 4 },
    background: liquidGlassSemanticLight.colors.surface.primary,
    border: { width: 1, color: liquidGlassSemanticLight.colors.border.primary },
    spacing: { headerGap: spacing[4], contentGap: spacing[3], tagsGap: spacing[3], metaGap: spacing[2] },
  },

  appBar: {
    height: 56,
    paddingHorizontal: spacing[4],
    backgroundColor: liquidGlassSemanticLight.colors.surface.primary,
    shadow: {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 3,
    },
    border: {
      width: 1,
      color: liquidGlassSemanticLight.colors.border.primary,
    },
    title: {
      fontFamily: typography.fontFamilies.body,
      fontSize: 18,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    iconSize: 24,
  },
};
