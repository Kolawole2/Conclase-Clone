import React from "react";
import Example from "../../assets/assets_two/example.png";
import cth from "../../assets/assets_two/cth.png";
import cpb from "../../assets/assets_two/cpb.png";
import ftp from "../../assets/assets_two/ftp.png";
import Hiring from "../../assets/assets_two/Hiring.png";
import right_option from "../../assets/assets_two/right_option.png";
import Advantage from "../../assets/assets_two/Advantage.png";
import family from "../../assets/assets_two/family.png";
import Hiring_process from "../../assets/assets_two/Hiring_process.png";
import dim_logo from "../../assets/assets_two/dim_logo.png";
import consultant from "../../assets/assets_two/Consultant.png";
import { MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const Hero_two = () => {
  return (
    <>
      {/* Text container */}
      <div className="bg-gray-50 flex flex-col w-full items-center justify-center">
        {/* first text */}
        <div className="flex justify-center items-center py-11 max-w-lg">
          <span className="fadein text-[10px] md:text-[13.5px] font-sans text-gray-400">
            HIRE A TALENT
          </span>
        </div>
        {/* second text */}
        <div className="flex flex-row justify-between max-w-7xl text-black/65 gap-1 text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="lg:mr-2 mr-1">Access</span>
          <span className="text-yellow-400 lg:mr-2 mr-1">Top Tier-Tech</span>
          <span>Talent</span>
        </div>
        {/* third text */}
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-4 md:mt-10 text-gray-600 font-normal">
          <p className="text-sm md:text-lg">
            Transform your team with thoroughly vetted, high skilled tech
          </p>
          <p className="text-sm md:text-lg">
            professionals. Our talent pool combines technical excellence with
            essential
          </p>
          <p className="text-sm md:text-lg">
            soft skills, ensuring you get professionals who not only code well
          </p>
          <p className="text-sm md:text-lg">collaborate effectively</p>
        </div>
        {/* Talent request */}
        <div className="mt-10 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <a href="/request/one">
            <span className="font-semibold">Request for a Talent</span>
          </a>
        </div>
        {/* Examples */}
        <div className="py-3 w-full">
          <img src={Example} className="w-full"></img>
        </div>
      </div>
      {/* Hiring solutions */}
      <div className="flex flex-col w-full items-center justify-center">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-900 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Hiring Solutions
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-1 md:mt-5 text-gray-600 font-normal">
          <p className="text-[13px] sm:text-sm md:text-lg">
            Our hiring solutions are designed to simplify recruitment, ensuring
            companies
          </p>
          <p className="text-[13px] sm:text-sm md:text-lg">
            find the right candidates who are not only skilled but also aligned
            with their
          </p>
          <p className="text-[13px] sm:text-sm md:text-lg">values and goals</p>
        </div>
        <div className="py-8 flex flex-col justify-between gap-7 sm:py-10 md:py-13 sm:items-center sm:justify-center">
          <img src={Hiring} className="w-full hidden sm:block"></img>
          <img src={ftp} className="sm:hidden"></img>
          <img src={cth} className="sm:hidden"></img>
          <img src={cpb} className="sm:hidden"></img>
        </div>
      </div>
      {/* Why choose conclase */}
      <div className="bg-[#0E2455] flex items-center justify-center flex-col">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-200 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Why Choose Conclase Talent?
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
          <img src={right_option}></img>
        </div>
      </div>
      {/* ADVANTAGES */}
      <div className="bg-white flex  w-full items-center justify-center px-6">
        {/* container */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
          {/* left text */}
          <div className="flex flex-col text-center mt-5 lg:mt-0 lg:text-left w-full max-w-md">
            <div className="px-auto">
              <span className=" text-blue-900 text-3xl md:text-3xl lg:text-4xl font-semibold">
                Our Advantage
              </span>
            </div>
            <div className="mt-6 flex text-left ml-30 lg:ml-0  justify-between gap-5 flex-col">
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Quick turnaround time
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ High retention rate
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Pre-vetted candidates
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Ongoing support
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Quality guarantee
              </p>
              <p className="text-[15px] sm:text-[19px]  md:text-[23px] font-light">
                ✅ Competitive pricing
              </p>
            </div>
          </div>
          <div className="py-6 sm:py-12 md:py-20 w-full flex justify-center lg:justify-end">
            <img src={family} className=""></img>
          </div>
        </div>
      </div>
      {/* Hiring process */}
      <div className="bg-[#0E2455] flex items-center justify-center flex-col">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-200 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Hiring Process
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-1 md:mt-5 text-blue-100 font-light">
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            At Conclase Academy, we've streamlined our hiring process to ensure
            businesses connect with the right
          </p>
          <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg">
            talent quickly and efficiently
          </p>
        </div>
        <div className="py-4 sm:py-10">
          <img src={Hiring_process}></img>
        </div>
        <a href="/request/one">
          <div className="mb-10 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
            <span className="font-semibold">Request for a Talent</span>
          </div>
        </a>
      </div>
      {/* Schedule consultation */}
      <div className="bg-white flex items-center justify-center flex-col">
        <div className="mt-7 md:mt-13">
          <span className="flex flex-row justify-between max-w-7xl text-blue-900 gap-1 text-2xl md:text-3xl lg:text-4xl font-semibold">
            Schedule a Consultation
          </span>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto text-center justify-center items-center mt-1 md:mt-5 text-gray-600 font-normal">
          <p className="text-[15px] sm:text-[16px] md:text-[20px]">
            Prefer to discuss your needs in person? Schedule a free consultation
          </p>
          <p className="text-[15px] sm:text-[16px] md:text-[20px]">
            with our talent acquisition specialist
          </p>
        </div>
        <a href="/request/one">
          <div className="mt-5 xl:mt-9 xl:mb-5 flex items-center justify-center px-25 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
            <span className="font-semibold">Book a Meeting</span>
          </div>
        </a>
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
                <a href="/contact"><div className="flex text-center items-end gap-3 sm:gap-5 lg:gap-9 justify-between  mb-3 sm:mb-1 lg:mb-4 cursor-pointer group px-10 sm:px-20 lg:px-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 font-semibold">
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
      </div>
    </>
  );
};

export default Hero_two;
