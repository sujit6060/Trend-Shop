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
    <div className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row justify-content-center">
          <h3>Your Cart Is Empty</h3>
        </div>
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
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={item.image}
                alt={item.title}
                width="200"
                height="200"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <h3>{item.title}</h3>
              <p className="lead fw-bolder">Rs. {item.price * 70}</p>
            </div>
          </div>
        </div>
      </div>
    ));

  const renderCheckoutButton = () => (
    <div className="container">
      <div className="row">
        <NavLink
          to="/checkout"
          className="btn btn-outline-dark mb-5 w-25 mx-auto"
        >
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
