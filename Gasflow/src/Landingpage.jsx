import React from 'react';
import { Link } from 'react-router-dom'; // ADD THIS
import { FaUser } from 'react-icons/fa';
import './Landingpage.css';

function Landingpage() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1><span className="gas">GAS</span><span className="flow">flow</span></h1>
        </div>
        <div className="alt-icon-container">
          <Link to="/profile" className="icon-container small">
            <FaUser className="user-icon" />
          </Link>
          <Link to="/login">Sign in</Link>
        </div>
      </nav>

      <section className="herosection">
        <div className="herosection-container">
          <div className="herosection-details">
            <h1><span className="gas">GAS</span><span className="flow">flow</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              est modi, ab officia itaque ipsum quisquam iure quos odio sequi
              dicta, hic fuga? Dolores id sint consequuntur molestiae cupiditate
              voluptate.
            </p>
          </div>
          <div className="herosection-img">
            <img src="src/assets/gasul-11kg.png" alt="Gas Product" />
          </div>
        </div>
      </section>

      <section className="servicessection">
        <div className="seperatorh2">
          <h2>Want to work with us?</h2>
        </div>
        <div className="servicesbanner">
          <div className="servicesbanner-container">
            <h2>Become a partnered retailer now!</h2>
            <Link to="/Login">
              <h3>&gt;&gt; Learn more &lt;&lt;</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="productssection">
        <div className="seperatorh2">
          <h2>Best Sellers!</h2>
        </div>
        <div className="products-list">
          <div className="product-card">
            <img src="src/assets/products1.png" alt="Product 1" />
            <h3>Product Name 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src="src/assets/products2.png" alt="Product 2" />
            <h3>Product Name 2</h3>
            <p>$39.99</p>
          </div>
          <div className="product-card">
            <img src="src/assets/products3.png" alt="Product 3" />
            <h3>Product Name 3</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img src="src/assets/products4.png" alt="Product 4" />
            <h3>Product Name 4</h3>
            <p>$49.99</p>
          </div>
        </div>
      </section>

      <section className="contactsection">
        <div className="seperatorh2">
          <h2>Have any Inquiries?</h2>
        </div>
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

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} GASflow. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/Login">Privacy Policy</Link>
            <Link to="/Login">Terms of Service</Link>
            <Link to="/Login">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landingpage;
