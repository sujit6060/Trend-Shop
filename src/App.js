import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Trend-Shop">
            <Home />{" "}
          </Route>
          <Route exact path="/products">
            <Products />{" "}
          </Route>
          <Route exact path="/products/:id">
            <Product />{" "}
          </Route>
          <Route exact path="/cart">
            <Cart />{" "}
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
