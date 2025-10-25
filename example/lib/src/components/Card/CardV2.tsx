import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface CardV2Props {
  children: ReactNode;
  elevation?: 'none' | 'small' | 'medium' | 'large';
  padding?: 'none' | 'small' | 'medium' | 'large';
  style?: ViewStyle;
  designLanguage?: DesignLanguage; // Override global design language
}

export const CardV2: React.FC<CardV2Props> = ({
  children,
  elevation = 'medium',
  padding = 'medium',
  style,
  designLanguage: overrideDesignLanguage,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { semantic, components } = theme;
  const cardTokens = components.card;

  const getPaddingStyle = (): ViewStyle => {
    return {
      padding: cardTokens.padding[padding],
    };
  };

  const getShadowStyle = () => {
    return cardTokens.shadow[elevation];
  };

  const getBorderStyle = (): ViewStyle => {
    return {
      borderWidth: cardTokens.border.width,
      // Use semantic color for dynamic theme support, fallback to component token
      borderColor: cardTokens.border.width > 0 
        ? semantic.colors.border.secondary 
        : 'transparent',
    };
  };

  return (
    <View
      style={[
        styles.card,
        {
          // Use semantic color for dynamic theme support
          backgroundColor: semantic.colors.surface.elevated,
          borderRadius: cardTokens.borderRadius,
        },
        getShadowStyle(),
        getBorderStyle(),
        getPaddingStyle(),
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
});
