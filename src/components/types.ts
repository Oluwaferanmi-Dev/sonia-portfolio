// src/types.ts
export interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export interface SanityPortfolio {
  _id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  results: string;
  media: MediaItem[];
}