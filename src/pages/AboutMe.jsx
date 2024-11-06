import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="flex gap-4 flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-10">
      {/* Left Section with Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <div className="w-[400px] h-[400px] bg-red-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="/jeremiah.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="md:w-1/2 w-full space-y-4 text-center md:text-left animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        <h3 className="text-xl font-semibold text-red-600">Jeremiah Bankole - Frontend Web Developer</h3>
        <p className="text-gray-600 text-left">
          Hey there! 👋 I'm Jeremiah Bankole, a frontend developer with a passion for turning ideas into beautiful, functional websites. I spend my days crafting interfaces with React, styling them to perfection with Tailwind CSS, and making sure everything works smoothly with JavaScript (and a sprinkle of TypeScript when things get fancy).
          <br /><br />
          I believe in writing clean, maintainable code and am constantly experimenting with new technologies and techniques. Web development is like an endless puzzle to me, and I enjoy every piece of it—whether I'm debugging a tricky error or adding the finishing touches to make a site look just right.
          <br /><br />
          When I'm not coding, you might find me browsing the latest frontend trends, leveling up my skills with new frameworks, or brainstorming my next project (always with a coffee in hand, of course ☕).
          <br /><br />
          Here’s to creating delightful user experiences and bringing ideas to life, one line of code at a time! 🚀
          <br /><br />
          Let’s build something awesome together!
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4 text-gray-700">
          <a href="#" className="hover:text-red-600 text-2xl"><FaInstagram /></a>
          <a href="#" className="hover:text-red-600 text-2xl"><FaTwitter /></a>
          <a href="#" className="hover:text-red-600 text-2xl"><FaLinkedin /></a>
          <a href="#" className="hover:text-red-600 text-2xl"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
