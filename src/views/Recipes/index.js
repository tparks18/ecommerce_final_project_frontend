import React, { Component } from 'react'

export default class Recipes extends Component {
    render() {
        return (
          <div>
            <h4>Recipes</h4>
            <hr />
            <div className='recipe-box'>
              <figure className="pizza">
  <div className="pizza__herro">
    <img src="https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="pizza" class="pizza__img" />
  </div>
  <div className="pizza__content">
    <div className="pizza__title">
      <h1 className="pizza__heading">Pizza Vegetale 👌</h1>
      <div className="pizza__tag pizza__tag--1">#vegetarian</div>
      <div className="pizza__tag pizza__tag--2">#italian</div>
    </div>
    <p className="pizza__description">Yummy veggie pizza with tasty olives, crisp       peppers, fresh arugula and original italian sauce.</p>
    <div className="pizza__details">
      <p className="pizza__detail"><span class="emoji">🍕</span>850 kcal</p>
      <p className="pizza__detail"><span class="emoji">⏱</span>30 min</p>
      <p className="pizza__detail"><span class="emoji">⭐</span>4.7 / 5</p>
    </div>
  </div>
  <div className="pizza__price">$11.99</div>
</figure>
            </div>
            <div className='recipe-box'>
              <figure className="pizza">
  <div className="pizza__herro">
    <img src="https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="pizza" class="pizza__img" />
  </div>
  <div className="pizza__content">
    <div className="pizza__title">
      <h1 className="pizza__heading">Pizza Vegetale 👌</h1>
      <div className="pizza__tag pizza__tag--1">#vegetarian</div>
      <div className="pizza__tag pizza__tag--2">#italian</div>
    </div>
    <p className="pizza__description">Yummy veggie pizza with tasty olives, crisp       peppers, fresh arugula and original italian sauce.</p>
    <div className="pizza__details">
      <p className="pizza__detail"><span class="emoji">🍕</span>850 kcal</p>
      <p className="pizza__detail"><span class="emoji">⏱</span>30 min</p>
      <p className="pizza__detail"><span class="emoji">⭐</span>4.7 / 5</p>
    </div>
  </div>
  <div className="pizza__price">$11.99</div>
</figure>
            </div>
          </div>
        );
    }
}
