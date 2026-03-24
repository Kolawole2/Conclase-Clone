import React from "react";
import Logo from "../../assets/logo.png";
import three from "../../assets/three.png";
import arrow from "../../assets/arrow.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const DropdownLink_one = [
    { id: 1, name: "Hire a Talent", link: "/hiring" },
    { id: 2, name: "Submit a Resume", link: "/submit" },
    { id: 3, name: "Software Development", link: "/software/dev" },
  ];

  const DropdownLink_two = [
    { id: 1, name: "Candle LMS", link: "" },
    { id: 2, name: "Enovate", link: "" },
    { id: 3, name: "Conclase Jobs", link: "" },
    { id: 4, name: "Tech Studio", link: "" },
  ];

  const DropdownLink_three = [
    { id: 1, name: "Conclase Academy", link: "" },
    { id: 2, name: "Conclase US", link: "" },
    { id: 3, name: "Corporate Training", link: "/" },
  ];

  return (
    <header className="w-full bg-[#0E2455] flex justify-center">
      <nav className="w-full max-w-7xl flex items-center justify-between px-4 py-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={three} className="h-20 w-auto" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 bg-white/20 px-8 py-4 rounded-full text-white">
          {/* Services */}
          <div
            onClick={() => setOpen(open === "services" ? null : "services")}
            className="relative flex items-center gap-2 cursor-pointer"
          >
            <span>Our Services</span>
            <img src={arrow} className="w-3 h-3" />

            {open === "services" && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded shadow text-black/70">
                {DropdownLink_one.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Products */}
          <div
            onClick={() => setOpen(open === "products" ? null : "products")}
            className="relative flex items-center gap-2 cursor-pointer"
          >
            <span>Our Products</span>
            <img src={arrow} className="w-3 h-3" />

            {open === "products" && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded shadow text-black/70">
                {DropdownLink_two.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Academy */}
          <div
            onClick={() => setOpen(open === "academy" ? null : "academy")}
            className="relative flex items-center gap-2 cursor-pointer"
          >
            <span>Academy</span>
            <img src={arrow} className="w-3 h-3" />

            {open === "academy" && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded shadow text-black/70">
                {DropdownLink_three.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="hidden md:px-2 md:flex flex-row justify-between gap-4">
          <div className=" bg-[#0E2455] border-2 border-white/10 text-white font-semibold px-6 py-4 rounded-full cursor-pointer">
            Submit a resume
          </div>
          <a href="/contact">
            <div className=" bg-white text-[#0E2455] font-medium px-7 py-4 rounded-full cursor-pointer">
              Contact Us
            </div>
          </a>
        </div>

        {/* For smaller screen */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Menu */}
        {menuOpen && (
          <div className="absolute border-2 top-full left-0 w-full bg-[#0E2455] flex flex-col items-center gap-4 py-6 text-white md:hidden">
            {/* Services */}
            <div
              onClick={() => setOpen(open === "services" ? null : "services")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>Our Services</span>
                <img src={arrow} className="w-3 h-3" />
              </div>

              {open === "services" && (
                <div className="flex flex-col items-center mt-2 text-sm">
                  {DropdownLink_one.map((item) => (
                    <a key={item.id} href={item.link} className="py-1">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Products */}
            <div
              onClick={() => setOpen(open === "products" ? null : "products")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>Our Products</span>
                <img src={arrow} className="w-3 h-3" />
              </div>

              {open === "products" && (
                <div className="flex flex-col items-center mt-2 text-sm">
                  {DropdownLink_two.map((item) => (
                    <a key={item.id} href={item.link} className="py-1">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Academy */}
            <div
              onClick={() => setOpen(open === "academy" ? null : "academy")}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>Academy</span>
                <img src={arrow} className="w-3 h-3" />
              </div>

              {open === "academy" && (
                <div className="flex flex-col items-center mt-2 text-sm">
                  {DropdownLink_three.map((item) => (
                    <a key={item.id} href={item.link} className="py-1">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
