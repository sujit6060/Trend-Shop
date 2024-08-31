import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { addcart } from "../Redux/Action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addcart(product));
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", maxWidth: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="fw-bold">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            ₹ {Math.ceil(product.price && (product.price * 70).toFixed(2))}
          </h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark px-4 py-2 ms-2">
            Go to Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
