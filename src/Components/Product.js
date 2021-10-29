import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { addcart } from "../Redux/Action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addcart(product));
  };

  const getData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });

    setProduct(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container py-5" key={product.key}>
        <div className="row py-4">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">RS. {product.price * 70}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-dark px-4 py-2 ms-2">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
