import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="myNavbar">
          <ul className="navbar_container">
            <li className="navbar-item-content-first">
              <Link to="/">
                <div className="navbar-item-content">
                  <span class="menu-icon">
                    <i class="fa fa-home fa-2x"></i>
                  </span>
                  Home
                </div>
              </Link>
            </li>
            <li className="navbar-item-content">
              <Link to="localfood">
                <span className="menu-icon">
                  <i className="fa fa-carrot fa-2x" />
                </span>
                Buy Local Food
              </Link>
            </li>
            <li className="navbar-item-content">
              <Link to="recipes">
                <span className="menu-icon">
                  <i className="fa fa-scroll fa-2x" />
                </span>
                Recipes
              </Link>
            </li>
            <li className="navbar-item-content">
              <Link to="reviews">
                <span className="menu-icon">
                  <i className="fas fa-thumbs-up fa-2x" />
                </span>
                Reviews
              </Link>
            </li>
            <li className="navbar-item-content">
              <Link to="customerlogin">
                <span className="menu-icon">
                  <i className="fas fa-sign-in-alt fa-2x" />
                </span>
                Customer Login
              </Link>
            </li>
            <li className="navbar-item-content">
              <Link to="sellerlogin">
                <span className="menu-icon">
                  <i className="fas fa-store fa-2x" />
                </span>
                Seller Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
      