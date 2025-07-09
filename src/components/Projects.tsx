import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

// Import all project images with correct paths
import mtnImage from '../assets/mtn-s copy.png';
import brandDosageImage from '../assets/bra copy.png';
import hrHubImage from '../assets/hrhub copy.png';
import earlImage from '../assets/earl copy.png';
import finAiImage from '../assets/fin ai.png';
import fitnessImage from '../assets/fitness.png';
import laundryImage from '../assets/laundry.png';
import emedImage from '../assets/emed.png';

const Projects = () => {
  const projects = [
    {
      title: "MNTN Hub - Mountain Hiking Guide",
      image: mtnImage,
      url: "https://mntn-hub.netlify.app/"
    },
    {
      title: "BrandDosage - Experiential Marketing",
      image: brandDosageImage,
      url: "https://brand-dosage.netlify.app/"
    },
    {
      title: "HR Hub - Workforce Management Platform",
      image: hrHubImage,
      url: "https://hrhubconnect.netlify.app/"
    },
    {
      title: "Earl - Professional Networking Platform",
      image: earlImage,
      url: "https://ear1-tech.netlify.app/"
    },
    {
      title: "FinAI - AI-Powered Trading Platform",
      image: finAiImage,
      url: "https://finai-react.vercel.app/"
    },
    {
      title: "Apex Fitness - Fitness Club Platform",
      image: fitnessImage,
      url: "https://fitnes-company.onrender.com/"
    },
    {
      title: "Jemap Laundry - Laundry Service Platform",
      image: laundryImage,
      url: "https://jemap-laundry.onrender.com/"
    },
    {
      title: "Emed - Telehealth Platform",
      image: emedImage,
      url: "https://emedatt-telehealth.vercel.app/"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm leading-tight">
                  {project.title}
                </h3>
                
                {/* Action Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;