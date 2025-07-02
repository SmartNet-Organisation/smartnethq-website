import React from 'react';
import { Code, Database, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: "API & SaaS Tools",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Fraud Detection APIs",
        "Job Scam Prevention",
        "Identity Verification",
        "Data Validation Tools"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Custom Development",
      icon: <Code className="w-6 h-6" />,
      items: [
        "Custom Websites",
        "Web Applications",
        "Mobile Apps (iOS & Android)",
        "Enterprise Platforms"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      category: "Custom Engineering",
      icon: <Cog className="w-6 h-6" />,
      items: [
        "Enterprise Cybersecurity",
        "Digital Trust Platforms",
        "API Integration Solutions",
        "Cloud Infrastructure"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From secure APIs to custom applications, we build the digital infrastructure 
            that powers Africa's most innovative companies.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.category}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;