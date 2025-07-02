import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our archive of innovative digital solutions. From cutting-edge web applications
            to enterprise platforms, discover the diverse range of projects we've crafted for clients
            across Africa and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* MNTN Hub Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/mtn-s copy.png"
                alt="MNTN Hub - Mountain Hiking Guide"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://mntn-hub.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* BrandDosage Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/bra copy.png"
                alt="BrandDosage - Experiential Marketing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://brand-dosage.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* HR Hub Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/hrhub copy.png"
                alt="HR Hub - Workforce Management Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://hrhubconnect.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* Earl Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/earl copy.png"
                alt="Earl - Professional Networking Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://ear1-tech.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>

        {/* Second row of projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* FinAI Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/fin ai.png"
                alt="FinAI - AI-Powered Trading Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://finai-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* Apex Fitness Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/fitness.png"
                alt="Apex Fitness - Fitness Club Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://fitnes-company.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* Jemap Laundry Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/laundry.png"
                alt="Jemap Laundry - Laundry Service Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://jemap-laundry.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>


          </div>

          {/* Jemap Laundry Project Card */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="/src/assets/emed.png"
                alt="Jemap Laundry - Laundry Service Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Action Button */}
              <a
                href="https://emedatt-telehealth.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </div>


          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;