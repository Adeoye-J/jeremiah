import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div 
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-10 space-y-4"
  >
    <h2 className="text-3xl font-bold">About Me</h2>
    <p className="text-gray-400 leading-relaxed">
      I'm a web developer with a background in [Your Background].
      I specialize in building responsive, high-performance websites using the latest tools and techniques.
    </p>
  </motion.div>
);

export default About;
