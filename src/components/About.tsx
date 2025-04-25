import React from 'react';
import soniaImage from '../assets/sonia-profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-2/5 mb-8 md:mb-0 animate-fade-in">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={soniaImage} 
                  alt="Sonia U." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-2xl bg-champagne-400 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-500 mb-6">
              About <span className="text-primary-700">Me</span>
            </h2>
            
            <div className="bg-secondary-100 p-6 md:p-8 rounded-2xl">
              <p className="text-dark-500 leading-relaxed mb-4">
                I'm a storyteller at heart, using visuals, words, and strategy to help brands connect deeply with their audience. As a Social Media Manager and Content Creator, I blend creativity with insight—crafting scroll-stopping content, building communities, and turning everyday ideas into engaging digital experiences.
              </p>
              <p className="text-dark-500 leading-relaxed">
                From fashion and skincare brands to the academic space, I've led creative direction, shaped brand voices, and developed campaigns that don't just follow trends—they spark them. Whether I'm behind the camera, curating a content calendar, or editing a reel, my goal is always the same: to create content that feels real, intentional, and impactful.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-primary-500 px-4 py-2 rounded-full">
                <span className="text-dark-500 font-medium">Content Strategy</span>
              </div>
              <div className="bg-primary-500 px-4 py-2 rounded-full">
                <span className="text-dark-500 font-medium">Social Media</span>
              </div>
              <div className="bg-primary-500 px-4 py-2 rounded-full">
                <span className="text-dark-500 font-medium">Brand Voice</span>
              </div>
              <div className="bg-primary-500 px-4 py-2 rounded-full">
                <span className="text-dark-500 font-medium">Creative Direction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
