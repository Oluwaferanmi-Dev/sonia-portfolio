import React from 'react';
import { Newspaper } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Newspaper className="w-12 h-12 text-primary-700" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-500 mb-3">
            Coming Soon
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Our blog section is currently under development. Check back soon for insightful articles and updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;