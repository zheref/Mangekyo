import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';
import { ImageV2 } from '../Image/ImageV2';
import { TagV2 } from '../Tag/TagV2';
import { convertTypographyToTextStyle } from '../../utils/typography';

export interface ArticleCardV2Props {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  imageUrl?: string;
  tags?: string[];
  readTime?: string;
  onPress?: () => void;
  onTagPress?: (tag: string) => void;
  style?: ViewStyle;
  designLanguage?: DesignLanguage; // Override global design language
  layout?: 'vertical' | 'horizontal'; // Layout variant
  showImage?: boolean; // Whether to show image/icon
}

export const ArticleCardV2: React.FC<ArticleCardV2Props> = ({
  title,
  excerpt,
  date,
  author,
  imageUrl,
  tags = [],
  readTime,
  onPress,
  onTagPress,
  style,
  designLanguage: overrideDesignLanguage,
  layout = 'vertical',
  showImage = true,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { semantic, components } = theme;
  const articleCardTokens = components.articleCard;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const containerStyle: ViewStyle = {
    backgroundColor: articleCardTokens.background,
    borderRadius: articleCardTokens.borderRadius,
    borderWidth: articleCardTokens.border.width,
    borderColor: articleCardTokens.border.color,
    ...articleCardTokens.shadow,
    overflow: 'hidden',
  };

  const renderVerticalLayout = () => (
    <>
      {showImage && imageUrl && (
        <ImageV2
          source={{ uri: imageUrl }}
          aspectRatio="wide"
          designLanguage={activeDesignLanguage}
          style={{ height: articleCardTokens.imageHeight }}
        />
      )}

      <View style={[styles.content, { padding: articleCardTokens.padding }]}>
        <Text
          style={[
            styles.title,
            convertTypographyToTextStyle(semantic.typography.heading.h4),
            { color: semantic.colors.text.primary },
          ]}
          numberOfLines={2}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.excerpt,
            convertTypographyToTextStyle(semantic.typography.body.medium),
            {
              color: semantic.colors.text.secondary,
              marginTop: articleCardTokens.spacing.contentGap,
            },
          ]}
          numberOfLines={3}
        >
          {excerpt}
        </Text>

        {tags.length > 0 && (
          <View
            style={[
              styles.tagsContainer,
              { marginTop: articleCardTokens.spacing.tagsGap },
            ]}
          >
            {tags.map((tag, index) => (
              <TagV2
                key={`${tag}-${index}`}
                label={tag}
                variant="secondary"
                onPress={onTagPress ? () => onTagPress(tag) : undefined}
                designLanguage={activeDesignLanguage}
                style={styles.tag}
              />
            ))}
          </View>
        )}

        <View
          style={[
            styles.meta,
            { marginTop: articleCardTokens.spacing.headerGap },
          ]}
        >
          <Text
            style={[
              convertTypographyToTextStyle(semantic.typography.label.small),
              { color: semantic.colors.text.tertiary },
            ]}
          >
            {formatDate(date)}
            {author && ` • ${author}`}
            {readTime && ` • ${readTime}`}
          </Text>
        </View>
      </View>
    </>
  );

  const renderHorizontalLayout = () => (
    <View style={styles.horizontalContent}>
      {/* Logo/Icon on the left */}
      {showImage && (
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: semantic.colors.interactive.primary,
              borderRadius: articleCardTokens.borderRadius / 2,
            },
          ]}
        >
          <Text style={styles.iconText}>⚛️</Text>
        </View>
      )}

      {/* Content on the right */}
      <View style={styles.horizontalTextContent}>
        <Text
          style={[
            convertTypographyToTextStyle(semantic.typography.heading.h6),
            { color: semantic.colors.text.primary },
          ]}
          numberOfLines={2}
        >
          {title}
        </Text>

        <Text
          style={[
            convertTypographyToTextStyle(semantic.typography.body.small),
            {
              color: semantic.colors.text.secondary,
              marginTop: articleCardTokens.spacing.contentGap / 2,
            },
          ]}
          numberOfLines={2}
        >
          {excerpt}
        </Text>

        <View style={[styles.meta, { marginTop: articleCardTokens.spacing.metaGap }]}>
          <Text
            style={[
              convertTypographyToTextStyle(semantic.typography.label.small),
              { color: semantic.colors.text.tertiary },
            ]}
          >
            {formatDate(date)}
            {readTime && ` • ${readTime}`}
          </Text>
        </View>
      </View>
    </View>
  );

  const content = (
    <View style={[styles.container, containerStyle, style]}>
      <View style={[styles.innerContent, { padding: layout === 'horizontal' ? articleCardTokens.padding : 0 }]}>
        {layout === 'horizontal' ? renderHorizontalLayout() : renderVerticalLayout()}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        {content}
      </Pressable>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    gap: 8,
  },
  tag: {
    // Tag styles are handled by TagV2 component
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconText: {
    fontSize: 32,
  },
  horizontalTextContent: {
    flex: 1,
  },
  pressed: {
    opacity: 0.8,
  },
});

