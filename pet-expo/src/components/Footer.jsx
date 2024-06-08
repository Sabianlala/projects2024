import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 mt-auto ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita architecto dolorum repudiandae totam? Nemo, tempora praesentium. Quidem placeat unde inventore animi quod nesciunt quae, nisi excepturi fugiat vitae consequatur est accusamus iure enim quia facilis? Reprehenderit tempore corrupti maxime.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Pet Expo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
