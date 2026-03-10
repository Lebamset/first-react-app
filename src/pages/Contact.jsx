import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You can integrate with EmailJS or a backend API
    alert("Message sent successfully!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <h2>Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new opportunities,
            collaborations, or just having a chat about technology.
          </p>

          <div className="info-item">
            <FaEnvelope />
            <span>hassetfasil52@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone />
            <span>+251 912463189</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Addis Ababa, Ethiopia</span>
          </div>

          <div className="github-stats">
            <h4>GitHub Activity</h4>
            <img
              src="https://github-readme-stats.vercel.app/api?username=joyf&show_icons=true&theme=radical"
              alt="GitHub Stats"
            />
          </div>
        </div>

        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Contact;
