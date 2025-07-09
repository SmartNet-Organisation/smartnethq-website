import React from 'react';
import { Triangle as Eagle, Github, Linkedin, Twitter, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Eagle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SmartNetHQ</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building secure, scalable digital infrastructure for Africa's growing economy.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/smartnethq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://web.facebook.com/people/Smartnethq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/SmartNet-Organisation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">API Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SmartNet Labs</a></li>
              <li>
                <a 
                  href="https://hashnode.com/@SmartNetHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:smartsnets@gmail.com" className="hover:text-white transition-colors">
                  smartsnets@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <div className="flex flex-col space-y-1">
                  <a href="https://wa.me/2349061464393" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +234 906 146 4393
                  </a>
                  <a href="https://wa.me/2348113251635" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +234 811 325 1635
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Edo, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SmartNetHQ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;