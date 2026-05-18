import React from 'react';
import { SERVICE_PATHWAYS } from '../constants';
import { ChevronRight, Sparkles } from 'lucide-react';
import Button from './Button';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-angelic-white via-angelic-pinkLight/50 to-angelic-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">
            Angelic <span className="text-angelic-gold">Pathways</span> to Healing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the path that resonates with your current journey. All sessions are conducted with the highest intention for your wellbeing.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_PATHWAYS.map((pathway) => (
            <div 
              key={pathway.id} 
              className={`rounded-[2rem] p-8 ${pathway.color} bg-opacity-40 hover:bg-opacity-70 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-white/50`}
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm text-angelic-gold">
                {pathway.icon}
              </div>
              
              <h3 className="font-serif text-2xl text-gray-800 mb-2">{pathway.title}</h3>
              <p className="text-angelic-gold font-medium text-sm tracking-wide uppercase mb-4">{pathway.subtitle}</p>
              <p className="text-gray-600 mb-8 leading-relaxed min-h-[4rem]">
                {pathway.description}
              </p>

              <div className="space-y-4">
                {pathway.services.map((service) => (
                  <div key={service.name} className="bg-white/60 p-4 rounded-xl hover:bg-white transition-colors">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                       <ChevronRight className="w-4 h-4 text-angelic-gold" />
                       {service.name}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 pl-6">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                 <button className="text-angelic-gold font-semibold hover:text-gray-800 transition-colors flex items-center gap-2 mx-auto">
                    Learn More <ChevronRight className="w-4 h-4" />
                 </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;