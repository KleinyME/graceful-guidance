import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-angelic-white relative overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-angelic-pink/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-angelic-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gray-800 mb-4">How the Magic Unfolds</h2>
          <p className="text-gray-600 text-lg">Blending ancient wisdom with modern understanding.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Theta State */}
            <div className="space-y-6">
                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                   <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop" alt="Dreamy clouds and sky representing Theta state" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-gray-800 mb-4">The <span className="text-indigo-400">Theta State</span></h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                      Imagine the dreamy moment just before you drift off to sleep—that creative, vivid, limitless space. This is the Theta brainwave state. In our sessions (especially QHHT), we guide you gently into this natural sanctuary where your conscious mind rests, allowing your Higher Self to speak, heal, and reveal the answers you seek.
                  </p>
                </div>
            </div>

            {/* Universal Energy */}
             <div className="space-y-6">
                 <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" alt="Nature and light representing universal energy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
                <div>
                  <h3 className="font-serif text-3xl text-gray-800 mb-4"><span className="text-angelic-gold">Universal</span> Energy</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                      We are all composed of energy. When life gets heavy, our natural flow can become stagnant or blocked. Reiki is the art of channeling pure, high-vibrational Universal Life Force energy. Like a river clearing debris, it washes over you—gentle yet powerful—restoring harmony to your physical, emotional, and spiritual bodies.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;