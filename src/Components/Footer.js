import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div className="container">
          <footer className="py-4">
            <div className="row">
              <div className="col-md-6">
                <h5>Sections</h5>
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
                    <NavLink to="#" className="nav-link p-0 text-muted">
                      FAQs
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-muted">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1">
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <form className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-center py-3 my-3 fw-bold border-top">
              <p className="mb-0">
                © {year} TREND_SHOP. Inc. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
