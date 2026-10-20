import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <h5>About TREND_SHOP</h5>
            <p>
              TREND_SHOP offers a curated selection of top-quality products that
              keep you in style. Shop with us for the latest trends.
            </p>
          </div>
          <div className="col-md-4 footer-column">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to="/Trend-Shop" className="nav-link p-0 text-muted">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/products" className="nav-link p-0 text-muted">
                  Products
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/contact" className="nav-link p-0 text-muted">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/contact" className="nav-link p-0 text-muted">
                  FAQs & Contact
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/about" className="nav-link p-0 text-muted">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <h5>Subscribe to our newsletter</h5>
            <p>Get the latest updates and offers.</p>
            <form className="d-flex w-100 gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                required
              />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
            <div className="mt-4">
              <h5>Follow us</h5>
              <div className="d-flex gap-3">
                <a href="https://facebook.com" className="text-muted">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" className="text-muted">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" className="text-muted">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" className="text-muted">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center footer-bottom">
          <p className="mb-0">© {year} TREND_SHOP. Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
