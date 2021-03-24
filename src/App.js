import React, { Component } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Shop from "./views/Shop";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Shop from "./views/Shop"
import ShopCart from "./views/ShopCart";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cart: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/shop")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
        })
      );
  }

  addToCart = (product) => this.setState({ cart: this.state.cart.concat(product) });

  render() {
    console.log("component rendered");

    return (
      <div>
        <header>
          <Navbar cart={this.state.cart} />
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route
              exact
              path="/shop"
              render={() => (
                <Shop
                  addToCart={this.addToCart}
                  products={this.state.products}
                />
              )}
            />
            <Route exact path="/shop/cart" render={() => <ShopCart cart={this.state.cart}/>} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}
