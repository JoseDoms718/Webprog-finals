import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import { Link } from 'react-router-dom';
import './Customerpage.css';

function Customerpage() {
    return (
        <>
            <Navbar />
            <section className="customerherosection-container">
                <div className="herosection-container">
                <img src="src/assets/Gasflow-herosection.jpg" alt="Herosection Banner" />
                </div>
            </section>

            <section className="hot-deals-section">
                <h2 className="section-title">🔥 Hot Deals!</h2>
                <div className="products-list">
                    <div className="product-card">
                        <Link to="/products1" className="product-link">
                            <img src="src/assets/products1.png" alt="1.4Kg Solane Sakto" />
                            <h3>1.4Kg Solane Sakto</h3>
                            <p>₱999.00</p>
                        </Link>
                        <Link to="/products1" className="buy-now-btn">Buy Now</Link>
                    </div>

                    <div className="product-card">
                        <Link to="/product2" className="product-link">
                            <img src="src/assets/products2.png" alt="11Kg POL Cylinder" />
                            <h3>11Kg POL Cylinder</h3>
                            <p>₱2,500.00</p>
                        </Link>
                        <Link to="/product2" className="buy-now-btn">Buy Now</Link>
                    </div>

                    <div className="product-card">
                        <Link to="/product3" className="product-link">
                            <img src="src/assets/products3.png" alt="22Kg POL Cylinder" />
                            <h3>22Kg POL Cylinder</h3>
                            <p>₱3,500.00</p>
                        </Link>
                        <Link to="/product3" className="buy-now-btn">Buy Now</Link>
                    </div>

                    <div className="product-card">
                        <Link to="/product4" className="product-link">
                            <img src="src/assets/products4.png" alt="50Kg Cylinder" />
                            <h3>50Kg Cylinder</h3>
                            <p>₱4,500.00</p>
                        </Link>
                        <Link to="/product4" className="buy-now-btn">Buy Now</Link>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="services-wrapper">
                    <div className="services-main">
                    <img src="src/assets/Services1.jpg" alt="" />                       
                    </div>

                    <div className="services-right">
                        <div className="services-feature">
                        <img src="src/assets/Services2.jpg" alt="" />
                        </div>

                        <div className="services-feature">
                            <img src="src/assets/Services3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="contactsection">
        <h1>Contact Us!</h1>
        <div className="contactsection-background">
          <div className="contactus-form">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="contact-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>

              <div className="contact-form">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>

              <div className="contact-form">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

            <Footer />
        </>
    );
}

export default Customerpage;
