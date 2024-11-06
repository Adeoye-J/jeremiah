// import React from 'react';
// import { motion } from 'framer-motion';

// const Home = () => (
//   <section id="home" className="bg-blue-50 py-20 px-4 md:px-0">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 space-y-4">
//           <p className="text-lg">Hello,</p>
//           <h1 className="text-5xl font-bold text-gray-800">
//             I'm <span className="text-blue-600">Jeremiah Bankole</span>
//           </h1>
//           <p className="text-xl text-blue-600">Frontend Web Developer</p>
//           <p className="text-gray-600">From Nigeria</p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-blue-600 text-white px-6 py-2 mt-4 font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
//           >
//             Hire Me
//           </motion.button>
//         </div>
        
//         <div className="md:w-1/2 mt-8 md:mt-0">
//           <img
//             src="/jeremiah.png"
//             alt="Profile"
//             className="w-3/4 mx-auto rounded-full shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
// );

// export default Home;


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 p-8 md:p-20 min-h-[100vh]">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <p className="text-lg font-semibold">Hi There, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold">Jeremiah Bankole</h1>
        <h2 className="text-2xl md:text-3xl text-red-600 font-semibold relative">
          Frontend Web Developer
          <span className="block w-12 h-1 bg-red-600 mt-2 m-auto md:m-0 md:mt-2"></span>
        </h2>
        <p className="text-gray-600">
          Creative Frontend Developer passionate about building visually stunning, user-friendly web experiences. Skilled in React, JavaScript, and modern web design.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-red-700">
          <Link to={"/contact"}>Contact Me</Link>
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {/* Dotted Circle */}
          <div className="absolute inset-0 border-dotted border-2 border-gray-400 rounded-full" style={{ margin: '20px' }}></div>
          {/* Image */}
          <img
            src="/jeremiah.png"
            alt="Jeremiah Bankole"
            className="w-full h-full rounded-full border-8 border-red-600 shadow-lg object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
