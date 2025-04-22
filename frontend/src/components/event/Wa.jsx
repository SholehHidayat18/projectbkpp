import React, { useState } from "react";
import "./Wa.css";
import Logo from "../../assets/images/LogoJateng.png"; 
import Icon from "../../assets/images/Wa.png";
import CloseIcon from "../../assets/images/x.png";

const WaWidget = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "6282223000404";

  const handleOpenChat = () => {
    setOpen(true);
  };

  const handleCloseChat = () => {
    setOpen(false);
  };

  return (
    <div id="whatsapp-chat-widget">
      <div id="wa-widget-send-button" onClick={handleOpenChat}>
        <img src={Icon} alt="Icon" />
      </div>

      {open && (
        <div className="wa-chat-box">
          <div className="wa-chat-box-header">
            <img className="wa-chat-box-brand" src={Logo} alt="Logo BKPP" />
            <div className="wa-chat-box-brand-text">
              <div className="wa-chat-box-brand-name">Balai Diklat BKPP Kota Semarang</div>
            </div>
            <div className="wa-chat-bubble-close-btn" onClick={handleCloseChat}>
              <img src={CloseIcon} alt="Close" />
            </div>
          </div>

          <div className="wa-chat-box-content">
            <div className="wa-chat-box-content-chat">
              <div className="wa-chat-box-content-chat-brand">Balai Diklat BKPP Kota Semarang</div>
              <div className="wa-chat-box-content-chat-welcome">
                Silakan sampaikan pertanyaan, kritik, atau saran Anda.
              </div>
            </div>
          </div>

          <div className="wa-chat-box-send">
            <a
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
              title="WhatsApp"
              className="wa-chat-box-content-send-btn"
            >
              <svg width="20" height="20" viewBox="0 0 90 90">
                <path d="M90,43.841c...z"></path>
              </svg>
              <span className="wa-chat-box-content-send-btn-text">Start Chat</span>
            </a>
            <div className="wa-chat-box-poweredby">
              ⚡ by <a href="https://wati.io" target="_blank" rel="noopener noreferrer">wati.io</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaWidget;
