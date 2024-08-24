import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.handleCart.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black shadow-sm py-3">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold fs-4 text-white"
          to="/Trend-Shop"
        >
          TREND-SHOP
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <NavLink className="nav-link text-white" to="/Trend-Shop">
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link text-white" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Login />
            <Signup />
            <NavLink to="/cart" className="btn btn-outline-light ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart (
              {cartItemsCount})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
