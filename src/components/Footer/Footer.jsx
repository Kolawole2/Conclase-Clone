import React from "react";
import socials from "../../assets/socials.png";
import conclasehq from "../../assets/conclasehq.png";

const Footer = () => {
  return (
    <footer className="bg-[#0E2455] text-white px-6">

      <div className="max-w-7xl mx-auto py-4 sm:py-8 md:py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <h3 className="text-yellow-400 mb-6">Company</h3>
          <div className="space-y-3">
            <p>About</p>
            <p>Product</p>
            <p>Portfolio</p>
          </div>

          <h3 className="text-yellow-400 mt-10 mb-4">Contact us</h3>
          <div className="space-y-2">
            <p>+234 705 285 4847</p>
            <p>+234 703 593 2396</p>
            <a href="#"><p className="font-semibold cursor-pointer">Hello@Conclase.Africa</p></a>
          </div>
        </div>

        {/* Africa */}
        <div>
          <h3 className="text-yellow-400 mb-6">Africa Address</h3>
          <p className="font-semibold">Nigeria</p>
          <p className="mt-2">
            No 10, Wole Ogunjimi Street, Opebi Ikeja, Lagos.
          </p>

          <p className="mt-6 font-semibold">Abuja</p>
          <p>
            Suite A9 Mazado Plaza, Shettimma Munguno Crescent, Utako District.
          </p>
        </div>

        {/* North America */}
        <div>
          <h3 className="text-yellow-400 mb-6">North America</h3>
          <p>Canada</p>
          <p className="mt-2">
            7833 Rosewood St Burnaby, British Columbia
          </p>
          <p className="mt-2">+1 (778) 288-9846</p>
          <a href="#"><p className="font-semibold cursor-pointer mt-3">Hello@conclase.ca</p></a>

          <h3 className="text-yellow-400 mb-6 mt-8">Middle East</h3>
          <p>U.A.E</p>
          <p className="mt-2">
            Business Center 1, M floor, The Meydan Hotel, Nad Al, Sheba, Dubai, U.A.E
          </p>
          <p className="mt-2">+971 582 625 411</p>
          <a href="#"><p className="font-semibold cursor-pointer mt-3">Hello@conclase.ae</p></a>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-yellow-400 mb-6">Follow Us</h3>
          <img src={socials}/>
        </div>

      </div>

      <div className="py-4 sm:py-8 md:py-17">
        <img src={conclasehq} className="w-full"/>
      </div>

    </footer>
  );
};

export default Footer