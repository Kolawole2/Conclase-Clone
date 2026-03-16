import React from "react";
import { FaRegCompass } from "react-icons/fa6";
import mapwrap from "../../assets/mapwrap.png";
import redhat from "../../assets/red_hat.png";
import ibm from "../../assets/ibm.png";
import microsoft from "../../assets/microsoft.png";
import sage_logo from "../../assets/sage_logo.png";
import sage from "../../assets/sage.png";
import suse from "../../assets/suse_logo.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#0E2455] flex flex-col items-center">
      {/* Text container*/}
      <div className="max-w-7xl w-full mt-16 text-white px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left text */}
          <div>
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Conclase is a global
            </span>

            <div className="mt-4">
              <span className="text-yellow-400 font-bold text-3xl md:text-5xl lg:text-6xl">
                Tech
              </span>
              <span className="ml-3 font-bold text-3xl md:text-5xl lg:text-6xl">
                Company
              </span>
            </div>
          </div>

          {/* Right text */}
          <div className="max-w-7xl">
            <p className="text-base md:text-lg">
              Conclase is a leading tech company in Africa offering tech
              recruiting, tech start-up studio and world-class tech education.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-center px-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                <FaRegCompass className="mr-2 text-black" />
                <span className="text-[#0E2455]">Hire a Talent</span>
              </div>

              <div className="flex items-center justify-center px-11 py-3 rounded-full bg-white/20 cursor-pointer">
                
                <span>Learn a Tech skill</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 w-full h-px bg-gray-700"></div>

        {/* Achievements */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex gap-4">
            <span className="text-yellow-300 text-7xl font-bold">4</span>
            <div>
              <span className="font-bold">Our Business</span>
              <p className="text-gray-400 text-sm">
                We run 4 businesses in 5 countries across the world
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-yellow-300 text-7xl font-bold">1K+</span>
            <div>
              <span className="font-bold">Tech Talents recruited</span>
              <p className="text-gray-400 text-sm">
                We recruited 1000+ tech talents across 50+ countries
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-yellow-300 text-7xl font-bold">500+</span>
            <div>
              <span className="font-bold">Tech Talents Trained</span>
              <p className="text-gray-400 text-sm">
                We've trained over 1000 students in our academy
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex justify-center mt-16">
          <img src={mapwrap} className="w-full max-w-5xl" />
        </div>
      </div>

      {/* Clients */}
      <div className="w-full bg-white rounded-t-[60px] text-center mt-16 py-12">
        <h2 className="text-3xl md:text-4xl font-medium">Our Clients</h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-lg lg:text-xl px-2">
          We are trusted by clients who generated more than $10M from our
          solutions
        </p>

        <div className="flex flex-wrap justify-between items-center gap-4 mt-10 max-w-7xl mx-auto px-6">
          <img src={suse} className="h-15" />
          <img src={redhat} className="h-15" />
          <img src={sage_logo} className="h-15" />
          <img src={sage} className="h-15" />
          <img src={ibm} className="h-15" />
          <img src={microsoft} className="h-15" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
