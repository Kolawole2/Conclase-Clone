import React from 'react'
import Navbar from "../../../components/Navbar_2/Navbar-two";
import Footer from "../../../components/Footer/Footer";

const Startproject = () => {
  return (
    <>
    <Navbar />
      {/* Hero */}
      <div className="bg-gray-50">
        <div className="flex flex-row py-6 text-[10px] md:text-[13.5px] font-sans px-5 md:px-20">
          <h1 className=" text-gray-500 mr-1">HIRE A TALENT &gt; </h1>
          <p className=" text-black">REQUEST TALENT FORM</p>
        </div>
        <div className=" bg-gray-50 flex items-center justify-center">
          <div className="bg-white mb-15 mt-20 w-2/3  px-6 py-10  rounded-2xl">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Start a Project
                </h1>
                <p className="text-gray-600 text-[10px] md:text-[15px] mt-1 md:mt-4 lg:mt-8">
                  Kindly fill this form to request for talents
                </p>
              </div>
              <p className="text-gray-400 text-[10px] md:text-[13.5px] font-semibold mt-2">
                STEP 1 OF 2
              </p>
            </div>
            <div className="bg-white mt-6 md:mt-8 text-[10px] md:text-[15px]">
              <h1 className="font-semibold">COMPANY DETAILS</h1>
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Full Name<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Noah Naheem"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <div className="flex sm:flex-row xl:gap-80 lg:gap-40 md:gap-20 sm:gap-10 flex-col">
                <div>
                  <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                    Email address<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="option"
                    placeholder="noahnaheem@gmail.com"
                    className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                  />
                </div>
                <div>
                  <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                    Phone number<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="+164 78468 98749"
                    className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                  />
                </div>
              </div>
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Company Name<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="ConclaseUS"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
            </div>
            
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Project Type<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Project Description
              </p>
              <input
                type="text"
                placeholder="Type your message"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-20 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              
            <a href="/request/submitted"><button className="w-full bg-amber-300 rounded-full py-4 mt-10 md:mt-15 cursor-pointer">
              continue
            </button></a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Startproject