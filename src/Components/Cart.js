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

  const renderEmptyCart = () => (
    <div className="px-4 my-5 bg-light rounded-3 py-5 text-center">
      <div className="container py-4">
        <h3>Your Cart Is Empty</h3>
        <p className="lead">
          Looks like you haven't added anything to your cart yet.
        </p>
        <NavLink to="/products" className="btn btn-primary mt-3">
          Start Shopping
        </NavLink>
      </div>
    </div>
  );

  const renderCartItems = () =>
    cartItems.map((item) => (
      <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
        <div className="container py-4">
          <button
            onClick={() => handleRemoveItem(item)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src={item.image}
                alt={item.title}
                width="150"
                height="150"
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="col-md-5">
              <h5>{item.title}</h5>
              <p className="text-muted">
                Price: Rs. {Math.ceil(item.price * 70)}
              </p>
              <p className="text-muted">Quantity: 1</p>
              <p className="lead fw-bold">
                Total: Rs. {Math.ceil(item.price * 70)}
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <button
                onClick={() => handleRemoveItem(item)}
                className="btn btn-danger"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  const renderCheckoutButton = () => (
    <div className="container">
      <div className="row">
        <NavLink to="/checkout" className="btn btn-primary btn-lg w-50 mx-auto">
          Proceed To Checkout
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      {cartItems.length === 0 && renderEmptyCart()}
      {cartItems.length > 0 && renderCartItems()}
      {cartItems.length > 0 && renderCheckoutButton()}
    </>
  );
};

export default Cart;
