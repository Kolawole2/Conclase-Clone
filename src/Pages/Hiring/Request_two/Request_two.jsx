import React from "react";
import Navbar from "../../../components/Navbar_2/Navbar-two";
import Footer from "../../../components/Footer/Footer";

const Request_two = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="flex flex-row py-6 text-[10px] md:text-[13.5px] font-sans px-5 md:px-20">
          <h1 className=" text-gray-500 mr-1">HIRE A TALENT &gt; </h1>
          <p className=" text-black">REQUEST TALENT FORM</p>
        </div>
        <div className="bg-gray-50 flex items-center justify-center">
          <div className="bg-white  mt-20 w-2/3  px-6 py-10 mb-10   rounded-2xl">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Request Talent Form
                </h1>
                <p className="text-gray-600 text-[10px] md:text-[15px] mt-1 md:mt-4 lg:mt-8">
                  Kindly fill this form to request for talents
                </p>
              </div>
              <p className="text-gray-400 text-[10px] md:text-[13.5px] font-semibold mt-2">
                STEP 2 OF 2
              </p>
            </div>
            <div className="bg-white mt-6 md:mt-8 text-[10px] md:text-[15px]">
              <h1 className="font-semibold">HIRING NEEDS</h1>
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Type of hiring<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />

              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Roles required<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <div className="flex sm:flex-row xl:gap-80 lg:gap-40 md:gap-20 sm:gap-10 flex-col">
                <div>
                  <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                    Number of Positions<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="1"
                    className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                  />
                </div>
                <div>
                  <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                    Required Start Date<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="04-12-2024"
                    className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                  Duration
                </p>
                <p className="text-gray-500">
                  (For contract/contract-to-hire)
                  <span className="text-red-500">*</span>
                </p>
              </div>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Required Experience Level<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
            </div>
            <div className="bg-white mt-6 md:mt-8 text-[10px] md:text-[15px]">
              <h1 className="font-semibold">ADDITIONAL INFORMATION</h1>
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Special Requirements<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Type your message"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-8 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Project Description<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Type your message"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-8 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Any other questions<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Type your message"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-8 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
            </div>
            <div className="w-full flex font-medium items-center sm:justify-end sm:flex-row lg:gap-15 md:gap-10 sm:gap-5 flex-col">
              <a href="/request/one" className="bg-white text-center cursor-pointer text-blue-900 border-1 w-full sm:w-1/4 border-gray-300 rounded-full py-4 mt-10 md:mt-15">
                Previous
              </a>
            <a href="/request/submitted" className="bg-amber-300 cursor-pointer text-center w-full sm:w-1/3 rounded-full py-4 mt-10 md:mt-15">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Request_two;
