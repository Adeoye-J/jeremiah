import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <img src="/images/jeremiah_logo.png" alt="" className='h-12 w-auto' />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        <div className={`md:flex items-center ${isOpen ? 'z-30 absolute right-0 top-16 bg-white h-[100vh] w-full' : 'hidden'}`}>
          <ul className={`md:flex md:space-x-8 font-semibold ${isOpen ? ' flex flex-col gap-6 text-[1.4rem] items-center p-8' : 'hidden'}`}>
            <Link to="/" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-red-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/skills" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/contact" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Contact</Link>

            <div className="flex justify-center md:justify-start space-x-4 mt-4 text-gray-700">
              <a href="https://www.linkedin.com/in/jeremiah-bankole/" target="_blank" className="hover:text-red-600 text-2xl"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@havefunwithtech" target="_blank" className="hover:text-red-600 text-2xl"><FaYoutube /></a>
              <a href="https://github.com/Adeoye-J" target="_blank" className="hover:text-red-600 text-2xl"><FaGithub /></a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
