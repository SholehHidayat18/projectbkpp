import React from "react";
import "./About.css";
import { FaHotel, FaUsers, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-container">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }} // mulai dari atas & transparan 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="about-container-header">
        <span>Layanan Unggulan Balai Diklat Kota Semarang</span>
        <span>
          Balai Diklat Kota Semarang menyediakan berbagai fasilitas yang dapat disewa untuk keperluan pribadi maupun institusi, seperti gedung pertemuan, penginapan, ruang meeting, dan lapangan. Kami siap mendukung kelancaran acara Anda.
        </span>
      </div>
      </motion.div>
      
      <div className="about-container__parent">

      <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true, amount: 0.3 }} >

        <div className="about-container__box">
          <div className="about-container__boxIcon">
            <FaHotel />
          </div>
          <span className="about-container__boxTitle">Fasilitas Lengkap</span>
          <span className="about-container__boxText">
            Tersedia gedung pertemuan, penginapan yang nyaman, ruang meeting yang representatif, serta lapangan untuk berbagai aktivitas dan acara.
          </span>
        </div>
      </motion.div>

      <motion.div
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true, amount: 0.3 }} >

        <div className="about-container__box">
          <div className="about-container__boxIcon">
            <FaUsers />
          </div>
          <span className="about-container__boxTitle">Pelayanan Profesional</span>
          <span className="about-container__boxText">
            Dikelola oleh tim yang berpengalaman dari Balai Diklat Kota Semarang, kami memastikan setiap layanan berjalan dengan profesional dan sesuai kebutuhan Anda.
          </span>
        </div>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true, amount: 0.3 }} >

        <div className="about-container__box">
          <div className="about-container__boxIcon">
            <FaTags />
          </div>
          <span className="about-container__boxTitle">Harga Terjangkau</span>
          <span className="about-container__boxText">
            Nikmati fasilitas terbaik dengan harga yang kompetitif, cocok untuk berbagai keperluan acara dan kegiatan Anda.
          </span>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
