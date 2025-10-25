import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps, StyleSheet, View, ViewStyle } from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface ImageV2Props extends Omit<RNImageProps, 'style'> {
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  style?: ViewStyle;
  designLanguage?: DesignLanguage; // Override global design language
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
}

export const ImageV2: React.FC<ImageV2Props> = ({
  aspectRatio = 'wide',
  style,
  designLanguage: overrideDesignLanguage,
  resizeMode = 'cover',
  ...imageProps
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { components } = theme;
  const imageTokens = components.image;

  const containerStyle: ViewStyle = {
    aspectRatio: imageTokens.aspectRatio[aspectRatio],
    borderRadius: imageTokens.borderRadius,
    overflow: 'hidden',
  };

  return (
    <View style={[containerStyle, style]}>
      <RNImage
        {...imageProps}
        style={styles.image}
        resizeMode={resizeMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

