import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-3">
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="footer-left mb-3">
          <p className="mb-1">&copy; 2024 Pranverse. All rights reserved.</p>
          <a href="#" className="text-light me-2">Terms of Service</a> |
          <a href="#" className="text-light ms-2">Privacy</a>
        </div>

        <div className="footer-right d-flex">
          {[...Array(1)].map((_, i) => (
            <div className="footer-column mx-3" key={i}>
              <h5 className="text-uppercase">Company</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">About Us</a></li>
                <li><a href="#" className="text-light">Meet The Team</a></li>
                <li><a href="#" className="text-light">What We Do</a></li>
                <li><a href="#" className="text-light">Careers</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
