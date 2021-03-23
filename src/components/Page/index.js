import React, { Component } from "react";
import Navbar from "../Navbar";

export default class Page extends Component {
  render() {
    const children = this.props.children;

    return (
      <div>
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    );
  }
}
