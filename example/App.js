import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, ActivityIndicator, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
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

  // Design language options
  const languages = [
    { value: 'material', label: 'Material', platform: 'Mobile' },
    { value: 'cupertino', label: 'Cupertino', platform: 'iOS' },
    { value: 'aqua', label: 'Aqua', platform: 'macOS' },
    { value: 'aeroGlass', label: 'Aero', platform: 'Windows' },
    { value: 'metro', label: 'Metro', platform: 'Windows' },
    { value: 'fluent', label: 'Fluent', platform: 'Windows' },
    { value: 'liquidGlass', label: 'Liquid', platform: 'Modern' },
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
          <View>
            <Text style={[styles.title, { color: theme.semantic.colors.text.primary }]}>
              Now in React Native
            </Text>
            <Text style={[styles.subtitle, { color: theme.semantic.colors.text.secondary }]}>
              Latest updates from the React Native blog
            </Text>
          </View>

          <Pressable
            onPress={() => setShowFilters(!showFilters)}
            style={[
              styles.filterButton,
              {
                backgroundColor: showFilters
                  ? theme.semantic.colors.interactive.primary
                  : theme.semantic.colors.surface.secondary,
              },
            ]}
          >
            <Text
              style={[
                styles.filterButtonText,
                {
                  color: showFilters
                    ? '#FFFFFF'
                    : theme.semantic.colors.text.primary,
                },
              ]}
            >
              Filters {hasActiveFilters ? `(${selectedTags.length + (selectedYear ? 1 : 0)})` : ''}
            </Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Design Language Selector */}
        <CardV2 elevation="small">
          <Text style={[styles.sectionTitle, { color: theme.semantic.colors.text.primary }]}>
            Design Language: {languages.find(l => l.value === designLanguage)?.label}
          </Text>
          <View style={styles.languageGrid}>
            {languages.map((lang) => (
              <View key={lang.value} style={styles.languageButton}>
                <ButtonV2
                  title={lang.label}
                  onPress={() => setDesignLanguage(lang.value)}
                  variant={designLanguage === lang.value ? 'primary' : 'secondary'}
                  size="small"
                />
              </View>
            ))}
          </View>

          <View style={styles.themeToggle}>
            <Text style={[styles.themeLabel, { color: theme.semantic.colors.text.primary }]}>
              {colorScheme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Text>
            <ButtonV2
              title="Toggle Theme"
              onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
              variant="secondary"
              size="small"
            />
          </View>
        </CardV2>

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
                imageUrl={post.imageUrl}
                tags={post.tags}
                readTime={post.readTime}
                onPress={() => console.log('Open post:', post.title)}
                onTagPress={toggleTag}
                style={styles.articleCard}
              />
            ))}
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.semantic.colors.text.tertiary }]}>
            Running on {Platform.OS} • {colorScheme} mode • {designLanguage}
          </Text>
          <Text style={[styles.footerText, { color: theme.semantic.colors.text.tertiary }]}>
            Powered by Mangekyo Design System
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default function App() {
  // Auto-select design language based on platform
  const defaultLanguage = Platform.select({
    ios: 'cupertino',
    android: 'material',
    default: 'material',
  });

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
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 16,
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  languageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  languageButton: {
    width: '30%',
  },
  themeToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
    gap: 16,
  },
  articleCard: {
    marginBottom: 0,
  },
  footer: {
    marginTop: 32,
    paddingVertical: 24,
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 12,
  },
});
