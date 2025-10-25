import React from 'react';
import { Text, View, StyleSheet, ViewStyle, TextStyle, Pressable } from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface TagV2Props {
  label: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  onPress?: () => void;
  style?: ViewStyle;
  designLanguage?: DesignLanguage; // Override global design language
}

export const TagV2: React.FC<TagV2Props> = ({
  label,
  variant = 'default',
  onPress,
  style,
  designLanguage: overrideDesignLanguage,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { semantic, components } = theme;
  const tagTokens = components.tag;

  const getBackgroundColor = (): string => {
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

  const getTextColor = (): string => {
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

  const getBorderColor = (): string => {
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

  const containerStyle: ViewStyle = {
    backgroundColor: getBackgroundColor(),
    borderRadius: tagTokens.borderRadius,
    paddingVertical: tagTokens.paddingVertical,
    paddingHorizontal: tagTokens.paddingHorizontal,
    borderWidth: tagTokens.border.width,
    borderColor: getBorderColor(),
  };

  const textStyle: TextStyle = {
    ...tagTokens.typography,
    lineHeight: tagTokens.typography.fontSize * tagTokens.typography.lineHeight,
    color: getTextColor(),
  };

  const content = (
    <View style={[styles.container, containerStyle, style]}>
      <Text style={textStyle}>{label}</Text>
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed && styles.pressed,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  pressed: {
    opacity: 0.7,
  },
});

