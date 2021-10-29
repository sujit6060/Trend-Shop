import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <br></br>
        <div className="container">
          <footer className="py-2">
            <div className="row">
              <div className="col-6">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink
                      to="/Trend-Shop"
                      className="nav-link p-0 text-muted"
                    >
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
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-muted">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <br></br>
            <div className="d-flex justify-content-center py-1 my-1 fw-bold border-top">
              <p>© 2021 TREND_SHOP. Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
