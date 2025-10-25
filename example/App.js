import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
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
import { AppBarV2 } from './lib/src/components/AppBar/AppBarV2';
import { IconV2 } from './lib/src/components/Icon/IconV2';
import { PillV2 } from './lib/src/components/Pill/PillV2';
import { PillBarV2 } from './lib/src/components/Pill/PillBarV2';
import { fetchBlogPosts, getAllTags, getAllYears, filterBlogPosts } from './lib/src/services/blogService';

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
    { value: 'metaHorizon', label: 'Meta', emoji: '🥽' },
    { value: 'holo', label: 'Holo', emoji: '🤖' },
    { value: 'material', label: 'Material', emoji: '🎨' },
    { value: 'flat', label: 'Flat', emoji: '🍎' },
    { value: 'liquidGlass', label: 'Liquid', emoji: '💎' },
    { value: 'metro', label: 'Metro', emoji: '📱' },
    { value: 'fluent', label: 'Fluent', emoji: '🪟' },
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

      {/* App Bar with dynamic design language support */}
      <View style={{ paddingTop: Platform.OS === 'ios' ? 44 : 0 }}>
        <AppBarV2
          title="Now in React Native"
          leftAction={{
            icon: (
              <IconV2 
                name="search" 
                size={24} 
                color={theme.semantic.colors.text.secondary}
              />
            ),
            onPress: () => console.log('Search pressed'),
            accessibilityLabel: 'Search posts',
          }}
          rightAction={{
            icon: (
              <View style={{
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: showFilters
                  ? theme.semantic.colors.interactive.primary
                  : theme.semantic.colors.interactive.secondary,
                borderRadius: 16,
              }}>
                <IconV2 
                  name={showFilters ? 'close' : 'settings'} 
                  size={18}
                  color={showFilters
                    ? '#FFFFFF'
                    : theme.semantic.colors.text.primary}
                />
                {hasActiveFilters && !showFilters && (
                  <View style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: theme.semantic.colors.feedback.error,
                    borderWidth: 1,
                    borderColor: theme.semantic.colors.background.primary,
                  }} />
                )}
              </View>
            ),
            onPress: () => setShowFilters(!showFilters),
            accessibilityLabel: showFilters ? 'Close filters' : 'Open filters',
          }}
          elevation={true}
        />
      </View>

      {/* Design Language Pill Bar */}
      <PillBarV2>
        {languages.map((lang) => {
          const isSelected = designLanguage === lang.value;
          return (
            <PillV2
              key={lang.value}
              label={lang.label}
              icon={<Text style={styles.pillEmoji}>{lang.emoji}</Text>}
              selected={isSelected}
              onPress={() => setDesignLanguage(lang.value)}
              size="medium"
            />
          );
        })}
      </PillBarV2>

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
    default: 'metaHorizon', // Meta Horizon is the default fallback
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
  pillEmoji: {
    fontSize: 16,
  },
  subtitleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
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
