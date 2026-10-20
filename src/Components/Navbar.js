import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemsCount = useSelector((state) =>
    state.handleCart.reduce((count, item) => count + (item.quantity || 1), 0)
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-nav">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold"
          to="/Trend-Shop"
          onClick={() => setMenuOpen(false)}
        >
          TREND-SHOP
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/Trend-Shop"
                isActive={(match, location) =>
                  location.pathname === "/" ||
                  location.pathname === "/Trend-Shop"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center navbar-actions">
            <Login />
            <Signup />
            <NavLink
              to="/cart"
              className="nav-cart-btn"
              aria-label={`Shopping bag, ${cartItemsCount} items`}
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <span>Bag</span>
              <span className="cart-count">{cartItemsCount}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
