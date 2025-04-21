// Contact.js
import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { useLoading } from "../../../../context/LoadingContext";
import { useToast } from "../../../../context/ToastContext";
import  Video  from "../../../../assets/images/home/Video.mp4"

const Contact = () => {
  const { startLoading, stopLoading } = useLoading();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, mobile, message } = formData;
    if (!email || !mobile || !message) return "All fields are required!";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address!";
    if (!/^\d{10}$/.test(mobile))
      return "Mobile number must be exactly 10 digits!";
    if (message.trim().length < 10 || message.trim().length > 500)
      return "Message must be between 10 and 500 characters!";
    return null;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    startLoading();
    const error = validateForm();
    if (error) {
      showToast({ type: "error", message: error });
      stopLoading();
      return;
    }

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200 || response.data.status === "success") {
        showToast({ type: "success", message: "Message sent successfully!" });
        setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
      } else {
        showToast({ type: "error", message: response.data.message || "Failed to send message" });
      }
    } catch (err) {
      showToast({ type: "error", message: err.response?.data?.message || "An error occurred" });
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
      <video className="contact-video" autoPlay loop muted playsInline>
        <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
        <div className="contact-left-overlay">
          <h2>BALAI DIKLAT</h2>
          <p>
            Tanpa harus pusing cari-cari tempat terpisah,
            Tanpa harus khawatir soal kenyamanan dan fasilitas.
            Sebab kami tahu, kamu ingin fokus pada yang terpenting:
            Kesuksesan acaramu.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <h2>Hubungi Kami</h2>
        <p>24/7 Kami akan menjawab pertanyaan dan masalah Anda</p>
        <form className="contact-form" onSubmit={handleSend}>
          <div className="row-input">
            <input
              type="text"
              name="firstName"
              placeholder="Nama Depan"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Nama Belakang"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="mobile"
            placeholder="No.HP"
            value={formData.mobile}
            onChange={handleInputChange}
            onInput={(e) => {
              if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
            }}
          />
          <textarea
            name="message"
            placeholder="Isi Keluhanmu"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="contact-sendBtn">Kirim Pesan</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
