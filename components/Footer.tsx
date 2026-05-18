import React from 'react';
import { CONTACT_INFO } from '../constants';
import Button from './Button';
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#E6DCD3] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Text Info */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl text-gray-800">
              Speak to your soul, <br/>
              <span className="text-white drop-shadow-md italic">achieve your dreams.</span>
            </h2>
            <p className="text-gray-700 max-w-md leading-relaxed">
              Whether you have questions about a modality or are ready to book your first session, I am here to listen. Reach out, and let's begin your journey.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                   <Mail className="w-5 h-5 text-angelic-gold" />
                </div>
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                   <MapPin className="w-5 h-5 text-angelic-gold" />
                </div>
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
                <a href={CONTACT_INFO.facebook} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-angelic-gold transition-colors shadow-sm">
                    <Facebook className="w-5 h-5" />
                </a>
                 <a href={CONTACT_INFO.instagram} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-angelic-gold transition-colors shadow-sm">
                    <Instagram className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-angelic-gold focus:border-transparent transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-angelic-gold focus:border-transparent transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-angelic-gold focus:border-transparent transition-all outline-none resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button fullWidth type="submit">Send Message</Button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-400/20 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Graceful Guidance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;