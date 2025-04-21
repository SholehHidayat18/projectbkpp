import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-location">
          <h2>LOCATION</h2>
          <div className="footer-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21692.630857637378!2d110.46560230060594!3d-7.032141104028018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c53a1fbd12f%3A0x764f3182cbd088d9!2sBalai%20Diklat%20BKPP%20Kota%20Semarang!5e0!3m2!1sid!2sid!4v1744866425760!5m2!1sid!2sid"
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Balai Diklat BKPP Kota Semarang"
            ></iframe>
          </div>
        </div>

        <div className="footer-about">
          <h2>ABOUT US</h2>
          <p><strong>Alamat:</strong> Jl. Fatmawati No.73a, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273</p>
          <p><strong>Telepon:</strong> (024) 3586680</p>
          <p><strong>Email:</strong> diklat.semarangkota@gmail.com</p>
          <p><strong>WA / SMS:</strong> +62 822-2300-0404</p>

          <div className="footer-social">
            <a href="https://www.instagram.com/bkppkotasemarang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
            <a href="https://x.com/bkppkotasmg"><FaX/></a>
            <a href="https://www.youtube.com/channel/UCNyinCD3l223jWnHOW9S4CQ"><FaYoutube/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Balai Diklat BKPP Kota Semarang, All Rights Reserved</p>
        <p>Made With ❤️ By Us, Internship Informatics Dian Nuswantoro University</p>
      </div>
    </footer>
  );
};

export default Footer;
