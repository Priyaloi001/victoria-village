import React from 'react';
import { Palmtree as PalmTree, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-white mb-4">
              <PalmTree size={24} />
              <span className="font-serif font-semibold text-xl">Victoria Villas</span>
            </div>
            <p className="text-white/80 mb-6">
              Luxury villa investment opportunities in the paradise of Koh Samui, Thailand.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white">Home</a></li>
              <li><a href="#location" className="text-white/80 hover:text-white">Location</a></li>
              <li><a href="#villas" className="text-white/80 hover:text-white">Villas</a></li>
              <li><a href="#amenities" className="text-white/80 hover:text-white">Amenities</a></li>
              <li><a href="#investment" className="text-white/80 hover:text-white">Investment</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Investment Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Investment Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Brochure Download</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Market Analysis</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Legal Framework</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Victoria Villas, Lamai Beach, Koh Samui, Thailand 84320
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-white/80">+66 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-white/80">info@victoriavillas.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Victoria Villas. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;