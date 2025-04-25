import React, { useState, useEffect } from 'react';
import { 
  Instagram, MessageSquare, Users, FileHeart, Heart, Palette, Calendar, Film, TrendingUp, MessageCircle, BarChart
} from 'lucide-react';
import { SanityService } from '../types';
import { client } from '../lib/sanity';

const ServiceCard: React.FC<{ service: SanityService }> = ({ service }) => {
  const IconComponent = () => {
    switch(service.icon) {
      case 'Instagram': return <Instagram className="text-primary-700" />;
      case 'MessageSquare': return <MessageSquare className="text-primary-700" />;
      case 'Users': return <Users className="text-primary-700" />;
      case 'FileHeart': return <FileHeart className="text-primary-700" />;
      case 'Heart': return <Heart className="text-primary-700" />;
      case 'Palette': return <Palette className="text-primary-700" />;
      case 'Calendar': return <Calendar className="text-primary-700" />;
      case 'Film': return <Film className="text-primary-700" />;
      case 'TrendingUp': return <TrendingUp className="text-primary-700" />;
      case 'MessageCircle': return <MessageCircle className="text-primary-700" />;
      case 'BarChart': return <BarChart className="text-primary-700" />;
      default: return <Instagram className="text-primary-700" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
      <div className="p-3 bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
        <IconComponent />
      </div>
      <h3 className="font-serif text-lg font-medium text-dark-500 mb-2">{service.title}</h3>
      <p className="text-dark-400 flex-grow">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const [services, setServices] = useState<SanityService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch('*[_type == "service"]');
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-16 md:py-24 bg-champagne-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-champagne-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-500 mb-3">
            My <span className="text-primary-700">Services</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            I offer a range of services to help your brand connect with your audience and stand out in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;