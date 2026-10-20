import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { addcart } from "../Redux/Action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addcart(product));
  };

  useEffect(() => {
    let cancelled = false;

    const fetchProduct = async () => {
      setLoading(true);
      setProduct(null);
      setError("");
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (!cancelled) {
          setProduct(response.data);
        }
      } catch (requestError) {
        if (!cancelled) {
          console.error("Error fetching product data:", requestError);
          setError("Product details could not be loaded. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="container page-section text-center">Loading product...</p>
    );
  }

  if (error || !product) {
    return (
      <main className="container page-section text-center">
        <p className="alert alert-danger" role="alert">
          {error || "This product could not be found."}
        </p>
        <NavLink to="/products" className="btn-premium">
          Back to Products
        </NavLink>
      </main>
    );
  }

  return (
    <section className="container page-section">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="product-image-wrap product-detail-image">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          </div>
        </div>
        <div className="col-md-6">
          <p className="product-category">{product.category}</p>
          <h1 className="page-title mb-3">{product.title}</h1>
          <p className="fw-semibold">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star text-warning"></i>
          </p>
          <h2 className="product-price my-4">
            ₹ {Math.ceil(product.price * 70)}
          </h2>
          <p className="text-secondary lh-lg">{product.description}</p>
          <button
            className="btn-premium mt-3"
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn-premium-light ms-2 mt-3">
            Go to Cart
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Product;
