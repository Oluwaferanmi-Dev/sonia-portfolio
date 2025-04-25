import React, { useState, useEffect } from 'react';
import { SanityPortfolio } from '../types';
import { client, urlFor } from '../lib/sanity';

const PortfolioItem: React.FC<{ item: SanityPortfolio }> = ({ item }) => {
  return (
    <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden h-64">
        <img 
          src={urlFor(item.image).width(800).height(600).url()} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-primary-500 text-dark-500 text-sm font-medium rounded-full mb-2">
            {item.category}
          </span>
          <p className="text-white text-sm">{item.results}</p>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="font-serif text-lg font-medium text-dark-500 mb-1">{item.title}</h3>
        <p className="text-primary-700 mb-3">{item.brand}</p>
        <p className="text-dark-400 text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<SanityPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await client.fetch('*[_type == "portfolio"] | order(date desc)');
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  if (loading) {
    return (
      <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">Loading portfolio...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-500 mb-3">
            My <span className="text-primary-700">Portfolio</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Take a look at some of my recent projects and the results they've achieved for my clients.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-700 text-white'
                  : 'bg-primary-100 text-dark-500 hover:bg-primary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredItems.map((item) => (
            <PortfolioItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;