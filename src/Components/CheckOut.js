import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.handleCart);

  const total = useMemo(() => {
    return cartItems.reduce(
      (acc, item) =>
        acc + Math.ceil(item.price * 70) * (item.quantity || 1),
      0
    );
  }, [cartItems]);

  const renderCartItem = (item) => (
    <li
      className="list-group-item d-flex justify-content-between lh-sm"
      key={item.id}
    >
      <div>
        <h6 className="my-0">
          {item.title.length > 22
            ? `${item.title.substring(0, 22)}...`
            : item.title}
        </h6>
      </div>
      <span className="text-muted">
        {item.quantity || 1} × ₹ {Math.ceil(item.price * 70)}
      </span>
    </li>
  );

  return (
    <section className="container page-section checkout-page">
      <p className="eyebrow">Almost yours</p>
      <h1 className="page-title">Checkout</h1>
      {cartItems.length === 0 ? (
        <div className="content-panel p-4 p-md-5 text-center">
          <h2 className="section-heading">Your bag is empty.</h2>
          <p className="section-subtitle">
            Add something you love before heading to checkout.
          </p>
          <NavLink to="/products" className="btn-premium mt-3">
            Explore the collection
          </NavLink>
        </div>
      ) : (
      <div className="row g-4 g-lg-5 checkout-layout">
        <div className="col-lg-5 col-xl-4 order-lg-last">
          <aside className="checkout-panel p-4">
          <h2 className="checkout-heading d-flex justify-content-between align-items-center mb-4">
            <span>Your order</span>
            <span className="checkout-count">
              {cartItems.reduce(
                (count, item) => count + (item.quantity || 1),
                0
              )}
            </span>
          </h2>
          <ul className="list-unstyled checkout-items">
            {cartItems.map(renderCartItem)}
            <li className="checkout-total d-flex justify-content-between">
              <span>Total</span>
              <strong>₹ {Math.ceil(total)}</strong>
            </li>
          </ul>

          <form className="checkout-promo p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-outline-dark">
                Redeem
              </button>
            </div>
          </form>
          </aside>
        </div>

        <div className="col-lg-7 col-xl-8">
          <div className="checkout-panel p-4 p-md-5">
          <h2 className="checkout-heading mb-1">Delivery details</h2>
          <p className="section-subtitle mb-4">
            Where should we send your order?
          </p>
          <form className="needs-validation checkout-form" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    required
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select className="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="zip" required />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>

            <hr className="my-4" />

            <h2 className="checkout-heading mb-3">Payment</h2>
            <div className="payment-demo-note mb-4">
              <i className="fa fa-lock" aria-hidden="true"></i>
              <p className="mb-0">
                Payment is not enabled in this demo. No card details are
                requested or collected.
              </p>
            </div>

            <hr className="my-4" />

            <button className="btn-premium w-100" type="submit">
              Review checkout
            </button>
          </form>
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default CheckOut;
