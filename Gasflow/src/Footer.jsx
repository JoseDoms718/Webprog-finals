import React from 'react';
import { Link } from 'react-router-dom'; 
import './Customerpage.css';

function Footer(){
    return(
    <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} GASflow. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    </footer>
    );
}
export default Footer;