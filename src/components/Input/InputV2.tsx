import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface InputV2Props extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  designLanguage?: DesignLanguage; // Override global design language
}

export const InputV2: React.FC<InputV2Props> = ({
  label,
  error,
  helperText,
  disabled = false,
  fullWidth = false,
  containerStyle,
  inputStyle,
  labelStyle,
  designLanguage: overrideDesignLanguage,
  ...textInputProps
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const [isFocused, setIsFocused] = useState(false);

  const { semantic, components } = theme;
  const inputTokens = components.input;

  const getBorderColor = (): string => {
    // Use semantic colors for dynamic theme support
    if (error) {
      return semantic.colors.border.error;
    }
    if (isFocused) {
      return semantic.colors.border.focus;
    }
    if (disabled) {
      return semantic.colors.text.disabled;
    }
    return semantic.colors.border.secondary;
  };

  const getBackgroundColor = (): string => {
    // Use semantic colors for dynamic theme support
    if (disabled) {
      return semantic.colors.surface.tertiary;
    }
    return semantic.colors.surface.primary;
  };

  return (
    <View style={[fullWidth && styles.fullWidth, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: semantic.colors.text.primary,
              fontSize: semantic.typography.label.medium.fontSize,
              fontWeight: semantic.typography.label.medium.fontWeight,
              marginBottom: semantic.spacing.component.gapXs,
            },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
      <TextInput
        {...textInputProps}
        editable={!disabled}
        onFocus={(e) => {
          setIsFocused(true);
          textInputProps.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          textInputProps.onBlur?.(e);
        }}
        style={[
          styles.input,
          {
            borderColor: getBorderColor(),
            borderWidth: inputTokens.border.width,
            borderRadius: inputTokens.borderRadius,
            paddingHorizontal: inputTokens.paddingHorizontal,
            paddingVertical: inputTokens.paddingVertical,
            minHeight: inputTokens.minHeight,
            fontSize: inputTokens.typography.fontSize,
            fontFamily: inputTokens.typography.fontFamily,
            fontWeight: inputTokens.typography.fontWeight,
            color: semantic.colors.text.primary,
            backgroundColor: getBackgroundColor(),
          },
          inputStyle,
        ]}
        placeholderTextColor={semantic.colors.text.tertiary}
      />
      {(error || helperText) && (
        <Text
          style={[
            styles.helperText,
            {
              color: error
                ? semantic.colors.feedback.error
                : semantic.colors.text.secondary,
              fontSize: semantic.typography.caption.fontSize,
              marginTop: semantic.spacing.component.gapXs,
            },
          ]}
        >
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  label: {},
  input: {},
  helperText: {},
});
