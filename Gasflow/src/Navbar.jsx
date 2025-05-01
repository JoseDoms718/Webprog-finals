import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaUser, FaSearch } from 'react-icons/fa';
import './Customerpage.css';

function Navbar(){
    return(
        <nav>
            <div className="logo">
                <h1>
                    <span className="gas">GAS</span>
                    <span className="flow">flow</span>
                </h1>
            </div>

            <div className="center-items">
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="search-bar-with-icon">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    />
                    <FaSearch className="search-icon" />
                </div>
            </div>

            <div className="right-items">
                <Link to="/profile" className="icon-container">
                    <FaUser className="user-icon" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;