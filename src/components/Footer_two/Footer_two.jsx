import React from "react";
import socials from "../../assets/socials.png";
import conclasehq from "../../assets/conclasehq.png";
import Socialmedia from "../../assets/assets_two/Socialmedia.png"

const Footer_two = () => {
  return (
    <>
      <footer className="bg-[#0E2455] text-white px-6">
        <div className="max-w-7xl mx-auto py-4 sm:py-8 md:py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div mt-6 md:mt-0>
            <h3 className="text-white text-3xl font-semibold">Conclase</h3>
            <h3 className="text-white text-3xl font-semibold">Academy</h3>
          </div>

          <div className="text-white/70">
            <h3 className="text-yellow-400 mb-6">Company</h3>
            <p className="mb-3">About us</p>
            <p className="mb-3">Schedule a call</p>
            <p className="mb-3">Hire a Talent</p>
            <p>Submit Resume</p>
          </div>

          {/* Individuals */}

          <div className="text-white/70">
            <h3 className="text-yellow-400 mb-6">Individuals</h3>
            <p className="mb-3">Back-end Engineer</p>
            <p className="mb-3">Front-end Engineer</p>
            <p className="mb-3">Data School</p>
            <p className="mb-3">Product School</p>
            <p className="mb-3">Flutter</p>
            <p className="mb-3">Software Quality Assurance</p>
            <p className="mb-6">SAP</p>

            <div className="text-white/70">
              <h3 className="text-yellow-400 mb-6">Corporate Training</h3>
              <p className="mb-3">Enterprise Custom Training</p>
              <p className="mb-3">Corporate Calendar Training</p>
            </div>
          </div>

          {/* Contact us */}
          <div className="text-white/70">
            <h3 className="text-yellow-400 mb-6">Contact us</h3>
            <p>Canada</p>
            <p className="mt-2">
              1234 Innovation Drive Denver, Colorado 80202 <br /> United States
            </p>

            <p className="mt-2">+1 (720) 555-0123</p>
            <a href="#">
              <p className="font-semibold cursor-pointer mt-3">
                info@conclaseacademy.us
              </p>
            </a>
          </div>

          <div>
            <div className="text-white/90">
              <h3 className="mb-6 text-sm">JOIN OUR NEWS LETTER</h3>
            </div>
            <div className="w-full max-w-md">
              <div className="relative bg-[#2A3F75] rounded-full border border-white/20 w-80">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-white placeholder:text-white/50 py-3 pl-5 pr-32 rounded-full outline-none"
                />

                <button className="absolute right-1 top-1 bottom-1 bg-yellow-400 text-black px-5 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="font-light mt-4 text-white/40">
              <i>
                {" "}
                <p className="text-[11px]">
                  By subscribing, you agree with our policy privacy and provide
                  consent to receive updates from our company
                </p>
              </i>
              <p className="text-[11px] mt-2 text-white/60">
                &copy; 2023 Conclase. All right reserved
              </p>
            </div>
            <h3 className="text-yellow-400 mb-6 mt-6">Social Media</h3>
            <img src={Socialmedia}></img>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer_two;
