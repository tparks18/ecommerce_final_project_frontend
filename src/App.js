import React, { Component } from "react";
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Home from "./views/Home";

export default class App extends Component {
  constructor() {
    super();
    console.log("component constructed");
  }

  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    console.log("component rendered");
    return (
      <div>
        <Home />
        <Contact />
        <Cart />
      </div>
    );
  }
}
