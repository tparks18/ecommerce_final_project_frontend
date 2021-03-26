import React from "react";
import { CartList } from "../../components/CartList";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe('pk_test_51IQxLfEWzwZKboVgvG1RE9cTt2frOYMES9IybMfz3925OehXfUS6kDQdhrxnGs5qHUVaO590x1TYa8nPFY7HHVpZ00cj56gFyj');

export const ShopCart = (props) => {
  return (
    <div>
      <h3>Cart</h3>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-inverse">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartList
              cart={props.cart}
              handleQuantityChange={props.handleQuantityChange}
              removeFromCart={props.removeFromCart}
            />
            <tr>
              <td colSpan="3"></td>
              <td>
                <strong className="float-right">Subtotal</strong>
              </td>
              <td>
                <strong>${props.subtotal.toFixed(2)}</strong>
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
              <td>
                <strong className="float-right">Tax</strong>
              </td>
              <td>
                <strong>${props.taxTotal.toFixed(2)}</strong>
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
              <td>
                <strong className="float-right">Grand Total</strong>
              </td>
              <td>
                <strong>${props.grandTotal.toFixed(2)}</strong>
              </td>
            </tr>
            <tr>
              <td colSpan="4"></td>
              <td>
                <button onClick={props.checkoutHandler} className="btn btn-success">
                  Checkout
                </button>
                {/* <button onClick={handleCheckout} className="btn btn-success">
                  Checkout
                </button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
