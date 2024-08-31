import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container my-5 py-5">
      <h1 className="display-6 fw-bolder text-center mb-5">Latest Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div
              className="card h-100 text-center p-4 d-flex flex-column"
              style={{ height: "400px" }}
            >
              <img
                src={product.image}
                className="card-img-top mb-3"
                alt={product.title}
                style={{
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title mb-3" style={{ flexGrow: 1 }}>
                  {product.title.length > 12
                    ? `${product.title}`
                    : product.title}
                </h6>
                <p className="card-text fw-bold">
                  Rs. {Math.ceil(product.price * 70)}
                </p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-danger mt-auto"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
