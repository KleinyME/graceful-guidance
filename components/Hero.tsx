import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1920&auto=format&fit=crop" 
          alt="Golden sunlight filtering through a soft nature landscape" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-angelic-pinkLight/30 to-angelic-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 pt-20">
        <div className="space-y-4 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-angelic-gold/10 text-angelic-gold text-sm font-semibold tracking-wider uppercase">
            Holistic Healing & Hypnotherapy
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-gray-800 leading-tight">
            Illuminate Your <br />
            <span className="text-angelic-gold italic">Soul’s Journey</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Compassionate healing, hypnosis, and guidance to help you remember your authentic light.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a href="#services">
             <Button variant="primary" className="min-w-[200px]">
                Begin Your Healing
             </Button>
          </a>
          <a href="#about">
            <Button variant="secondary" className="min-w-[200px]">
                Meet Lisa
            </Button>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-angelic-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;