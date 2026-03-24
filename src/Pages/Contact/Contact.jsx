import React from "react";
import Navbar from "../../components/Navbar_2/Navbar-two";
import contact from "../../assets/contact.png";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="flex flex-row py-6 text-[10px] md:text-[13.5px] font-sans px-5 md:px-20">
          <h1 className=" text-gray-400 mr-1 font-semibold">CONTACT US </h1>
        </div>
        {/* card container */}
        <div className="flex flex-col xl:flex-row px-15 space-x-7 mt-17">
          {/* first card */}
          <div className="xl:sticky xl:top-6 xl:h-fit">
            <img src={contact}></img>
          </div>
          {/* second card */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl px-10">
              <div className="mt-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Send us a message
                </h1>
                <p className="text-gray-600 text-[10px] md:text-[15px] mt-1 md:mt-4 lg:mt-8">
                  Kindly fill this form to send your message. We are available
                  24/7 to answer your questions
                </p>
              </div>
              <div className="bg-white mt-6 md:mt-8 text-[10px] md:text-[15px]">
                <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                  Full Name<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Noah Naheem"
                  className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                />
                <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                  Email address<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Noah@gmail.com"
                  className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                />
                <div className="flex sm:flex-row  flex-col space-x-6">
                  <div>
                    <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                      Industry<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="option"
                      placeholder="Select an option"
                      className="w-auto text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                      Company Size<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Select an option"
                      className="w-auto text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                    />
                  </div>
                </div>
                <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                  Email address<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Noah@gmail.com"
                  className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                />
                <div className="flex sm:flex-row  flex-col space-x-6">
                  <div>
                    <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                      Industry<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="option"
                      placeholder="Select an option"
                      className="w-auto text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                      Company Size<span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Select an option"
                      className="w-auto text-gray-500 placeholder:text-gray-400 bg-gray-50 py-3 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                    />
                  </div>
                </div>
                <p className="text-[11px] md:text-[14px] font-light mt-6 md:mt-8">
                  Email address<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Noah@gmail.com"
                  className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-50 py-10 pl-5 pr-32 rounded-xl border-gray-200 border-1 mt-4 outline-gray-400"
                />
                <a href="/request/submitted" className="w-full block text-center cursor-pointer bg-amber-300 rounded-full py-4 mt-10 md:mt-15 mb-10 ">
                  submit
                </a>
              </div>
            </div>
            <div className="bg-white mt-7 rounded-2xl mb-15">
              <div className="mt-5 px-7">
                <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-blue-900">
                  Schedule a Consultation
                </h1>
                <p className="text-gray-600 text-[10px] md:text-[15px] mt-1 md:mt-4 lg:mt-4">
                  Prefer a one-on-one discussion? choose a convenient time for a
                  consultation with out team
                </p>
                <button className="w-full bg-white text-blue-900 font-semibold border-2 border-gray-300 rounded-full py-4 mt-10 md:mt-15 mb-10">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
