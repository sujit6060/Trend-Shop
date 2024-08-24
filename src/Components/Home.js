import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://image.freepik.com/free-photo/beautiful-woman-black-friday-concept-with-copy-space_23-2148674185.jpg"
            className="card-img"
            alt="Background"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-2">
                NEW SEASON ARRIVAL
              </h5>
              <p className="card-text fs-3">Check Out All The TRENDS</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
