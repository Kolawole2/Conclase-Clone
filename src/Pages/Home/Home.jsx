import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
