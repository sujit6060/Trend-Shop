import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delcart } from "../Redux/Action";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(delcart(item));
  };

  const renderCartItems = () =>
    cartItems.map((item) => (
      <article className="cart-item p-3 p-md-4 mb-3" key={item.id}>
        <div className="row align-items-center g-3">
          <div className="col-4 col-md-2">
            <div className="product-image-wrap cart-product-image">
              <img src={item.image} alt={item.title} className="product-image" />
            </div>
          </div>
          <div className="col-8 col-md-6">
            <span className="product-category">{item.category}</span>
            <h2 className="h6 fw-semibold mt-2">{item.title}</h2>
            <p className="text-muted mb-1">
              ₹ {Math.ceil(item.price * 70)} · Quantity {item.quantity || 1}
            </p>
            <p className="product-price mb-0">
              ₹ {Math.ceil(item.price * 70) * (item.quantity || 1)}
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-end">
            <button
              onClick={() => handleRemoveItem(item)}
              className="btn btn-outline-dark btn-sm"
            >
              Remove item
            </button>
          </div>
        </div>
      </article>
    ));

  const renderCheckoutButton = () => (
    <div className="d-flex justify-content-end mt-4">
      <NavLink to="/checkout" className="btn-premium">
        Proceed to checkout
      </NavLink>
    </div>
  );

  return (
    <section className="container page-section">
      <p className="eyebrow">Your selection</p>
      <h1 className="page-title">Shopping bag</h1>
      {cartItems.length === 0 ? (
        <div className="content-panel p-4 p-md-5 text-center">
          <h2 className="section-heading">Your bag is waiting.</h2>
          <p className="section-subtitle">
            Discover something you’ll love and it will appear here.
          </p>
          <NavLink to="/products" className="btn-premium mt-3">
            Explore the collection
          </NavLink>
        </div>
      ) : (
        <>
          {renderCartItems()}
          {renderCheckoutButton()}
        </>
      )}
    </section>
  );
};

export default Cart;
