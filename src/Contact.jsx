import React, { useState } from "react";
import axios from "axios";
import "./contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div id="contact" className="contact-container">
      {/* Left Section - Contact Form */}
      <div className="contact-form">
        <img src="../images/hero2.jpeg" alt="Contact Background" className="contact-image" />
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Right Section - Office Addresses */}
      <div className="contact-info">
        <h2>Our Offices</h2>
        <div className="address">
          <h3>USA</h3>
          <p>#19904, 64th Avenue, Corcoran,
          <br />MN 55340, USA</p>
        </div>
        <div className="address">
          <h3>INDIA</h3>
          <p>No. 23/4, Dr. Rajgopal Road, RMV 2nd Stage,<br />
          Sanjaynagar, Bengalurur-560094, Karnataka, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
