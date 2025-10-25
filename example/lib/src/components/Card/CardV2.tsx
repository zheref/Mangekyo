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
      borderColor: cardTokens.border.color,
    };
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: cardTokens.background,
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
