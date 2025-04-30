import React, { useState } from "react";
import axios from "axios";
import './Form.css';

function Signupform({ onBackToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: ""
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // true = success, false = error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      setIsSuccess(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setIsSuccess(false);
      return;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setMessage("Phone number must be exactly 11 digits.");
      setIsSuccess(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      setMessage(res.data.message);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        address: ""
      });
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Signup failed. Please try again.";
      setMessage(errorMsg);
      setIsSuccess(false);
    }
  };

  return (
    <div className="center-wrapper">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form">
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-form">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-pinfo">
            <div className="signup-form">
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-form">
              <input
                id="address"
                type="text"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="signup-password">
            <div className="signup-form">
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-form">
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="signup-button" type="submit">Sign Up</button>
          <div className="have-account">
            <p>
              Already have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); onBackToLogin(); }}>
                Login
              </a>
            </p>
          </div>
        </form>
        {message && (
          <p className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Signupform;