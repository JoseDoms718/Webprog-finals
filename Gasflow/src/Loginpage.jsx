import React, { useState } from "react";
import './Loginpage.css';
import Loginform from "./Loginform";
import Signupform from "./Signupform";

function Loginpage() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className="loginpage-container">
      <div className="loginform-container">
        <h1><span className="gas">GAS</span><span className="flow">flow</span></h1>
        <div className="loginform-design">
          {isSignup ? (
            <Signupform onBackToLogin={toggleForm} />
          ) : (
            <Loginform onCreateAccountClick={toggleForm} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Loginpage;
