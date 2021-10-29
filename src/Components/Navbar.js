import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <div>
        <nav
          style={{ color: "white" }}
          className="navbar navbar-expand-lg navbar-light  bg-black shadow-sm py-3"
        >
          <div className="container" style={{ color: "white" }}>
            <NavLink
              className="navbar-brand fw-bold fs-4"
              to="/"
              style={{ color: "white" }}
            >
              TREND-SHOP
            </NavLink>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/products"
                    style={{ color: "white" }}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/about"
                    style={{ color: "white" }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    style={{ color: "white" }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="buttons">
                <Login />
                <Signup />
                <button className="btn">
                  <NavLink
                    to="/cart"
                    className="btn btn-outline-dark"
                    style={{ color: "white" }}
                  >
                    <i className="fa  fa-shopping-cart"></i> Cart (
                    {state.length})
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
