import React, { useState, createContext, useContext, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Text, View, TextInput, Image, Pressable } from 'react-native';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var defaultTheme = {
  name: 'Default',
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5AC8FA',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
    disabled: '#D1D1D6'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  typography: {
    fontFamily: 'System',
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 32
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8
    }
  },
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999
  },
  shadows: {
    none: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8
    }
  }
};

var ThemeContext = /*#__PURE__*/createContext(undefined);
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    _ref$initialTheme = _ref.initialTheme,
    initialTheme = _ref$initialTheme === void 0 ? defaultTheme : _ref$initialTheme;
  var _useState = useState(initialTheme),
    _useState2 = _slicedToArray(_useState, 2),
    theme = _useState2[0],
    setTheme = _useState2[1];
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, children);
};
var useTheme = function useTheme() {
  var context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

var materialTheme = {
  name: 'Material',
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#B00020',
    info: '#2196F3',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#000000',
    textSecondary: '#757575',
    border: '#E0E0E0',
    disabled: '#BDBDBD'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 34
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  borderRadius: {
    none: 0,
    sm: 4,
    md: 4,
    lg: 8,
    xl: 16,
    full: 9999
  },
  shadows: {
    none: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8
    }
  }
};

var Button = function Button(_ref) {
  var title = _ref.title,
    onPress = _ref.onPress,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    style = _ref.style,
    textStyle = _ref.textStyle;
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  var getVariantStyle = function getVariantStyle() {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          borderWidth: 0
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
          borderWidth: 0
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          borderWidth: 0
        };
      default:
        return {};
    }
  };
  var getSizeStyle = function getSizeStyle() {
    switch (size) {
      case 'small':
        return {
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.sm,
          borderRadius: theme.borderRadius.sm
        };
      case 'medium':
        return {
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.md,
          borderRadius: theme.borderRadius.md
        };
      case 'large':
        return {
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.lg,
          borderRadius: theme.borderRadius.lg
        };
      default:
        return {};
    }
  };
  var getTextColor = function getTextColor() {
    if (disabled) {
      return theme.colors.textSecondary;
    }
    if (variant === 'outline' || variant === 'ghost') {
      return theme.colors.primary;
    }
    return '#FFFFFF';
  };
  var getTextSize = function getTextSize() {
    switch (size) {
      case 'small':
        return theme.typography.fontSize.sm;
      case 'medium':
        return theme.typography.fontSize.md;
      case 'large':
        return theme.typography.fontSize.lg;
      default:
        return theme.typography.fontSize.md;
    }
  };
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress,
    disabled: disabled || loading,
    style: [styles$5.button, getVariantStyle(), getSizeStyle(), fullWidth && styles$5.fullWidth, (disabled || loading) && styles$5.disabled, style],
    activeOpacity: 0.7
  }, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    color: getTextColor()
  }) : /*#__PURE__*/React.createElement(Text, {
    style: [styles$5.text, {
      color: getTextColor(),
      fontSize: getTextSize(),
      fontWeight: theme.typography.fontWeight.semibold
    }, textStyle]
  }, title));
};
var styles$5 = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  fullWidth: {
    width: '100%'
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    textAlign: 'center'
  }
});

/**
 * Color Primitives
 * Based on common color scales, can be customized per brand
 */
var colorPrimitives = {
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554'
  },
  purple: {
    50: '#FAF5FF',
    100: '#F3E8FF',
    200: '#E9D5FF',
    300: '#D8B4FE',
    400: '#C084FC',
    500: '#A855F7',
    600: '#9333EA',
    700: '#7E22CE',
    800: '#6B21A8',
    900: '#581C87',
    950: '#3B0764'
  },
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16'
  },
  yellow: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#EAB308',
    600: '#CA8A04',
    700: '#A16207',
    800: '#854D0E',
    900: '#713F12',
    950: '#422006'
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A'
  },
  cyan: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
    950: '#083344'
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A'
  }
};
/**
 * Base Primitive Tokens
 * Used as foundation for all design languages
 */
var basePrimitiveTokens = {
  colors: {
    primary: colorPrimitives.blue,
    secondary: colorPrimitives.purple,
    success: colorPrimitives.green,
    warning: colorPrimitives.yellow,
    error: colorPrimitives.red,
    info: colorPrimitives.cyan,
    neutral: colorPrimitives.neutral,
    white: '#FFFFFF',
    black: '#000000'
  },
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    6: 24,
    8: 32,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256
  },
  typography: {
    fontFamilies: {
      system: 'System',
      display: 'System',
      body: 'System',
      mono: 'Courier'
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48
    },
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    letterSpacing: {
      tighter: -0.05,
      tight: -0.025,
      normal: 0,
      wide: 0.025,
      wider: 0.05,
      widest: 0.1
    }
  },
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    '3xl': 32,
    full: 9999
  },
  shadows: {
    xs: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.05,
      shadowRadius: 1,
      elevation: 1
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 4
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 8
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6
      },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 12
    },
    '2xl': {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 16
    }
  },
  opacity: {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1
  },
  blur: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    '3xl': 32
  }
};

var spacing$j = basePrimitiveTokens.spacing,
  typography$j = basePrimitiveTokens.typography;
/**
 * Holo Design (Android 4.0-4.4 KitKat, 2011-2014)
 *
 * Characteristics:
 * - Holographic UI with electric blue accents (#33B5E5)
 * - Hard edges and drop shadows for depth
 * - Both light and dark theme variants
 * - Roboto font family
 * - Neon-like accent colors
 * - Sharp, angular design elements
 */
/**
 * Holo Light Theme
 * Based on Android's Theme.Holo.Light
 * Used for applications with a bright, clean interface
 */
var holoSemanticLight = {
  colors: {
    background: {
      primary: '#F0F0F0',
      // bright_foreground_holo_light
      secondary: '#E8E8E8',
      // Slightly darker for contrast
      tertiary: '#D8D8D8',
      // Even darker for layering
      inverse: '#000000'
    },
    surface: {
      primary: '#FFFFFF',
      // Pure white surfaces
      secondary: '#F5F5F5',
      // Slightly off-white
      tertiary: '#EEEEEE',
      // Light gray
      elevated: '#FFFFFF',
      // Elevated surfaces are pure white
      overlay: 'rgba(51, 181, 229, 0.08)' // Subtle Holo blue tint
    },
    text: {
      primary: '#000000',
      // primary_text_holo_light
      secondary: '#808080',
      // secondary_text_holo_light
      tertiary: '#A0A0A0',
      // tertiary_text_holo_light
      inverse: '#FFFFFF',
      disabled: '#B0B0B0',
      // hint_foreground_holo_light
      link: '#33B5E5' // Holo blue for links
    },
    border: {
      primary: '#CCCCCC',
      // Default border color
      secondary: '#E0E0E0',
      // Lighter borders
      focus: '#33B5E5',
      // Holo blue when focused
      error: '#FF4444' // Holo red light
    },
    interactive: {
      primary: '#33B5E5',
      // holo_blue_light - main interactive color
      primaryHover: '#5FC3E8',
      // Lighter on hover
      primaryActive: '#0099CC',
      // holo_blue_dark - pressed state
      primaryDisabled: '#B0D9EA',
      // Desaturated light blue
      secondary: '#E0E0E0',
      // Secondary actions
      secondaryHover: '#D0D0D0',
      secondaryActive: '#C0C0C0',
      secondaryDisabled: '#F0F0F0'
    },
    feedback: {
      success: '#99CC00',
      // holo_green_light
      successSubtle: 'rgba(153, 204, 0, 0.1)',
      warning: '#FFBB33',
      // holo_orange_light
      warningSubtle: 'rgba(255, 187, 51, 0.1)',
      error: '#FF4444',
      // holo_red_light
      errorSubtle: 'rgba(255, 68, 68, 0.1)',
      info: '#33B5E5',
      // holo_blue_light
      infoSubtle: 'rgba(51, 181, 229, 0.1)'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$j[1],
      paddingSm: spacing$j[2],
      paddingMd: spacing$j[3],
      paddingLg: spacing$j[4],
      paddingXl: spacing$j[6],
      gapXs: spacing$j[1],
      gapSm: spacing$j[2],
      gapMd: spacing$j[3],
      gapLg: spacing$j[4],
      gapXl: spacing$j[6]
    },
    layout: {
      containerPadding: spacing$j[4],
      sectionGap: spacing$j[6],
      cardGap: spacing$j[3]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Roboto-Light',
        // Official Roboto Light (300)
        fontSize: 34,
        // textAppearanceLarge in Holo
        fontWeight: typography$j.fontWeights.light,
        lineHeight: typography$j.lineHeights.tight,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h2: {
        fontFamily: 'Roboto-Light',
        // Official Roboto Light (300)
        fontSize: 28,
        fontWeight: typography$j.fontWeights.light,
        lineHeight: typography$j.lineHeights.tight,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h3: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 22,
        // textAppearanceMedium
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h4: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 20,
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h5: {
        fontFamily: 'Roboto-Medium',
        // Official Roboto Medium (500)
        fontSize: 18,
        // textAppearanceSmall
        fontWeight: typography$j.fontWeights.medium,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Roboto-Medium',
        // Official Roboto Medium (500)
        fontSize: 16,
        fontWeight: typography$j.fontWeights.medium,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 18,
        // Large body text
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.relaxed,
        letterSpacing: typography$j.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 14,
        // Standard body text
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      small: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 12,
        // Small text
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 14,
        fontWeight: typography$j.fontWeights.bold,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.wide // All caps labels
      },
      medium: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 12,
        fontWeight: typography$j.fontWeights.bold,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.wide
      },
      small: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 11,
        fontWeight: typography$j.fontWeights.bold,
        lineHeight: typography$j.lineHeights.tight,
        letterSpacing: typography$j.letterSpacing.wide
      }
    },
    caption: {
      fontFamily: 'Roboto-Regular',
      // Official Roboto Regular (400)
      fontSize: 12,
      fontWeight: typography$j.fontWeights.regular,
      lineHeight: typography$j.lineHeights.tight,
      letterSpacing: typography$j.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Roboto-Bold',
      // Official Roboto Bold (700)
      fontSize: 10,
      fontWeight: typography$j.fontWeights.bold,
      lineHeight: typography$j.lineHeights.tight,
      letterSpacing: typography$j.letterSpacing.wider
    }
  }
};
/**
 * Holo Dark Theme
 * Based on Android's Theme.Holo (default dark variant)
 * Used for applications with a dark, power-saving interface
 * This was the primary Holo theme and more commonly used than Light
 */
var holoSemanticDark = {
  colors: {
    background: {
      primary: '#000000',
      // background_holo_dark - Pure black
      secondary: '#111111',
      // Slightly lighter for contrast
      tertiary: '#1A1A1A',
      // Even lighter for layering
      inverse: '#FFFFFF'
    },
    surface: {
      primary: '#111111',
      // Dark surfaces
      secondary: '#1A1A1A',
      // Slightly lighter
      tertiary: '#222222',
      // Even lighter
      elevated: '#2A2A2A',
      // Elevated surfaces are lighter
      overlay: 'rgba(51, 181, 229, 0.15)' // Holo blue glow effect
    },
    text: {
      primary: '#FFFFFF',
      // primary_text_holo_dark
      secondary: '#B2B2B2',
      // secondary_text_holo_dark
      tertiary: '#808080',
      // tertiary_text_holo_dark
      inverse: '#000000',
      disabled: '#555555',
      // hint_foreground_holo_dark
      link: '#33B5E5' // Holo blue for links
    },
    border: {
      primary: '#33B5E5',
      // Holo blue borders (distinctive in dark theme)
      secondary: '#333333',
      // Subtle dark borders
      focus: '#33B5E5',
      // Bright Holo blue when focused
      error: '#FF4444' // Holo red light
    },
    interactive: {
      primary: '#33B5E5',
      // holo_blue_light - glowing accent
      primaryHover: '#5FC3E8',
      // Brighter on hover
      primaryActive: '#0099CC',
      // holo_blue_dark - pressed state
      primaryDisabled: '#1A5A6E',
      // Dimmed blue
      secondary: '#2A2A2A',
      // Secondary actions
      secondaryHover: '#333333',
      secondaryActive: '#222222',
      secondaryDisabled: '#1A1A1A'
    },
    feedback: {
      success: '#99CC00',
      // holo_green_light - neon green
      successSubtle: 'rgba(153, 204, 0, 0.15)',
      warning: '#FFBB33',
      // holo_orange_light - bright orange
      warningSubtle: 'rgba(255, 187, 51, 0.15)',
      error: '#FF4444',
      // holo_red_light - bright red
      errorSubtle: 'rgba(255, 68, 68, 0.15)',
      info: '#33B5E5',
      // holo_blue_light
      infoSubtle: 'rgba(51, 181, 229, 0.15)'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$j[1],
      paddingSm: spacing$j[2],
      paddingMd: spacing$j[3],
      paddingLg: spacing$j[4],
      paddingXl: spacing$j[6],
      gapXs: spacing$j[1],
      gapSm: spacing$j[2],
      gapMd: spacing$j[3],
      gapLg: spacing$j[4],
      gapXl: spacing$j[6]
    },
    layout: {
      containerPadding: spacing$j[4],
      sectionGap: spacing$j[6],
      cardGap: spacing$j[3]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Roboto-Light',
        // Official Roboto Light (300)
        fontSize: 34,
        fontWeight: typography$j.fontWeights.light,
        lineHeight: typography$j.lineHeights.tight,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h2: {
        fontFamily: 'Roboto-Light',
        // Official Roboto Light (300)
        fontSize: 28,
        fontWeight: typography$j.fontWeights.light,
        lineHeight: typography$j.lineHeights.tight,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h3: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 22,
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h4: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 20,
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h5: {
        fontFamily: 'Roboto-Medium',
        // Official Roboto Medium (500)
        fontSize: 18,
        fontWeight: typography$j.fontWeights.medium,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Roboto-Medium',
        // Official Roboto Medium (500)
        fontSize: 16,
        fontWeight: typography$j.fontWeights.medium,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 18,
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.relaxed,
        letterSpacing: typography$j.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 14,
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      },
      small: {
        fontFamily: 'Roboto-Regular',
        // Official Roboto Regular (400)
        fontSize: 12,
        fontWeight: typography$j.fontWeights.regular,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 14,
        fontWeight: typography$j.fontWeights.bold,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.wide
      },
      medium: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 12,
        fontWeight: typography$j.fontWeights.bold,
        lineHeight: typography$j.lineHeights.normal,
        letterSpacing: typography$j.letterSpacing.wide
      },
      small: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 11,
        fontWeight: typography$j.fontWeights.bold,
        lineHeight: typography$j.lineHeights.tight,
        letterSpacing: typography$j.letterSpacing.wide
      }
    },
    caption: {
      fontFamily: 'Roboto-Regular',
      // Official Roboto Regular (400)
      fontSize: 12,
      fontWeight: typography$j.fontWeights.regular,
      lineHeight: typography$j.lineHeights.tight,
      letterSpacing: typography$j.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Roboto-Bold',
      // Official Roboto Bold (700)
      fontSize: 10,
      fontWeight: typography$j.fontWeights.bold,
      lineHeight: typography$j.lineHeights.tight,
      letterSpacing: typography$j.letterSpacing.wider
    }
  }
};

var colors$2 = basePrimitiveTokens.colors,
  spacing$i = basePrimitiveTokens.spacing,
  typography$i = basePrimitiveTokens.typography;
/**
 * Material Design Semantic Tokens (Light Mode)
 * Google Material Design 3 (2021+)
 */
var materialSemanticLight = {
  colors: {
    background: {
      primary: '#FEFBFF',
      // Material 3 surface
      secondary: '#F5F5F5',
      tertiary: '#ECECEC',
      inverse: '#1C1B1F'
    },
    surface: {
      primary: '#FEFBFF',
      secondary: '#E7E0EC',
      // Material 3 surface variant
      tertiary: '#ECE6F0',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
      primary: '#1C1B1F',
      // Material 3 on-surface
      secondary: '#49454F',
      // Material 3 on-surface-variant
      tertiary: 'rgba(28, 27, 31, 0.60)',
      inverse: '#FFFFFF',
      disabled: 'rgba(28, 27, 31, 0.38)',
      link: '#6750A4' // Material 3 primary
    },
    border: {
      primary: '#79747E',
      // Material 3 outline
      secondary: '#C4C7C5',
      focus: '#6750A4',
      error: '#B3261E'
    },
    interactive: {
      primary: '#6750A4',
      // Material 3 primary
      primaryHover: '#7965AF',
      primaryActive: '#8B7AB8',
      primaryDisabled: 'rgba(103, 80, 164, 0.12)',
      secondary: '#625B71',
      // Material 3 secondary
      secondaryHover: '#7A7289',
      secondaryActive: '#8F8799',
      secondaryDisabled: 'rgba(98, 91, 113, 0.12)'
    },
    feedback: {
      success: colors$2.success[600],
      successSubtle: colors$2.success[50],
      warning: colors$2.warning[600],
      warningSubtle: colors$2.warning[50],
      error: colors$2.error[600],
      errorSubtle: colors$2.error[50],
      info: colors$2.info[600],
      infoSubtle: colors$2.info[50]
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$i[1],
      paddingSm: spacing$i[2],
      paddingMd: spacing$i[4],
      paddingLg: spacing$i[6],
      paddingXl: spacing$i[8],
      gapXs: spacing$i[1],
      gapSm: spacing$i[2],
      gapMd: spacing$i[4],
      gapLg: spacing$i[6],
      gapXl: spacing$i[8]
    },
    layout: {
      containerPadding: spacing$i[4],
      sectionGap: spacing$i[6],
      cardGap: spacing$i[4]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: typography$i.fontFamilies.display,
        fontSize: typography$i.fontSizes['5xl'],
        fontWeight: typography$i.fontWeights.light,
        lineHeight: typography$i.lineHeights.tight,
        letterSpacing: typography$i.letterSpacing.tight
      },
      h2: {
        fontFamily: typography$i.fontFamilies.display,
        fontSize: typography$i.fontSizes['4xl'],
        fontWeight: typography$i.fontWeights.light,
        lineHeight: typography$i.lineHeights.tight,
        letterSpacing: typography$i.letterSpacing.tight
      },
      h3: {
        fontFamily: typography$i.fontFamilies.display,
        fontSize: typography$i.fontSizes['3xl'],
        fontWeight: typography$i.fontWeights.regular,
        lineHeight: typography$i.lineHeights.tight,
        letterSpacing: typography$i.letterSpacing.normal
      },
      h4: {
        fontFamily: typography$i.fontFamilies.display,
        fontSize: typography$i.fontSizes['2xl'],
        fontWeight: typography$i.fontWeights.regular,
        lineHeight: typography$i.lineHeights.snug,
        letterSpacing: typography$i.letterSpacing.normal
      },
      h5: {
        fontFamily: typography$i.fontFamilies.display,
        fontSize: typography$i.fontSizes.xl,
        fontWeight: typography$i.fontWeights.medium,
        lineHeight: typography$i.lineHeights.snug,
        letterSpacing: typography$i.letterSpacing.normal
      },
      h6: {
        fontFamily: typography$i.fontFamilies.display,
        fontSize: typography$i.fontSizes.lg,
        fontWeight: typography$i.fontWeights.medium,
        lineHeight: typography$i.lineHeights.normal,
        letterSpacing: typography$i.letterSpacing.wide
      }
    },
    body: {
      large: {
        fontFamily: typography$i.fontFamilies.body,
        fontSize: typography$i.fontSizes.base,
        fontWeight: typography$i.fontWeights.regular,
        lineHeight: typography$i.lineHeights.relaxed,
        letterSpacing: typography$i.letterSpacing.wide
      },
      medium: {
        fontFamily: typography$i.fontFamilies.body,
        fontSize: typography$i.fontSizes.sm,
        fontWeight: typography$i.fontWeights.regular,
        lineHeight: typography$i.lineHeights.normal,
        letterSpacing: typography$i.letterSpacing.normal
      },
      small: {
        fontFamily: typography$i.fontFamilies.body,
        fontSize: typography$i.fontSizes.xs,
        fontWeight: typography$i.fontWeights.regular,
        lineHeight: typography$i.lineHeights.normal,
        letterSpacing: typography$i.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: typography$i.fontFamilies.body,
        fontSize: typography$i.fontSizes.sm,
        fontWeight: typography$i.fontWeights.medium,
        lineHeight: typography$i.lineHeights.normal,
        letterSpacing: typography$i.letterSpacing.wide
      },
      medium: {
        fontFamily: typography$i.fontFamilies.body,
        fontSize: typography$i.fontSizes.xs,
        fontWeight: typography$i.fontWeights.medium,
        lineHeight: typography$i.lineHeights.normal,
        letterSpacing: typography$i.letterSpacing.wider
      },
      small: {
        fontFamily: typography$i.fontFamilies.body,
        fontSize: 11,
        fontWeight: typography$i.fontWeights.medium,
        lineHeight: typography$i.lineHeights.tight,
        letterSpacing: typography$i.letterSpacing.wider
      }
    },
    caption: {
      fontFamily: typography$i.fontFamilies.body,
      fontSize: typography$i.fontSizes.xs,
      fontWeight: typography$i.fontWeights.regular,
      lineHeight: typography$i.lineHeights.tight,
      letterSpacing: typography$i.letterSpacing.normal
    },
    overline: {
      fontFamily: typography$i.fontFamilies.body,
      fontSize: 10,
      fontWeight: typography$i.fontWeights.medium,
      lineHeight: typography$i.lineHeights.tight,
      letterSpacing: typography$i.letterSpacing.widest
    }
  }
};
/**
 * Material Design Semantic Tokens (Dark Mode)
 */
var materialSemanticDark = _objectSpread2(_objectSpread2({}, materialSemanticLight), {}, {
  colors: {
    background: {
      primary: colors$2.neutral[900],
      secondary: colors$2.neutral[800],
      tertiary: colors$2.neutral[700],
      inverse: colors$2.neutral[50]
    },
    surface: {
      primary: colors$2.neutral[900],
      secondary: colors$2.neutral[800],
      tertiary: colors$2.neutral[700],
      elevated: colors$2.neutral[850] || '#1F1F1F',
      overlay: "rgba(0, 0, 0, ".concat(basePrimitiveTokens.opacity[70], ")")
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.60)',
      tertiary: 'rgba(255, 255, 255, 0.38)',
      inverse: colors$2.neutral[900],
      disabled: 'rgba(255, 255, 255, 0.38)',
      link: colors$2.primary[300]
    },
    border: {
      primary: colors$2.neutral[700],
      secondary: colors$2.neutral[800],
      focus: colors$2.primary[400],
      error: colors$2.error[400]
    },
    interactive: {
      primary: colors$2.primary[400],
      primaryHover: colors$2.primary[300],
      primaryActive: colors$2.primary[200],
      primaryDisabled: colors$2.neutral[700],
      secondary: colors$2.secondary[400],
      secondaryHover: colors$2.secondary[300],
      secondaryActive: colors$2.secondary[200],
      secondaryDisabled: colors$2.neutral[700]
    },
    feedback: {
      success: colors$2.success[400],
      successSubtle: colors$2.success[900],
      warning: colors$2.warning[400],
      warningSubtle: colors$2.warning[900],
      error: colors$2.error[400],
      errorSubtle: colors$2.error[900],
      info: colors$2.info[400],
      infoSubtle: colors$2.info[900]
    }
  }
});

var spacing$h = basePrimitiveTokens.spacing,
  typography$h = basePrimitiveTokens.typography;
/**
 * Flat Design (iOS 18 Design Language)
 * Modern iOS design with gaussian blurs, translucency, and fluid animations
 * Based on Apple's latest Human Interface Guidelines
 */
var flatSemanticLight = {
  colors: {
    background: {
      primary: '#F2F2F7',
      // iOS System Gray 6
      secondary: '#FFFFFF',
      tertiary: '#FFFFFF',
      inverse: '#000000'
    },
    surface: {
      primary: '#FFFFFF',
      secondary: 'rgba(242, 242, 247, 0.8)',
      // Translucent for glass effect
      tertiary: '#E5E5EA',
      elevated: 'rgba(255, 255, 255, 0.72)',
      // Glass morphism
      overlay: 'rgba(0, 0, 0, 0.4)'
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(60, 60, 67, 0.6)',
      // iOS System Gray with opacity
      tertiary: '#8E8E93',
      inverse: '#FFFFFF',
      disabled: 'rgba(199, 199, 204, 0.6)',
      link: '#007AFF' // iOS Blue
    },
    border: {
      primary: 'rgba(60, 60, 67, 0.12)',
      // Subtle borders
      secondary: 'rgba(60, 60, 67, 0.06)',
      focus: '#007AFF',
      error: '#FF3B30'
    },
    interactive: {
      primary: '#007AFF',
      // iOS Blue
      primaryHover: '#0051D5',
      primaryActive: '#004EBC',
      primaryDisabled: 'rgba(0, 122, 255, 0.3)',
      secondary: 'rgba(120, 120, 128, 0.16)',
      // iOS Fill color
      secondaryHover: 'rgba(120, 120, 128, 0.24)',
      secondaryActive: 'rgba(120, 120, 128, 0.32)',
      secondaryDisabled: 'rgba(120, 120, 128, 0.08)'
    },
    feedback: {
      success: '#34C759',
      // iOS Green
      successSubtle: 'rgba(52, 199, 89, 0.15)',
      warning: '#FF9500',
      // iOS Orange
      warningSubtle: 'rgba(255, 149, 0, 0.15)',
      error: '#FF3B30',
      // iOS Red
      errorSubtle: 'rgba(255, 59, 48, 0.15)',
      info: '#007AFF',
      // iOS Blue
      infoSubtle: 'rgba(0, 122, 255, 0.15)'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$h[1],
      // 4
      paddingSm: spacing$h[2],
      // 8
      paddingMd: spacing$h[3],
      // 12
      paddingLg: spacing$h[4],
      // 16
      paddingXl: spacing$h[6],
      // 24
      gapXs: spacing$h[1],
      gapSm: spacing$h[2],
      gapMd: spacing$h[3],
      gapLg: spacing$h[4],
      gapXl: spacing$h[6]
    },
    layout: {
      containerPadding: spacing$h[4],
      // 16
      sectionGap: spacing$h[8],
      // 32
      cardGap: spacing$h[4] // 16
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'System',
        fontSize: 34,
        // Large Title
        fontWeight: typography$h.fontWeights.bold,
        lineHeight: 1.21,
        // 41pt
        letterSpacing: 0.37
      },
      h2: {
        fontFamily: 'System',
        fontSize: 28,
        // Title 1
        fontWeight: typography$h.fontWeights.bold,
        lineHeight: 1.14,
        // 34pt
        letterSpacing: 0.36
      },
      h3: {
        fontFamily: 'System',
        fontSize: 22,
        // Title 2
        fontWeight: typography$h.fontWeights.bold,
        lineHeight: 1.27,
        // 28pt
        letterSpacing: 0.35
      },
      h4: {
        fontFamily: 'System',
        fontSize: 20,
        // Title 3
        fontWeight: typography$h.fontWeights.semibold,
        lineHeight: 1.25,
        // 25pt
        letterSpacing: 0.38
      },
      h5: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography$h.fontWeights.semibold,
        lineHeight: 1.33,
        // 24pt
        letterSpacing: -0.41
      },
      h6: {
        fontFamily: 'System',
        fontSize: 17,
        // Headline
        fontWeight: typography$h.fontWeights.semibold,
        lineHeight: 1.29,
        // 22pt
        letterSpacing: -0.41
      }
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 17,
        // Body - iOS standard
        fontWeight: typography$h.fontWeights.regular,
        lineHeight: 1.29,
        // 22pt
        letterSpacing: -0.41
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        // Subheadline
        fontWeight: typography$h.fontWeights.regular,
        lineHeight: 1.33,
        // 20pt
        letterSpacing: -0.23
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        // Footnote
        fontWeight: typography$h.fontWeights.regular,
        lineHeight: 1.38,
        // 18pt
        letterSpacing: -0.08
      }
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: typography$h.fontWeights.semibold,
        lineHeight: 1.29,
        letterSpacing: -0.41
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography$h.fontWeights.semibold,
        lineHeight: 1.33,
        letterSpacing: -0.23
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography$h.fontWeights.semibold,
        lineHeight: 1.38,
        letterSpacing: -0.08
      }
    },
    caption: {
      fontFamily: 'System',
      fontSize: 12,
      // Caption 1
      fontWeight: typography$h.fontWeights.regular,
      lineHeight: 1.33,
      // 16pt
      letterSpacing: 0
    },
    overline: {
      fontFamily: 'System',
      fontSize: 11,
      // Caption 2
      fontWeight: typography$h.fontWeights.medium,
      lineHeight: 1.18,
      // 13pt
      letterSpacing: 0.06
    }
  }
};
var flatSemanticDark = _objectSpread2(_objectSpread2({}, flatSemanticLight), {}, {
  colors: _objectSpread2(_objectSpread2({}, flatSemanticLight.colors), {}, {
    background: {
      primary: '#000000',
      // Pure black for OLED
      secondary: '#1C1C1E',
      // System Gray 6 Dark
      tertiary: '#2C2C2E',
      // System Gray 5 Dark
      inverse: '#FFFFFF'
    },
    surface: {
      primary: '#1C1C1E',
      secondary: 'rgba(44, 44, 46, 0.8)',
      // Translucent for glass effect
      tertiary: '#3A3A3C',
      elevated: 'rgba(44, 44, 46, 0.72)',
      // Glass morphism dark
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(235, 235, 245, 0.6)',
      // iOS Label Secondary
      tertiary: '#8E8E93',
      // System Gray
      inverse: '#000000',
      disabled: 'rgba(235, 235, 245, 0.3)',
      link: '#0A84FF' // iOS Blue Dark
    },
    border: {
      primary: 'rgba(84, 84, 88, 0.6)',
      // Separator Dark
      secondary: 'rgba(84, 84, 88, 0.3)',
      focus: '#0A84FF',
      error: '#FF453A'
    },
    interactive: {
      primary: '#0A84FF',
      // iOS Blue Dark
      primaryHover: '#409CFF',
      primaryActive: '#0070E0',
      primaryDisabled: 'rgba(10, 132, 255, 0.3)',
      secondary: 'rgba(120, 120, 128, 0.32)',
      // iOS Fill Dark
      secondaryHover: 'rgba(120, 120, 128, 0.40)',
      secondaryActive: 'rgba(120, 120, 128, 0.48)',
      secondaryDisabled: 'rgba(120, 120, 128, 0.16)'
    },
    feedback: {
      success: '#30D158',
      // iOS Green Dark
      successSubtle: 'rgba(48, 209, 88, 0.15)',
      warning: '#FF9F0A',
      // iOS Orange Dark
      warningSubtle: 'rgba(255, 159, 10, 0.15)',
      error: '#FF453A',
      // iOS Red Dark
      errorSubtle: 'rgba(255, 69, 58, 0.15)',
      info: '#0A84FF',
      // iOS Blue Dark
      infoSubtle: 'rgba(10, 132, 255, 0.15)'
    }
  })
});

basePrimitiveTokens.colors;
  var spacing$g = basePrimitiveTokens.spacing,
  typography$g = basePrimitiveTokens.typography;
/**
 * Liquid Glass (Modern Glassmorphism) Semantic Tokens (Light Mode)
 * Modern Web/Cross-platform (2020-Present)
 */
var liquidGlassSemanticLight = {
  colors: {
    background: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      // Gradient background
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tertiary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      inverse: '#0F0F0F'
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.1)',
      // Heavy glass blur
      secondary: 'rgba(255, 255, 255, 0.08)',
      tertiary: 'rgba(255, 255, 255, 0.06)',
      elevated: 'rgba(255, 255, 255, 0.15)',
      overlay: 'rgba(0, 0, 0, 0.3)'
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.75)',
      tertiary: 'rgba(255, 255, 255, 0.55)',
      inverse: 'rgba(0, 0, 0, 0.9)',
      disabled: 'rgba(255, 255, 255, 0.35)',
      link: 'rgba(100, 200, 255, 1)'
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.2)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      focus: 'rgba(255, 255, 255, 0.4)',
      error: 'rgba(255, 100, 100, 0.8)'
    },
    interactive: {
      primary: 'rgba(100, 150, 255, 0.8)',
      primaryHover: 'rgba(120, 170, 255, 0.9)',
      primaryActive: 'rgba(140, 190, 255, 1)',
      primaryDisabled: 'rgba(100, 150, 255, 0.3)',
      secondary: 'rgba(255, 255, 255, 0.15)',
      secondaryHover: 'rgba(255, 255, 255, 0.2)',
      secondaryActive: 'rgba(255, 255, 255, 0.25)',
      secondaryDisabled: 'rgba(255, 255, 255, 0.05)'
    },
    feedback: {
      success: 'rgba(100, 255, 150, 0.9)',
      successSubtle: 'rgba(100, 255, 150, 0.1)',
      warning: 'rgba(255, 200, 100, 0.9)',
      warningSubtle: 'rgba(255, 200, 100, 0.1)',
      error: 'rgba(255, 100, 100, 0.9)',
      errorSubtle: 'rgba(255, 100, 100, 0.1)',
      info: 'rgba(100, 200, 255, 0.9)',
      infoSubtle: 'rgba(100, 200, 255, 0.1)'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$g[2],
      paddingSm: spacing$g[3],
      paddingMd: spacing$g[4],
      paddingLg: spacing$g[6],
      paddingXl: spacing$g[8],
      gapXs: spacing$g[2],
      gapSm: spacing$g[3],
      gapMd: spacing$g[4],
      gapLg: spacing$g[6],
      gapXl: spacing$g[8]
    },
    layout: {
      containerPadding: spacing$g[8],
      sectionGap: spacing$g[12],
      cardGap: spacing$g[6]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 48,
        fontWeight: typography$g.fontWeights.bold,
        lineHeight: typography$g.lineHeights.tight,
        letterSpacing: typography$g.letterSpacing.tight
      },
      h2: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 32,
        fontWeight: typography$g.fontWeights.bold,
        lineHeight: typography$g.lineHeights.tight,
        letterSpacing: typography$g.letterSpacing.tight
      },
      h3: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 24,
        fontWeight: typography$g.fontWeights.semibold,
        lineHeight: typography$g.lineHeights.snug,
        letterSpacing: typography$g.letterSpacing.normal
      },
      h4: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 20,
        fontWeight: typography$g.fontWeights.semibold,
        lineHeight: typography$g.lineHeights.snug,
        letterSpacing: typography$g.letterSpacing.normal
      },
      h5: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 18,
        fontWeight: typography$g.fontWeights.semibold,
        lineHeight: typography$g.lineHeights.normal,
        letterSpacing: typography$g.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Inter, SF Pro Display, System',
        fontSize: 16,
        fontWeight: typography$g.fontWeights.semibold,
        lineHeight: typography$g.lineHeights.normal,
        letterSpacing: typography$g.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Inter, System',
        fontSize: 18,
        fontWeight: typography$g.fontWeights.regular,
        lineHeight: typography$g.lineHeights.relaxed,
        letterSpacing: typography$g.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Inter, System',
        fontSize: 16,
        fontWeight: typography$g.fontWeights.regular,
        lineHeight: typography$g.lineHeights.normal,
        letterSpacing: typography$g.letterSpacing.normal
      },
      small: {
        fontFamily: 'Inter, System',
        fontSize: 14,
        fontWeight: typography$g.fontWeights.regular,
        lineHeight: typography$g.lineHeights.normal,
        letterSpacing: typography$g.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Inter, System',
        fontSize: 16,
        fontWeight: typography$g.fontWeights.medium,
        lineHeight: typography$g.lineHeights.normal,
        letterSpacing: typography$g.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Inter, System',
        fontSize: 14,
        fontWeight: typography$g.fontWeights.medium,
        lineHeight: typography$g.lineHeights.normal,
        letterSpacing: typography$g.letterSpacing.normal
      },
      small: {
        fontFamily: 'Inter, System',
        fontSize: 12,
        fontWeight: typography$g.fontWeights.medium,
        lineHeight: typography$g.lineHeights.tight,
        letterSpacing: typography$g.letterSpacing.wide
      }
    },
    caption: {
      fontFamily: 'Inter, System',
      fontSize: 14,
      fontWeight: typography$g.fontWeights.regular,
      lineHeight: typography$g.lineHeights.tight,
      letterSpacing: typography$g.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Inter, System',
      fontSize: 12,
      fontWeight: typography$g.fontWeights.semibold,
      lineHeight: typography$g.lineHeights.tight,
      letterSpacing: typography$g.letterSpacing.widest
    }
  }
};
/**
 * Liquid Glass (Modern Glassmorphism) Semantic Tokens (Dark Mode)
 */
var liquidGlassSemanticDark = _objectSpread2(_objectSpread2({}, liquidGlassSemanticLight), {}, {
  colors: {
    background: {
      primary: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      secondary: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
      tertiary: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
      inverse: '#FFFFFF'
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.05)',
      secondary: 'rgba(255, 255, 255, 0.03)',
      tertiary: 'rgba(255, 255, 255, 0.02)',
      elevated: 'rgba(255, 255, 255, 0.08)',
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)',
      inverse: 'rgba(0, 0, 0, 0.9)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      link: 'rgba(100, 200, 255, 1)'
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.15)',
      secondary: 'rgba(255, 255, 255, 0.08)',
      focus: 'rgba(255, 255, 255, 0.3)',
      error: 'rgba(255, 120, 120, 0.8)'
    },
    interactive: {
      primary: 'rgba(120, 170, 255, 0.8)',
      primaryHover: 'rgba(140, 190, 255, 0.9)',
      primaryActive: 'rgba(160, 210, 255, 1)',
      primaryDisabled: 'rgba(120, 170, 255, 0.3)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      secondaryHover: 'rgba(255, 255, 255, 0.15)',
      secondaryActive: 'rgba(255, 255, 255, 0.2)',
      secondaryDisabled: 'rgba(255, 255, 255, 0.04)'
    },
    feedback: {
      success: 'rgba(120, 255, 170, 0.9)',
      successSubtle: 'rgba(120, 255, 170, 0.1)',
      warning: 'rgba(255, 210, 120, 0.9)',
      warningSubtle: 'rgba(255, 210, 120, 0.1)',
      error: 'rgba(255, 120, 120, 0.9)',
      errorSubtle: 'rgba(255, 120, 120, 0.1)',
      info: 'rgba(120, 210, 255, 0.9)',
      infoSubtle: 'rgba(120, 210, 255, 0.1)'
    }
  }
});

var colors$1 = basePrimitiveTokens.colors,
  spacing$f = basePrimitiveTokens.spacing,
  typography$f = basePrimitiveTokens.typography;
/**
 * Metro/Fluent Design Semantic Tokens (Light Mode)
 */
var metroSemanticLight = {
  colors: {
    background: {
      primary: colors$1.white,
      secondary: colors$1.neutral[50],
      tertiary: colors$1.neutral[100],
      inverse: colors$1.neutral[900]
    },
    surface: {
      primary: colors$1.white,
      secondary: 'rgba(249, 249, 249, 0.7)',
      // Acrylic effect
      tertiary: colors$1.neutral[50],
      elevated: colors$1.white,
      overlay: 'rgba(0, 0, 0, 0.3)'
    },
    text: {
      primary: colors$1.neutral[900],
      secondary: colors$1.neutral[600],
      tertiary: colors$1.neutral[500],
      inverse: colors$1.white,
      disabled: colors$1.neutral[400],
      link: '#0078D4' // Microsoft blue
    },
    border: {
      primary: colors$1.neutral[300],
      secondary: colors$1.neutral[200],
      focus: '#0078D4',
      error: '#E81123' // Fluent red
    },
    interactive: {
      primary: '#0078D4',
      // Microsoft blue
      primaryHover: '#106EBE',
      primaryActive: '#005A9E',
      primaryDisabled: colors$1.neutral[300],
      secondary: '#8764B8',
      // Fluent purple
      secondaryHover: '#744DA9',
      secondaryActive: '#5C2E91',
      secondaryDisabled: colors$1.neutral[300]
    },
    feedback: {
      success: '#107C10',
      // Fluent green
      successSubtle: colors$1.success[50],
      warning: '#FFB900',
      // Fluent yellow
      warningSubtle: colors$1.warning[50],
      error: '#E81123',
      // Fluent red
      errorSubtle: colors$1.error[50],
      info: '#00B7C3',
      // Fluent teal
      infoSubtle: colors$1.info[50]
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$f[1],
      paddingSm: spacing$f[2],
      paddingMd: spacing$f[3],
      // Metro uses 12pt
      paddingLg: spacing$f[6],
      paddingXl: spacing$f[8],
      gapXs: spacing$f[1],
      gapSm: spacing$f[2],
      gapMd: spacing$f[3],
      gapLg: spacing$f[4],
      gapXl: spacing$f[6]
    },
    layout: {
      containerPadding: spacing$f[6],
      sectionGap: spacing$f[12],
      cardGap: spacing$f[4]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'System',
        // Segoe UI on Windows
        fontSize: 46,
        fontWeight: typography$f.fontWeights.light,
        lineHeight: typography$f.lineHeights.tight,
        letterSpacing: typography$f.letterSpacing.normal
      },
      h2: {
        fontFamily: 'System',
        fontSize: 34,
        fontWeight: typography$f.fontWeights.light,
        lineHeight: typography$f.lineHeights.tight,
        letterSpacing: typography$f.letterSpacing.normal
      },
      h3: {
        fontFamily: 'System',
        fontSize: 28,
        fontWeight: typography$f.fontWeights.regular,
        lineHeight: typography$f.lineHeights.tight,
        letterSpacing: typography$f.letterSpacing.normal
      },
      h4: {
        fontFamily: 'System',
        fontSize: 24,
        fontWeight: typography$f.fontWeights.regular,
        lineHeight: typography$f.lineHeights.snug,
        letterSpacing: typography$f.letterSpacing.normal
      },
      h5: {
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: typography$f.fontWeights.semibold,
        lineHeight: typography$f.lineHeights.snug,
        letterSpacing: typography$f.letterSpacing.normal
      },
      h6: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography$f.fontWeights.semibold,
        lineHeight: typography$f.lineHeights.normal,
        letterSpacing: typography$f.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: typography$f.fontWeights.regular,
        lineHeight: typography$f.lineHeights.relaxed,
        letterSpacing: typography$f.letterSpacing.normal
      },
      medium: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography$f.fontWeights.regular,
        lineHeight: typography$f.lineHeights.normal,
        letterSpacing: typography$f.letterSpacing.normal
      },
      small: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography$f.fontWeights.regular,
        lineHeight: typography$f.lineHeights.normal,
        letterSpacing: typography$f.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography$f.fontWeights.semibold,
        lineHeight: typography$f.lineHeights.normal,
        letterSpacing: typography$f.letterSpacing.normal
      },
      medium: {
        fontFamily: 'System',
        fontSize: 13,
        fontWeight: typography$f.fontWeights.semibold,
        lineHeight: typography$f.lineHeights.normal,
        letterSpacing: typography$f.letterSpacing.normal
      },
      small: {
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: typography$f.fontWeights.semibold,
        lineHeight: typography$f.lineHeights.tight,
        letterSpacing: typography$f.letterSpacing.normal
      }
    },
    caption: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography$f.fontWeights.regular,
      lineHeight: typography$f.lineHeights.tight,
      letterSpacing: typography$f.letterSpacing.normal
    },
    overline: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography$f.fontWeights.semibold,
      lineHeight: typography$f.lineHeights.tight,
      letterSpacing: typography$f.letterSpacing.wider
    }
  }
};
/**
 * Metro/Fluent Design Semantic Tokens (Dark Mode)
 */
var metroSemanticDark = _objectSpread2(_objectSpread2({}, metroSemanticLight), {}, {
  colors: {
    background: {
      primary: '#1F1F1F',
      // Fluent dark background
      secondary: '#2B2B2B',
      tertiary: '#383838',
      inverse: colors$1.white
    },
    surface: {
      primary: '#1F1F1F',
      secondary: 'rgba(43, 43, 43, 0.7)',
      // Acrylic
      tertiary: '#2B2B2B',
      elevated: '#2B2B2B',
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
      primary: colors$1.white,
      secondary: '#C8C8C8',
      tertiary: '#A0A0A0',
      inverse: colors$1.neutral[900],
      disabled: '#6D6D6D',
      link: '#4CC2FF' // Fluent dark blue
    },
    border: {
      primary: '#484848',
      secondary: '#383838',
      focus: '#4CC2FF',
      error: '#FF99A4'
    },
    interactive: {
      primary: '#4CC2FF',
      // Fluent dark blue
      primaryHover: '#6BD3FF',
      primaryActive: '#8AE0FF',
      primaryDisabled: '#6D6D6D',
      secondary: '#B4A0FF',
      // Fluent dark purple
      secondaryHover: '#C7B8FF',
      secondaryActive: '#DAD0FF',
      secondaryDisabled: '#6D6D6D'
    },
    feedback: {
      success: '#6CCB5F',
      // Fluent dark green
      successSubtle: colors$1.success[900],
      warning: '#FFD83D',
      // Fluent dark yellow
      warningSubtle: colors$1.warning[900],
      error: '#FF99A4',
      // Fluent dark red
      errorSubtle: colors$1.error[900],
      info: '#3FF0FF',
      // Fluent dark teal
      infoSubtle: colors$1.info[900]
    }
  }
});

basePrimitiveTokens.colors;
  var spacing$e = basePrimitiveTokens.spacing,
  typography$e = basePrimitiveTokens.typography;
/**
 * Fluent Design (Windows 10/11) Semantic Tokens (Light Mode)
 * Windows 10/11 (2017-Present)
 */
var fluentSemanticLight = {
  colors: {
    background: {
      primary: '#F3F3F3',
      secondary: '#FAFAFA',
      tertiary: '#F5F5F5',
      inverse: '#202020'
    },
    surface: {
      primary: 'rgba(243, 243, 243, 0.9)',
      // Acrylic
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(249, 249, 249, 0.8)',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.4)'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      tertiary: 'rgba(0, 0, 0, 0.45)',
      inverse: '#FFFFFF',
      disabled: 'rgba(0, 0, 0, 0.38)',
      link: '#0078D4'
    },
    border: {
      primary: 'rgba(0, 0, 0, 0.08)',
      secondary: 'rgba(0, 0, 0, 0.05)',
      focus: '#0078D4',
      error: '#E81123'
    },
    interactive: {
      primary: '#0078D4',
      // Windows blue
      primaryHover: '#005A9E',
      primaryActive: '#004578',
      primaryDisabled: 'rgba(0, 120, 212, 0.3)',
      secondary: '#EDEBE9',
      secondaryHover: '#E1DFDD',
      secondaryActive: '#D2D0CE',
      secondaryDisabled: 'rgba(237, 235, 233, 0.3)'
    },
    feedback: {
      success: '#107C10',
      successSubtle: 'rgba(16, 124, 16, 0.1)',
      warning: '#FFB900',
      warningSubtle: 'rgba(255, 185, 0, 0.1)',
      error: '#E81123',
      errorSubtle: 'rgba(232, 17, 35, 0.1)',
      info: '#00B7C3',
      infoSubtle: 'rgba(0, 183, 195, 0.1)'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$e[1],
      paddingSm: spacing$e[2],
      paddingMd: spacing$e[4],
      paddingLg: spacing$e[6],
      paddingXl: spacing$e[8],
      gapXs: spacing$e[1],
      gapSm: spacing$e[2],
      gapMd: spacing$e[4],
      gapLg: spacing$e[6],
      gapXl: spacing$e[8]
    },
    layout: {
      containerPadding: spacing$e[6],
      sectionGap: spacing$e[8],
      cardGap: spacing$e[4]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 40,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.tight,
        letterSpacing: typography$e.letterSpacing.tight
      },
      h2: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 32,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.tight,
        letterSpacing: typography$e.letterSpacing.tight
      },
      h3: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 28,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.snug,
        letterSpacing: typography$e.letterSpacing.normal
      },
      h4: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 24,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.snug,
        letterSpacing: typography$e.letterSpacing.normal
      },
      h5: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 20,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 16,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 16,
        fontWeight: typography$e.fontWeights.regular,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 14,
        fontWeight: typography$e.fontWeights.regular,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      },
      small: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 12,
        fontWeight: typography$e.fontWeights.regular,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 14,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 12,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.normal,
        letterSpacing: typography$e.letterSpacing.normal
      },
      small: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 11,
        fontWeight: typography$e.fontWeights.semibold,
        lineHeight: typography$e.lineHeights.tight,
        letterSpacing: typography$e.letterSpacing.normal
      }
    },
    caption: {
      fontFamily: 'Segoe UI Variable, System',
      fontSize: 12,
      fontWeight: typography$e.fontWeights.regular,
      lineHeight: typography$e.lineHeights.tight,
      letterSpacing: typography$e.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Segoe UI Variable, System',
      fontSize: 10,
      fontWeight: typography$e.fontWeights.semibold,
      lineHeight: typography$e.lineHeights.tight,
      letterSpacing: typography$e.letterSpacing.wider
    }
  }
};
/**
 * Fluent Design (Windows 10/11) Semantic Tokens (Dark Mode)
 */
var fluentSemanticDark = _objectSpread2(_objectSpread2({}, fluentSemanticLight), {}, {
  colors: {
    background: {
      primary: '#202020',
      secondary: '#1C1C1C',
      tertiary: '#282828',
      inverse: '#F3F3F3'
    },
    surface: {
      primary: 'rgba(44, 44, 44, 0.9)',
      // Acrylic dark
      secondary: 'rgba(32, 32, 32, 0.7)',
      tertiary: 'rgba(40, 40, 40, 0.8)',
      elevated: '#2C2C2C',
      overlay: 'rgba(0, 0, 0, 0.6)'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.78)',
      tertiary: 'rgba(255, 255, 255, 0.54)',
      inverse: '#000000',
      disabled: 'rgba(255, 255, 255, 0.38)',
      link: '#60CDFF'
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.08)',
      secondary: 'rgba(255, 255, 255, 0.05)',
      focus: '#60CDFF',
      error: '#FF99A4'
    },
    interactive: {
      primary: '#60CDFF',
      primaryHover: '#70DDFF',
      primaryActive: '#80EDFF',
      primaryDisabled: 'rgba(96, 205, 255, 0.3)',
      secondary: '#373737',
      secondaryHover: '#474747',
      secondaryActive: '#575757',
      secondaryDisabled: 'rgba(55, 55, 55, 0.3)'
    },
    feedback: {
      success: '#6CCB5F',
      successSubtle: 'rgba(108, 203, 95, 0.1)',
      warning: '#FCE100',
      warningSubtle: 'rgba(252, 225, 0, 0.1)',
      error: '#FF99A4',
      errorSubtle: 'rgba(255, 153, 164, 0.1)',
      info: '#00B7C3',
      infoSubtle: 'rgba(0, 183, 195, 0.1)'
    }
  }
});

basePrimitiveTokens.colors;
  var spacing$d = basePrimitiveTokens.spacing,
  typography$d = basePrimitiveTokens.typography;
/**
 * Meta Horizon Design Semantic Tokens (Light Mode)
 * Based on Meta's official Horizon design system
 * https://developers.meta.com/horizon/design/
 */
var metaHorizonSemanticLight = {
  colors: {
    background: {
      primary: '#FFFFFF',
      // Pure white for main backgrounds
      secondary: '#F3F4F6',
      // Light gray for secondary surfaces
      tertiary: '#E5E7EB',
      // Slightly darker for depth
      inverse: '#1C1E21' // Meta's dark gray
    },
    surface: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      // Very light gray
      tertiary: '#F3F4F6',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.65)'
    },
    text: {
      primary: '#1C1E21',
      // Meta's primary text color
      secondary: '#65676B',
      // Meta's secondary text color
      tertiary: '#8A8D91',
      // Meta's tertiary text color
      inverse: '#FFFFFF',
      disabled: '#BCC0C4',
      link: '#0866FF' // Meta's primary blue
    },
    border: {
      primary: '#CED0D4',
      // Meta's border color
      secondary: '#E4E6EB',
      focus: '#0866FF',
      error: '#FA383E'
    },
    interactive: {
      primary: '#0866FF',
      // Meta's primary blue
      primaryHover: '#0654D4',
      primaryActive: '#0551C5',
      primaryDisabled: 'rgba(8, 102, 255, 0.4)',
      secondary: '#E4E6EB',
      // Light gray background for tags
      secondaryHover: '#D8DADF',
      secondaryActive: '#CCD0D5',
      secondaryDisabled: '#F0F2F5'
    },
    feedback: {
      success: '#31A24C',
      // Meta's success green
      successSubtle: '#D7F0DD',
      warning: '#F7981C',
      // Meta's warning orange
      warningSubtle: '#FEF0D9',
      error: '#FA383E',
      // Meta's error red
      errorSubtle: '#FFE6E7',
      info: '#0866FF',
      infoSubtle: '#E7F3FF'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$d[1],
      // 4px
      paddingSm: spacing$d[2],
      // 8px
      paddingMd: spacing$d[3],
      // 12px
      paddingLg: spacing$d[4],
      // 16px
      paddingXl: spacing$d[6],
      // 24px
      gapXs: spacing$d[1],
      gapSm: spacing$d[2],
      gapMd: spacing$d[3],
      gapLg: spacing$d[4],
      gapXl: spacing$d[6]
    },
    layout: {
      containerPadding: spacing$d[4],
      // 16px
      sectionGap: spacing$d[6],
      // 24px
      cardGap: spacing$d[4] // 16px
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 40,
        fontWeight: typography$d.fontWeights.bold,
        lineHeight: typography$d.lineHeights.tight,
        letterSpacing: -0.5
      },
      h2: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 32,
        fontWeight: typography$d.fontWeights.bold,
        lineHeight: typography$d.lineHeights.tight,
        letterSpacing: -0.4
      },
      h3: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 28,
        fontWeight: typography$d.fontWeights.bold,
        lineHeight: typography$d.lineHeights.snug,
        letterSpacing: -0.3
      },
      h4: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 24,
        fontWeight: typography$d.fontWeights.semibold,
        lineHeight: typography$d.lineHeights.snug,
        letterSpacing: -0.2
      },
      h5: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 20,
        fontWeight: typography$d.fontWeights.semibold,
        lineHeight: typography$d.lineHeights.snug,
        letterSpacing: typography$d.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 17,
        fontWeight: typography$d.fontWeights.semibold,
        lineHeight: typography$d.lineHeights.normal,
        letterSpacing: typography$d.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 17,
        fontWeight: typography$d.fontWeights.regular,
        lineHeight: typography$d.lineHeights.relaxed,
        letterSpacing: typography$d.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 15,
        fontWeight: typography$d.fontWeights.regular,
        lineHeight: typography$d.lineHeights.normal,
        letterSpacing: typography$d.letterSpacing.normal
      },
      small: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: typography$d.fontWeights.regular,
        lineHeight: typography$d.lineHeights.normal,
        letterSpacing: typography$d.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 15,
        fontWeight: typography$d.fontWeights.semibold,
        lineHeight: typography$d.lineHeights.normal,
        letterSpacing: typography$d.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: typography$d.fontWeights.semibold,
        lineHeight: typography$d.lineHeights.normal,
        letterSpacing: typography$d.letterSpacing.wide
      },
      small: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 11,
        fontWeight: typography$d.fontWeights.semibold,
        lineHeight: typography$d.lineHeights.tight,
        letterSpacing: typography$d.letterSpacing.wide
      }
    },
    caption: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 12,
      fontWeight: typography$d.fontWeights.regular,
      lineHeight: typography$d.lineHeights.normal,
      letterSpacing: typography$d.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 11,
      fontWeight: typography$d.fontWeights.semibold,
      lineHeight: typography$d.lineHeights.tight,
      letterSpacing: typography$d.letterSpacing.widest
    }
  }
};
/**
 * Meta Horizon Design Semantic Tokens (Dark Mode)
 */
var metaHorizonSemanticDark = _objectSpread2(_objectSpread2({}, metaHorizonSemanticLight), {}, {
  colors: {
    background: {
      primary: '#18191A',
      // Meta's dark mode background
      secondary: '#242526',
      // Slightly lighter
      tertiary: '#3A3B3C',
      // Even lighter for elevated surfaces
      inverse: '#FFFFFF'
    },
    surface: {
      primary: '#242526',
      secondary: '#3A3B3C',
      tertiary: '#4E4F50',
      elevated: '#3A3B3C',
      overlay: 'rgba(0, 0, 0, 0.8)'
    },
    text: {
      primary: '#E4E6EB',
      // Meta's dark mode primary text
      secondary: '#B0B3B8',
      // Meta's dark mode secondary text
      tertiary: '#8A8D91',
      // Meta's dark mode tertiary text
      inverse: '#1C1E21',
      disabled: '#5A5C5F',
      link: '#2E89FF' // Lighter blue for dark mode
    },
    border: {
      primary: '#3A3B3C',
      secondary: '#4E4F50',
      focus: '#2E89FF',
      error: '#FF6B70'
    },
    interactive: {
      primary: '#2E89FF',
      // Lighter blue for dark mode
      primaryHover: '#4E9AFF',
      primaryActive: '#6AABFF',
      primaryDisabled: 'rgba(46, 137, 255, 0.4)',
      secondary: '#3A3B3C',
      secondaryHover: '#4E4F50',
      secondaryActive: '#5A5C5F',
      secondaryDisabled: '#2C2D2E'
    },
    feedback: {
      success: '#42B35C',
      // Lighter green for dark mode
      successSubtle: '#2A4D33',
      warning: '#FFB340',
      // Lighter orange for dark mode
      warningSubtle: '#4A3D2A',
      error: '#FF6B70',
      // Lighter red for dark mode
      errorSubtle: '#4A2A2B',
      info: '#2E89FF',
      infoSubtle: '#1E3A5F'
    }
  }
});

var colors = basePrimitiveTokens.colors,
  spacing$c = basePrimitiveTokens.spacing,
  typography$c = basePrimitiveTokens.typography;
/**
 * Cupertino (iOS) Semantic Tokens (Light Mode)
 */
var cupertinoSemanticLight = {
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      inverse: colors.neutral[900]
    },
    surface: {
      primary: colors.white,
      secondary: 'rgba(242, 242, 247, 0.8)',
      // Translucent background
      tertiary: colors.neutral[100],
      elevated: colors.white,
      overlay: 'rgba(0, 0, 0, 0.4)'
    },
    text: {
      primary: colors.black,
      secondary: colors.neutral[600],
      tertiary: colors.neutral[500],
      inverse: colors.white,
      disabled: colors.neutral[400],
      link: '#007AFF' // iOS blue
    },
    border: {
      primary: colors.neutral[300],
      secondary: colors.neutral[200],
      focus: '#007AFF',
      error: '#FF3B30' // iOS red
    },
    interactive: {
      primary: '#007AFF',
      // iOS blue
      primaryHover: '#0051D5',
      primaryActive: '#003D99',
      primaryDisabled: colors.neutral[300],
      secondary: '#5856D6',
      // iOS purple
      secondaryHover: '#4644B8',
      secondaryActive: '#35349A',
      secondaryDisabled: colors.neutral[300]
    },
    feedback: {
      success: '#34C759',
      // iOS green
      successSubtle: colors.success[50],
      warning: '#FF9500',
      // iOS orange
      warningSubtle: colors.warning[50],
      error: '#FF3B30',
      // iOS red
      errorSubtle: colors.error[50],
      info: '#5AC8FA',
      // iOS teal
      infoSubtle: colors.info[50]
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$c[1],
      paddingSm: spacing$c[2],
      paddingMd: spacing$c[4],
      paddingLg: spacing$c[6],
      paddingXl: spacing$c[8],
      gapXs: spacing$c[1],
      gapSm: spacing$c[2],
      gapMd: spacing$c[3],
      // iOS uses 12pt grid
      gapLg: spacing$c[6],
      gapXl: spacing$c[8]
    },
    layout: {
      containerPadding: spacing$c[4],
      sectionGap: spacing$c[8],
      cardGap: spacing$c[4]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'System',
        // San Francisco on iOS
        fontSize: typography$c.fontSizes['5xl'],
        fontWeight: typography$c.fontWeights.bold,
        lineHeight: typography$c.lineHeights.tight,
        letterSpacing: typography$c.letterSpacing.tight
      },
      h2: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes['4xl'],
        fontWeight: typography$c.fontWeights.bold,
        lineHeight: typography$c.lineHeights.tight,
        letterSpacing: typography$c.letterSpacing.tight
      },
      h3: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes['3xl'],
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.tight,
        letterSpacing: typography$c.letterSpacing.normal
      },
      h4: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes['2xl'],
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.snug,
        letterSpacing: typography$c.letterSpacing.normal
      },
      h5: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.xl,
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.snug,
        letterSpacing: typography$c.letterSpacing.normal
      },
      h6: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.lg,
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.normal,
        letterSpacing: typography$c.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'System',
        fontSize: 17,
        // iOS default
        fontWeight: typography$c.fontWeights.regular,
        lineHeight: typography$c.lineHeights.normal,
        letterSpacing: typography$c.letterSpacing.tight
      },
      medium: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.base,
        fontWeight: typography$c.fontWeights.regular,
        lineHeight: typography$c.lineHeights.normal,
        letterSpacing: typography$c.letterSpacing.normal
      },
      small: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.sm,
        fontWeight: typography$c.fontWeights.regular,
        lineHeight: typography$c.lineHeights.normal,
        letterSpacing: typography$c.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.base,
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.normal,
        letterSpacing: typography$c.letterSpacing.tight
      },
      medium: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.sm,
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.normal,
        letterSpacing: typography$c.letterSpacing.normal
      },
      small: {
        fontFamily: 'System',
        fontSize: typography$c.fontSizes.xs,
        fontWeight: typography$c.fontWeights.semibold,
        lineHeight: typography$c.lineHeights.tight,
        letterSpacing: typography$c.letterSpacing.normal
      }
    },
    caption: {
      fontFamily: 'System',
      fontSize: typography$c.fontSizes.xs,
      fontWeight: typography$c.fontWeights.regular,
      lineHeight: typography$c.lineHeights.tight,
      letterSpacing: typography$c.letterSpacing.normal
    },
    overline: {
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: typography$c.fontWeights.semibold,
      lineHeight: typography$c.lineHeights.tight,
      letterSpacing: typography$c.letterSpacing.wide
    }
  }
};
/**
 * Cupertino (iOS) Semantic Tokens (Dark Mode)
 */
var cupertinoSemanticDark = _objectSpread2(_objectSpread2({}, cupertinoSemanticLight), {}, {
  colors: {
    background: {
      primary: colors.black,
      secondary: '#1C1C1E',
      // iOS dark secondary
      tertiary: '#2C2C2E',
      // iOS dark tertiary
      inverse: colors.white
    },
    surface: {
      primary: colors.black,
      secondary: 'rgba(28, 28, 30, 0.8)',
      // Translucent
      tertiary: '#2C2C2E',
      elevated: '#1C1C1E',
      overlay: 'rgba(0, 0, 0, 0.6)'
    },
    text: {
      primary: colors.white,
      secondary: '#98989D',
      // iOS secondary text
      tertiary: '#636366',
      // iOS tertiary text
      inverse: colors.black,
      disabled: '#48484A',
      link: '#0A84FF' // iOS dark mode blue
    },
    border: {
      primary: '#38383A',
      secondary: '#2C2C2E',
      focus: '#0A84FF',
      error: '#FF453A'
    },
    interactive: {
      primary: '#0A84FF',
      // iOS dark blue
      primaryHover: '#409CFF',
      primaryActive: '#72B4FF',
      primaryDisabled: '#48484A',
      secondary: '#5E5CE6',
      // iOS dark purple
      secondaryHover: '#7D7AFF',
      secondaryActive: '#9C9AFF',
      secondaryDisabled: '#48484A'
    },
    feedback: {
      success: '#32D74B',
      // iOS dark green
      successSubtle: colors.success[900],
      warning: '#FF9F0A',
      // iOS dark orange
      warningSubtle: colors.warning[900],
      error: '#FF453A',
      // iOS dark red
      errorSubtle: colors.error[900],
      info: '#64D2FF',
      // iOS dark teal
      infoSubtle: colors.info[900]
    }
  }
});

basePrimitiveTokens.colors;
  var spacing$b = basePrimitiveTokens.spacing,
  typography$b = basePrimitiveTokens.typography;
/**
 * Aqua (Classic macOS) Semantic Tokens (Light Mode)
 * Mac OS X through OS X Mavericks (2000-2014)
 */
var aquaSemanticLight = {
  colors: {
    background: {
      primary: '#ECECEC',
      secondary: '#D4D4D4',
      tertiary: '#C0C0C0',
      inverse: '#2D2D2D'
    },
    surface: {
      primary: 'linear-gradient(180deg, #FCFCFC 0%, #D8D8D8 100%)',
      // Brushed metal gradient
      secondary: '#E8E8E8',
      tertiary: '#DCDCDC',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.3)'
    },
    text: {
      primary: '#000000',
      secondary: '#4A4A4A',
      tertiary: '#7D7D7D',
      inverse: '#FFFFFF',
      disabled: '#999999',
      link: '#0000EE'
    },
    border: {
      primary: '#A0A0A0',
      secondary: '#C0C0C0',
      focus: '#4A90D9',
      // Aqua blue
      error: '#CC0000'
    },
    interactive: {
      primary: '#4A90D9',
      // Aqua blue
      primaryHover: '#3875D7',
      primaryActive: '#2E5DB3',
      primaryDisabled: '#CCCCCC',
      secondary: '#8E8E93',
      // Graphite
      secondaryHover: '#6E6E73',
      secondaryActive: '#5E5E63',
      secondaryDisabled: '#CCCCCC'
    },
    feedback: {
      success: '#00AA00',
      successSubtle: '#E6F7E6',
      warning: '#FF9500',
      warningSubtle: '#FFF3E6',
      error: '#CC0000',
      errorSubtle: '#FFE6E6',
      info: '#4A90D9',
      infoSubtle: '#E6F2FF'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$b[1],
      paddingSm: spacing$b[2],
      paddingMd: spacing$b[3],
      paddingLg: spacing$b[4],
      paddingXl: spacing$b[6],
      gapXs: spacing$b[1],
      gapSm: spacing$b[2],
      gapMd: spacing$b[3],
      gapLg: spacing$b[4],
      gapXl: spacing$b[6]
    },
    layout: {
      containerPadding: spacing$b[4],
      sectionGap: spacing$b[6],
      cardGap: spacing$b[3]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 24,
        fontWeight: typography$b.fontWeights.bold,
        lineHeight: typography$b.lineHeights.tight,
        letterSpacing: typography$b.letterSpacing.normal
      },
      h2: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 18,
        fontWeight: typography$b.fontWeights.bold,
        lineHeight: typography$b.lineHeights.tight,
        letterSpacing: typography$b.letterSpacing.normal
      },
      h3: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 14,
        fontWeight: typography$b.fontWeights.bold,
        lineHeight: typography$b.lineHeights.snug,
        letterSpacing: typography$b.letterSpacing.normal
      },
      h4: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 13,
        fontWeight: typography$b.fontWeights.bold,
        lineHeight: typography$b.lineHeights.snug,
        letterSpacing: typography$b.letterSpacing.normal
      },
      h5: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 11,
        fontWeight: typography$b.fontWeights.bold,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Lucida Grande, Helvetica Neue, System',
        fontSize: 10,
        fontWeight: typography$b.fontWeights.bold,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 13,
        fontWeight: typography$b.fontWeights.regular,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 11,
        fontWeight: typography$b.fontWeights.regular,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      },
      small: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 10,
        fontWeight: typography$b.fontWeights.regular,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 11,
        fontWeight: typography$b.fontWeights.semibold,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 10,
        fontWeight: typography$b.fontWeights.semibold,
        lineHeight: typography$b.lineHeights.normal,
        letterSpacing: typography$b.letterSpacing.normal
      },
      small: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 9,
        fontWeight: typography$b.fontWeights.semibold,
        lineHeight: typography$b.lineHeights.tight,
        letterSpacing: typography$b.letterSpacing.normal
      }
    },
    caption: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 10,
      fontWeight: typography$b.fontWeights.regular,
      lineHeight: typography$b.lineHeights.tight,
      letterSpacing: typography$b.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 9,
      fontWeight: typography$b.fontWeights.semibold,
      lineHeight: typography$b.lineHeights.tight,
      letterSpacing: typography$b.letterSpacing.wider
    }
  }
};
/**
 * Aqua (Classic macOS) Semantic Tokens (Dark Mode)
 * Note: Classic Aqua didn't have a dark mode, this is an interpretation
 */
var aquaSemanticDark = _objectSpread2(_objectSpread2({}, aquaSemanticLight), {}, {
  colors: {
    background: {
      primary: '#2D2D2D',
      secondary: '#3A3A3A',
      tertiary: '#4A4A4A',
      inverse: '#ECECEC'
    },
    surface: {
      primary: 'linear-gradient(180deg, #4A4A4A 0%, #2D2D2D 100%)',
      secondary: '#3A3A3A',
      tertiary: '#444444',
      elevated: '#505050',
      overlay: 'rgba(0, 0, 0, 0.6)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
      tertiary: '#8E8E8E',
      inverse: '#000000',
      disabled: '#666666',
      link: '#5A9FE5'
    },
    border: {
      primary: '#5A5A5A',
      secondary: '#4A4A4A',
      focus: '#5A9FE5',
      error: '#FF4444'
    },
    interactive: {
      primary: '#5A9FE5',
      primaryHover: '#4A8FD5',
      primaryActive: '#3A7FC5',
      primaryDisabled: '#555555',
      secondary: '#8E8E93',
      secondaryHover: '#9E9EA3',
      secondaryActive: '#AEAEB3',
      secondaryDisabled: '#555555'
    },
    feedback: {
      success: '#00CC00',
      successSubtle: '#1A3A1A',
      warning: '#FFAA00',
      warningSubtle: '#3A2A1A',
      error: '#FF4444',
      errorSubtle: '#3A1A1A',
      info: '#5A9FE5',
      infoSubtle: '#1A2A3A'
    }
  }
});

basePrimitiveTokens.colors;
  var spacing$a = basePrimitiveTokens.spacing,
  typography$a = basePrimitiveTokens.typography;
/**
 * Aero Glass (Windows Vista/7) Semantic Tokens (Light Mode)
 * Windows Vista/7 (2006-2012)
 */
var aeroGlassSemanticLight = {
  colors: {
    background: {
      primary: '#F0F0F0',
      secondary: '#E5E5E5',
      tertiary: '#D9D9D9',
      inverse: '#1F1F1F'
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.8)',
      // Frosted glass effect
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.6)',
      elevated: 'rgba(255, 255, 255, 0.9)',
      overlay: 'rgba(0, 0, 0, 0.4)'
    },
    text: {
      primary: '#000000',
      secondary: '#5A5A5A',
      tertiary: '#7A7A7A',
      inverse: '#FFFFFF',
      disabled: '#A0A0A0',
      link: '#0066CC'
    },
    border: {
      primary: 'rgba(76, 76, 76, 0.6)',
      // Glass border
      secondary: 'rgba(140, 140, 140, 0.4)',
      focus: '#0078D7',
      error: '#C42B1C'
    },
    interactive: {
      primary: '#0078D7',
      // Windows blue
      primaryHover: '#0063B1',
      primaryActive: '#004E8C',
      primaryDisabled: 'rgba(0, 120, 215, 0.3)',
      secondary: '#5B5B5B',
      secondaryHover: '#6B6B6B',
      secondaryActive: '#7B7B7B',
      secondaryDisabled: 'rgba(91, 91, 91, 0.3)'
    },
    feedback: {
      success: '#107C10',
      successSubtle: 'rgba(16, 124, 16, 0.1)',
      warning: '#FFB900',
      warningSubtle: 'rgba(255, 185, 0, 0.1)',
      error: '#C42B1C',
      errorSubtle: 'rgba(196, 43, 28, 0.1)',
      info: '#0078D7',
      infoSubtle: 'rgba(0, 120, 215, 0.1)'
    }
  },
  spacing: {
    component: {
      paddingXs: spacing$a[1],
      paddingSm: spacing$a[2],
      paddingMd: spacing$a[3],
      paddingLg: spacing$a[4],
      paddingXl: spacing$a[6],
      gapXs: spacing$a[1],
      gapSm: spacing$a[2],
      gapMd: spacing$a[3],
      gapLg: spacing$a[4],
      gapXl: spacing$a[6]
    },
    layout: {
      containerPadding: spacing$a[4],
      sectionGap: spacing$a[6],
      cardGap: spacing$a[3]
    }
  },
  typography: {
    heading: {
      h1: {
        fontFamily: 'Segoe UI, System',
        fontSize: 24,
        fontWeight: typography$a.fontWeights.light,
        lineHeight: typography$a.lineHeights.tight,
        letterSpacing: typography$a.letterSpacing.normal
      },
      h2: {
        fontFamily: 'Segoe UI, System',
        fontSize: 20,
        fontWeight: typography$a.fontWeights.light,
        lineHeight: typography$a.lineHeights.tight,
        letterSpacing: typography$a.letterSpacing.normal
      },
      h3: {
        fontFamily: 'Segoe UI, System',
        fontSize: 16,
        fontWeight: typography$a.fontWeights.regular,
        lineHeight: typography$a.lineHeights.snug,
        letterSpacing: typography$a.letterSpacing.normal
      },
      h4: {
        fontFamily: 'Segoe UI, System',
        fontSize: 14,
        fontWeight: typography$a.fontWeights.regular,
        lineHeight: typography$a.lineHeights.snug,
        letterSpacing: typography$a.letterSpacing.normal
      },
      h5: {
        fontFamily: 'Segoe UI, System',
        fontSize: 12,
        fontWeight: typography$a.fontWeights.semibold,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      },
      h6: {
        fontFamily: 'Segoe UI, System',
        fontSize: 11,
        fontWeight: typography$a.fontWeights.semibold,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      }
    },
    body: {
      large: {
        fontFamily: 'Segoe UI, System',
        fontSize: 12,
        fontWeight: typography$a.fontWeights.regular,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Segoe UI, System',
        fontSize: 11,
        fontWeight: typography$a.fontWeights.regular,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      },
      small: {
        fontFamily: 'Segoe UI, System',
        fontSize: 9,
        fontWeight: typography$a.fontWeights.regular,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      }
    },
    label: {
      large: {
        fontFamily: 'Segoe UI, System',
        fontSize: 11,
        fontWeight: typography$a.fontWeights.semibold,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Segoe UI, System',
        fontSize: 9,
        fontWeight: typography$a.fontWeights.semibold,
        lineHeight: typography$a.lineHeights.normal,
        letterSpacing: typography$a.letterSpacing.normal
      },
      small: {
        fontFamily: 'Segoe UI, System',
        fontSize: 8,
        fontWeight: typography$a.fontWeights.semibold,
        lineHeight: typography$a.lineHeights.tight,
        letterSpacing: typography$a.letterSpacing.normal
      }
    },
    caption: {
      fontFamily: 'Segoe UI, System',
      fontSize: 9,
      fontWeight: typography$a.fontWeights.regular,
      lineHeight: typography$a.lineHeights.tight,
      letterSpacing: typography$a.letterSpacing.normal
    },
    overline: {
      fontFamily: 'Segoe UI, System',
      fontSize: 8,
      fontWeight: typography$a.fontWeights.semibold,
      lineHeight: typography$a.lineHeights.tight,
      letterSpacing: typography$a.letterSpacing.wide
    }
  }
};
/**
 * Aero Glass (Windows Vista/7) Semantic Tokens (Dark Mode)
 * Note: Aero didn't have true dark mode, this is an interpretation
 */
var aeroGlassSemanticDark = _objectSpread2(_objectSpread2({}, aeroGlassSemanticLight), {}, {
  colors: {
    background: {
      primary: '#1F1F1F',
      secondary: '#2A2A2A',
      tertiary: '#353535',
      inverse: '#F0F0F0'
    },
    surface: {
      primary: 'rgba(40, 40, 40, 0.8)',
      secondary: 'rgba(50, 50, 50, 0.7)',
      tertiary: 'rgba(60, 60, 60, 0.6)',
      elevated: 'rgba(70, 70, 70, 0.9)',
      overlay: 'rgba(0, 0, 0, 0.6)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C8C8C8',
      tertiary: '#A0A0A0',
      inverse: '#000000',
      disabled: '#6D6D6D',
      link: '#4CC2FF'
    },
    border: {
      primary: 'rgba(140, 140, 140, 0.6)',
      secondary: 'rgba(100, 100, 100, 0.4)',
      focus: '#4CC2FF',
      error: '#FF9A96'
    },
    interactive: {
      primary: '#4CC2FF',
      primaryHover: '#6BD3FF',
      primaryActive: '#8AE0FF',
      primaryDisabled: 'rgba(76, 194, 255, 0.3)',
      secondary: '#8E8E93',
      secondaryHover: '#9E9EA3',
      secondaryActive: '#AEAEB3',
      secondaryDisabled: 'rgba(142, 142, 147, 0.3)'
    },
    feedback: {
      success: '#6CCB5F',
      successSubtle: 'rgba(108, 203, 95, 0.1)',
      warning: '#FFD83D',
      warningSubtle: 'rgba(255, 216, 61, 0.1)',
      error: '#FF99A4',
      errorSubtle: 'rgba(255, 153, 164, 0.1)',
      info: '#4CC2FF',
      infoSubtle: 'rgba(76, 194, 255, 0.1)'
    }
  }
});

var spacing$9 = basePrimitiveTokens.spacing,
  borderRadius$8 = basePrimitiveTokens.borderRadius,
  typography$9 = basePrimitiveTokens.typography;
/**
 * Holo Design Component Tokens
 * Android 4.0-4.4 KitKat (Ice Cream Sandwich, Jelly Bean, KitKat)
 *
 * Key Characteristics:
 * - Sharp edges (no border radius)
 * - Drop shadows for depth
 * - Holo blue (#33B5E5) as primary accent
 * - Hard-edged, angular aesthetic
 * - 48dp minimum touch targets
 * - Roboto font family
 * - Support for both light and dark themes
 *
 * Icon Guidelines:
 * - Action bar icons: 32×32dp with 8dp padding (total 48×48dp touch target)
 * - Small/contextual icons: 24×24dp
 * - Notification icons: 24×24dp (white)
 * - Launcher icons: 48×48dp
 * - Use white icons on dark backgrounds, black icons on light backgrounds
 * - Icons should be simple, geometric, and flat
 * - Standard Holo icon set available in the Android SDK
 */
var holoComponentTokens = {
  button: {
    borderRadius: borderRadius$8.none,
    // Sharp edges - no rounding in Holo
    paddingVertical: {
      small: spacing$9[1],
      // 8dp
      medium: spacing$9[2],
      // 16dp
      large: spacing$9[3] // 24dp
    },
    paddingHorizontal: {
      small: spacing$9[4],
      // 32dp
      medium: spacing$9[6],
      // 48dp
      large: spacing$9[8] // 64dp
    },
    minHeight: {
      small: 32,
      medium: 48,
      // Standard 48dp touch target (Android guideline)
      large: 56
    },
    typography: {
      small: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 14,
        // Standard button text
        fontWeight: typography$9.fontWeights.bold,
        // Buttons use bold
        lineHeight: typography$9.lineHeights.normal,
        letterSpacing: typography$9.letterSpacing.wide // Slightly wider for buttons
      },
      medium: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 16,
        fontWeight: typography$9.fontWeights.bold,
        lineHeight: typography$9.lineHeights.normal,
        letterSpacing: typography$9.letterSpacing.wide
      },
      large: {
        fontFamily: 'Roboto-Bold',
        // Official Roboto Bold (700)
        fontSize: 18,
        fontWeight: typography$9.fontWeights.bold,
        lineHeight: typography$9.lineHeights.normal,
        letterSpacing: typography$9.letterSpacing.wide
      }
    }
  },
  card: {
    borderRadius: borderRadius$8.none,
    // Hard edges, no rounding
    padding: {
      none: 0,
      small: spacing$9[3],
      // 24dp
      medium: spacing$9[4],
      // 32dp
      large: spacing$9[6] // 48dp
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      small: {
        shadowColor: '#000',
        // Standard black shadow, not blue
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 8
      }
    },
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: 'transparent',
    // Placeholder - components use semantic.colors.surface.elevated
    border: {
      width: 0,
      // Cards typically don't have borders in Holo, they use shadows
      color: 'transparent' // Placeholder - components use semantic.colors.border.secondary
    }
  },
  input: {
    borderRadius: borderRadius$8.none,
    // No rounding
    paddingVertical: spacing$9[2],
    // 16dp
    paddingHorizontal: spacing$9[3],
    // 24dp
    minHeight: 48,
    // Standard touch target
    typography: {
      fontFamily: 'Roboto-Regular',
      // Official Roboto Regular (400)
      fontSize: 16,
      // Comfortable reading size
      fontWeight: typography$9.fontWeights.regular,
      lineHeight: typography$9.lineHeights.normal,
      letterSpacing: typography$9.letterSpacing.normal
    },
    border: {
      width: 2,
      // Slightly thicker borders for definition
      // NOTE: Components now use theme.semantic.colors for dynamic theme support
      color: {
        "default": 'transparent',
        // Placeholder - components use semantic.colors.border.*
        focus: 'transparent',
        error: 'transparent',
        disabled: 'transparent'
      }
    },
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: {
      "default": 'transparent',
      // Placeholder - components use semantic.colors.surface.primary
      disabled: 'transparent'
    }
  },
  image: {
    borderRadius: borderRadius$8.none,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(51,181,229,0) 0%, rgba(51,181,229,0.6) 100%)',
      opacity: 0.6
    }
  },
  tag: {
    borderRadius: borderRadius$8.none,
    // Sharp edges
    paddingVertical: spacing$9[1],
    // 8dp
    paddingHorizontal: spacing$9[2],
    // 16dp
    typography: {
      fontFamily: 'Roboto-Bold',
      // Official Roboto Bold (700)
      fontSize: 12,
      fontWeight: typography$9.fontWeights.bold,
      lineHeight: typography$9.lineHeights.normal,
      letterSpacing: typography$9.letterSpacing.wide // Better legibility for small text
    },
    border: {
      width: 1
    }
  },
  list: {
    itemSpacing: spacing$9[2],
    sectionHeaderSpacing: spacing$9[4],
    contentPadding: spacing$9[4]
  },
  articleCard: {
    borderRadius: borderRadius$8.none,
    // Sharp edges
    padding: spacing$9[4],
    // 32dp
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      // Standard drop shadow
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4
    },
    // NOTE: Components now use theme.semantic.colors for dynamic theme support
    background: 'transparent',
    // Placeholder - components use semantic.colors.surface.elevated
    border: {
      width: 0,
      // Use shadows instead of borders
      color: 'transparent' // Placeholder - components use semantic.colors.border.secondary
    },
    spacing: {
      headerGap: spacing$9[3],
      // 24dp
      contentGap: spacing$9[2],
      // 16dp
      tagsGap: spacing$9[2],
      // 16dp
      metaGap: spacing$9[1] // 8dp
    }
  }
};

var spacing$8 = basePrimitiveTokens.spacing,
  borderRadius$7 = basePrimitiveTokens.borderRadius,
  shadows$3 = basePrimitiveTokens.shadows,
  typography$8 = basePrimitiveTokens.typography;
/**
 * Material Design Component Tokens
 */
var materialComponentTokens = {
  button: {
    borderRadius: borderRadius$7.sm,
    // Material uses subtle corners
    paddingVertical: {
      small: spacing$8[1],
      medium: spacing$8[2],
      large: spacing$8[3]
    },
    paddingHorizontal: {
      small: spacing$8[3],
      medium: spacing$8[4],
      large: spacing$8[6]
    },
    minHeight: {
      small: 32,
      medium: 40,
      large: 48
    },
    typography: {
      small: {
        fontFamily: typography$8.fontFamilies.body,
        fontSize: 15,
        fontWeight: typography$8.fontWeights.medium,
        lineHeight: typography$8.lineHeights.normal,
        letterSpacing: typography$8.letterSpacing.wide
      },
      medium: {
        fontFamily: typography$8.fontFamilies.body,
        fontSize: 17,
        fontWeight: typography$8.fontWeights.medium,
        lineHeight: typography$8.lineHeights.normal,
        letterSpacing: typography$8.letterSpacing.wide
      },
      large: {
        fontFamily: typography$8.fontFamilies.body,
        fontSize: 19,
        fontWeight: typography$8.fontWeights.medium,
        lineHeight: typography$8.lineHeights.normal,
        letterSpacing: typography$8.letterSpacing.wide
      }
    }
  },
  card: {
    borderRadius: borderRadius$7.sm,
    padding: {
      none: 0,
      small: spacing$8[2],
      medium: spacing$8[4],
      large: spacing$8[6]
    },
    shadow: {
      none: shadows$3.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8
      }
    },
    background: materialSemanticLight.colors.surface.elevated,
    border: {
      width: 0,
      color: 'transparent'
    }
  },
  input: {
    borderRadius: borderRadius$7.sm,
    paddingVertical: spacing$8[3],
    paddingHorizontal: spacing$8[4],
    minHeight: 56,
    // Material standard
    typography: materialSemanticLight.typography.body.medium,
    border: {
      width: 1,
      color: {
        "default": materialSemanticLight.colors.border.secondary,
        focus: materialSemanticLight.colors.border.focus,
        error: materialSemanticLight.colors.border.error,
        disabled: materialSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": materialSemanticLight.colors.surface.secondary,
      disabled: materialSemanticLight.colors.surface.tertiary
    }
  },
  image: {
    borderRadius: borderRadius$7.sm,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
      opacity: 0.4
    }
  },
  tag: {
    borderRadius: borderRadius$7.full,
    paddingVertical: spacing$8[1],
    paddingHorizontal: spacing$8[3],
    typography: _objectSpread2(_objectSpread2({}, materialSemanticLight.typography.label.small), {}, {
      fontWeight: typography$8.fontWeights.medium
    }),
    border: {
      width: 0
    }
  },
  list: {
    itemSpacing: spacing$8[2],
    sectionHeaderSpacing: spacing$8[4],
    contentPadding: spacing$8[4]
  },
  articleCard: {
    borderRadius: borderRadius$7.md,
    padding: spacing$8[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4
    },
    background: materialSemanticLight.colors.surface.elevated,
    border: {
      width: 0,
      color: 'transparent'
    },
    spacing: {
      headerGap: spacing$8[3],
      contentGap: spacing$8[2],
      tagsGap: spacing$8[2],
      metaGap: spacing$8[1]
    }
  }
};

var spacing$7 = basePrimitiveTokens.spacing,
  borderRadius$6 = basePrimitiveTokens.borderRadius,
  typography$7 = basePrimitiveTokens.typography;
/**
 * Flat Design Component Tokens (iOS 18)
 * Components with glass morphism, translucency, and fluid design
 */
var flatComponentTokens = {
  button: {
    borderRadius: borderRadius$6.xl,
    // 12px - iOS continuous corner radius
    paddingVertical: {
      small: spacing$7[1],
      // 4
      medium: spacing$7[2],
      // 8
      large: spacing$7[3] // 12
    },
    paddingHorizontal: {
      small: spacing$7[4],
      // 16
      medium: spacing$7[6],
      // 24
      large: spacing$7[8] // 32
    },
    minHeight: {
      small: 32,
      medium: 44,
      // iOS standard touch target (44pt)
      large: 50
    },
    typography: {
      small: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography$7.fontWeights.semibold,
        lineHeight: 1.33,
        // 20pt
        letterSpacing: -0.23
      },
      medium: {
        fontFamily: 'System',
        fontSize: 17,
        // iOS default body size
        fontWeight: typography$7.fontWeights.semibold,
        lineHeight: 1.29,
        // 22pt
        letterSpacing: -0.41
      },
      large: {
        fontFamily: 'System',
        fontSize: 19,
        fontWeight: typography$7.fontWeights.semibold,
        lineHeight: 1.26,
        // 24pt
        letterSpacing: -0.45
      }
    }
  },
  card: {
    borderRadius: borderRadius$6['2xl'],
    // 16px - larger for modern iOS
    padding: {
      none: 0,
      small: spacing$7[3],
      // 12
      medium: spacing$7[4],
      // 16
      large: spacing$7[6] // 24
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.04,
        // Very subtle
        shadowRadius: 3,
        elevation: 1
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 4
      }
    },
    background: flatSemanticLight.colors.surface.elevated,
    // Glass effect
    border: {
      width: 0,
      color: 'transparent'
    }
  },
  input: {
    borderRadius: borderRadius$6.lg,
    // 10px
    paddingVertical: spacing$7[2],
    // 8
    paddingHorizontal: spacing$7[3],
    // 12
    minHeight: 44,
    // iOS touch target
    typography: {
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: typography$7.fontWeights.regular,
      lineHeight: 1.29,
      letterSpacing: -0.41
    },
    border: {
      width: 0,
      // iOS 18 uses filled backgrounds, not borders
      color: {
        "default": 'transparent',
        focus: flatSemanticLight.colors.border.focus,
        error: flatSemanticLight.colors.border.error,
        disabled: 'transparent'
      }
    },
    background: {
      "default": flatSemanticLight.colors.interactive.secondary,
      // Filled style
      disabled: 'rgba(120, 120, 128, 0.08)'
    }
  },
  image: {
    borderRadius: borderRadius$6['2xl'],
    // 16px for modern look
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
      opacity: 0.2
    }
  },
  tag: {
    borderRadius: borderRadius$6.full,
    // Pill shape
    paddingVertical: spacing$7[1],
    // 4
    paddingHorizontal: spacing$7[3],
    // 12
    typography: {
      fontFamily: 'System',
      fontSize: 13,
      fontWeight: typography$7.fontWeights.semibold,
      lineHeight: 1.38,
      // 18pt
      letterSpacing: -0.08
    },
    border: {
      width: 0
    }
  },
  list: {
    itemSpacing: spacing$7[2],
    // 8
    sectionHeaderSpacing: spacing$7[4],
    // 16
    contentPadding: spacing$7[4] // 16
  },
  articleCard: {
    borderRadius: borderRadius$6['2xl'],
    // 16px
    padding: spacing$7[4],
    // 16
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.04,
      // Very subtle iOS shadow
      shadowRadius: 12,
      elevation: 2
    },
    background: flatSemanticLight.colors.surface.elevated,
    // Glass effect
    border: {
      width: 0,
      color: 'transparent'
    },
    spacing: {
      headerGap: spacing$7[3],
      // 12
      contentGap: spacing$7[2],
      // 8
      tagsGap: spacing$7[2],
      // 8
      metaGap: spacing$7[1] // 4
    }
  }
};

var spacing$6 = basePrimitiveTokens.spacing,
  borderRadius$5 = basePrimitiveTokens.borderRadius,
  typography$6 = basePrimitiveTokens.typography;
var liquidGlassComponentTokens = {
  button: {
    borderRadius: borderRadius$5['2xl'],
    // Very rounded
    paddingVertical: {
      small: spacing$6[2],
      medium: spacing$6[3],
      large: spacing$6[4]
    },
    paddingHorizontal: {
      small: spacing$6[6],
      medium: spacing$6[8],
      large: spacing$6[12]
    },
    minHeight: {
      small: 36,
      medium: 44,
      large: 56
    },
    typography: {
      small: {
        fontFamily: 'Inter, System',
        fontSize: 15,
        fontWeight: typography$6.fontWeights.medium,
        lineHeight: typography$6.lineHeights.normal,
        letterSpacing: typography$6.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Inter, System',
        fontSize: 17,
        fontWeight: typography$6.fontWeights.medium,
        lineHeight: typography$6.lineHeights.normal,
        letterSpacing: typography$6.letterSpacing.normal
      },
      large: {
        fontFamily: 'Inter, System',
        fontSize: 19,
        fontWeight: typography$6.fontWeights.medium,
        lineHeight: typography$6.lineHeights.normal,
        letterSpacing: typography$6.letterSpacing.normal
      }
    }
  },
  card: {
    borderRadius: borderRadius$5['2xl'],
    padding: {
      none: 0,
      small: spacing$6[4],
      medium: spacing$6[6],
      large: spacing$6[8]
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      small: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 2
      },
      medium: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.15,
        shadowRadius: 24,
        elevation: 4
      },
      large: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 8
      }
    },
    background: liquidGlassSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: liquidGlassSemanticLight.colors.border.primary
    }
  },
  input: {
    borderRadius: borderRadius$5.xl,
    paddingVertical: spacing$6[3],
    paddingHorizontal: spacing$6[4],
    minHeight: 48,
    typography: {
      fontFamily: 'Inter, System',
      fontSize: 16,
      fontWeight: typography$6.fontWeights.regular,
      lineHeight: typography$6.lineHeights.normal,
      letterSpacing: typography$6.letterSpacing.normal
    },
    border: {
      width: 1,
      color: {
        "default": liquidGlassSemanticLight.colors.border.secondary,
        focus: liquidGlassSemanticLight.colors.border.focus,
        error: liquidGlassSemanticLight.colors.border.error,
        disabled: liquidGlassSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": liquidGlassSemanticLight.colors.surface.secondary,
      disabled: liquidGlassSemanticLight.colors.surface.tertiary
    }
  },
  image: {
    borderRadius: borderRadius$5['2xl'],
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
      opacity: 0.25
    }
  },
  tag: {
    borderRadius: borderRadius$5.full,
    paddingVertical: spacing$6[1],
    paddingHorizontal: spacing$6[4],
    typography: {
      fontFamily: 'Inter, System',
      fontSize: 13,
      fontWeight: typography$6.fontWeights.medium,
      lineHeight: typography$6.lineHeights.normal,
      letterSpacing: typography$6.letterSpacing.normal
    },
    border: {
      width: 1
    }
  },
  list: {
    itemSpacing: spacing$6[4],
    sectionHeaderSpacing: spacing$6[6],
    contentPadding: spacing$6[6]
  },
  articleCard: {
    borderRadius: borderRadius$5['2xl'],
    padding: spacing$6[6],
    imageHeight: 240,
    shadow: {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.15,
      shadowRadius: 24,
      elevation: 4
    },
    background: liquidGlassSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: liquidGlassSemanticLight.colors.border.primary
    },
    spacing: {
      headerGap: spacing$6[4],
      contentGap: spacing$6[3],
      tagsGap: spacing$6[3],
      metaGap: spacing$6[2]
    }
  }
};

var spacing$5 = basePrimitiveTokens.spacing,
  borderRadius$4 = basePrimitiveTokens.borderRadius,
  shadows$2 = basePrimitiveTokens.shadows,
  typography$5 = basePrimitiveTokens.typography;
/**
 * Metro/Fluent Design Component Tokens
 */
var metroComponentTokens = {
  button: {
    borderRadius: borderRadius$4.xs,
    // Metro uses sharp or very subtle corners
    paddingVertical: {
      small: spacing$5[1],
      medium: spacing$5[2],
      large: spacing$5[3]
    },
    paddingHorizontal: {
      small: spacing$5[4],
      medium: spacing$5[6],
      large: spacing$5[8]
    },
    minHeight: {
      small: 32,
      medium: 40,
      large: 48
    },
    typography: {
      small: {
        fontFamily: 'System',
        // Segoe UI
        fontSize: 15,
        fontWeight: typography$5.fontWeights.semibold,
        lineHeight: typography$5.lineHeights.normal,
        letterSpacing: typography$5.letterSpacing.normal
      },
      medium: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: typography$5.fontWeights.semibold,
        lineHeight: typography$5.lineHeights.normal,
        letterSpacing: typography$5.letterSpacing.normal
      },
      large: {
        fontFamily: 'System',
        fontSize: 19,
        fontWeight: typography$5.fontWeights.semibold,
        lineHeight: typography$5.lineHeights.normal,
        letterSpacing: typography$5.letterSpacing.normal
      }
    }
  },
  card: {
    borderRadius: borderRadius$4.sm,
    padding: {
      none: 0,
      small: spacing$5[3],
      medium: spacing$5[4],
      large: spacing$5[8]
    },
    shadow: {
      none: shadows$2.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0.5
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 1
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.12,
        shadowRadius: 3,
        elevation: 3
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
        elevation: 5
      }
    },
    background: metroSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: metroSemanticLight.colors.border.secondary
    }
  },
  input: {
    borderRadius: borderRadius$4.xs,
    paddingVertical: spacing$5[2],
    paddingHorizontal: spacing$5[3],
    minHeight: 40,
    typography: {
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: typography$5.fontWeights.regular,
      lineHeight: typography$5.lineHeights.normal,
      letterSpacing: typography$5.letterSpacing.normal
    },
    border: {
      width: 1,
      color: {
        "default": metroSemanticLight.colors.border.primary,
        focus: metroSemanticLight.colors.border.focus,
        error: metroSemanticLight.colors.border.error,
        disabled: metroSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": metroSemanticLight.colors.background.primary,
      disabled: metroSemanticLight.colors.surface.tertiary
    }
  },
  image: {
    borderRadius: borderRadius$4.none,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
      opacity: 0.6
    }
  },
  tag: {
    borderRadius: borderRadius$4.xs,
    paddingVertical: spacing$5[1],
    paddingHorizontal: spacing$5[3],
    typography: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: typography$5.fontWeights.bold,
      lineHeight: typography$5.lineHeights.normal,
      letterSpacing: typography$5.letterSpacing.wide
    },
    border: {
      width: 1
    }
  },
  list: {
    itemSpacing: spacing$5[3],
    sectionHeaderSpacing: spacing$5[4],
    contentPadding: spacing$5[4]
  },
  articleCard: {
    borderRadius: borderRadius$4.sm,
    padding: spacing$5[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.12,
      shadowRadius: 3,
      elevation: 3
    },
    background: metroSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: metroSemanticLight.colors.border.secondary
    },
    spacing: {
      headerGap: spacing$5[3],
      contentGap: spacing$5[2],
      tagsGap: spacing$5[2],
      metaGap: spacing$5[1]
    }
  }
};

var spacing$4 = basePrimitiveTokens.spacing,
  borderRadius$3 = basePrimitiveTokens.borderRadius,
  typography$4 = basePrimitiveTokens.typography;
var fluentComponentTokens = {
  button: {
    borderRadius: borderRadius$3.sm,
    paddingVertical: {
      small: spacing$4[1],
      medium: spacing$4[2],
      large: spacing$4[3]
    },
    paddingHorizontal: {
      small: spacing$4[4],
      medium: spacing$4[6],
      large: spacing$4[8]
    },
    minHeight: {
      small: 24,
      medium: 32,
      large: 40
    },
    typography: {
      small: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 15,
        fontWeight: typography$4.fontWeights.semibold,
        lineHeight: typography$4.lineHeights.normal,
        letterSpacing: typography$4.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 17,
        fontWeight: typography$4.fontWeights.semibold,
        lineHeight: typography$4.lineHeights.normal,
        letterSpacing: typography$4.letterSpacing.normal
      },
      large: {
        fontFamily: 'Segoe UI Variable, System',
        fontSize: 19,
        fontWeight: typography$4.fontWeights.semibold,
        lineHeight: typography$4.lineHeights.normal,
        letterSpacing: typography$4.letterSpacing.normal
      }
    }
  },
  card: {
    borderRadius: borderRadius$3.md,
    padding: {
      none: 0,
      small: spacing$4[3],
      medium: spacing$4[4],
      large: spacing$4[6]
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 4
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 8
      }
    },
    background: fluentSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: fluentSemanticLight.colors.border.secondary
    }
  },
  input: {
    borderRadius: borderRadius$3.sm,
    paddingVertical: spacing$4[2],
    paddingHorizontal: spacing$4[3],
    minHeight: 32,
    typography: {
      fontFamily: 'Segoe UI Variable, System',
      fontSize: 14,
      fontWeight: typography$4.fontWeights.regular,
      lineHeight: typography$4.lineHeights.normal,
      letterSpacing: typography$4.letterSpacing.normal
    },
    border: {
      width: 1,
      color: {
        "default": fluentSemanticLight.colors.border.primary,
        focus: fluentSemanticLight.colors.border.focus,
        error: fluentSemanticLight.colors.border.error,
        disabled: fluentSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": fluentSemanticLight.colors.surface.primary,
      disabled: fluentSemanticLight.colors.background.tertiary
    }
  },
  image: {
    borderRadius: borderRadius$3.md,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
      opacity: 0.4
    }
  },
  tag: {
    borderRadius: borderRadius$3.sm,
    paddingVertical: spacing$4[1],
    paddingHorizontal: spacing$4[3],
    typography: {
      fontFamily: 'Segoe UI Variable, System',
      fontSize: 12,
      fontWeight: typography$4.fontWeights.semibold,
      lineHeight: typography$4.lineHeights.normal,
      letterSpacing: typography$4.letterSpacing.normal
    },
    border: {
      width: 1
    }
  },
  list: {
    itemSpacing: spacing$4[2],
    sectionHeaderSpacing: spacing$4[4],
    contentPadding: spacing$4[4]
  },
  articleCard: {
    borderRadius: borderRadius$3.md,
    padding: spacing$4[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 4
    },
    background: fluentSemanticLight.colors.surface.elevated,
    border: {
      width: 1,
      color: fluentSemanticLight.colors.border.secondary
    },
    spacing: {
      headerGap: spacing$4[3],
      contentGap: spacing$4[2],
      tagsGap: spacing$4[2],
      metaGap: spacing$4[1]
    }
  }
};

var spacing$3 = basePrimitiveTokens.spacing;
  basePrimitiveTokens.borderRadius;
  var shadows$1 = basePrimitiveTokens.shadows,
  typography$3 = basePrimitiveTokens.typography;
/**
 * Meta Horizon Design Component Tokens
 * Based on Meta's official Horizon design system
 */
var metaHorizonComponentTokens = {
  button: {
    borderRadius: 8,
    // Meta uses consistent 8px radius
    paddingVertical: {
      small: spacing$3[1],
      // 4px
      medium: spacing$3[2],
      // 8px
      large: spacing$3[2] // 8px
    },
    paddingHorizontal: {
      small: spacing$3[3],
      // 12px
      medium: spacing$3[4],
      // 16px
      large: spacing$3[6] // 24px
    },
    minHeight: {
      small: 32,
      medium: 36,
      large: 44
    },
    typography: {
      small: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: typography$3.fontWeights.semibold,
        lineHeight: typography$3.lineHeights.normal,
        letterSpacing: typography$3.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 15,
        fontWeight: typography$3.fontWeights.semibold,
        lineHeight: typography$3.lineHeights.normal,
        letterSpacing: typography$3.letterSpacing.normal
      },
      large: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontSize: 17,
        fontWeight: typography$3.fontWeights.semibold,
        lineHeight: typography$3.lineHeights.normal,
        letterSpacing: typography$3.letterSpacing.normal
      }
    }
  },
  card: {
    borderRadius: 16,
    // Meta Horizon uses 16px for cards (more pronounced than buttons)
    padding: {
      none: 0,
      small: spacing$3[3],
      // 12px - More generous padding
      medium: spacing$3[4],
      // 16px
      large: spacing$3[6] // 24px
    },
    shadow: {
      none: shadows$1.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.04,
        // Very subtle - Meta prefers minimal shadows
        shadowRadius: 2,
        elevation: 1
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.06,
        // Subtle elevation
        shadowRadius: 4,
        elevation: 2
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.08,
        // Still quite subtle
        shadowRadius: 8,
        elevation: 3
      }
    },
    background: metaHorizonSemanticLight.colors.surface.elevated,
    border: {
      width: 0,
      // Meta Horizon cards typically don't have borders, relying on shadow instead
      color: 'transparent'
    }
  },
  input: {
    borderRadius: 8,
    // Consistent with button radius
    paddingVertical: spacing$3[2],
    // 8px
    paddingHorizontal: spacing$3[3],
    // 12px
    minHeight: 44,
    // Meta's touch-friendly height
    typography: metaHorizonSemanticLight.typography.body.medium,
    border: {
      width: 1,
      color: {
        "default": metaHorizonSemanticLight.colors.border.secondary,
        focus: metaHorizonSemanticLight.colors.border.focus,
        error: metaHorizonSemanticLight.colors.border.error,
        disabled: metaHorizonSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": metaHorizonSemanticLight.colors.surface.secondary,
      disabled: metaHorizonSemanticLight.colors.surface.tertiary
    }
  },
  image: {
    borderRadius: 12,
    // Images within cards use 12px (slightly less than card itself)
    aspectRatio: {
      square: 1,
      portrait: 4 / 5,
      landscape: 16 / 9,
      wide: 21 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
      opacity: 0.6
    }
  },
  tag: {
    borderRadius: 16,
    // Fully rounded pill shape (Meta Horizon style)
    paddingVertical: spacing$3[1],
    // 4px - Compact vertical
    paddingHorizontal: spacing$3[3],
    // 12px - More generous horizontal for pill shape
    typography: _objectSpread2(_objectSpread2({}, metaHorizonSemanticLight.typography.label.small), {}, {
      fontWeight: typography$3.fontWeights.semibold
    }),
    border: {
      width: 0
    }
  },
  list: {
    itemSpacing: spacing$3[2],
    // 8px
    sectionHeaderSpacing: spacing$3[4],
    // 16px
    contentPadding: spacing$3[4] // 16px
  },
  articleCard: {
    borderRadius: 16,
    // Match card border radius (16px for Meta Horizon)
    padding: spacing$3[4],
    // 16px - Generous padding around content
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.06,
      // Very subtle shadow, consistent with Meta Horizon cards
      shadowRadius: 8,
      elevation: 2
    },
    background: metaHorizonSemanticLight.colors.surface.elevated,
    border: {
      width: 0,
      // No border - Meta Horizon relies on shadow for card definition
      color: 'transparent'
    },
    spacing: {
      headerGap: spacing$3[4],
      // 16px - More breathing room
      contentGap: spacing$3[3],
      // 12px - Increased spacing between elements
      tagsGap: spacing$3[3],
      // 12px - More space before tags
      metaGap: spacing$3[2] // 8px - Slightly more space for meta info
    }
  }
};

var spacing$2 = basePrimitiveTokens.spacing,
  borderRadius$2 = basePrimitiveTokens.borderRadius,
  shadows = basePrimitiveTokens.shadows,
  typography$2 = basePrimitiveTokens.typography;
/**
 * Cupertino (iOS) Component Tokens
 */
var cupertinoComponentTokens = {
  button: {
    borderRadius: borderRadius$2.lg,
    // iOS uses rounded corners
    paddingVertical: {
      small: spacing$2[1],
      medium: spacing$2[2],
      large: spacing$2[3]
    },
    paddingHorizontal: {
      small: spacing$2[4],
      medium: spacing$2[6],
      large: spacing$2[8]
    },
    minHeight: {
      small: 28,
      medium: 44,
      // iOS standard touch target
      large: 50
    },
    typography: {
      small: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: typography$2.fontWeights.semibold,
        lineHeight: typography$2.lineHeights.normal,
        letterSpacing: typography$2.letterSpacing.tight
      },
      medium: {
        fontFamily: 'System',
        fontSize: 17,
        // iOS default
        fontWeight: typography$2.fontWeights.semibold,
        lineHeight: typography$2.lineHeights.normal,
        letterSpacing: typography$2.letterSpacing.tight
      },
      large: {
        fontFamily: 'System',
        fontSize: 19,
        fontWeight: typography$2.fontWeights.semibold,
        lineHeight: typography$2.lineHeights.normal,
        letterSpacing: typography$2.letterSpacing.tight
      }
    }
  },
  card: {
    borderRadius: borderRadius$2.xl,
    // iOS uses very rounded corners
    padding: {
      none: 0,
      small: spacing$2[3],
      medium: spacing$2[4],
      large: spacing$2[6]
    },
    shadow: {
      none: shadows.xs,
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 1
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
        elevation: 3
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6
      }
    },
    background: cupertinoSemanticLight.colors.surface.secondary,
    border: {
      width: 0,
      color: 'transparent'
    }
  },
  input: {
    borderRadius: borderRadius$2.lg,
    paddingVertical: spacing$2[2],
    paddingHorizontal: spacing$2[3],
    minHeight: 44,
    // iOS standard
    typography: {
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: typography$2.fontWeights.regular,
      lineHeight: typography$2.lineHeights.normal,
      letterSpacing: typography$2.letterSpacing.tight
    },
    border: {
      width: 1,
      color: {
        "default": cupertinoSemanticLight.colors.border.secondary,
        focus: cupertinoSemanticLight.colors.border.focus,
        error: cupertinoSemanticLight.colors.border.error,
        disabled: cupertinoSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": cupertinoSemanticLight.colors.surface.secondary,
      disabled: cupertinoSemanticLight.colors.surface.tertiary
    }
  },
  image: {
    borderRadius: borderRadius$2.xl,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
      opacity: 0.3
    }
  },
  tag: {
    borderRadius: borderRadius$2.full,
    paddingVertical: spacing$2[1],
    paddingHorizontal: spacing$2[3],
    typography: {
      fontFamily: 'System',
      fontSize: typography$2.fontSizes.sm,
      fontWeight: typography$2.fontWeights.semibold,
      lineHeight: typography$2.lineHeights.normal,
      letterSpacing: typography$2.letterSpacing.tight
    },
    border: {
      width: 0
    }
  },
  list: {
    itemSpacing: spacing$2[3],
    sectionHeaderSpacing: spacing$2[4],
    contentPadding: spacing$2[4]
  },
  articleCard: {
    borderRadius: borderRadius$2.xl,
    padding: spacing$2[4],
    imageHeight: 200,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 3
    },
    background: cupertinoSemanticLight.colors.surface.secondary,
    border: {
      width: 0,
      color: 'transparent'
    },
    spacing: {
      headerGap: spacing$2[3],
      contentGap: spacing$2[2],
      tagsGap: spacing$2[2],
      metaGap: spacing$2[1]
    }
  }
};

var spacing$1 = basePrimitiveTokens.spacing,
  borderRadius$1 = basePrimitiveTokens.borderRadius,
  typography$1 = basePrimitiveTokens.typography;
/**
 * Aqua (Classic macOS) Component Tokens
 */
var aquaComponentTokens = {
  button: {
    borderRadius: borderRadius$1.md,
    // Aqua uses rounded corners
    paddingVertical: {
      small: spacing$1[1],
      medium: spacing$1[2],
      large: spacing$1[3]
    },
    paddingHorizontal: {
      small: spacing$1[3],
      medium: spacing$1[4],
      large: spacing$1[6]
    },
    minHeight: {
      small: 22,
      medium: 32,
      large: 40
    },
    typography: {
      small: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 14,
        fontWeight: typography$1.fontWeights.regular,
        lineHeight: typography$1.lineHeights.normal,
        letterSpacing: typography$1.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 16,
        fontWeight: typography$1.fontWeights.regular,
        lineHeight: typography$1.lineHeights.normal,
        letterSpacing: typography$1.letterSpacing.normal
      },
      large: {
        fontFamily: 'Lucida Grande, System',
        fontSize: 18,
        fontWeight: typography$1.fontWeights.regular,
        lineHeight: typography$1.lineHeights.normal,
        letterSpacing: typography$1.letterSpacing.normal
      }
    }
  },
  card: {
    borderRadius: borderRadius$1.lg,
    padding: {
      none: 0,
      small: spacing$1[2],
      medium: spacing$1[3],
      large: spacing$1[4]
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6
      }
    },
    background: aquaSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: aquaSemanticLight.colors.border.secondary
    }
  },
  input: {
    borderRadius: borderRadius$1.md,
    paddingVertical: spacing$1[2],
    paddingHorizontal: spacing$1[3],
    minHeight: 22,
    typography: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 13,
      fontWeight: typography$1.fontWeights.regular,
      lineHeight: typography$1.lineHeights.normal,
      letterSpacing: typography$1.letterSpacing.normal
    },
    border: {
      width: 1,
      color: {
        "default": aquaSemanticLight.colors.border.secondary,
        focus: aquaSemanticLight.colors.border.focus,
        error: aquaSemanticLight.colors.border.error,
        disabled: aquaSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": '#FFFFFF',
      disabled: '#F0F0F0'
    }
  },
  image: {
    borderRadius: borderRadius$1.lg,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)',
      opacity: 0.35
    }
  },
  tag: {
    borderRadius: borderRadius$1.md,
    paddingVertical: spacing$1[1],
    paddingHorizontal: spacing$1[2],
    typography: {
      fontFamily: 'Lucida Grande, System',
      fontSize: 11,
      fontWeight: typography$1.fontWeights.semibold,
      lineHeight: typography$1.lineHeights.normal,
      letterSpacing: typography$1.letterSpacing.normal
    },
    border: {
      width: 1
    }
  },
  list: {
    itemSpacing: spacing$1[2],
    sectionHeaderSpacing: spacing$1[3],
    contentPadding: spacing$1[3]
  },
  articleCard: {
    borderRadius: borderRadius$1.lg,
    padding: spacing$1[3],
    imageHeight: 180,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3
    },
    background: aquaSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: aquaSemanticLight.colors.border.secondary
    },
    spacing: {
      headerGap: spacing$1[2],
      contentGap: spacing$1[2],
      tagsGap: spacing$1[2],
      metaGap: spacing$1[1]
    }
  }
};

var spacing = basePrimitiveTokens.spacing,
  borderRadius = basePrimitiveTokens.borderRadius,
  typography = basePrimitiveTokens.typography;
var aeroGlassComponentTokens = {
  button: {
    borderRadius: borderRadius.sm,
    paddingVertical: {
      small: spacing[1],
      medium: spacing[2],
      large: spacing[3]
    },
    paddingHorizontal: {
      small: spacing[3],
      medium: spacing[4],
      large: spacing[6]
    },
    minHeight: {
      small: 23,
      medium: 30,
      large: 38
    },
    typography: {
      small: {
        fontFamily: 'Segoe UI, System',
        fontSize: 14,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal
      },
      medium: {
        fontFamily: 'Segoe UI, System',
        fontSize: 16,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal
      },
      large: {
        fontFamily: 'Segoe UI, System',
        fontSize: 18,
        fontWeight: typography.fontWeights.regular,
        lineHeight: typography.lineHeights.normal,
        letterSpacing: typography.letterSpacing.normal
      }
    }
  },
  card: {
    borderRadius: borderRadius.sm,
    padding: {
      none: 0,
      small: spacing[2],
      medium: spacing[3],
      large: spacing[4]
    },
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 1
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 3
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.16,
        shadowRadius: 7,
        elevation: 5
      }
    },
    background: aeroGlassSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: aeroGlassSemanticLight.colors.border.primary
    }
  },
  input: {
    borderRadius: borderRadius.sm,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 24,
    typography: {
      fontFamily: 'Segoe UI, System',
      fontSize: 12,
      fontWeight: typography.fontWeights.regular,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal
    },
    border: {
      width: 1,
      color: {
        "default": aeroGlassSemanticLight.colors.border.secondary,
        focus: aeroGlassSemanticLight.colors.border.focus,
        error: aeroGlassSemanticLight.colors.border.error,
        disabled: aeroGlassSemanticLight.colors.text.disabled
      }
    },
    background: {
      "default": 'rgba(255, 255, 255, 0.9)',
      disabled: 'rgba(240, 240, 240, 0.9)'
    }
  },
  image: {
    borderRadius: borderRadius.sm,
    aspectRatio: {
      square: 1,
      portrait: 3 / 4,
      landscape: 4 / 3,
      wide: 16 / 9
    },
    overlay: {
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
      opacity: 0.5
    }
  },
  tag: {
    borderRadius: borderRadius.sm,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    typography: {
      fontFamily: 'Segoe UI, System',
      fontSize: 11,
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.normal
    },
    border: {
      width: 1
    }
  },
  list: {
    itemSpacing: spacing[2],
    sectionHeaderSpacing: spacing[3],
    contentPadding: spacing[3]
  },
  articleCard: {
    borderRadius: borderRadius.md,
    padding: spacing[3],
    imageHeight: 180,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 3
    },
    background: aeroGlassSemanticLight.colors.surface.primary,
    border: {
      width: 1,
      color: aeroGlassSemanticLight.colors.border.primary
    },
    spacing: {
      headerGap: spacing[2],
      contentGap: spacing[2],
      tagsGap: spacing[2],
      metaGap: spacing[1]
    }
  }
};

/**
 * Get semantic tokens for a design language and color scheme
 */
function getSemanticTokens(designLanguage, colorScheme) {
  var tokenMap = {
    holo: {
      light: holoSemanticLight,
      dark: holoSemanticDark
    },
    material: {
      light: materialSemanticLight,
      dark: materialSemanticDark
    },
    flat: {
      light: flatSemanticLight,
      dark: flatSemanticDark
    },
    liquidGlass: {
      light: liquidGlassSemanticLight,
      dark: liquidGlassSemanticDark
    },
    metro: {
      light: metroSemanticLight,
      dark: metroSemanticDark
    },
    fluent: {
      light: fluentSemanticLight,
      dark: fluentSemanticDark
    },
    metaHorizon: {
      light: metaHorizonSemanticLight,
      dark: metaHorizonSemanticDark
    },
    cupertino: {
      light: cupertinoSemanticLight,
      dark: cupertinoSemanticDark
    },
    aqua: {
      light: aquaSemanticLight,
      dark: aquaSemanticDark
    },
    aeroGlass: {
      light: aeroGlassSemanticLight,
      dark: aeroGlassSemanticDark
    }
  };
  return tokenMap[designLanguage][colorScheme];
}
/**
 * Get component tokens for a design language
 */
function getComponentTokens(designLanguage) {
  var tokenMap = {
    holo: holoComponentTokens,
    material: materialComponentTokens,
    flat: flatComponentTokens,
    liquidGlass: liquidGlassComponentTokens,
    metro: metroComponentTokens,
    fluent: fluentComponentTokens,
    metaHorizon: metaHorizonComponentTokens,
    cupertino: cupertinoComponentTokens,
    aqua: aquaComponentTokens,
    aeroGlass: aeroGlassComponentTokens
  };
  return tokenMap[designLanguage];
}
/**
 * Create a complete design language theme
 */
function createTheme() {
  var designLanguage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'material';
  var colorScheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'light';
  var name = "".concat(designLanguage, "-").concat(colorScheme);
  return {
    name: name,
    designLanguage: designLanguage,
    colorScheme: colorScheme,
    primitives: basePrimitiveTokens,
    semantic: getSemanticTokens(designLanguage, colorScheme),
    components: getComponentTokens(designLanguage)
  };
}
/**
 * Pre-built themes for convenience
 */
var themes = {
  // Holo Design (Android 4.0-4.4)
  holoLight: createTheme('holo', 'light'),
  holoDark: createTheme('holo', 'dark'),
  // Material Design (Google)
  materialLight: createTheme('material', 'light'),
  materialDark: createTheme('material', 'dark'),
  // Flat Design (iOS 7-18)
  flatLight: createTheme('flat', 'light'),
  flatDark: createTheme('flat', 'dark'),
  // Liquid Glass (Modern)
  liquidGlassLight: createTheme('liquidGlass', 'light'),
  liquidGlassDark: createTheme('liquidGlass', 'dark'),
  // Metro UI (Windows 8)
  metroLight: createTheme('metro', 'light'),
  metroDark: createTheme('metro', 'dark'),
  // Fluent 2 (Windows 11)
  fluentLight: createTheme('fluent', 'light'),
  fluentDark: createTheme('fluent', 'dark'),
  // Meta Horizon (Meta VR/AR)
  metaHorizonLight: createTheme('metaHorizon', 'light'),
  metaHorizonDark: createTheme('metaHorizon', 'dark'),
  // Legacy: Cupertino (Apple iOS/macOS)
  cupertinoLight: createTheme('cupertino', 'light'),
  cupertinoDark: createTheme('cupertino', 'dark'),
  // Legacy: Aqua (Classic macOS)
  aquaLight: createTheme('aqua', 'light'),
  aquaDark: createTheme('aqua', 'dark'),
  // Legacy: Aero Glass (Windows Vista/7)
  aeroGlassLight: createTheme('aeroGlass', 'light'),
  aeroGlassDark: createTheme('aeroGlass', 'dark')
};
/**
 * Default theme
 */
themes.materialLight;

var DesignLanguageContext = /*#__PURE__*/createContext(undefined);
var DesignLanguageProvider = function DesignLanguageProvider(_ref) {
  var _initialTheme$designL, _initialTheme$colorSc;
  var children = _ref.children,
    _ref$initialDesignLan = _ref.initialDesignLanguage,
    initialDesignLanguage = _ref$initialDesignLan === void 0 ? 'material' : _ref$initialDesignLan,
    _ref$initialColorSche = _ref.initialColorScheme,
    initialColorScheme = _ref$initialColorSche === void 0 ? 'light' : _ref$initialColorSche,
    initialTheme = _ref.initialTheme;
  var _useState = useState((_initialTheme$designL = initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.designLanguage) !== null && _initialTheme$designL !== void 0 ? _initialTheme$designL : initialDesignLanguage),
    _useState2 = _slicedToArray(_useState, 2),
    designLanguage = _useState2[0],
    setDesignLanguageState = _useState2[1];
  var _useState3 = useState((_initialTheme$colorSc = initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.colorScheme) !== null && _initialTheme$colorSc !== void 0 ? _initialTheme$colorSc : initialColorScheme),
    _useState4 = _slicedToArray(_useState3, 2),
    colorScheme = _useState4[0],
    setColorSchemeState = _useState4[1];
  var _useState5 = useState(initialTheme !== null && initialTheme !== void 0 ? initialTheme : null),
    _useState6 = _slicedToArray(_useState5, 2),
    customTheme = _useState6[0],
    setCustomTheme = _useState6[1];
  // Memoize theme creation
  var theme = useMemo(function () {
    if (customTheme) {
      return customTheme;
    }
    return createTheme(designLanguage, colorScheme);
  }, [designLanguage, colorScheme, customTheme]);
  var setDesignLanguage = function setDesignLanguage(language) {
    setDesignLanguageState(language);
    setCustomTheme(null); // Clear custom theme when changing design language
  };
  var setColorScheme = function setColorScheme(scheme) {
    setColorSchemeState(scheme);
    setCustomTheme(null); // Clear custom theme when changing color scheme
  };
  var setTheme = function setTheme(newTheme) {
    setCustomTheme(newTheme);
    setDesignLanguageState(newTheme.designLanguage);
    setColorSchemeState(newTheme.colorScheme);
  };
  var toggleColorScheme = function toggleColorScheme() {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };
  var value = {
    theme: theme,
    designLanguage: designLanguage,
    colorScheme: colorScheme,
    setDesignLanguage: setDesignLanguage,
    setColorScheme: setColorScheme,
    setTheme: setTheme,
    toggleColorScheme: toggleColorScheme
  };
  return /*#__PURE__*/React.createElement(DesignLanguageContext.Provider, {
    value: value
  }, children);
};
var useDesignLanguage = function useDesignLanguage() {
  var context = useContext(DesignLanguageContext);
  if (!context) {
    throw new Error('useDesignLanguage must be used within a DesignLanguageProvider');
  }
  return context;
};

StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  fullWidth: {
    width: '100%'
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    textAlign: 'center'
  }
});

var Card = function Card(_ref) {
  var children = _ref.children,
    _ref$elevation = _ref.elevation,
    elevation = _ref$elevation === void 0 ? 'md' : _ref$elevation,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 'md' : _ref$padding,
    style = _ref.style;
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  var getPaddingStyle = function getPaddingStyle() {
    switch (padding) {
      case 'none':
        return {
          padding: 0
        };
      case 'sm':
        return {
          padding: theme.spacing.sm
        };
      case 'md':
        return {
          padding: theme.spacing.md
        };
      case 'lg':
        return {
          padding: theme.spacing.lg
        };
      default:
        return {};
    }
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [styles$4.card, {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg
    }, theme.shadows[elevation], getPaddingStyle(), style]
  }, children);
};
var styles$4 = StyleSheet.create({
  card: {
    overflow: 'hidden'
  }
});

StyleSheet.create({
  card: {
    overflow: 'hidden'
  }
});

var _excluded$1 = ["label", "error", "helperText", "disabled", "fullWidth", "containerStyle", "inputStyle", "labelStyle"];
var Input = function Input(_ref) {
  var label = _ref.label,
    error = _ref.error,
    helperText = _ref.helperText,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    containerStyle = _ref.containerStyle,
    inputStyle = _ref.inputStyle,
    labelStyle = _ref.labelStyle,
    textInputProps = _objectWithoutProperties(_ref, _excluded$1);
  var _useTheme = useTheme(),
    theme = _useTheme.theme;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  var getBorderColor = function getBorderColor() {
    if (error) {
      return theme.colors.error;
    }
    if (isFocused) {
      return theme.colors.primary;
    }
    return theme.colors.border;
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [fullWidth && styles$3.fullWidth, containerStyle]
  }, label && /*#__PURE__*/React.createElement(Text, {
    style: [styles$3.label, {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      marginBottom: theme.spacing.xs
    }, labelStyle]
  }, label), /*#__PURE__*/React.createElement(TextInput, _extends({}, textInputProps, {
    editable: !disabled,
    onFocus: function onFocus(e) {
      var _textInputProps$onFoc;
      setIsFocused(true);
      (_textInputProps$onFoc = textInputProps.onFocus) === null || _textInputProps$onFoc === void 0 || _textInputProps$onFoc.call(textInputProps, e);
    },
    onBlur: function onBlur(e) {
      var _textInputProps$onBlu;
      setIsFocused(false);
      (_textInputProps$onBlu = textInputProps.onBlur) === null || _textInputProps$onBlu === void 0 || _textInputProps$onBlu.call(textInputProps, e);
    },
    style: [styles$3.input, {
      borderColor: getBorderColor(),
      borderWidth: 1,
      borderRadius: theme.borderRadius.md,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      fontSize: theme.typography.fontSize.md,
      color: theme.colors.text,
      backgroundColor: disabled ? theme.colors.disabled : theme.colors.background
    }, inputStyle],
    placeholderTextColor: theme.colors.textSecondary
  })), (error || helperText) && /*#__PURE__*/React.createElement(Text, {
    style: [styles$3.helperText, {
      color: error ? theme.colors.error : theme.colors.textSecondary,
      fontSize: theme.typography.fontSize.xs,
      marginTop: theme.spacing.xs
    }]
  }, error || helperText));
};
var styles$3 = StyleSheet.create({
  fullWidth: {
    width: '100%'
  },
  label: {},
  input: {},
  helperText: {}
});

StyleSheet.create({
  fullWidth: {
    width: '100%'
  },
  label: {},
  input: {},
  helperText: {}
});

var _excluded = ["aspectRatio", "style", "designLanguage", "resizeMode"];
var ImageV2 = function ImageV2(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
    aspectRatio = _ref$aspectRatio === void 0 ? 'wide' : _ref$aspectRatio,
    style = _ref.style;
    _ref.designLanguage;
    var _ref$resizeMode = _ref.resizeMode,
    resizeMode = _ref$resizeMode === void 0 ? 'cover' : _ref$resizeMode,
    imageProps = _objectWithoutProperties(_ref, _excluded);
  var _useDesignLanguage = useDesignLanguage(),
    theme = _useDesignLanguage.theme;
    _useDesignLanguage.designLanguage;
  var components = theme.components;
  var imageTokens = components.image;
  var containerStyle = {
    aspectRatio: imageTokens.aspectRatio[aspectRatio],
    borderRadius: imageTokens.borderRadius,
    overflow: 'hidden'
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [containerStyle, style]
  }, /*#__PURE__*/React.createElement(Image, _extends({}, imageProps, {
    style: styles$2.image,
    resizeMode: resizeMode
  })));
};
var styles$2 = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  }
});

var TagV2 = function TagV2(_ref) {
  var label = _ref.label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    onPress = _ref.onPress,
    style = _ref.style;
    _ref.designLanguage;
  var _useDesignLanguage = useDesignLanguage(),
    theme = _useDesignLanguage.theme;
    _useDesignLanguage.designLanguage;
  var semantic = theme.semantic,
    components = theme.components;
  var tagTokens = components.tag;
  var getBackgroundColor = function getBackgroundColor() {
    switch (variant) {
      case 'primary':
        return semantic.colors.interactive.primary;
      case 'secondary':
        return semantic.colors.interactive.secondary;
      case 'success':
        return semantic.colors.feedback.successSubtle;
      case 'warning':
        return semantic.colors.feedback.warningSubtle;
      case 'error':
        return semantic.colors.feedback.errorSubtle;
      case 'info':
        return semantic.colors.feedback.infoSubtle;
      default:
        return semantic.colors.surface.secondary;
    }
  };
  var getTextColor = function getTextColor() {
    switch (variant) {
      case 'primary':
        return '#FFFFFF';
      case 'secondary':
        return semantic.colors.text.primary;
      case 'success':
        return semantic.colors.feedback.success;
      case 'warning':
        return semantic.colors.feedback.warning;
      case 'error':
        return semantic.colors.feedback.error;
      case 'info':
        return semantic.colors.feedback.info;
      default:
        return semantic.colors.text.secondary;
    }
  };
  var getBorderColor = function getBorderColor() {
    if (tagTokens.border.width === 0) return 'transparent';
    switch (variant) {
      case 'primary':
        return semantic.colors.interactive.primary;
      case 'secondary':
        return semantic.colors.border.secondary;
      case 'success':
        return semantic.colors.feedback.success;
      case 'warning':
        return semantic.colors.feedback.warning;
      case 'error':
        return semantic.colors.feedback.error;
      case 'info':
        return semantic.colors.feedback.info;
      default:
        return semantic.colors.border.secondary;
    }
  };
  var containerStyle = {
    backgroundColor: getBackgroundColor(),
    borderRadius: tagTokens.borderRadius,
    paddingVertical: tagTokens.paddingVertical,
    paddingHorizontal: tagTokens.paddingHorizontal,
    borderWidth: tagTokens.border.width,
    borderColor: getBorderColor()
  };
  var textStyle = _objectSpread2(_objectSpread2({}, tagTokens.typography), {}, {
    lineHeight: tagTokens.typography.fontSize * tagTokens.typography.lineHeight,
    color: getTextColor()
  });
  var content = /*#__PURE__*/React.createElement(View, {
    style: [styles$1.container, containerStyle, style]
  }, /*#__PURE__*/React.createElement(Text, {
    style: textStyle
  }, label));
  if (onPress) {
    return /*#__PURE__*/React.createElement(Pressable, {
      onPress: onPress,
      style: function style(_ref2) {
        var pressed = _ref2.pressed;
        return [pressed && styles$1.pressed];
      }
    }, content);
  }
  return content;
};
var styles$1 = StyleSheet.create({
  container: {
    alignSelf: 'flex-start'
  },
  pressed: {
    opacity: 0.7
  }
});

/**
 * Converts a typography style with relative lineHeight to absolute lineHeight
 * React Native requires lineHeight to be an absolute number, not a multiplier
 */
var convertTypographyToTextStyle = function convertTypographyToTextStyle(typography) {
  return {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.fontSize * typography.lineHeight,
    // Convert multiplier to absolute
    letterSpacing: typography.letterSpacing
  };
};

var ArticleCardV2 = function ArticleCardV2(_ref) {
  var title = _ref.title,
    excerpt = _ref.excerpt,
    date = _ref.date,
    author = _ref.author,
    imageUrl = _ref.imageUrl,
    _ref$tags = _ref.tags,
    tags = _ref$tags === void 0 ? [] : _ref$tags,
    readTime = _ref.readTime,
    onPress = _ref.onPress,
    onTagPress = _ref.onTagPress,
    style = _ref.style,
    overrideDesignLanguage = _ref.designLanguage,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,
    _ref$showImage = _ref.showImage,
    showImage = _ref$showImage === void 0 ? true : _ref$showImage;
  var _useDesignLanguage = useDesignLanguage(),
    theme = _useDesignLanguage.theme,
    globalDesignLanguage = _useDesignLanguage.designLanguage;
  var activeDesignLanguage = overrideDesignLanguage !== null && overrideDesignLanguage !== void 0 ? overrideDesignLanguage : globalDesignLanguage;
  var semantic = theme.semantic,
    components = theme.components;
  var articleCardTokens = components.articleCard;
  var formatDate = function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  var containerStyle = _objectSpread2(_objectSpread2({
    // Use semantic color for dynamic theme support
    backgroundColor: semantic.colors.surface.elevated,
    borderRadius: articleCardTokens.borderRadius,
    borderWidth: articleCardTokens.border.width,
    // Use semantic color for borders
    borderColor: articleCardTokens.border.width > 0 ? semantic.colors.border.secondary : 'transparent'
  }, articleCardTokens.shadow), {}, {
    overflow: 'hidden'
  });
  var renderVerticalLayout = function renderVerticalLayout() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, showImage && imageUrl && /*#__PURE__*/React.createElement(ImageV2, {
      source: {
        uri: imageUrl
      },
      aspectRatio: "wide",
      designLanguage: activeDesignLanguage,
      style: {
        height: articleCardTokens.imageHeight
      }
    }), /*#__PURE__*/React.createElement(View, {
      style: [styles.content, {
        padding: articleCardTokens.padding
      }]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [styles.title, convertTypographyToTextStyle(semantic.typography.heading.h4), {
        color: semantic.colors.text.primary
      }],
      numberOfLines: 2
    }, title), /*#__PURE__*/React.createElement(Text, {
      style: [styles.excerpt, convertTypographyToTextStyle(semantic.typography.body.medium), {
        color: semantic.colors.text.secondary,
        marginTop: articleCardTokens.spacing.contentGap
      }],
      numberOfLines: 3
    }, excerpt), /*#__PURE__*/React.createElement(View, {
      style: [styles.meta, {
        marginTop: articleCardTokens.spacing.headerGap
      }]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [convertTypographyToTextStyle(semantic.typography.label.small), {
        color: semantic.colors.text.tertiary
      }]
    }, formatDate(date), author && " \u2022 ".concat(author), readTime && " \u2022 ".concat(readTime))), tags.length > 0 && /*#__PURE__*/React.createElement(View, {
      style: [styles.tagsContainer, {
        marginTop: articleCardTokens.spacing.metaGap
      }]
    }, tags.map(function (tag, index) {
      return /*#__PURE__*/React.createElement(TagV2, {
        key: "".concat(tag, "-").concat(index),
        label: tag,
        variant: "secondary",
        onPress: onTagPress ? function () {
          return onTagPress(tag);
        } : undefined,
        designLanguage: activeDesignLanguage,
        style: styles.tag
      });
    }))));
  };
  var renderHorizontalLayout = function renderHorizontalLayout() {
    return /*#__PURE__*/React.createElement(View, {
      style: styles.horizontalContent
    }, showImage && /*#__PURE__*/React.createElement(View, {
      style: [styles.iconContainer, {
        backgroundColor: semantic.colors.interactive.primary,
        borderRadius: articleCardTokens.borderRadius / 2
      }]
    }, /*#__PURE__*/React.createElement(Text, {
      style: styles.iconText
    }, "\u269B\uFE0F")), /*#__PURE__*/React.createElement(View, {
      style: styles.horizontalTextContent
    }, /*#__PURE__*/React.createElement(Text, {
      style: [convertTypographyToTextStyle(semantic.typography.heading.h6), {
        color: semantic.colors.text.primary
      }],
      numberOfLines: 2
    }, title), /*#__PURE__*/React.createElement(Text, {
      style: [convertTypographyToTextStyle(semantic.typography.body.small), {
        color: semantic.colors.text.secondary,
        marginTop: articleCardTokens.spacing.contentGap / 2
      }],
      numberOfLines: 2
    }, excerpt), /*#__PURE__*/React.createElement(View, {
      style: [styles.meta, {
        marginTop: articleCardTokens.spacing.metaGap
      }]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [convertTypographyToTextStyle(semantic.typography.label.small), {
        color: semantic.colors.text.tertiary
      }]
    }, formatDate(date), readTime && " \u2022 ".concat(readTime))), tags.length > 0 && /*#__PURE__*/React.createElement(View, {
      style: [styles.tagsContainer, {
        marginTop: articleCardTokens.spacing.metaGap
      }]
    }, tags.slice(0, 3).map(function (tag, index) {
      return /*#__PURE__*/React.createElement(TagV2, {
        key: "".concat(tag, "-").concat(index),
        label: tag,
        variant: "secondary",
        onPress: onTagPress ? function () {
          return onTagPress(tag);
        } : undefined,
        designLanguage: activeDesignLanguage,
        style: styles.tag
      });
    }))));
  };
  var content = /*#__PURE__*/React.createElement(View, {
    style: [styles.container, containerStyle, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.innerContent, {
      padding: layout === 'horizontal' ? articleCardTokens.padding : 0
    }]
  }, layout === 'horizontal' ? renderHorizontalLayout() : renderVerticalLayout()));
  if (onPress) {
    return /*#__PURE__*/React.createElement(Pressable, {
      onPress: onPress,
      style: function style(_ref2) {
        var pressed = _ref2.pressed;
        return [pressed && styles.pressed];
      }
    }, content);
  }
  return content;
};
var styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  innerContent: {
    // Padding is set dynamically for horizontal layout
  },
  content: {
    // Padding is set dynamically from tokens for vertical layout
  },
  title: {
    // Typography is set dynamically from semantic tokens
  },
  excerpt: {
    // Typography is set dynamically from semantic tokens
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  tag: {
    // Tag styles are handled by TagV2 component
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  horizontalContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12
  },
  iconContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconText: {
    fontSize: 32
  },
  horizontalTextContent: {
    flex: 1
  },
  pressed: {
    opacity: 0.8
  }
});

export { ArticleCardV2, Button, Card, DesignLanguageProvider, ImageV2, Input, TagV2, ThemeProvider, createTheme, defaultTheme, materialTheme, themes, useDesignLanguage, useTheme };
//# sourceMappingURL=index.esm.js.map
