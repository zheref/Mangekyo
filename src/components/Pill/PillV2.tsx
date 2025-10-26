import React from 'react';
import {
  Pressable,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';
import { convertTypographyToTextStyle } from '../../utils/typography';

export interface PillV2Props {
  /**
   * The label text to display in the pill
   */
  label: string;
  /**
   * Optional icon or emoji to display before the label
   */
  icon?: React.ReactNode;
  /**
   * Callback when the pill is pressed
   */
  onPress?: () => void;
  /**
   * Whether the pill is currently selected/active
   */
  selected?: boolean;
  /**
   * Size of the pill
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the pill is disabled
   */
  disabled?: boolean;
  /**
   * Custom style for the pill container
   */
  style?: ViewStyle;
  /**
   * Custom style for the label text
   */
  textStyle?: TextStyle;
  /**
   * Override the global design language
   */
  designLanguage?: DesignLanguage;
}

export const PillV2: React.FC<PillV2Props> = ({
  label,
  icon,
  onPress,
  selected = false,
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  designLanguage: overrideDesignLanguage,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const pillTokens = theme.components.pill;
  const buttonTokens = theme.components.button; // Fallback for backward compatibility

  // Use pill tokens if available, otherwise fall back to button tokens
  const tokens = pillTokens || buttonTokens;

  // Meta Horizon uses subtle styling for selected state
  const isMetaHorizon = activeDesignLanguage === 'metaHorizon';
  
  const getBackgroundColor = () => {
    if (disabled) {
      return theme.semantic.colors.surface.tertiary;
    }
    if (selected) {
      return isMetaHorizon
        ? '#E4E6EB' // Light gray for Meta Horizon
        : theme.semantic.colors.interactive.primary;
    }
    return isMetaHorizon
      ? 'transparent'
      : theme.semantic.colors.surface.secondary;
  };

  const getTextColor = () => {
    if (disabled) {
      return theme.semantic.colors.text.disabled;
    }
    if (selected) {
      return isMetaHorizon
        ? theme.semantic.colors.text.primary // Dark text for Meta Horizon
        : '#FFFFFF';
    }
    return theme.semantic.colors.text.primary;
  };

  const getBorderColor = () => {
    if (disabled) {
      return theme.semantic.colors.border.secondary;
    }
    if (selected) {
      return isMetaHorizon
        ? 'transparent'
        : theme.semantic.colors.interactive.primary;
    }
    return theme.semantic.colors.border.secondary;
  };

  const pillStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.paddingHorizontal[size],
    paddingVertical: tokens.paddingVertical[size],
    borderRadius: tokens.borderRadius,
    borderWidth: tokens.border?.width || 0,
    gap: icon && !isMetaHorizon ? 6 : 0,
    backgroundColor: getBackgroundColor(),
    borderColor: getBorderColor(),
    opacity: disabled ? 0.5 : 1,
    // Apply shadow for elevated design languages (not for Meta Horizon)
    ...(tokens.shadow?.[size] && selected && !isMetaHorizon ? tokens.shadow[size] : {}),
  };

  const labelStyle: TextStyle = {
    ...convertTypographyToTextStyle(tokens.typography[size]),
    color: getTextColor(),
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        pillStyle,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      {icon && !isMetaHorizon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={[labelStyle, textStyle]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});

