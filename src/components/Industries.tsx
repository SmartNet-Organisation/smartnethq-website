import React from 'react';
import { Building2, Briefcase, GraduationCap, Heart, DollarSign, Rocket, Users, ShoppingCart } from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: <DollarSign className="w-8 h-8" />, name: "Fintech", desc: "Secure payment processing" },
    { icon: <Building2 className="w-8 h-8" />, name: "GovTech", desc: "Digital government services" },
    { icon: <Briefcase className="w-8 h-8" />, name: "HR & Recruitment", desc: "Fraud-free hiring" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "Education", desc: "Safe learning platforms" },
    { icon: <Heart className="w-8 h-8" />, name: "Healthcare", desc: "Secure patient data" },
    { icon: <Rocket className="w-8 h-8" />, name: "Startups", desc: "Scalable infrastructure" },
    { icon: <ShoppingCart className="w-8 h-8" />, name: "E-commerce", desc: "Trust & verification" },
    { icon: <Users className="w-8 h-8" />, name: "Social Impact", desc: "Community solutions" }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From fintech to healthcare, we provide secure, scalable solutions 
            tailored for Africa's diverse digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Across Africa</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've successfully delivered secure, scalable solutions across multiple industries, 
              helping businesses and organizations build trust in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;