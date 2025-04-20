import React from "react";
import "./Hero.css";
import videoBg from "../../../../assets/images/home/Video2.mp4";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (window.location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 300);
    }
  };

  return (
    <section className="hero-container">
  {/* VIDEO BACKGROUND */}
  <div className="video-wrapper">
    <video autoPlay muted loop playsInline className="hero-video-background">
      <source src={videoBg} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay"></div>
  </div>

  {/* Content */}
  <div className="hero-text-area">
    <h1 className="hero-title">
      Temukan <span className="highlight">Kemudahan</span> dalam Menyewa Fasilitas
    </h1>
    <p className="hero-description">
      Kami menyediakan layanan penyewaan <strong>gedung pertemuan</strong>, <strong>penginapan</strong>,
      <strong> meeting room</strong>, dan <strong>lapangan</strong> untuk berbagai kebutuhan Anda.
      <em> Praktis, nyaman, dan terpercaya.</em>
    </p>
  </div>

  <div className="hero-button-area">
    <button className="hero-button">
      <a href="#about" onClick={(e) => handleNavigation(e, "aboutus")}>
        Pelajari Lebih Lanjut
      </a>
    </button>
  </div>
</section>

  );
};

export default Hero;
