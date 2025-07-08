
import React from 'react';
import './Footer.css';
import { FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-3">
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="footer-left mb-3">
          <p className="mb-1">&copy; 2024 Pranverse. All rights reserved.</p>
          <a href="#" className="text-light me-2">Terms of Service</a> |
          <a href="#" className="text-light ms-2">Privacy</a>
        </div>

        <div className="footer-right d-flex flex-column">
          <h5>Follow Us</h5>
          <div className="d-flex">
            <a href="https://www.youtube.com/@pranverse2808?feature=shared" target="_blank" rel="noreferrer" className="text-light me-3">
              <FaYoutube size={30} />
            </a>
            <a href="https://www.linkedin.com/in/goodbyestress" target="_blank" rel="noreferrer" className="text-light me-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/share/15PuCntnxi/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-light">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
