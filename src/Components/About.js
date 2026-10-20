import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="container page-section">
      <div className="row justify-content-center">
        <div className="col-lg-8 content-panel p-4 p-md-5">
          <p className="eyebrow">A little about us</p>
          <h1 className="page-title">Style, made personal.</h1>
          <p className="lead mt-4">
            <strong>Welcome to Trend Shop — where fashion meets style.</strong>
          </p>
          <h2 className="h4 mt-5">Our Story</h2>
          <p>
            At Trend Shop, fashion isn't just a passion; it's our way of life.
            Our journey began in 2020 when a group of fashion enthusiasts
            decided to turn their love for style into a destination where
            everyone can discover the latest trends, express their
            individuality, and feel confident in their choices.
          </p>

          <h2 className="h4 mt-4">Our Mission</h2>
          <p>
            Empowering Your Style Journey: Our mission is to empower individuals
            to express their unique style with confidence. We believe that
            fashion should be inclusive, accessible, and a source of inspiration
            for all.
          </p>

          <h2 className="h4 mt-4">What Sets Us Apart</h2>
          <ul>
            <li>
              <strong>Curated Selection:</strong> We carefully curate a
              collection of the latest trends, ensuring you have access to
              high-quality fashion that stands out.
            </li>
            <li>
              <strong>Diverse Styles:</strong> From classic elegance to street
              style, our range covers a diverse spectrum of styles to cater to
              every taste.
            </li>
            <li>
              <strong>Sustainability:</strong> We're committed to
              sustainability. Our eco-friendly initiatives and ethical sourcing
              reflect our dedication to a better future.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Your satisfaction is our
              priority. Our customer support team is here to assist you at every
              step of your shopping journey.
            </li>
          </ul>

          <div className="mt-4">
            <NavLink to="/contact" className="btn-premium">
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
