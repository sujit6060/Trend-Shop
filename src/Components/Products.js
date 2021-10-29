import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const [state, setstate] = useState([]);
  const getData = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });

    setstate(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr></hr>
          </div>

          {state.map((ele) => (
            <div className="col-md-3 mb-4" key={ele.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt={ele.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {ele.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text fw-bold">Rs.{ele.price * 70}</p>
                  <NavLink
                    to={`/products/${ele.id}`}
                    className="btn btn-outline-danger"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
