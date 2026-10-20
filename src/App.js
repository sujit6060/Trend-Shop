import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Trend-Shop" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            render={() => (
              <section className="container page-section text-center">
                <h1 className="page-title">Page not found</h1>
                <p>The page you requested does not exist.</p>
                <NavLink to="/Trend-Shop" className="btn-premium">
                  Back to Home
                </NavLink>
              </section>
            )}
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
