import React, { useState } from 'react';
import { Menu, X, Triangle as Eagle, ChevronDown, Code, Database, Cog, Smartphone, Globe, Shield } from 'lucide-react';

interface HeaderProps {
  onRequestSolution?: () => void;
}

const Header = ({ onRequestSolution }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      category: "API & SaaS Tools",
      icon: <Database className="w-4 h-4" />,
      items: ["Fraud Detection APIs", "Job Scam Prevention", "Identity Verification", "Data Validation Tools"]
    },
    {
      category: "Custom Development",
      icon: <Code className="w-4 h-4" />,
      items: ["Custom Websites", "Web Applications", "Mobile Apps (iOS & Android)", "Enterprise Platforms"]
    },
    {
      category: "Custom Engineering",
      icon: <Cog className="w-4 h-4" />,
      items: ["Enterprise Cybersecurity", "Digital Trust Platforms", "API Integration Solutions", "Cloud Infrastructure"]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Eagle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SmartNetHQ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="space-y-6">
                    {services.map((service, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="text-blue-600">{service.icon}</div>
                          <h4 className="font-semibold text-gray-900">{service.category}</h4>
                        </div>
                        <ul className="space-y-2 ml-6">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition-colors">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a 
                      href="#services" 
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>View All Services</span>
                      <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#labs" className="text-gray-700 hover:text-blue-600 transition-colors">Labs</a>
            <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</a>
            <a 
              href="https://hashnode.com/@SmartNetHQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Explore APIs
            </button>
            <button 
              onClick={onRequestSolution}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-medium"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#labs" className="text-gray-700 hover:text-blue-600 transition-colors">Labs</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</a>
              <a 
                href="https://hashnode.com/@SmartNetHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Blog
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
                <button className="text-blue-600 font-medium text-left">Explore APIs</button>
                <button 
                  onClick={onRequestSolution}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;