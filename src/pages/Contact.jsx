import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="p-10 space-y-4"
  >
    <h2 className="text-3xl font-bold">Contact Me</h2>
    <form className="flex flex-col space-y-4 max-w-md">
      <input type="text" placeholder="Name" className="p-2 rounded-md bg-gray-700 text-white" />
      <input type="email" placeholder="Email" className="p-2 rounded-md bg-gray-700 text-white" />
      <textarea placeholder="Message" className="p-2 rounded-md bg-gray-700 text-white" rows="4"></textarea>
      <button 
        type="submit" 
        className="py-2 bg-indigo-600 text-white rounded-md"
        whileHover={{ scale: 1.1 }}
      >
        Send
      </button>
    </form>
  </motion.div>
);

export default Contact;
