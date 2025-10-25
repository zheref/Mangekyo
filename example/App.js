import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, ActivityIndicator, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';
import { DesignLanguageProvider, useDesignLanguage } from './lib/src/themes/DesignLanguageContext';
import { ArticleCardV2 } from './lib/src/components/ArticleCard/ArticleCardV2';
import { TagV2 } from './lib/src/components/Tag/TagV2';
import { ButtonV2 } from './lib/src/components/Button/ButtonV2';
import { CardV2 } from './lib/src/components/Card/CardV2';
import { fetchBlogPosts, getAllTags, getAllYears, filterBlogPosts } from './lib/src/services/blogService';
import { convertTypographyToTextStyle } from './lib/src/utils/typography';

const BlogFeed = () => {
  const { theme, designLanguage, setDesignLanguage, colorScheme, setColorScheme } = useDesignLanguage();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [availableTags, setAvailableTags] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Mobile Design language options
  const languages = [
    { value: 'holo', label: 'Holo', emoji: '🤖' },
    { value: 'material', label: 'Material', emoji: '🎨' },
    { value: 'flat', label: 'Flat', emoji: '🍎' },
    { value: 'liquidGlass', label: 'Liquid', emoji: '💎' },
    { value: 'metro', label: 'Metro', emoji: '📱' },
    { value: 'fluent', label: 'Fluent', emoji: '🪟' },
    { value: 'metaHorizon', label: 'Meta', emoji: '🥽' },
  ];

  // Load blog posts
  useEffect(() => {
    loadBlogPosts();
  }, []);

  // Apply filters whenever they change
  useEffect(() => {
    if (posts.length > 0) {
      const filtered = filterBlogPosts(posts, {
        tags: selectedTags.length > 0 ? selectedTags : undefined,
        year: selectedYear,
      });
      setFilteredPosts(filtered);
    }
  }, [posts, selectedTags, selectedYear]);

  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
      setAvailableTags(getAllTags(fetchedPosts));
      setAvailableYears(getAllYears(fetchedPosts));
    } catch (error) {
      console.error('Failed to load blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const toggleYear = (year) => {
    setSelectedYear(prev => (prev === year ? null : year));
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedYear(null);
  };

  const hasActiveFilters = selectedTags.length > 0 || selectedYear !== null;

  return (
    <View style={[styles.container, { backgroundColor: theme.semantic.colors.background.primary }]}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.semantic.colors.surface.elevated }]}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Text style={[styles.title, { color: theme.semantic.colors.text.primary }]}>
              Now in React Native
            </Text>
            <Text style={[styles.subtitle, { color: theme.semantic.colors.text.secondary }]}>
              Latest updates • {filteredPosts.length} posts
            </Text>
          </View>

          <Pressable
            onPress={() => setShowFilters(!showFilters)}
            style={[
              {
                paddingHorizontal: theme.components.button.paddingHorizontal.medium,
                paddingVertical: theme.components.button.paddingVertical.medium,
                borderRadius: theme.components.button.borderRadius,
                minWidth: 40,
                alignItems: 'center',
                backgroundColor: showFilters
                  ? theme.semantic.colors.interactive.primary
                  : theme.semantic.colors.surface.secondary,
                borderWidth: theme.components.button.border?.width || 0,
                borderColor: showFilters
                  ? theme.semantic.colors.interactive.primary
                  : theme.semantic.colors.border.secondary,
                ...(theme.components.button.shadow?.medium && showFilters ? theme.components.button.shadow.medium : {}),
              },
            ]}
          >
            <Text
              style={[
                convertTypographyToTextStyle(theme.components.button.typography.medium),
                {
                  color: showFilters
                    ? '#FFFFFF'
                    : theme.semantic.colors.text.primary,
                },
              ]}
            >
              {showFilters ? '✕' : '⚙'} {hasActiveFilters ? `(${selectedTags.length + (selectedYear ? 1 : 0)})` : ''}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Design Language Pill Bar */}
      <View style={[styles.pillBar, { backgroundColor: theme.semantic.colors.surface.elevated }]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillBarContent}
        >
          {languages.map((lang) => {
            const isSelected = designLanguage === lang.value;
            const buttonTokens = theme.components.button;
            
            return (
              <Pressable
                key={lang.value}
                onPress={() => setDesignLanguage(lang.value)}
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: buttonTokens.paddingHorizontal.medium,
                    paddingVertical: buttonTokens.paddingVertical.medium,
                    borderRadius: buttonTokens.borderRadius,
                    borderWidth: buttonTokens.border?.width || 0,
                    gap: 6,
                    backgroundColor: isSelected
                      ? theme.semantic.colors.interactive.primary
                      : theme.semantic.colors.surface.secondary,
                    borderColor: isSelected
                      ? theme.semantic.colors.interactive.primary
                      : theme.semantic.colors.border.secondary,
                    // Apply shadow for elevated design languages
                    ...(buttonTokens.shadow?.medium && isSelected ? buttonTokens.shadow.medium : {}),
                  },
                ]}
              >
                <Text style={styles.pillEmoji}>{lang.emoji}</Text>
                <Text
                  style={[
                    convertTypographyToTextStyle(buttonTokens.typography.medium),
                    {
                      color: isSelected
                        ? '#FFFFFF'
                        : theme.semantic.colors.text.primary,
                    },
                  ]}
                >
                  {lang.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        {/* Filters */}
        {showFilters && (
          <CardV2 elevation="small">
            <View style={styles.filterHeader}>
              <Text style={[styles.sectionTitle, { color: theme.semantic.colors.text.primary }]}>
                Filters
              </Text>
              {hasActiveFilters && (
                <ButtonV2
                  title="Clear All"
                  onPress={clearFilters}
                  variant="tertiary"
                  size="small"
                />
              )}
            </View>

            {/* Tags Filter */}
            <View style={styles.filterSection}>
              <Text style={[styles.filterLabel, { color: theme.semantic.colors.text.secondary }]}>
                Tags
              </Text>
              <View style={styles.tagsContainer}>
                {availableTags.map((tag) => (
                  <TagV2
                    key={tag}
                    label={tag}
                    variant={selectedTags.includes(tag) ? 'primary' : 'secondary'}
                    onPress={() => toggleTag(tag)}
                  />
                ))}
              </View>
            </View>

            {/* Year Filter */}
            <View style={styles.filterSection}>
              <Text style={[styles.filterLabel, { color: theme.semantic.colors.text.secondary }]}>
                Year
              </Text>
              <View style={styles.tagsContainer}>
                {availableYears.map((year) => (
                  <TagV2
                    key={year}
                    label={year.toString()}
                    variant={selectedYear === year ? 'primary' : 'secondary'}
                    onPress={() => toggleYear(year)}
                  />
                ))}
              </View>
            </View>
          </CardV2>
        )}

        {/* Results Summary */}
        {hasActiveFilters && (
          <View style={styles.resultsBar}>
            <Text style={[styles.resultsText, { color: theme.semantic.colors.text.secondary }]}>
              Showing {filteredPosts.length} of {posts.length} posts
            </Text>
          </View>
        )}

        {/* Blog Posts */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={theme.semantic.colors.interactive.primary} />
            <Text style={[styles.loadingText, { color: theme.semantic.colors.text.secondary }]}>
              Loading posts...
            </Text>
          </View>
        ) : filteredPosts.length === 0 ? (
          <CardV2 elevation="small">
            <Text style={[styles.emptyText, { color: theme.semantic.colors.text.secondary }]}>
              No posts found matching your filters.
            </Text>
          </CardV2>
        ) : (
          <View style={styles.postsContainer}>
            {filteredPosts.map((post) => (
              <ArticleCardV2
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author?.name}
                readTime={post.readTime}
                tags={post.tags}
                layout="horizontal"
                onPress={() => console.log('Open post:', post.title)}
                onTagPress={toggleTag}
                style={styles.articleCard}
              />
            ))}
          </View>
        )}

        {/* Theme Toggle Footer */}
        <View style={styles.footer}>
          <Pressable
            onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
            style={[
              {
                paddingHorizontal: theme.components.button.paddingHorizontal.large,
                paddingVertical: theme.components.button.paddingVertical.large,
                borderRadius: theme.components.button.borderRadius,
                backgroundColor: theme.semantic.colors.surface.secondary,
                borderWidth: theme.components.button.border?.width || 0,
                borderColor: theme.semantic.colors.border.secondary,
                ...(theme.components.button.shadow?.small ? theme.components.button.shadow.small : {}),
              },
            ]}
          >
            <Text
              style={[
                convertTypographyToTextStyle(theme.components.button.typography.large),
                { color: theme.semantic.colors.text.primary },
              ]}
            >
              {colorScheme === 'light' ? '🌙' : '☀️'} {colorScheme === 'light' ? 'Dark' : 'Light'} Mode
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default function App() {
  // Load fonts for different design themes
  const [fontsLoaded] = useFonts({
    // Roboto for Holo Design
    'Roboto-Light': Roboto_300Light,
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
    'Roboto-Bold': Roboto_700Bold,
    // Inter for Meta Horizon Design
    'Inter': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  // Auto-select design language based on platform
  const defaultLanguage = Platform.select({
    ios: 'flat',
    android: 'material',
    default: 'material',
  });

  // Show loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#33B5E5" />
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <DesignLanguageProvider
      initialDesignLanguage={defaultLanguage}
      initialColorScheme="light"
    >
      <BlogFeed />
    </DesignLanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pillBar: {
    paddingVertical: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  pillBarContent: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: 'center',
  },
  pillEmoji: {
    fontSize: 16,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 12,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    paddingBottom: 40,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  filterSection: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  resultsBar: {
    paddingVertical: 8,
  },
  resultsText: {
    fontSize: 14,
    fontWeight: '500',
  },
  loadingContainer: {
    padding: 48,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 24,
  },
  postsContainer: {
    gap: 12,
  },
  articleCard: {
    marginBottom: 0,
  },
  footer: {
    marginTop: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
});
