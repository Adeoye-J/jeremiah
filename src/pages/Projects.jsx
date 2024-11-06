// import React from 'react';
import { motion } from 'framer-motion';

// const projects = [
//   { name: "Project 1", description: "Description for Project 1" },
//   { name: "Project 2", description: "Description for Project 2" },
//   { name: "Project 3", description: "Description for Project 3" },
// ];

// const Projects = () => (
//   <motion.div 
//     initial={{ opacity: 0 }} 
//     animate={{ opacity: 1 }}
//     className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
//   >
//     <h2 className="text-3xl font-bold mb-4">Projects</h2>
//     {projects.map((project, index) => (
//       <motion.div 
//         key={index}
//         whileHover={{ scale: 1.05 }}
//         className="bg-gray-800 p-6 rounded-lg"
//       >
//         <h3 className="text-xl font-semibold">{project.name}</h3>
//         <p className="text-gray-400">{project.description}</p>
//       </motion.div>
//     ))}
//   </motion.div>
// );

// export default Projects;


import React from 'react';

// Sample data for portfolio projects
const projects = [
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
    title: 'To-do List',
    description: 'A ReactJS app that enables users to add, update, and remove tasks from a to-do list.',
    image: '/path/to/to-do-list.jpg',
  },
  // {
  //   title: 'AI Image Generator',
  //   description: 'A web app that generates images from entered text using OpenAI and the DALL-E.',
  //   image: '/path/to/ai-image-generator.jpg',
  // },
  // {
  //   title: 'Registration Form',
  //   description: 'A registration form for new users built with ReactJS.',
  //   image: '/path/to/registration-form.jpg',
  // },
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
