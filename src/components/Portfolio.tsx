// src/components/Portfolio.tsx
import React, { useState, useEffect } from 'react';
import { SanityPortfolio } from '../types';
import PortfolioItem from './PortfolioItem';

const Portfolio: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<SanityPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    // Mock data — replace with Sanity fetch later
    const mockData: SanityPortfolio[] = [
      {
        _id: '1',
        title: 'Wedding Coverage',
        brand: 'CineLens Media',
        category: 'Event Coverage',
        description: 'Captured moments at the Ayeni wedding with cinematic quality.',
        results: 'Received 5-star feedback from the client.',
        media: [
          { type: 'image', url: '/mock/event1.jpg' },
          { type: 'video', url: '/mock/event1.mp4' },
        ],
      },
      {
        _id: '2',
        title: 'Gourmet Feature',
        brand: 'La Cuisine',
        category: 'Food/Restaurant',
        description: 'Food photography for restaurant menu and Instagram campaigns.',
        results: 'Social media engagement tripled.',
        media: [
          { type: 'image', url: '/mock/food1.jpg' },
        ],
      },
      {
        _id: '3',
        title: 'Urban Streetwear',
        brand: 'KA Fashion',
        category: 'Fashion',
        description: 'Styled and shot lookbook for fashion brand.',
        results: 'Increased website traffic by 40%.',
        media: [
          { type: 'video', url: '/mock/fashion1.mp4' },
        ],
      },
    ];

    setPortfolioItems(mockData);
    setLoading(false);
  }, []);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            My <span className="text-primary-700">Portfolio</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse projects by category and see the impact of each shoot.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-700 text-white'
                  : 'bg-primary-100 text-gray-700 hover:bg-primary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-400">Loading portfolio...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {filteredItems.map(item => (
              <PortfolioItem key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;