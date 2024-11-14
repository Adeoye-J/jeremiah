import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 p-8 md:p-20 min-h-[100vh]">
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
        {/* <div className="flex items-center gap-3">
          <Link to="https://www.linkedin.com/in/jeremiah-bankole/" target="_blank">
            <FaLinkedin size={25} className="text-red-600 cursor-pointer hover:text-red-700" />
          </Link>
          <Link to="https://www.youtube.com/@havefunwithtech" target="_blank">
            <FaYoutube size={25} className="text-red-600 cursor-pointer hover:text-red-700" />
          </Link>
          <Link to="https://github.com/Adeoye-J" target="_blank">
            <FaGithub size={25} className="text-red-600 cursor-pointer hover:text-red-700" />
          </Link>
        </div> */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4 text-gray-700">
          <a href="https://www.linkedin.com/in/jeremiah-bankole/" target="_blank" className="hover:text-red-600 text-2xl"><FaLinkedin /></a>
          <a href="https://www.youtube.com/@havefunwithtech" target="_blank" className="hover:text-red-600 text-2xl"><FaYoutube /></a>
          <a href="https://github.com/Adeoye-J" target="_blank" className="hover:text-red-600 text-2xl"><FaGithub /></a>
        </div>
      </div>

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
