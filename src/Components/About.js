import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center">About Us</h2>
          <p className="mt-4">
            <strong>Welcome to Trend Shop - Where Fashion Meets Style!</strong>
          </p>
          <h4>Our Story</h4>
          <p>
            At Trend Shop, fashion isn't just a passion; it's our way of life.
            Our journey began in 2020 when a group of fashion enthusiasts
            decided to turn their love for style into a destination where
            everyone can discover the latest trends, express their
            individuality, and feel confident in their choices.
          </p>

          <h4>Our Mission</h4>
          <p>
            Empowering Your Style Journey: Our mission is to empower individuals
            to express their unique style with confidence. We believe that
            fashion should be inclusive, accessible, and a source of inspiration
            for all.
          </p>

          <h4>What Sets Us Apart</h4>
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

          <div className="text-center mt-4">
            <button className="btn btn-outline-warning w-50">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
