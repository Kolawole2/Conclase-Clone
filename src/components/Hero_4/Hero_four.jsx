import React from "react";
import Lecture from "../../assets/assets_two/Lecture.png";
import one from "../../assets/assets_two/Approach_one.png";
import two from "../../assets/assets_two/Approach_two.png";
import three from "../../assets/assets_two/Approach_three.png";
import four from "../../assets/assets_two/Approach_four.png";
import Customtraining from "../../assets/assets_two/Customtraining.png";
import core from "../../assets/assets_two/core.png";
import dim_logo from "../../assets/assets_two/dim_logo.png";
import { MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import consultant from "../../assets/assets_two/Consultant.png";

const Hero_four = () => {
  return (
    <>
      {/* Text container */}
      <div className="bg-gray-50 flex flex-col w-full items-center justify-center">
        {/* first text */}
        <div className="flex justify-center items-center py-11 max-w-lg">
          <span className="fadein text-[10px] md:text-[13.5px] font-sans text-gray-400">
            ENTERPRISE CUSTOM TRAINING
          </span>
        </div>
        {/* second text */}
        <div className="flex flex-row justify-between max-w-7xl text-black/65 gap-1 text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="lg:mr-2 mr-1">Transform Your</span>
          <span className="text-blue-900 lg:mr-2 mr-1">Workforce</span>
        </div>
        {/* third text */}
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-4 md:mt-10 text-gray-600 font-normal">
          <p className="text-sm md:text-lg">
            Elevate your team's capabilities with customized technical training
            tailored to your
          </p>
          <p className="text-sm md:text-lg">
            organization's unique needs and objectives. Whether you are adopting
            new
          </p>
          <p className="text-sm md:text-lg">
            technologies, upskilling your workforce, or transforming your
            technical capabilities, we
          </p>
          <p className="text-sm md:text-lg">
            deliver specialized training solutions that drive real business
            results
          </p>
        </div>
        {/* Custom request */}
        <div className="mt-10 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <span className="font-semibold">Request for Custom Training</span>
        </div>
        {/* Lectures */}
        <div className="py-3 w-full flex items-center justify-center mt-5 md:mt-10">
          <img src={Lecture} className="w-full max-w-7xl"></img>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-900 text-3xl md:text-3xl lg:text-4xl gap-1 font-semibold">
            Our Approach
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-3 md:mt-5 text-gray-600 font-normal">
          <p className="text-[15px] sm:text-sm md:text-lg">
            At Conclase Academy, we understand that technical expertise alone
            isn't enough for long-
          </p>
          <p className="text-[15px] sm:text-sm md:text-lg">
            term career success. Our unique approach combines:
          </p>
        </div>
      </div>
      {/* D & A */}
      <div className="bg-white flex  w-full items-center justify-center px-6">
        {/* container */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
          {/* left text */}
          <div className="flex flex-col text-center mt-5 lg:mt-0 lg:text-left w-full max-w-md">
            <div className="mb-4">
              <span className="font-extrabold text-7xl text-gray-200">1</span>
            </div>
            <div className="px-auto">
              <span className=" text-blue-900 text-3xl md:text-3xl lg:text-4xl font-semibold">
                Discovery & Assessment
              </span>
            </div>
            <div className="mt-6 flex text-left ml-15 lg:ml-0  justify-between gap-5 flex-col">
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Initial consultation to understand your goals
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Skills gap Analysis
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Technology stack evaluation
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Training needs assessment
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Timeline and resource planning
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="py-6 sm:py-12 md:py-20 w-full flex justify-center lg:justify-end">
            <img src={one} className=""></img>
          </div>
        </div>
      </div>
      {/* C P D */}
      <div className="bg-white flex  w-full items-center justify-center px-6">
        {/* container */}
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="py-6 sm:py-12 md:py-20 w-full flex justify-center lg:justify-start">
            <img src={two} className=""></img>
          </div>
          {/* right text */}
          <div className="flex flex-col text-center mt-5 lg:mt-0 lg:text-left w-full max-w-md">
            <div className="mb-4">
              <span className="font-extrabold text-7xl text-gray-200">2</span>
            </div>
            <div className="px-auto">
              <span className=" text-blue-900 text-3xl md:text-3xl lg:text-4xl font-semibold">
                Custom Program Development
              </span>
            </div>
            <div className="mt-6 flex text-left ml-15 lg:ml-0  justify-between gap-5 flex-col">
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Tailored curriculum design
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Company-specific case studies
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Custom projects and exercises
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Blended learning approach
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Assessment framework
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Flexible I */}
      <div className="bg-white flex  w-full items-center justify-center px-6">
        {/* container */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
          {/* left text */}
          <div className="flex flex-col text-center mt-5 lg:mt-0 lg:text-left w-full max-w-md">
            <div className="mb-4">
              <span className="font-extrabold text-7xl text-gray-200">3</span>
            </div>
            <div className="px-auto">
              <span className=" text-blue-900 text-3xl md:text-3xl lg:text-4xl font-semibold">
                Flexible Implementation
              </span>
            </div>
            <div className="mt-6 flex text-left ml-15 lg:ml-0  justify-between gap-5 flex-col">
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ On-site or remote delivery
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Expert instructors with industry experience
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Interactive sessions
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Hands-on workshops
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Real-time support and guidance
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="py-6 sm:py-12 md:py-20 w-full flex justify-center lg:justify-end">
            <img src={three} className=""></img>
          </div>
        </div>
      </div>
      {/* Continous S */}
      <div className="bg-white flex  w-full items-center justify-center px-6">
        {/* container */}
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="py-6 sm:py-12 md:py-20 w-full flex justify-center lg:justify-start">
            <img src={four} className=""></img>
          </div>
          {/* right text */}
          <div className="flex flex-col text-center mt-5 lg:mt-0 lg:text-left w-full max-w-md">
            <div className="mb-4">
              <span className="font-extrabold text-7xl text-gray-200">4</span>
            </div>
            <div className="px-auto">
              <span className=" text-blue-900 text-3xl md:text-3xl lg:text-4xl font-semibold">
                Continous Support
              </span>
            </div>
            <div className="mt-6 flex text-left ml-25 lg:ml-0  justify-between gap-5 flex-col">
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Regular progress reports
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Performance tracking
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Feedback integration
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Program adjustments
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Post-training support
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why choose CT */}
      <div className="bg-[#0E2455] flex items-center justify-center flex-col">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-200 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Why Choose Custom Training?
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-2 sm:mt-4 md:mt-8 text-white/80 font-normal">
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            Choosing the right hiring partner is critical to building a
            successful team. Here's why Conclase Talent is
          </p>
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            your best choice
          </p>
        </div>
        <div className="py-4 sm:py-10">
          <img src={Customtraining}></img>
        </div>
        <p className="text-[15px] sm:text-[15px] md:text-[17px] lg:text-2xl mt-2 sm:mt-4 md:mt-4 text-white/80 font-normal">
          Are you ready to transform your workforce?
        </p>
        <div className="mt-6 md:mt-10 mb-6 md:mb-10 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <span className="font-semibold">Request for Custom Training</span>
        </div>
      </div>
      {/* Beyond the core */}
      <div className="bg-white flex items-center justify-center flex-col">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-900 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Beyond the core
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-2 sm:mt-4 md:mt-8 text-black/80 font-normal">
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            We don't limit ourselves to preset courses. Tell us what you need,
            and we'll create it:
          </p>
        </div>
        <div className="py-4 sm:py-10">
          <img src={core}></img>
        </div>
        <p className="text-[15px] sm:text-[15px] md:text-[17px] lg:text-2xl mt-2 sm:mt-4 md:mt-4 text-black/80 font-normal">
          Are you ready to transform your workforce?
        </p>
        <div className="mt-6 md:mt-10 mb-6 md:mb-10 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <span className="font-semibold">Request for Custom Training</span>
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

export default Hero_four;
