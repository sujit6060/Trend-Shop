import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/assets/bg.jpg"
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column ">
            <div className="container ">
              <h5
                className="card-title display-3 fw-bolder mb-2"
                style={{ paddingLeft: "400px", paddingTop: "350px" }}
              >
                NEW SEASON ARRIVAL
              </h5>
              <p className="card-text fs-3" style={{ paddingLeft: "550px" }}>
                Check Out All The TRENDS
              </p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
