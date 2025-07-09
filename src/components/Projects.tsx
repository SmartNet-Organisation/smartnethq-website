import React from 'react';
import { ExternalLink } from 'lucide-react';

// Import all project images
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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
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