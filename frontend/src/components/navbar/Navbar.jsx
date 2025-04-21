import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // Import React Router hooks
import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    // Scroll to section logic after ensuring correct route
    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Check if already on the correct route
    if (window.location.pathname === "/") {
      scrollToSection();
    } else {
      // Navigate to the home route first, then scroll
      navigate("/");
      setTimeout(scrollToSection, 300); // Wait for route transition (adjust timing as needed)
    }

    setMenuOpen(false); // Close menu
  };

  return (
    <nav className={`navbar-container ${isVisible ? "navbar-visible" : ""}`}>
      <div className="navbar-logo" onClick={(e) => handleNavigation(e, "hero")}>
        Balai Diklat BKPP Kota Semarang
      </div>
      <div className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
        <a href="#hero" onClick={(e) => handleNavigation(e, "hero")}>
          Home
        </a>
        <a href="#aboutus" onClick={(e) => handleNavigation(e, "aboutus")}>
          Tentang Kami
        </a>
        <a href="#holidays" onClick={(e) => handleNavigation(e, "holidays")}>
          Persewaan
        </a>
        <a href="#contactus" onClick={(e) => handleNavigation(e, "contactus")}>
          Hubungi Kami
        </a>
        <a href="/login" onClick={(e) => { e.preventDefault(); navigate("/login"); setMenuOpen(false);}}>
            Login
        </a>

      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
