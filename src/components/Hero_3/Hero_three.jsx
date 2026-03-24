import React from "react";
import Example from "../../assets/assets_two/example.png";
import Talent from "../../assets/assets_two/Talent_Pool.png";
import family from "../../assets/assets_two/family.png";
import dim_logo from "../../assets/assets_two/dim_logo.png";
import consultant from "../../assets/assets_two/Consultant.png";
import { MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const Hero_three = () => {
  return (
    <>
      {/* Text container */}
      <div className="bg-gray-50 flex flex-col w-full items-center justify-center">
        {/* first text */}
        <div className="flex justify-center items-center py-11 max-w-lg">
          <span className="fadein text-[10px] md:text-[13.5px] font-sans text-gray-400">
            SUBMIT YOUR RESUME
          </span>
        </div>
        {/* second text */}
        <div className="flex flex-row justify-between max-w-7xl text-black/65 gap-1 text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="lg:mr-2 mr-1">Join Our</span>
          <span className="text-yellow-400 lg:mr-2 mr-1">Talent Pool</span>
        </div>
        {/* third text */}
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-4 md:mt-10 text-gray-600 font-normal">
          <p className="text-sm md:text-lg">
            Looking for your next opportunity in tech? Submit your resume to be
          </p>
          <p className="text-sm md:text-lg">
            considered for exciting roles with our partner companies. We connect
          </p>
          <p className="text-sm md:text-lg">
            talented professionals with leading organization across the globe
          </p>
        </div>
        {/* Talent request */}
        <a href="/submit/one"><div className="mt-10 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <span className="font-semibold">Join the Community</span>
        </div></a>
        {/* Examples */}
        <div className="py-3 w-full">
          <img src={Example} className="w-full"></img>
        </div>
      </div>
      {/* Why join our talent pool */}
      <div className="bg-[#0E2455] flex items-center justify-center flex-col">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-200 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Why Join Our Talent Pool?
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-2 sm:mt-4 md:mt-8 text-white/80 font-normal">
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            At Conclase Academy, we understand that technical expertise alone
            isn't enough for long-term career
          </p>
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            success. Our unique approach combines:
          </p>
        </div>
        <div className="py-4 sm:py-10">
          <img src={Talent}></img>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center text-white/80 font-normal">
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            At Conclase Academy, we understand that technical expertise alone
            isn't enough for long-term career
          </p>
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            success. Our unique approach combines:
          </p>
        </div>
        <a href="/submit/one"><div className="mt-10 flex items-center justify-center px-25 mb-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <span className="font-semibold">Submit your Resume</span>
        </div></a>
      </div>
      {/* What Happens next */}
      <div className="bg-white flex  w-full items-center justify-center px-6">
        {/* container */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
          {/* left text */}
          <div className="flex flex-col text-center mt-5 lg:mt-0 lg:text-left w-full max-w-md">
            <div className="px-auto">
              <span className=" text-blue-900 text-3xl md:text-3xl lg:text-4xl font-semibold">
                What Happens Next
              </span>
            </div>
            <div className="mt-6 flex text-left ml-10 lg:ml-0  justify-between gap-5 flex-col">
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                1️⃣ Our team reviews your profile (2-3 business days)
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                2️⃣ We contact you for additional information if needed
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                3️⃣ Your profile is matched with suitable opportunities
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                4️⃣ We reach out when there's a potential match
              </p>
            </div>
          </div>
          <div className="py-6 sm:py-12 md:py-20 w-full flex justify-center lg:justify-end">
            <img src={family} className=""></img>
          </div>
        </div>
      </div>
      {/* Consultation cards */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="overflow-hidden rounded-2xl">
            <img src={consultant} className="w-full h-full object-cover" />
          </div>

          {/* Contact Card */}
          <div className="bg-gray-100 border-1 border-gray-200 rounded-2xl p-10 flex flex-col justify-between">
            {/* Top text */}
            <div>
              <span className="text-gray-400 uppercase text-sm font-semibold tracking-wide">
                Contact Us
              </span>

              <h2 className="text-blue-900 text-4xl font-bold mt-4">
                Got any questions?
              </h2>
            </div>

            {/* Bottom section */}
            <div className="flex items-end justify-between mt-10">
              <a href="/contact"><div className="flex text-center items-end gap-3 sm:gap-5 lg:gap-9 justify-between mb-3 sm:mb-1 lg:mb-4 cursor-pointer group px-10 sm:px-20 lg:px-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 font-semibold">
                <span className="flex  text-[12px] sm:text-[17px] md:text-[14px] lg:text-[17px]">
                  Contact Us
                </span>
                <MdArrowOutward className="group-hover:hidden mb-0 sm:mb-1 md:mb-0.5 lg:mb-1" />
                <MdArrowForward className="hidden group-hover:block mb-0 sm:mb-1 md:mb-0.5 lg:mb-1" />
              </div></a>

              <img src={dim_logo} className="w-28 opacity-40 lg:w-40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_three;
