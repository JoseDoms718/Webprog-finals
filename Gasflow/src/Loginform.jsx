import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // for redirection
import './Form.css';

function Loginform({ onCreateAccountClick }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Success or error message type
  const navigate = useNavigate(); // hook to navigate after login

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // kasjdkashdkahdkashdkas
    try {
      const res = await axios.post("http://localhost:5000/login", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const { message, token, role } = res.data;

      setMessage(message);
      setMessageType("success"); // Success message
      localStorage.setItem("token", token); // Save token in localStorage

      // Role-based redirection
      if (role === "Customer") {
        navigate("/home");
      } else if (role === "Admin") {
        navigate("/admin");
      } else {
        setMessage("Access denied: Unauthorized role.");
        setMessageType("error"); // Error message for unauthorized role
      }
    } catch (err) {
      console.error("Login failed:", err.response || err.message);
      setMessage(err.response?.data?.message || "Login failed. Please try again.");
      setMessageType("error"); // Error message
    }
  };

  return (
    <section>
      <div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="login-form">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-form">
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button className="login-button" type="submit">Login</button>
            <div className="create-account">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); onCreateAccountClick(); }}>
                  Create one
                </a>
              </p>
            </div>
          </form>
          {message && (
            <p className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Loginform;