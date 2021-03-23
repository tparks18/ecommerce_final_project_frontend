import React, { Component } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Shop from "./views/Shop";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Shop from "./views/Shop"

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
        <header>
          <Navbar />
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/shop" render={() => <Shop />} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}
