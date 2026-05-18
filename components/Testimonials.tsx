import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-angelic-taupe/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-center text-gray-800 mb-16">
          Love Notes from the <span className="italic text-angelic-gold">Community</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            >
              <Quote className="w-10 h-10 text-angelic-pink mb-4 opacity-50" />
              <p className="text-gray-600 italic mb-6 flex-grow font-serif text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-angelic-gold/20 flex items-center justify-center text-angelic-gold font-serif font-bold">
                    {t.author.charAt(0)}
                </div>
                <div>
                   <p className="font-bold text-gray-800 text-sm">{t.author}</p>
                   {t.location && <p className="text-xs text-gray-500 uppercase tracking-wider">{t.location}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;