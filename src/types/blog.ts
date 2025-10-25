/**
 * Blog Post Types
 */

export interface BlogPost {
  id: string;
  title: string;
  date: string; // ISO date string
  excerpt: string;
  content: string;
  author?: Author;
  tags: string[];
  readTime?: string; // e.g., "5 min read"
  imageUrl?: string;
  url: string;
}

export interface Author {
  name: string;
  avatar?: string;
  title?: string;
}

export interface BlogFilter {
  tags?: string[];
  year?: number;
  searchTerm?: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  year?: number;
}

