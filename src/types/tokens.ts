/**
 * Design Language Types
 */
export type DesignLanguage =
  | 'material'    // Google Material Design (2014-Present)
  | 'cupertino'   // Apple iOS/macOS (2013-Present)
  | 'aqua'        // Classic macOS (2000-2014)
  | 'aeroGlass'   // Windows Vista/7 (2006-2012)
  | 'metro'       // Windows 8 (2012-2015)
  | 'fluent'      // Windows 10/11 (2017-Present)
  | 'liquidGlass'; // Modern Glassmorphism (2020-Present)

export type ColorScheme = 'light' | 'dark';

/**
 * Primitive Design Tokens
 * Raw values that form the foundation of the design system
 */
export interface ColorPrimitive {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface PrimitiveTokens {
  colors: {
    // Brand colors
    primary: ColorPrimitive;
    secondary: ColorPrimitive;
    // Semantic colors
    success: ColorPrimitive;
    warning: ColorPrimitive;
    error: ColorPrimitive;
    info: ColorPrimitive;
    // Neutral colors
    neutral: ColorPrimitive;
    // Special
    white: string;
    black: string;
  };

  spacing: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    6: number;
    8: number;
    12: number;
    16: number;
    20: number;
    24: number;
    32: number;
    40: number;
    48: number;
    56: number;
    64: number;
  };

  typography: {
    fontFamilies: {
      system: string;
      display: string;
      body: string;
      mono: string;
    };
    fontSizes: {
      xs: number;
      sm: number;
      base: number;
      lg: number;
      xl: number;
      '2xl': number;
      '3xl': number;
      '4xl': number;
      '5xl': number;
    };
    fontWeights: {
      thin: '100';
      extralight: '200';
      light: '300';
      regular: '400';
      medium: '500';
      semibold: '600';
      bold: '700';
      extrabold: '800';
      black: '900';
    };
    lineHeights: {
      none: number;
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
      loose: number;
    };
    letterSpacing: {
      tighter: number;
      tight: number;
      normal: number;
      wide: number;
      wider: number;
      widest: number;
    };
  };

  borderRadius: {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
    full: number;
  };

  shadows: {
    xs: ShadowDefinition;
    sm: ShadowDefinition;
    md: ShadowDefinition;
    lg: ShadowDefinition;
    xl: ShadowDefinition;
    '2xl': ShadowDefinition;
  };

  opacity: {
    0: number;
    5: number;
    10: number;
    20: number;
    25: number;
    30: number;
    40: number;
    50: number;
    60: number;
    70: number;
    75: number;
    80: number;
    90: number;
    95: number;
    100: number;
  };

  blur: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
  };
}

export interface ShadowDefinition {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

/**
 * Semantic Tokens
 * Purpose-based tokens that reference primitive tokens
 */
export interface SemanticTokens {
  colors: {
    // Backgrounds
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
    // Surfaces
    surface: {
      primary: string;
      secondary: string;
      tertiary: string;
      elevated: string;
      overlay: string;
    };
    // Text
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      disabled: string;
      link: string;
    };
    // Borders
    border: {
      primary: string;
      secondary: string;
      focus: string;
      error: string;
    };
    // Interactive states
    interactive: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
      secondary: string;
      secondaryHover: string;
      secondaryActive: string;
      secondaryDisabled: string;
    };
    // Feedback
    feedback: {
      success: string;
      successSubtle: string;
      warning: string;
      warningSubtle: string;
      error: string;
      errorSubtle: string;
      info: string;
      infoSubtle: string;
    };
  };

  spacing: {
    component: {
      paddingXs: number;
      paddingSm: number;
      paddingMd: number;
      paddingLg: number;
      paddingXl: number;
      gapXs: number;
      gapSm: number;
      gapMd: number;
      gapLg: number;
      gapXl: number;
    };
    layout: {
      containerPadding: number;
      sectionGap: number;
      cardGap: number;
    };
  };

  typography: {
    heading: {
      h1: TypographyStyle;
      h2: TypographyStyle;
      h3: TypographyStyle;
      h4: TypographyStyle;
      h5: TypographyStyle;
      h6: TypographyStyle;
    };
    body: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
    label: {
      large: TypographyStyle;
      medium: TypographyStyle;
      small: TypographyStyle;
    };
    caption: TypographyStyle;
    overline: TypographyStyle;
  };
}

export interface TypographyStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  letterSpacing: number;
}

/**
 * Component Tokens
 * Component-specific design decisions
 */
export interface ComponentTokens {
  button: {
    borderRadius: number;
    paddingVertical: {
      small: number;
      medium: number;
      large: number;
    };
    paddingHorizontal: {
      small: number;
      medium: number;
      large: number;
    };
    minHeight: {
      small: number;
      medium: number;
      large: number;
    };
    typography: {
      small: TypographyStyle;
      medium: TypographyStyle;
      large: TypographyStyle;
    };
  };

  card: {
    borderRadius: number;
    padding: {
      none: number;
      small: number;
      medium: number;
      large: number;
    };
    shadow: {
      none: ShadowDefinition;
      small: ShadowDefinition;
      medium: ShadowDefinition;
      large: ShadowDefinition;
    };
    background: string;
    border: {
      width: number;
      color: string;
    };
  };

  input: {
    borderRadius: number;
    paddingVertical: number;
    paddingHorizontal: number;
    minHeight: number;
    typography: TypographyStyle;
    border: {
      width: number;
      color: {
        default: string;
        focus: string;
        error: string;
        disabled: string;
      };
    };
    background: {
      default: string;
      disabled: string;
    };
  };
}

/**
 * Complete Design Language Theme
 */
export interface DesignLanguageTheme {
  name: string;
  designLanguage: DesignLanguage;
  colorScheme: ColorScheme;
  primitives: PrimitiveTokens;
  semantic: SemanticTokens;
  components: ComponentTokens;
}
