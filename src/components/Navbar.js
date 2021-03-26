import React from "react";
import { Link } from "react-router-dom";
import logo from "./rootin4uslogo.png"

export const Navbar = (props) => {
    return (
      <>
        <div className="green-bar">
          <strong>
            *Ensuring better livelihoods for farmers and artisans*
          </strong>
        </div>
        <div className="header-container">
          <nav className="myNavbar">
            <ul className="navbar_container">
              <li className="navbar-item-content-first">
                <Link to="/">
                  <div className="navbar-item-content">
                    <span className="menu-icon">
                      <i className="fa fa-home fa-2x"></i>
                    </span>
                    Home
                  </div>
                </Link>
              </li>
              <li className="navbar-item-content">
                <Link to="Shop">
                  <span className="menu-icon">
                    <i className="fa fa-carrot fa-2x" />
                  </span>
                  Buy Local Food
                </Link>
                {/* <div className="dropdown-content">
                  <Link to="Shop">Products</Link>
                  <a href="/">Cart</a>
                  <Link to="/shop/cart">Checkout</Link>
                </div> */}
              </li>
              <li className="navbar-item-content">
                <Link to="/shop/cart">
                  <span className="menu-icon">
                    <i class="fas fa-shopping-cart fa-2x" />
                    <span className="float-right">
                      <span className="badge badge-pill badge-info">
                        {props.numItems}
                      </span>
                    </span>
                  </span>
                  Cart
                </Link>
              </li>
              <li className="navbar-item-logo">
                <span className="logo-holder">
                  <img src={logo} alt="logo" />
                </span>
              </li>
              <li className="navbar-item-content">
                <Link to="Recipes">
                  <span className="menu-icon">
                    <i className="fa fa-scroll fa-2x" />
                  </span>
                  Recipes
                </Link>
              </li>
              <li className="navbar-item-content">
                <Link to="Contact">
                  <span className="menu-icon">
                    <i class="fas fa-envelope-open-text fa-2x" />
                  </span>
                  Contact Us
                </Link>
              </li>
              <li className="navbar-item-content">
                <Link to="Sources">
                  <span className="menu-icon">
                    <i class="fas fa-seedling fa-2x"></i>
                  </span>
                  Sources
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="navbar-break-line" />
      </>
    );
  }



