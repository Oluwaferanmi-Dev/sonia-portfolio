// src/components/PortfolioItem.tsx
import React from 'react';
import { SanityPortfolio } from '../types';

const PortfolioItem: React.FC<{ item: SanityPortfolio }> = ({ item }) => {
  const primaryMedia = item.media[0];

  return (
    <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden h-64">
        {primaryMedia.type === 'image' ? (
          <img
            src={primaryMedia.url}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <video
            src={primaryMedia.url}
            controls
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-2">
            {item.category}
          </span>
          <p className="text-white text-sm">{item.results}</p>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="font-serif text-lg font-medium text-gray-800 mb-1">{item.title}</h3>
        <p className="text-primary-700 mb-3">{item.brand}</p>
        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;