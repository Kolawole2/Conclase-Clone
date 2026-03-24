import React from "react";
import Navbar from "../../components/Navbar_2/Navbar-two";
import ccone from "../../assets/ccone.png";
import cctwo from "../../assets/cctwo.png";
import ccthree from "../../assets/ccthree.png";
import petee from "../../assets/petee.png";
import worksone from "../../assets/worksone.png";
import workstwo from "../../assets/workstwo.png";
import worksthree from "../../assets/worksthree.png";
import worksfour from "../../assets/worksfour.png";
import worksfive from "../../assets/worksfive.png";
import productsone from "../../assets/productsone.png";
import Footer from "../../components/Footer/Footer";

const Software = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="flex flex-row py-6 text-[10px] md:text-[13.5px] font-sans px-5 md:px-20">
          <h1 className=" text-gray-400 mr-1 font-semibold">
            SOFTWARE ENGINEERING
          </h1>
        </div>
        {/* Text and image container */}
        <div className="flex flex-row justify-center">
          {/* Text container */}
          <img
            src={ccone}
            className="w-20  h-14 sm:w-25 sm:h-20 lg:w-30 mt-20"
          ></img>
          <div className="text-center text-4xl font-semibold">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              World-class Software Engineering for
              <br />
              Saas and Tech companies
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 mt-5">
              We create products that serve both users and businesses
              <br /> and drive real results
            </p>
          </div>
          <div className="flex flex-col">
            <img src={cctwo} className="w-35"></img>
            <img src={ccthree} className="w-35"></img>
          </div>
        </div>
        <div className="flex flex-col justify-center sm:flex-row gap-4 sm:gap-6 px-5 md:px-10 lg:px-20 xl:px-40 font-semibold">
          <a href="/start/project" className="w-full sm:w-auto cursor-pointer bg-amber-300 rounded-full py-4 px-15 mt-6 hover:bg-yellow-500 transition">
            Start a Project
          </a>

          <button className="w-full sm:w-auto bg-white  rounded-full py-4 px-15 mt-2 sm:mt-6">
            Schedule a Call
          </button>
        </div>
        <img src={petee} className="w-full"></img>
        <div className="mt-4 px-5 xl:px-30">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Our Works
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-6 md:px-0 max-w-7xl mx-auto">
          {/* First image */}
          <img
            src={worksone}
            className="w-full md:w-[calc(50%-0.75rem)] h-auto rounded-2xl object-cover"
          />

          {/* Second image */}
          <img
            src={workstwo}
            className="w-full md:w-[calc(50%-0.75rem)] h-auto rounded-2xl cursor-pointer object-cover"
          />
        </div>
        <div className="flex justify-center mt-7">
          <img src={worksthree} className="w-auto"></img>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-6 md:px-0 max-w-7xl mx-auto">
          {/* First image */}
          <img
            src={worksfour}
            className="w-full md:w-[calc(50%-0.75rem)] h-auto rounded-2xl object-cover"
          />

          {/* Second image */}
          <img
            src={worksfive}
            className="w-full md:w-[calc(50%-0.75rem)] h-auto rounded-2xl cursor-pointer object-cover"
          />
        </div>
        <div className="mt-20 px-5 xl:px-30">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            We do everything on your product
          </h1>
        </div>

        <div className=" flex justify-end mt-10">
          <img src={productsone} className="w-fit" />
        </div>
      </div>
      <div className="bg-white px-5 lg:px-25 flex justify-center py-20">
        <div className="bg-gradient-to-r from-blue-900 to-black w-full py-20 rounded-2xl flex justify-center items-center flex-col">
          <h1 className="font-semibold text-center text-lg text-white sm:text-xl md:text-2xl lg:text-4xl">
            Got a project you want
            <br /> to start?
          </h1>
          <a href="/start/project" className=" bg-amber-300 rounded-full cursor-pointer py-4 px-15 mt-6 hover:bg-yellow-500 transition">
            Start a Project
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Software;
