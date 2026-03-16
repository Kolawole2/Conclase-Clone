import React from "react";
import recruitment from "../../assets/recruitment.png";
import user from "../../assets/user.png";
import document from "../../assets/document.png";
import bg_one from "../../assets/bg_one.png";
import bg_two from "../../assets/bg_two.png";
import bg_three from "../../assets/bg_three.png";
import Testimonials from "../../assets/Testimonials.png";
import Partners from "../../assets/Partners.png";
import Subscribe from "../../assets/Subscribe.png";

const About = () => {
  return (
    <div className="relative bg-white">

      {/* Heading */}
      <div className="bg-white flex flex-col mt-5 ml-6 md:ml-21 gap-6">
        <span className="text-black text-3xl md:text-4xl font-bold">
          Our Businesses
        </span>
        <span className="text-gray-600 text-sm md:text-base">
          Providing valuable solutions to your business needs
        </span>
      </div>

      {/* first slider */}
      <div className="group relative w-full md:w-335 h-auto md:h-153 overflow-hidden bg-white px-6 md:px-0 md:ml-21 mt-10 md:mt-13 rounded-2xl">
        <div className="top-0 left-0 flex items-center justify-center text-white rounded-2xl">
          <img src={recruitment} className="w-full md:w-335 rounded-2xl"/>
        </div>

        <div className="absolute top-0 left-0 inset-0 bg-[#0E2455] flex justify-center items-center text-white
        transition-transform duration-300 translate-y-full rounded-2xl group-hover:translate-y-0 ease-in-out flex-col">

          <span className="text-white font-semibold text-xl md:text-2xl">
            Would you like to?
          </span>

          <div className="flex md:flex-row gap-6 md:gap-9 mt-7">

            <div className="border border-gray-700 rounded-2xl w-40 md:w-50 flex flex-col gap-4 items-center justify-center cursor-pointer py-4">
              <img src={user} className="mt-2"/>
              <span className="font-semibold">Hire a Talent?</span>
            </div>

            <div className="border border-gray-700 rounded-2xl w-40 md:w-50 flex flex-col gap-4 items-center justify-center cursor-pointer py-4">
              <img src={document} className="mt-2"/>
              <span className="font-semibold">Submit your resume</span>
            </div>

          </div>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 px-6 md:px-0 md:ml-21 ">
        <img src={bg_two} className="w-full md:w-165 rounded-2xl"/>
        <img src={bg_three} className="w-full md:w-165 rounded-2xl cursor-pointer"/>
      </div>

      {/* second slider */}
      <div className="group relative w-full md:w-335 h-auto md:h-153 overflow-hidden bg-white px-6 md:px-0 md:ml-21 mt-10 md:mt-13 rounded-2xl">

        <div className="top-0 left-0 flex items-center justify-center text-white rounded-2xl">
          <img src={bg_one} className="w-full md:w-335 rounded-2xl"/>
        </div>

        <div className="absolute top-0 left-0 inset-0 bg-[#0E2455] flex justify-center items-center text-white
        transition-transform duration-300 translate-y-full rounded-2xl group-hover:translate-y-0 ease-in-out flex-col cursor-pointer p-6">

          <div className="bg-white/20 w-30 h-9 rounded-full flex items-center justify-center">
            Coming soon
          </div>

          <div className="flex flex-col items-center mt-5 text-center text-sm md:text-base">
            <span>
              We have two individuals bring their tech idea to life with 20
              million worth of investment
            </span>

            <div className="flex flex-row gap-1 mt-2">
              <span>
                Do you have any business idea you want us to invest in?
              </span>
              <span className="text-yellow-400 underline">
                Contact us
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Partners */}
      <div className="mt-16 md:mt-20">
        <img src={Partners} className="w-full"/>
      </div>

      {/* Testimonials */}
      <div>
        <img src={Testimonials} className="w-full"/>
      </div>

      {/* Subscribe */}
      <div className="bg-white flex items-center justify-center px-6">
        <img src={Subscribe} className="py-12 md:py-15 w-full md:w-auto"/>
      </div>

    </div>
  );
};

export default About;