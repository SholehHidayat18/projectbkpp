import React from "react";
import "./Hero.css";
import img1 from "../../../../assets/images/home/bg1.jpg";
import img2 from "../../../../assets/images/home/bg2.jpg";
import videoBg from "../../../../assets/images/home/videobackground.mp4";
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
      <video autoPlay muted loop playsInline className="hero-video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero content */}
      <div className="hero-left">
        <img src={img1} alt="hero-img" className="hero-left-img" />
        <img src={img2} alt="hero-img" className="hero-left-img" />
      </div>
      <div className="hero-right">
        <span>Temukan Kemudahan dalam Menyewa Fasilitas</span>
        <span>
          Kami menyediakan layanan penyewaan gedung pertemuan, penginapan,
          meeting room, dan lapangan untuk berbagai kebutuhan Anda. Praktis,
          nyaman, dan terpercaya.
        </span>
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
