// Components (Legacy)
export * from './components';

// Legacy Theme System
export { ThemeProvider, useTheme } from './themes/ThemeContext';
export { defaultTheme } from './themes/default';
export { materialTheme } from './themes/material';
export type { Theme } from './types/theme';

// Design Language System (V2)
export {
  DesignLanguageProvider,
  useDesignLanguage,
  themes,
  createTheme,
} from './themes/DesignLanguageContext';

// Design Language Types
export type {
  DesignLanguage,
  ColorScheme,
  DesignLanguageTheme,
  PrimitiveTokens,
  SemanticTokens,
  ComponentTokens,
  TypographyStyle,
  ShadowDefinition,
} from './types/tokens';

// Utilities
export { convertTypographyToTextStyle } from './utils/typography';
