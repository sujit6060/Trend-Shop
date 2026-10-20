import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        if (!cancelled) {
          setProducts(data);
          setError("");
        }
      } catch (requestError) {
        if (!cancelled) {
          console.error("Error fetching products:", requestError);
          setError("Products could not be loaded. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="container products-section">
      <div className="text-center mb-5">
        <p className="eyebrow">Considered essentials</p>
        <h2 className="section-heading">The collection</h2>
        <p className="section-subtitle">
          Pieces to wear on repeat, selected for the season.
        </p>
      </div>
      {loading && <p className="text-center py-5">Loading products...</p>}
      {error && (
        <p className="alert alert-danger text-center" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && products.length === 0 && (
        <p className="text-center">No products are available right now.</p>
      )}
      <div className="row g-4">
        {!loading &&
          !error &&
          products.map((product) => (
            <div className="col-6 col-md-4 col-xl-3" key={product.id}>
              <article className="product-card">
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    className="product-image"
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="product-card-body">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">
                    ₹ {Math.ceil(product.price * 70)}
                  </p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="product-link"
                  >
                    View details
                  </NavLink>
                </div>
              </article>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
