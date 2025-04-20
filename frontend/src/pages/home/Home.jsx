import React from "react";
import "./Home.css";
import Hero from "./sections/hero/Hero";
import About from "./sections/aboutus/About";
import Holidays from "./sections/holidays/Holidays";
import Contact from "./sections/contactus/Contact";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="hero" className="hero-section section">
        <Hero />
      </div>

      {/* Other Sections */}
      <div id="aboutus" className="aboutus-section section">
        <About />
      </div>
      <div id="holidays" className="holidays-section section">
        <Holidays />
      </div>
      <div id="contactus" className="contactus-section section">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
