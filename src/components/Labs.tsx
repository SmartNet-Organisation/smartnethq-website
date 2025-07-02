import React from 'react';
import { Beaker, Github, BookOpen, Users, Lightbulb, Rocket } from 'lucide-react';

const Labs = () => {
  return (
    <section id="labs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
              <Beaker className="w-4 h-4" />
              <span className="font-medium">SmartNetHQ Labs</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovation Through Research
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Our Labs division drives R&D, developer training, and open-source initiatives 
              that shape the future of African tech infrastructure.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Github className="w-5 h-5" />, title: "Open Source", desc: "Contributing to the community" },
                { icon: <BookOpen className="w-5 h-5" />, title: "Documentation", desc: "Comprehensive developer guides" },
                { icon: <Users className="w-5 h-5" />, title: "Blogs", desc: "Dive deep into African tech insights and innovation stories" },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Research", desc: "Cutting-edge tech solutions" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
                Explore Labs
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                Join Community
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "AI Research", color: "bg-blue-500" },
                  { title: "Blockchain", color: "bg-teal-500" },
                  { title: "Security", color: "bg-orange-500" },
                  { title: "Mobile Tech", color: "bg-purple-500" }
                ].map((project, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                    <div className={`w-8 h-8 ${project.color} rounded-lg mb-3`}></div>
                    <h4 className="font-semibold text-gray-900 mb-1">{project.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <Rocket className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labs;