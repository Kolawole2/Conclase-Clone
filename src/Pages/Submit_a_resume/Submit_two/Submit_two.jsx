import React from "react";
import Navbar from "../../../components/Navbar_2/Navbar-two";
import File from "../../../assets/file.png";
import Footer from "../../../components/Footer/Footer";

const Submit_two = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="flex flex-row py-6 text-[10px] md:text-[13.5px] font-sans px-5 md:px-20">
          <h1 className=" text-gray-500 mr-1">SUBMIT RESUME &gt; </h1>
          <p className=" text-black">SUBMIT RESUME FORM</p>
        </div>
        <div className="bg-gray-50 flex items-center justify-center">
          <div className="bg-white  mt-20 w-2/3  px-6 py-10 mb-10   rounded-2xl">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Submit Resume Form
                </h1>
                <p className="text-gray-600 text-[10px] md:text-[15px] mt-1 md:mt-4 lg:mt-8">
                  Kindly fill this form to submit your resume
                </p>
              </div>
              <p className="text-gray-400 text-[10px] md:text-[13.5px] font-semibold mt-2">
                STEP 2 OF 2
              </p>
            </div>
            <div className="bg-white mt-6 md:mt-8 text-[10px] md:text-[15px]">
              <h1 className="font-semibold">PREFERENCES</h1>
              <div className="flex sm:flex-row xl:gap-80 lg:gap-40 md:gap-20 sm:gap-10 flex-col">
                <div>
                  <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                    Employment Type<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Select an option"
                    className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                  />
                </div>
                <div>
                  <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                    Preferred Work Mode<span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Select an option"
                    className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                  />
                </div>
              </div>

              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Willing to Relocate?<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />

              <p className="text-[11px] md:text-[14px] font-normal mt-6 md:mt-8 text-black">
                Attach Resume<span className="text-red-500">*</span>
              </p>
              <div className="flex justify-center border-2 border-dashed border-gray-300 rounded-3xl mt-2 py-7">
                <div className="flex flex-col items-center">
                  <img src={File} className="mt-10 w-15"></img>
                  <p className="font-bold text-blue-800 mt-2">
                    Click to upload
                    <span className="text-gray-600 font-medium">
                      {" "}
                      or drag and drop
                    </span>
                  </p>
                  <p className="text-gray-600 font-light text-center">
                    PDF or DOCX format only
                  </p>
                  <p className="text-gray-600 font-bold mt-4 text-center">OR</p>
                  <button className="bg-amber-300 cursor-pointer w-full rounded-full py-3 mt-4">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white mt-6 md:mt-8 text-[10px] md:text-[15px]">
              <h1 className="font-semibold">ADDITIONAL INFORMATION</h1>
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                When can you start?<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Select an option"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
              <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                Any other relevant information?
                <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Type your message"
                className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-8 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
              />
            </div>
            <div className="w-full flex font-medium items-center sm:justify-end sm:flex-row lg:gap-15 md:gap-10 sm:gap-5 flex-col">
               <a href="/submit/one" className="bg-white text-center cursor-pointer text-blue-900 border-1 w-full sm:w-1/4 border-gray-300 rounded-full py-4 mt-10 md:mt-15">
                Previous
              </a>
            <a href="/request/submitted" className="bg-amber-300 cursor-pointer text-center w-full sm:w-1/3 rounded-full py-4 mt-10 md:mt-15">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Submit_two;
