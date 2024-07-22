import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Book2.css";


function Book() {
  const [data, Data] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, counterrors] = useState({});

  const navigate = useNavigate(); 

  const handleInput = (e) => {
    const { name, value } = e.target;
    Data({
      ...data,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone number should be 10 digits";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      counterrors({});
      navigate('/book2'); 
    } else {
      counterrors(errors);
    }
  };

  return (
    <div>
      <ProgressBar variant="success" now={33} />
      <h2 className="Step1">Step 1: Your Personal Information</h2>
      <h2 className="Step2">Step 2: Session and Date</h2>
      <h2 className="Step3">Step 3: Confirmation</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          placeholder="Enter your name..."
          value={data.name}
          onChange={handleInput}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          placeholder="Enter your email..."
          value={data.email}
          onChange={handleInput}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <label htmlFor="phone">Phone:</label>
        <input
          name="phone"
          placeholder="Enter your phone number..."
          value={data.phone}
          onChange={handleInput}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        
        <button className="btn btn-dark" style={{ marginTop: '100px', marginBottom: '120px', marginLeft: '4px', width: '120px' }}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Book;
