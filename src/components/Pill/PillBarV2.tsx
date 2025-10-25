import React from 'react';
import {
  ScrollView,
  View,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface PillBarV2Props {
  /**
   * The pill components to display in the bar
   */
  children: React.ReactNode;
  /**
   * Custom style for the container
   */
  style?: ViewStyle;
  /**
   * Custom style for the content container
   */
  contentContainerStyle?: ViewStyle;
  /**
   * Whether to show horizontal scroll indicator
   */
  showsHorizontalScrollIndicator?: boolean;
  /**
   * Override the global design language
   */
  designLanguage?: DesignLanguage;
  /**
   * Additional ScrollView props
   */
  scrollViewProps?: Omit<ScrollViewProps, 'horizontal' | 'children'>;
}

export const PillBarV2: React.FC<PillBarV2Props> = ({
  children,
  style,
  contentContainerStyle,
  showsHorizontalScrollIndicator = false,
  designLanguage: overrideDesignLanguage,
  scrollViewProps,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const pillBarTokens = theme.components.pillBar;

  // Meta Horizon has no shadow
  const isMetaHorizon = activeDesignLanguage === 'metaHorizon';

  const containerStyle: ViewStyle = {
    backgroundColor: pillBarTokens?.backgroundColor || theme.semantic.colors.surface.elevated,
    paddingVertical: pillBarTokens?.paddingVertical || 10,
    // Apply shadow only if not Meta Horizon
    ...(pillBarTokens?.shadow && !isMetaHorizon ? pillBarTokens.shadow : {}),
  };

  const defaultContentContainerStyle: ViewStyle = {
    paddingHorizontal: pillBarTokens?.contentPaddingHorizontal || 16,
    gap: pillBarTokens?.gap || 8,
    alignItems: 'center',
  };

  return (
    <View style={[containerStyle, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={[defaultContentContainerStyle, contentContainerStyle]}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    </View>
  );
};


