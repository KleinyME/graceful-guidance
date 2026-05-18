import React, { useState } from 'react';
import { Activity, Leaf, Zap, Database, Waves, ArrowRight, X, Sparkles, Lock, ChevronRight, Star, Clock, HeartHandshake, Sun, Music, PawPrint, Brain, Wind, Fingerprint } from 'lucide-react';
import Button from './Button';
import { SERVICE_PATHWAYS } from '../constants';
import { ServicePathway } from '../types';

interface TechFeature {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  icon: React.ReactNode;
  image: string;
  isBioresonance?: boolean;
  services?: { name: string; description: string }[];
  color?: string;
}

const BIORESONANCE_FEATURE: TechFeature = {
  id: 'bioresonance',
  title: 'Bioresonance Scanning',
  subtitle: 'Harmonizing Your Inner Frequency',
  shortDescription: 'A non-invasive technology that listens to your body’s unique energy signature to identify imbalances and restore harmony.',
  icon: <Waves className="w-8 h-8 text-purple-500" />,
  image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop', // Abstract purple fluid/frequency
  isBioresonance: true,
};

// Map existing pathways to the feature card format
const PATHWAY_FEATURES: TechFeature[] = SERVICE_PATHWAYS.map((pathway, index) => {
  // Assign images based on ID or index
  let image = '';
  switch(pathway.id) {
    case 'soul-exploration':
      image = 'https://images.unsplash.com/photo-1531608139434-1912ae0713cd?q=80&w=1000&auto=format&fit=crop'; // Milky way/Stars
      break;
    case 'energy-restoration':
      image = 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop'; // Healing hands/Light
      break;
    case 'mind-transformation':
      image = 'https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=1000&auto=format&fit=crop'; // Dandelion seeds
      break;
    default:
      image = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000';
  }

  return {
    id: pathway.id,
    title: pathway.title,
    subtitle: pathway.subtitle,
    shortDescription: pathway.description,
    icon: pathway.icon,
    image,
    services: pathway.services,
    color: pathway.color
  };
});

const FEATURES: TechFeature[] = [BIORESONANCE_FEATURE, ...PATHWAY_FEATURES];

const WellnessTechnology: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<TechFeature | null>(null);

  const openModal = (feature: TechFeature) => {
    setActiveFeature(feature);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveFeature(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#F3F4F6] via-[#F3E8FF] to-[#E5E7EB] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
            Our <span className="text-purple-400 italic">Healing Pathways</span>
          </h2>
          <p className="font-serif text-xl text-gray-600 italic max-w-2xl mx-auto">
            Discover the perfect modality to harmonize your mind, body, and soul.
          </p>
        </div>

        {/* The 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              onClick={() => openModal(feature)}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 flex flex-col relative overflow-hidden cursor-pointer hover:-translate-y-2 ring-2 ring-transparent hover:ring-purple-200"
            >
              {/* Image Header */}
              <div className="h-40 -mx-6 -mt-6 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              <div className="mb-4">
                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-angelic-gold">
                    {feature.icon}
                 </div>
                 <h3 className="font-serif text-xl text-gray-800 leading-tight mb-1">{feature.title}</h3>
                 <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">{feature.subtitle}</p>
                 <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                   {feature.shortDescription}
                 </p>
              </div>

              <div className="mt-auto flex items-center text-purple-500 font-medium text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED MODAL OVERLAY */}
      {activeFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/30 backdrop-blur-md transition-opacity animate-fade-in"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-y-auto animate-fade-in-up custom-scrollbar flex flex-col">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-50 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* --- LAYOUT 1: BIORESONANCE --- */}
            {activeFeature.isBioresonance ? (
              <div className="p-8 md:p-12 lg:p-16 space-y-12">
                
                {/* Bioresonance Header */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                   <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-50 text-purple-500 mb-4">
                      <Waves className="w-8 h-8" />
                   </div>
                   <h2 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
                      Harmonizing Your <span className="text-purple-400 italic">Inner Frequency</span>:<br/>
                      Bioresonance Scanning
                    </h2>
                    <p className="font-serif text-xl text-gray-600 italic">
                      "Imagine your body as a beautiful orchestra. When every instrument is in tune, you feel vibrant, energetic, and at peace."
                    </p>
                </div>

                {/* Bioresonance Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <h3 className="font-serif text-3xl text-gray-800">Science Meets Soul</h3>
                    <p>
                      Everything in the universe, including your body, emits a specific electromagnetic frequency. Bioresonance Scanning is a non-invasive, advanced wellness technology that "reads" these energetic signatures. 
                    </p>
                    <p>
                      It bridges the gap between the seen and the unseen, translating your body’s subtle energetic language into clear, actionable insights. But sometimes, life’s stressors can cause a string to go out of tune, creating dissonance in your natural rhythm. Bioresonance is the gentle art of listening to that music, identifying the notes that are off-key, and helping your body remember its perfect harmony.
                    </p>
                  </div>
                  <div className="relative">
                     <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-purple-200/50 relative z-10 bg-white">
                        <img 
                          src={activeFeature.image}
                          alt="Ripples in water representing frequency" 
                          className="w-full h-full object-cover opacity-90"
                        />
                     </div>
                     <div className="absolute inset-0 border border-purple-200 rounded-full scale-110 -z-0"></div>
                  </div>
                </div>

                {/* Bioresonance Features Grid */}
                <div className="bg-gradient-to-br from-[#F3F4F6] to-[#F3E8FF] rounded-[2rem] p-8 md:p-12">
                  <div className="text-center max-w-3xl mx-auto mb-10">
                    <h3 className="font-serif text-3xl text-gray-800 mb-4">How It Works</h3>
                    <p className="text-gray-700 text-lg">
                      During a session, you simply relax in a comfortable setting. Using specialized sensors, the device sends safe, subtle electromagnetic signals to your body and listens for the echo. It’s like a conversation between the technology and your cells, asking, "Where do you need support?"
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     <ExploreCard 
                       icon={<Leaf className="w-6 h-6 text-green-500" />}
                       title="Nutritional Needs"
                       desc="Identifying vitamins or minerals your body is asking for."
                     />
                     <ExploreCard 
                       icon={<Activity className="w-6 h-6 text-red-400" />}
                       title="Environmental Sensitivities"
                       desc="Detecting reactions to toxins, allergens, or food sensitivities."
                     />
                     <ExploreCard 
                       icon={<Zap className="w-6 h-6 text-amber-400" />}
                       title="Energetic Blockages"
                       desc="Locating areas where stress or fatigue is stagnating your natural flow."
                     />
                     <ExploreCard 
                       icon={<Database className="w-6 h-6 text-blue-400" />}
                       title="Organ Health"
                       desc="Checking the energetic vitality of your body systems."
                     />
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center space-y-8 pb-4">
                   <h3 className="font-serif text-3xl text-gray-800">A Blueprint for Your Healing</h3>
                   <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                     You will leave with a detailed "roadmap" of your internal landscape. Instead of guessing what your body needs, you will have a clear understanding of the root causes of your discomfort. We then use this data to create a targeted plan—whether through frequency balancing, nutritional adjustments, or energy work—to guide you back to your most vibrant self.
                   </p>
                   <div className="flex justify-center gap-4">
                     <a href="#contact" onClick={closeModal}>
                        <Button variant="primary">Book a Scan</Button>
                     </a>
                     <Button variant="outline" onClick={closeModal}>Close Details</Button>
                   </div>
                </div>
              </div>
            ) : activeFeature.id === 'soul-exploration' ? (
              // --- LAYOUT 2: SOUL EXPLORATION (EXPANDED) ---
              <div className="p-8 md:p-12 lg:p-16 space-y-12">
                 {/* Header */}
                 <div className="text-center max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-50 text-indigo-500 mb-4">
                       <Star className="w-8 h-8" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
                       Soul Exploration:<br/>
                       <span className="text-indigo-400 italic">Remembering Your Divine Truth</span>
                    </h2>
                    <p className="font-serif text-xl text-gray-600 leading-relaxed">
                       "Within you lies a library of infinite wisdom—a space where every question you’ve ever had holds an answer waiting to be heard."
                    </p>
                    <p className="text-gray-600 text-lg">
                       You are not just a physical being; you are a soul with a rich, eternal history. Our Soul Exploration sessions are designed to gently part the veil between your daily mind and your Higher Self, allowing you to access deep healing, clarity, and the profound realization of who you truly are.
                    </p>
                 </div>

                 {/* Service 1: QHHT */}
                 <div className="bg-indigo-50/50 rounded-[2.5rem] p-8 md:p-10 border border-indigo-100 shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                       <div className="flex-1 space-y-6">
                          <div>
                             <h3 className="font-serif text-3xl text-gray-800 mb-2">Quantum Healing Hypnosis Technique (QHHT)</h3>
                             <p className="text-indigo-400 font-medium italic">A Sacred Conversation with Your Higher Self</p>
                          </div>
                          
                          <div className="prose text-gray-600 leading-relaxed">
                             <p className="mb-4">
                                Developed by the renowned Dolores Cannon, QHHT is more than just hypnosis; it is a journey into the deepest, most knowing part of your consciousness. We guide you into the "Theta" state—that dreamy, magical drift you experience just before falling asleep. In this space, the chatter of the ego quiets, and the voice of your wisdom steps forward.
                             </p>
                             
                             <h4 className="font-bold text-gray-700 mt-6 mb-3">What to Expect:</h4>
                             <ul className="space-y-3">
                                <li className="flex gap-3">
                                   <span className="font-bold text-indigo-500">• The Interview:</span> We begin by talking. You share your life story and questions. This sets the intention.
                                </li>
                                <li className="flex gap-3">
                                   <span className="font-bold text-indigo-500">• The Journey:</span> You are guided through past lives or other experiences your soul selects as most relevant.
                                </li>
                                <li className="flex gap-3">
                                   <span className="font-bold text-indigo-500">• The Healing:</span> We speak directly to your Subconscious. This all-loving force answers questions and scans your body for healing.
                                </li>
                             </ul>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-indigo-100 inline-block">
                             <span className="font-semibold text-gray-700">Best For:</span> <span className="text-gray-600">Those seeking answers to life’s "big questions," relief from chronic issues, or life purpose connection.</span>
                          </div>
                       </div>
                       
                       <div className="w-full lg:w-1/3">
                          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative">
                             <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" alt="Peaceful meditation state" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-indigo-900/10"></div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Service 2: Past-Life Regression */}
                 <div className="bg-rose-50/50 rounded-[2.5rem] p-8 md:p-10 border border-rose-100 shadow-sm">
                    <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
                       <div className="flex-1 space-y-6">
                          <div>
                             <h3 className="font-serif text-3xl text-gray-800 mb-2">Past-Life Regression</h3>
                             <p className="text-rose-400 font-medium italic">Tracing the Threads of Your Soul’s Tapestry</p>
                          </div>
                          
                          <div className="prose text-gray-600 leading-relaxed">
                             <p className="mb-4">
                                Have you ever felt an unexplainable connection to a certain place, time period, or person? Past-Life Regression allows you to safely revisit the memories of your soul’s previous incarnations. Think of it as accessing the archives of your own history to understand the story of you.
                             </p>
                             
                             <h4 className="font-bold text-gray-700 mt-6 mb-3">The Transformation:</h4>
                             <ul className="space-y-3">
                                <li className="flex gap-3">
                                   <span className="font-bold text-rose-500">• Release Karma:</span> Understand and break recurring patterns or "loops" in relationships.
                                </li>
                                <li className="flex gap-3">
                                   <span className="font-bold text-rose-500">• Heal Trauma:</span> Resolve old wounds that may be manifesting as phobias or anxiety today.
                                </li>
                                <li className="flex gap-3">
                                   <span className="font-bold text-rose-500">• Reclaim Gifts:</span> Rediscover talents you mastered in other lifetimes.
                                </li>
                             </ul>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-rose-100 inline-block">
                             <span className="font-semibold text-gray-700">Best For:</span> <span className="text-gray-600">Curious seekers, history lovers, and understanding phobias or relationships.</span>
                          </div>
                       </div>
                       
                       <div className="w-full lg:w-1/3">
                          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative">
                             <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop" alt="Vintage hourglass representing time" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-rose-900/10"></div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Safety Note & CTA */}
                 <div className="bg-angelic-gold/10 rounded-2xl p-8 text-center space-y-6">
                    <div className="inline-block p-2 bg-white rounded-full shadow-sm text-angelic-gold">
                       <HeartHandshake className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-gray-800">Your Safe Harbor</h4>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                       Traveling to the depths of your soul requires trust. Please know that as your guide, I serve as a protective anchor. I am here to hold the light while you explore, ensuring you feel safe, supported, and held in love every step of the way.
                    </p>
                    <div className="pt-4 flex justify-center gap-4">
                        <a href="#contact" onClick={closeModal}>
                           <Button variant="primary">Book a Soul Session</Button>
                        </a>
                        <Button variant="outline" onClick={closeModal}>Close Details</Button>
                     </div>
                 </div>
              </div>
            ) : activeFeature.id === 'energy-restoration' ? (
              // --- LAYOUT 3: ENERGY RESTORATION (EXPANDED) ---
              <div className="p-8 md:p-12 lg:p-16 space-y-12">
                 {/* Header */}
                 <div className="text-center max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-rose-50 text-rose-500 mb-4">
                       <Sun className="w-8 h-8" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
                       Energy Restoration:<br/>
                       <span className="text-rose-400 italic">Returning to Your Natural Rhythm</span>
                    </h2>
                    <p className="font-serif text-xl text-gray-600 leading-relaxed">
                       "Your energy field is like a river; when it flows freely, you feel vibrant, focused, and healthy."
                    </p>
                    <p className="text-gray-600 text-lg">
                       But the stresses of daily life can create dams—blockages that manifest as fatigue, anxiety, or physical pain. Our Energy Restoration pathways are gentle, non-invasive invitations for your body to release these heavy burdens and return to its natural state of luminous flow.
                    </p>
                 </div>

                 {/* Grid for Services */}
                 <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Service 1: Reiki Healing */}
                    <div className="bg-rose-50/30 rounded-3xl p-8 border border-rose-100 hover:shadow-md transition-shadow">
                       <h3 className="font-serif text-2xl text-gray-800 mb-2">Reiki Healing</h3>
                       <p className="text-rose-400 font-medium italic mb-4">The Gentle Wave of Light</p>
                       <p className="text-gray-600 mb-4 leading-relaxed">
                         Reiki is an ancient Japanese technique that channels Universal Life Energy. During a session, you remain fully clothed while I gently place my hands on or just above your body. Think of it as a warm, radiant light pouring into you.
                       </p>
                       <p className="text-sm font-semibold text-gray-700 pt-2 border-t border-rose-100 mt-auto">Benefit: <span className="font-normal text-gray-600">The ultimate nervous system reset. Promotes self-healing, better sleep, and emotional balance.</span></p>
                    </div>

                    {/* Service 2: Animal Reiki */}
                    <div className="bg-orange-50/30 rounded-3xl p-8 border border-orange-100 hover:shadow-md transition-shadow">
                       <div className="flex items-start justify-between">
                          <h3 className="font-serif text-2xl text-gray-800 mb-2">Animal Reiki</h3>
                          <PawPrint className="w-6 h-6 text-orange-300" />
                       </div>
                       <p className="text-orange-400 font-medium italic mb-4">Compassionate Healing for Companions</p>
                       <p className="text-gray-600 mb-4 leading-relaxed">
                         Our pets are deeply intuitive and often take on the emotional weight of their human families. Animal Reiki offers them the same peace and relief we seek for ourselves.
                       </p>
                       <p className="text-sm font-semibold text-gray-700 pt-2 border-t border-orange-100 mt-auto">Best For: <span className="font-normal text-gray-600">Anxiety, Aging & Pain, and End-of-life Transitions. (Virtual or In-home available).</span></p>
                    </div>

                     {/* Service 3: Hypno-Reiki */}
                    <div className="bg-purple-50/30 rounded-3xl p-8 border border-purple-100 hover:shadow-md transition-shadow">
                       <div className="flex items-start justify-between">
                          <h3 className="font-serif text-2xl text-gray-800 mb-2">Hypno-Reiki</h3>
                          <Sparkles className="w-6 h-6 text-purple-300" />
                       </div>
                       <p className="text-purple-400 font-medium italic mb-4">The Ultimate Synergy of Mind & Spirit</p>
                       <p className="text-gray-600 mb-4 leading-relaxed">
                         Why choose between healing the mind and healing the energy body? We begin with hypnosis to quiet the conscious mind, then introduce Reiki energy work while you are in a deep "Theta" state.
                       </p>
                       <p className="text-sm font-semibold text-gray-700 pt-2 border-t border-purple-100 mt-auto">Transformation: <span className="font-normal text-gray-600">Double the healing in a single session—rewiring the brain while recharging the spirit.</span></p>
                    </div>

                    {/* Service 4: Sound Healing */}
                    <div className="bg-blue-50/30 rounded-3xl p-8 border border-blue-100 hover:shadow-md transition-shadow">
                       <div className="flex items-start justify-between">
                          <h3 className="font-serif text-2xl text-gray-800 mb-2">Sound Healing</h3>
                          <Music className="w-6 h-6 text-blue-300" />
                       </div>
                       <p className="text-blue-400 font-medium italic mb-4">Resonance for the Soul</p>
                       <p className="text-gray-600 mb-4 leading-relaxed">
                         We are all made of vibration. Using tools like crystal singing bowls or tuning forks, we bathe you in pure, resonant frequencies that gently massage your cells and break up stagnant energy.
                       </p>
                       <p className="text-sm font-semibold text-gray-700 pt-2 border-t border-blue-100 mt-auto">Benefit: <span className="font-normal text-gray-600">Bypasses the intellectual brain to induce deep meditative peace. A sonic massage for your spirit.</span></p>
                    </div>

                 </div>

                 {/* Safety Note & CTA */}
                 <div className="bg-angelic-gold/10 rounded-2xl p-8 text-center space-y-6">
                    <div className="inline-block p-2 bg-white rounded-full shadow-sm text-angelic-gold">
                       <HeartHandshake className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-gray-800">A Sanctuary of Softness</h4>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                       In a world that is often loud and demanding, these sessions are your permission to pause, receive, and simply be.
                    </p>
                    <div className="pt-4 flex justify-center gap-4">
                        <a href="#contact" onClick={closeModal}>
                           <Button variant="primary">Book a Session</Button>
                        </a>
                        <Button variant="outline" onClick={closeModal}>Close Details</Button>
                     </div>
                 </div>
              </div>
            ) : activeFeature.id === 'mind-transformation' ? (
              // --- LAYOUT 4: MIND & HABIT TRANSFORMATION (EXPANDED) ---
              <div className="p-8 md:p-12 lg:p-16 space-y-12">
                 {/* Header */}
                 <div className="text-center max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-teal-50 text-teal-600 mb-4">
                       <Wind className="w-8 h-8" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
                       Mind & Habit Transformation:<br/>
                       <span className="text-teal-500 italic">Rewiring for Freedom</span>
                    </h2>
                    <p className="font-serif text-xl text-gray-600 leading-relaxed">
                       "Your mind is the architect of your reality."
                    </p>
                    <p className="text-gray-600 text-lg">
                       Often, the limitations we feel—fear, addiction, self-doubt—are simply old scripts playing on a loop in the background. This pathway is about gently pressing 'pause' on those old stories and writing a new, beautiful narrative. It is not about 'fixing' you, because you are not broken. It is about clearing the mental clutter so your true radiance can shine through.
                    </p>
                 </div>

                 {/* Services Stack */}
                 <div className="space-y-8">
                    
                    {/* Service 1: Clinical Hypnotherapy */}
                    <div className="bg-teal-50/40 rounded-[2rem] p-8 md:p-10 border border-teal-100 flex flex-col md:flex-row gap-8 items-center">
                       <div className="flex-1 space-y-4">
                           <div className="flex items-center gap-3">
                               <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600"><Brain className="w-6 h-6" /></div>
                               <h3 className="font-serif text-2xl text-gray-800">Clinical Hypnotherapy</h3>
                           </div>
                           <p className="text-teal-600 font-medium italic">Gentle Guidance for a Peaceful Mind</p>
                           <p className="text-gray-600 leading-relaxed">
                             Forget what you’ve seen in movies. Clinical Hypnotherapy is a state of focused, relaxing concentration—much like getting lost in a good book. You are never "out of control"; in fact, you gain more control.
                           </p>
                           <div className="bg-white/60 rounded-xl p-4 mt-4">
                             <p className="font-semibold text-gray-700 mb-2">The Transformation:</p>
                             <ul className="space-y-2 text-sm text-gray-600">
                               <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> <span><strong>Anxiety Release:</strong> Replace racing thoughts with grounded safety.</span></li>
                               <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> <span><strong>Confidence Building:</strong> Dissolve "imposter syndrome".</span></li>
                               <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> <span><strong>Phobia Clearance:</strong> Gently untangle irrational fears.</span></li>
                             </ul>
                           </div>
                       </div>
                       <div className="w-full md:w-1/3 aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shadow-md relative">
                           <img src="https://images.unsplash.com/photo-1597586616425-45a8986d4948?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="White feather representing lightness of mind" />
                       </div>
                    </div>

                    {/* Service 2 & 3 Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Smoking Cessation */}
                        <div className="bg-emerald-50/40 rounded-[2rem] p-8 border border-emerald-100 flex flex-col">
                           <div className="flex items-center gap-3 mb-2">
                               <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600"><Wind className="w-6 h-6" /></div>
                               <h3 className="font-serif text-2xl text-gray-800">Smoking Cessation</h3>
                           </div>
                           <p className="text-emerald-600 font-medium italic mb-4">Breath of Fresh Air: Reclaiming Your Vitality</p>
                           <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                             You aren’t just "quitting" a habit; you are choosing yourself. We use the power of your subconscious to disconnect the mental and emotional links to smoking, focusing on the freedom of deep breaths rather than deprivation.
                           </p>
                           <p className="text-sm bg-white/60 p-3 rounded-lg text-emerald-800 border border-emerald-100">
                             <strong>The Result:</strong> Walking out indifferent to cigarettes, not deprived. (Bundle available).
                           </p>
                        </div>

                        {/* NLP & EFT */}
                        <div className="bg-cyan-50/40 rounded-[2rem] p-8 border border-cyan-100 flex flex-col">
                           <div className="flex items-center gap-3 mb-2">
                               <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-600"><Fingerprint className="w-6 h-6" /></div>
                               <h3 className="font-serif text-2xl text-gray-800">NLP & EFT (Tapping)</h3>
                           </div>
                           <p className="text-cyan-600 font-medium italic mb-4">Tools for Emotional Alchemy</p>
                           <p className="text-gray-600 leading-relaxed mb-4">
                             Sometimes talk therapy isn't enough. We use NLP (the brain's user manual) and EFT (acupuncture without needles) to physically disrupt stress signals and edit how your brain processes triggers.
                           </p>
                           <div className="mt-auto">
                             <p className="font-semibold text-gray-700 text-sm mb-1">Best For:</p>
                             <p className="text-sm text-gray-600">Rapidly shifting emotional states, overcoming trauma responses, and breaking loops of negative self-talk.</p>
                           </div>
                        </div>
                    </div>

                 </div>

                 {/* Safety Note & CTA */}
                 <div className="bg-angelic-gold/10 rounded-2xl p-8 text-center space-y-6">
                    <div className="inline-block p-2 bg-white rounded-full shadow-sm text-angelic-gold">
                       <Sparkles className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-gray-800">Your New Chapter Begins Here</h4>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                       You have the power to change. I am simply here to hand you the keys.
                    </p>
                    <div className="pt-4 flex justify-center gap-4">
                        <a href="#contact" onClick={closeModal}>
                           <Button variant="primary">Book a Session</Button>
                        </a>
                        <Button variant="outline" onClick={closeModal}>Close Details</Button>
                     </div>
                 </div>
              </div>
            ) : (
              // --- GENERIC LAYOUT FOR OTHER PATHWAYS (Fallback) ---
              <div className="p-8 md:p-12 lg:p-16 space-y-12">
                 {/* Hero Header */}
                 <div className="text-center max-w-4xl mx-auto space-y-6">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-angelic-gold/10 text-angelic-gold mb-2 shadow-sm">
                       {React.cloneElement(activeFeature.icon as React.ReactElement, { className: "w-10 h-10" })}
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
                       {activeFeature.title}
                    </h2>
                    <p className="font-medium text-angelic-gold uppercase tracking-widest">
                       {activeFeature.subtitle}
                    </p>
                    <p className="font-serif text-xl text-gray-600 italic max-w-2xl mx-auto">
                       {activeFeature.shortDescription}
                    </p>
                 </div>
                 
                 {/* Main Content & Image */}
                 <div className="rounded-3xl overflow-hidden shadow-xl aspect-[21/9] relative">
                     <img 
                       src={activeFeature.image} 
                       alt={activeFeature.title} 
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                 </div>

                 {/* Services List */}
                 <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12">
                   <h3 className="font-serif text-3xl text-gray-800 mb-8 text-center">Available Sessions</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                      {activeFeature.services?.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                           <h4 className="font-serif text-xl text-gray-800 mb-2 flex items-center gap-2">
                             <ChevronRight className="w-5 h-5 text-angelic-gold" />
                             {service.name}
                           </h4>
                           <p className="text-gray-600 leading-relaxed pl-7">
                             {service.description}
                           </p>
                        </div>
                      ))}
                   </div>
                 </div>

                 {/* Footer CTA */}
                 <div className="text-center pt-4">
                   <p className="text-lg text-gray-600 mb-8">
                     Ready to begin your journey? I am here to guide you with compassion.
                   </p>
                   <div className="flex justify-center gap-4">
                     <a href="#contact" onClick={closeModal}>
                        <Button variant="primary">Book a Session</Button>
                     </a>
                     <Button variant="outline" onClick={closeModal}>Close Details</Button>
                   </div>
                 </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

const ExploreCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/60 flex flex-col items-center text-center">
     <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
        {icon}
     </div>
     <h4 className="font-serif text-lg font-semibold text-gray-800 mb-2">{title}</h4>
     <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default WellnessTechnology;