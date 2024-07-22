import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const [data, Data] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, Errors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    Data({
      ...data,
      [name]: value
    });
  };

  const validate = () => {
    const Errors = {};
    if (!data.name.trim()) {
      Errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      Errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      Errors.email = "Email is not valid";
    }

    if (!data.message.trim()) {
      Errors.message = "Message is required";
    }

    return Errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length === 0) {
      Errors({});
      alert("Message sent successfully")
    } else {
      Errors(validateErrors);
    }
  };

  return (
    <div className="contact">
      <div className="contactinfo">
        <div className="contacts">
          <FaPhone className="icons" />
          <p className="contactitems">+1 613-456-7890</p>
        </div>
        <div className="contacts">
          <FaEnvelope className="icons" />
          <p className="contactitems">GoldenKnights@gmail.com</p>
        </div>
      </div>
      <div className="contactarea">
        <h1>Contact us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="name"
            placeholder="Enter your name..."
            value={data.name}
            onChange={handleInput}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter your email..."
            value={data.email}
            onChange={handleInput}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message..."
            value={data.message}
            onChange={handleInput}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit" className="contactbutton">
            Send Message
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;
