import { BlogPost } from '../types/blog';

/**
 * Blog Service
 * 
 * In a production app, this would fetch from the React Native blog API
 * or RSS feed. For now, we use curated sample data based on the actual blog.
 */

// Sample data based on actual React Native blog posts
const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'React Native 0.82 - A New Era',
    date: '2025-01-15T00:00:00Z',
    excerpt: 'A major milestone for React Native with exciting new features and improvements.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/seed/rn82/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'React Native Team',
      title: '@reactnative',
    },
  },
  {
    id: '2',
    title: 'React Native 0.81 - Android 16 support, faster iOS builds, and more',
    date: '2025-01-10T00:00:00Z',
    excerpt: 'Android 16 support, faster tooling and much more in this release.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '4 min read',
    imageUrl: 'https://picsum.photos/seed/rn81/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'React Native Team',
      title: '@reactnative',
    },
  },
  {
    id: '3',
    title: 'React Native 0.80 - React 19.1, JS API Changes, and much more',
    date: '2025-01-05T00:00:00Z',
    excerpt: 'Freezing Legacy Architecture and introducing new JavaScript APIs.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/seed/rn80/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'React Native Team',
      title: '@reactnative',
    },
  },
  {
    id: '4',
    title: 'Moving Towards a Stable JavaScript API',
    date: '2025-01-03T00:00:00Z',
    excerpt: 'New changes in React Native 0.80 for a more stable JavaScript API.',
    content: 'This is the full content of the blog post...',
    tags: ['engineering', 'architecture'],
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/seed/jsapi/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'Engineering Team',
      title: 'Meta',
    },
  },
  {
    id: '5',
    title: 'React Native 0.79 - Faster tooling and much more',
    date: '2024-12-20T00:00:00Z',
    excerpt: 'Significant improvements to build times and developer experience.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/seed/rn79/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'React Native Team',
      title: '@reactnative',
    },
  },
  {
    id: '6',
    title: 'React Native 0.78 - React 19 and more',
    date: '2024-12-10T00:00:00Z',
    excerpt: 'Support for React 19 and other exciting features.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '4 min read',
    imageUrl: 'https://picsum.photos/seed/rn78/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'React Native Team',
      title: '@reactnative',
    },
  },
  {
    id: '7',
    title: 'React Native Core Contributor Summit 2024 Recap',
    date: '2024-11-15T00:00:00Z',
    excerpt: 'Highlights from the annual React Native Core Contributor Summit.',
    content: 'This is the full content of the blog post...',
    tags: ['community', 'event'],
    readTime: '10 min read',
    imageUrl: 'https://picsum.photos/seed/summit24/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'Community Team',
      title: 'React Native',
    },
  },
  {
    id: '8',
    title: 'React Native 0.77 - New Styling Features',
    date: '2024-11-01T00:00:00Z',
    excerpt: 'New Architecture features, Android 16KB page support, and Swift template.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/seed/rn77/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'React Native Team',
      title: '@reactnative',
    },
  },
  {
    id: '9',
    title: 'New Architecture is here',
    date: '2024-10-23T00:00:00Z',
    excerpt: 'The React Native New Architecture is now stable and ready for production.',
    content: 'This is the full content of the blog post...',
    tags: ['engineering', 'architecture'],
    readTime: '24 min read',
    imageUrl: 'https://picsum.photos/seed/newarch/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'The React Team',
      title: '@reactjs / @reactnative',
    },
  },
  {
    id: '10',
    title: 'React Native 0.76 - New Architecture by default',
    date: '2024-10-23T00:00:00Z',
    excerpt: 'React Native DevTools, and the New Architecture enabled by default.',
    content: 'This is the full content of the blog post...',
    tags: ['announcement', 'release'],
    readTime: '12 min read',
    imageUrl: 'https://picsum.photos/seed/rn76/800/600',
    url: 'https://reactnative.dev/blog',
    author: {
      name: 'Blake Friedman',
      title: 'Software Engineer @ Meta',
    },
  },
];

/**
 * Fetches all blog posts
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return SAMPLE_BLOG_POSTS;
};

/**
 * Fetches a single blog post by ID
 */
export const fetchBlogPostById = async (id: string): Promise<BlogPost | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return SAMPLE_BLOG_POSTS.find(post => post.id === id) || null;
};

/**
 * Filters blog posts by criteria
 */
export const filterBlogPosts = (
  posts: BlogPost[],
  filters: {
    tags?: string[];
    year?: number;
    searchTerm?: string;
  }
): BlogPost[] => {
  let filtered = [...posts];

  // Filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(post =>
      filters.tags!.some(tag => post.tags.includes(tag))
    );
  }

  // Filter by year
  if (filters.year) {
    filtered = filtered.filter(post => {
      const postYear = new Date(post.date).getFullYear();
      return postYear === filters.year;
    });
  }

  // Filter by search term
  if (filters.searchTerm) {
    const searchLower = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
};

/**
 * Gets all unique tags from blog posts
 */
export const getAllTags = (posts: BlogPost[]): string[] => {
  const tagSet = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

/**
 * Gets all unique years from blog posts
 */
export const getAllYears = (posts: BlogPost[]): number[] => {
  const yearSet = new Set<number>();
  posts.forEach(post => {
    const year = new Date(post.date).getFullYear();
    yearSet.add(year);
  });
  return Array.from(yearSet).sort((a, b) => b - a); // Descending order
};

