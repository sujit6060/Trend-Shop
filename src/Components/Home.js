import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <img
          src={`${process.env.PUBLIC_URL}/assets/bg.jpg`}
          className="hero-image"
          alt=""
          aria-hidden="true"
        />
        <div className="container hero-content">
          <p className="eyebrow">The new season edit</p>
          <h1 className="hero-title">Style that speaks for you.</h1>
          <p className="hero-copy">
            Thoughtful finds, timeless details, and fresh ways to make every
            look your own.
          </p>
          <NavLink to="/products" className="btn-premium mt-3">
            Discover the collection
          </NavLink>
        </div>
      </section>
      <Products />
    </>
  );
};

export default Home;
