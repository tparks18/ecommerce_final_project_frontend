import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default class Product extends Component {
    
  render() {
      const product = this.props.info;
    return (
      <div className="col-md-4 card-container">
        <div className="card">
          <div className="card-header">
            <h5>
              {product.name}
              <span className="float-right">${product.price}</span>
            </h5>
          </div>
          <img
            className="card-img-top"
            src="https://placehold.it/500x500&text=Product Image"
            alt="{product.name}"
          />
          <div className="card-body">
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <button
                onClick={() => this.props.addToCart(product)}
                className="btn btn-success btn-block"
              >
                Add to Cart
                <span className="add-to-cart-icon">
                  <FiShoppingCart />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
