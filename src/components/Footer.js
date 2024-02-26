import React from 'react';
import logo from '../assets/fit-and-well-logo-vector-removebg-preview.png'
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div  className="footer-logo">
          <img src={logo} alt="" />
        </div>
        
        <div className="footer-contact">
          <div>
            <h5>CONTACT US</h5>
            <p>Phone: +1 123-456-7890</p>
            <p>Email: fitwell@email.com</p>                      

          </div>
        </div>

        <div className="footer-navigation">
          <h5>RESOURCES</h5>
          <a href="/">Home</a>
          <a href="http://localhost:3000/gallery">Gallery</a>
          <a href="http://localhost:3000/pricing">Packages</a>
          <a href="http://localhost:3000/workouts">Reviews</a>
        </div>

        <div className="footer-social">
          <h5>FOLLOW US</h5> 
          <a href="#" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
      </div>

     


      <div className="footer-bottom">
        <p>&copy; 2024 FITNESS WELL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
