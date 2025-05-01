import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import { Link } from 'react-router-dom';
import './Customerpage.css';

function Customerpage(){
    return(
        <>
        <Navbar/>
        <section className="customerherosection-container">
            <img src="./assets/login-background.jpg" alt="Herosection Banner" />
            <h1>TIte</h1>
        </section>
        <Footer/>
        </>
    );
}
export default Customerpage;