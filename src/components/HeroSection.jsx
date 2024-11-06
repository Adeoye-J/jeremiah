import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 p-8 md:p-20">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-lg font-semibold">Hi There, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold">Jeremiah Bankole</h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold relative flex ">
                <>Frontend Web Developer</>
                <span className="block w-12 h-1 bg-red-600 mt-1"></span>
            </h2>
            <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-red-700">
                Contact Me
            </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
            <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
            {/* Dotted Circle */}
            <div className="absolute inset-0 border-dotted border-2 border-gray-400 rounded-full" style={{ margin: '20px' }}></div>
            {/* Image */}
            <img
                src="/jeremiah.png"
                alt="Dezven Indiana"
                className="w-full h-full rounded-full border-8 border-red-600 shadow-lg object-cover relative z-10"
            />
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
