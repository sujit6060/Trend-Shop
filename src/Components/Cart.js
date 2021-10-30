import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delcart } from "../Redux/Action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleCut = (item) => {
    dispatch(delcart(item));
  };

  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <h3>Your Cart Is Empty</h3>
            </div>
          </div>
        </div>
      </>
    );
  };
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Proceed To CheckOut
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length == 0 && emptyCart()}
      {state.length !== 0 &&
        state.map((cartItems) => (
          <div className="px-4 my-5 bg-light rounded-3" key={cartItems.id}>
            <div className="container py-4">
              <button
                onClick={() => handleCut(cartItems)}
                className="btn-close float-end"
                aria-label="Close"
              ></button>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={cartItems.image}
                    alt={cartItems.title}
                    width="200"
                    height="200"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{cartItems.title}</h3>
                  <p className="lead fw-bolder"> Rs. {cartItems.price * 70}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      <br></br>
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
