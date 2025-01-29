import React from 'react';
import { motion } from 'framer-motion';
import { link } from 'framer-motion/client';

const projects = [
    {
        title: "CareSync - Doctor's Appointments Made Easy",
        description: 'A platform that helps patients book appointments with doctors and specialists.',
        image: '/images/caresync.png',
        link: "https://caresync-frontend.onrender.com/",
    },
    {
        title: 'Tinka',
        description: 'A website that helps one Reclaim his or her Mental Health Stability - React, Tailwind, Shadcn',
        image: '/images/tinka.png',
        link: "https://tinkahealthservices.com/",
    },
    {
        title: 'Care Dental',
        description: 'A user-friendly platform that connects individuals with affordable dental care solutions.',
        image: '/images/caredental.png',
        link: "https://caredentalsavings.com/",
    },
    {
        title: 'BlogSphere',
        description: 'A blog hub for reading, commenting, and discovering similar books from favorite authors.',
        image: '/images/elevate.png',
        link: "https://elevate-lemon.vercel.app",
    },
    {
        title: 'VBookStore',
        description: 'Online bookstore with categories, favorites, and seamless cart/purchase options.',
        image: '/images/vbook.png',
        link: "https://v-book-one.vercel.app",
    },
    {
        title: 'Tratour',
        description: 'Tour booking site with details, search, and favorites for a personalized experience.',
        image: '/images/tratour.png',
        link: "https://tratour.vercel.app",
    },
    {
        title: 'Eduventure',
        description: 'A student marketplace for showcasing skills, hiring, and buying services or products.',
        image: '/images/eduventure.png',
        link: "https://eduventure-omega.vercel.app",
    },
    {
        title: 'World Atlas',
        description: 'This is a React-based web application that provides detailed information about countries around the world.',
        image: '/images/world_atlas.png',
        link: "https://world-atlas-ten.vercel.app/",
    }
];

function Projects() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-12 px-4 md:px-16 lg:px-24"
    >
      <h2 className='text-4xl font-bold text-gray-800 mb-8'>My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col items-start justify-between">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">{project.description}</p>

              <a href={project.link} target='_blank' className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
