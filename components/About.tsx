import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-angelic-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-angelic-gold/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
               {/* Placeholder for Lisa's photo */}
              <img 
                src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=800&auto=format&fit=crop" 
                alt="Lisa Bernarde smiling warmly" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative vignette or overlay could go here */}
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-800">
                A Sanctuary for <span className="text-angelic-gold italic">Your Soul</span>
              </h2>
              <div className="w-24 h-1 bg-angelic-gold/50 rounded-full"></div>
            </div>

            <div className="font-sans text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                Hello, beautiful soul. I’m <strong>Lisa Bernarde</strong>. While my credentials say "Clinical Hypnotherapist" or "Reiki Master," my heart knows a simpler truth: I am a guide here to walk you home to yourself.
              </p>
              <p>
                In a world that often feels rushed and critical, I offer you a <strong>judgment-free sanctuary</strong> wrapped in unconditional love and kindness. My practice isn't just about "fixing" symptoms; it's about remembering the wholeness that has always been within you.
              </p>
              <p>
                Using tools like <em>Hypnotherapy, NLP, Quantum Healing (QHHT), and Reiki</em>, I help you bypass the noise of the conscious mind to access your own profound inner wisdom. Whether you are seeking to release old burdens, heal deep wounds, or simply find peace, you are safe here.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-serif text-xl text-gray-800 mb-4">Certified & Experienced In:</h3>
              <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-angelic-gold"></span>
                  Clinical Hypnotherapy
                </li>
                <li className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-angelic-gold"></span>
                  Usui Reiki Master
                </li>
                 <li className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-angelic-gold"></span>
                  QHHT Practitioner
                </li>
                 <li className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-angelic-gold"></span>
                  NLP & EFT
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;