import React from 'react';
import { motion } from 'framer-motion';

const skills = ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"];
const skillsList = [
  {
    name: "HTML",
    logo: "/images/html.png"
  },
  {
    name: "CSS",
    logo: "/images/css.png"
  },
  {
    name: "JavaScript",
    logo: "/images/javascript.png"
  },
  {
    name: "React JS",
    logo: "/images/react.png"
  },
  {
    name: "Next.js",
    logo: "/images/nextjs.png"
  },
  {
    name: "Tailwind CSS",
    logo: "/images/tailwindcss.png"
  },
  {
    name: "Bootstrap",
    logo: "/images/bootstrap.jpg"
  },
  {
    name: "Sass",
    logo: "/images/sass.png"
  },
  {
    name: "Redux",
    logo: "/images/redux.png"
  },
  {
    name: "Firebase",
    logo: "/images/firebase.png"
  },
  {
    name: "Git",
    logo: "/images/git.png"
  },
  {
    name: "Github",
    logo: "/images/github.jpg"
  },
  {
    name: "Node Js",
    logo: "/images/ndejs.png"
  },
  {
    name: "Express JS",
    logo: "/images/express.png"
  }
]

const Skills = () => (
  <motion.div 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-50 p-10"
  >
    <h2 className="text-4xl font-bold mb-4 text-gray-800">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillsList.map((skill, index) => (
        <div key={index} className="p-4 border-2 border-red-600 rounded-md text-center flex flex-col items-center gap-12">
          <div className="w-28 h-28">
            <img src={skill.logo} alt={skill.name} className='w-full h-full rounded-md object-cover'/>
          </div>
          <p className='font-bold text-red-600 text-lg'>{skill.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
