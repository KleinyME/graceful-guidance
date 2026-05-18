import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WellnessTechnology from './components/WellnessTechnology';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-angelic-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WellnessTechnology />
        <Methodology />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;