import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";

import {Navbar} from "./components/Navbar";
import Contact from "./views/Contact";
import Home from "./views/Home";
import {Shop }from "./views/Shop"
import {ShopCart} from "./views/ShopCart";
import Recipes from "./views/Recipes";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setDisplayCart] = useState({ items: {} });
  const [numItems, setNumItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  // Pulls in products from Flask API
  useEffect(() => {
      async function getProducts() {
          await fetch('http://localhost:5000/api/shop')
              .then(r=> r.json())
              .then(data => {
                  setProducts(data)
              })
      }
      getProducts();
  }, [])

  const checkoutHandler = () =>{
    var data = {
      name: 'Tatyana'
    }

    fetch('/shop/checkout', {
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(data),
      method: 'POST'
    })
      .then(r=>r.json())
      .then(data => {
        console.log(data)
      })

  }

  const addToCart = (p) => {
    var newCart = { ...cart };
    let newNumItems = numItems;
    let st = subtotal;
    let tt = taxTotal;
    let gt = grandTotal;

    if (Object.keys(newCart.items).length === 0) {
      let newProductObj = {
        product: p,
        quantity: 1,
      };
      newCart.items[p.id] = newProductObj;
      newNumItems = 1;
      setSubtotal((st += newCart.items[p.id].product.price));
      setTaxTotal((tt += newCart.items[p.id].product.tax));
      setGrandTotal(
        (gt +=
          newCart.items[p.id].product.price + newCart.items[p.id].product.tax)
      );
    } else {
      if (newCart.items.hasOwnProperty(p.id)) {
        newCart.items[p.id].quantity++;
        newNumItems++;
      } else {
        let newProductObj = {
          product: p,
          quantity: 1,
        };
        newCart.items[p.id] = newProductObj;
        newNumItems++;
      }
      setSubtotal((st += newCart.items[p.id].product.price));
      setTaxTotal((tt += newCart.items[p.id].product.tax));
      setGrandTotal(
        (gt +=
          newCart.items[p.id].product.price + newCart.items[p.id].product.tax)
      );
    }
    setDisplayCart(newCart);
    setNumItems(newNumItems);
  };

  const handleQuantityChange = (e, p) => {
    let st = subtotal;
    let tt = taxTotal;
    let gt = grandTotal;

    // currently, the data structure coming into handleQuantityChange is the simplified, display version of my cart
    let itemToChange;
    // I want to use addToCart IF the input value's quantity is greater than the value 'p' coming into the cart.
    if (e.target.value > p.quantity) {
      for (const item of products) {
        if (p.product.id === item.id) {
          itemToChange = item;
          break;
        }
      }
      addToCart(itemToChange);
      setSubtotal((st += p.product.price));
      setTaxTotal((tt += p.product.tax));
      setGrandTotal((gt += p.product.price + p.product.tax));
    } else {
      // ELSE use removeFromCart.
      removeFromCart(p);
      setSubtotal((st -= p.product.price));
      setTaxTotal((tt -= p.product.tax));
      setGrandTotal((gt -= p.product.price + p.product.tax));
    }
  };

  const removeFromCart = (p) => {
    let newCart = { ...cart };
    let newNumItems = numItems;

    // console.log(newCart.items[15].quantity)
    if (newCart.items[p.product.id].quantity > 1) {
      newCart.items[p.product.id].quantity--;
      newNumItems--;
    } else {
      delete newCart.items[p.product.id];
      newNumItems--;
    }

    setDisplayCart(newCart);
    setNumItems(newNumItems);


  };

  //  const handleCheckout = (p) => {
  //    //once the checkout button is pressed i want it to delete all the items in the cart
  //    //then have it send a message that the checkout was successful
  //    let newCart = { ...cart };
  //    let newNumItems = numItems;

  //    // console.log(newCart.items[15].quantity)
  //    if (newCart.items[p.product.id].quantity > 1) {
  //      newCart.items[p.product.id].quantity--;
  //      newNumItems--;
  //    } else {
  //      delete newCart.items[p.product.id];
  //      newNumItems--;
  //    }

  //    setDisplayCart(newCart);
  //    setNumItems(newNumItems);
  //  };

    return (
      <div>
        <header>
          <Navbar cart={cart} numItems={numItems} />
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/Recipes" render={() => <Recipes />} />
            <Route
              exact
              path="/shop"
              render={() => <Shop addToCart={addToCart} products={products} />}
            />
            <Route
              path="/shop/cart"
              render={() => (
                <ShopCart
                  checkoutHandler={checkoutHandler}
                  removeFromCart={removeFromCart}
                  subtotal={subtotal}
                  taxTotal={taxTotal}
                  grandTotal={grandTotal}
                  handleQuantityChange={handleQuantityChange}
                  cart={cart}
                />
              )}
            />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
