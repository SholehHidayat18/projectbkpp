const nodemailer = require("nodemailer");
const { AUTH_MAIL_PASS, AUTH_MAIL_USER } = require("../constants");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: AUTH_MAIL_USER,
    pass: AUTH_MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  socketTimeout: 60000, // Timeout socket menjadi 60 detik
  connectionTimeout: 60000,
  debug: true,
});

const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: AUTH_MAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error("Error sending email:", err);
    return false;
  }
};

module.exports = { sendEmail };
