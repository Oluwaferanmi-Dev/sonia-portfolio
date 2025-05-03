export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  category: string;
  media: MediaItem[]; // Changed from single image
  results?: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  date: string;
  tags?: string[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Sanity-specific types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanityVideo {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanityMediaItem {
  type: 'image' | 'video';
  image?: SanityImage;
  video?: SanityVideo;
}

export interface SanityService {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SanityPortfolio {
  _id: string;
  title: string;
  brand: string;
  description: string;
  category: string;
  media: SanityMediaItem[]; // Changed from single image
  results?: string;
  date: string;
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  image: SanityImage;
  quote: string;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  image: SanityImage;
  content: any[];
  date: string;
  tags: string[];
}