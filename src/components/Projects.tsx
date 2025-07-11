import React from 'react';
import { ExternalLink } from 'lucide-react';

// Import all project images with exact file names from assets folder
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center';
                      fallbackDiv.innerHTML = `
                        <div class="text-center p-4">
                          <div class="w-12 h-12 mx-auto mb-3 text-blue-600">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <p class="text-sm font-medium text-gray-700">${project.title}</p>
                        </div>
                      `;
                      parent.appendChild(fallbackDiv);
                    }
                  }}
                />
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