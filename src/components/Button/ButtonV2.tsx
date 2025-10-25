import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface ButtonV2Props {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  designLanguage?: DesignLanguage; // Override global design language
}

export const ButtonV2: React.FC<ButtonV2Props> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  designLanguage: overrideDesignLanguage,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { semantic, components } = theme;
  const buttonTokens = components.button;

  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: semantic.colors.interactive.primary,
          borderWidth: 0,
        };
      case 'secondary':
        return {
          backgroundColor: semantic.colors.interactive.secondary,
          borderWidth: 0,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: semantic.colors.interactive.primary,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          borderWidth: 0,
        };
      default:
        return {};
    }
  };

  const getSizeStyle = (): ViewStyle => {
    return {
      paddingVertical: buttonTokens.paddingVertical[size],
      paddingHorizontal: buttonTokens.paddingHorizontal[size],
      minHeight: buttonTokens.minHeight[size],
      borderRadius: buttonTokens.borderRadius,
    };
  };

  const getTextColor = (): string => {
    if (disabled) {
      return semantic.colors.text.disabled;
    }
    if (variant === 'outline' || variant === 'ghost') {
      return semantic.colors.interactive.primary;
    }
    return semantic.colors.text.inverse;
  };

  const getTextStyle = (): TextStyle => {
    const typo = buttonTokens.typography[size];
    return {
      fontFamily: typo.fontFamily,
      fontSize: typo.fontSize,
      fontWeight: typo.fontWeight,
      lineHeight: typo.fontSize * typo.lineHeight, // Convert multiplier to absolute value
      letterSpacing: typo.letterSpacing,
      color: getTextColor(),
    };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        fullWidth && styles.fullWidth,
        (disabled || loading) && styles.disabled,
        style,
      ]}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.text, getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
  },
});
