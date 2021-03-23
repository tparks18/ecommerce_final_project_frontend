import React, { Component } from "react";

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
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
            <div className="card-footer">
              <button className="btn btn-success btn-block">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
