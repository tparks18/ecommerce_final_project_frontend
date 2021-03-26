import React, { Component } from 'react'

export default class Recipes extends Component {
    render() {
        return (
          <div>
            <h4>Recipes</h4>
            <hr />
            <div className="recipe-box">
              <figure className="pizza">
                <div className="pizza__herro">
                  <img
                    src="https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt="pizza"
                    class="pizza__img"
                  />
                </div>
                <div className="pizza__content">
                  <div className="pizza__title">
                    <h1 className="pizza__heading">Pizza Vegetale 👌</h1>
                    <div className="pizza__tag pizza__tag--1">#vegetarian</div>
                    <div className="pizza__tag pizza__tag--2">#italian</div>
                  </div>
                  <p className="pizza__description">
                    Yummy veggie pizza with tasty olives, crisp peppers, fresh
                    arugula and original italian sauce.
                  </p>
                  <div className="pizza__details">
                    <p className="pizza__detail">
                      <span class="emoji">🍕</span>850 kcal
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⏱</span>30 min
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⭐</span>4.7 / 5
                    </p>
                  </div>
                </div>
                <div className="pizza__price">$11.99</div>
              </figure>
            </div>

            <div className="recipe-box">
              <figure className="pizza">
                <div className="pizza__herro">
                  <img
                    src="https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt="pizza"
                    class="pizza__img"
                  />
                </div>
                <div className="pizza__content">
                  <div className="pizza__title">
                    <h1 className="pizza__heading">
                      Orange, Beet, Walnut Salad 🍊
                    </h1>
                    <div className="pizza__tag pizza__tag--1">#vegetarian</div>
                    <div className="pizza__tag pizza__tag--2">#french</div>
                  </div>
                  <p className="pizza__description">
                    Delicious nutritious salad with oranges, beets, walnuts,
                    arguala, and feta cheese
                  </p>
                  <div className="pizza__details">
                    <p className="pizza__detail">
                      <span class="emoji">🥗</span>430 kcal
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⏱</span>15 min
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⭐</span>4.5 / 5
                    </p>
                  </div>
                </div>
                <div className="pizza__price">$8.99</div>
              </figure>
            </div>

            <div className="recipe-box">
              <figure className="pizza">
                <div className="pizza__herro">
                  <img
                    src="https://images.unsplash.com/photo-1464411335145-a52ac26409ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt="pizza"
                    class="pizza__img"
                  />
                </div>
                <div className="pizza__content">
                  <div className="pizza__title">
                    <h1 className="pizza__heading">Blueberry Jam Cookies 🫐</h1>
                    <div className="pizza__tag pizza__tag--1">#vegetarian</div>
                    <div className="pizza__tag pizza__tag--2">#spanish</div>
                  </div>
                  <p className="pizza__description">
                    A shortbread cookie infused with blueberry jam and a
                    delectable lemon-flavored glaze. Best served with coffee.
                  </p>
                  <div className="pizza__details">
                    <p className="pizza__detail">
                      <span class="emoji">🍪</span>500 kcal
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⏱</span>60 min
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⭐</span>5 / 5
                    </p>
                  </div>
                </div>
                <div className="pizza__price">$9.99</div>
              </figure>
            </div>

            <div className="recipe-box">
              <figure className="pizza">
                <div className="pizza__herro">
                  <img
                    src="https://images.unsplash.com/photo-1578536892090-aecdaea1f6cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt="pizza"
                    class="pizza__img"
                  />
                </div>
                <div className="pizza__content">
                  <div className="pizza__title">
                    <h1 className="pizza__heading">Elote 🌽</h1>
                    <div className="pizza__tag pizza__tag--1">#vegetarian</div>
                    <div className="pizza__tag pizza__tag--2">#Mexican</div>
                  </div>
                  <p className="pizza__description">
                    A grilled corn with mayo sauce and topped
                    with chili powder, cheese and lime.
                  </p>
                  <div className="pizza__details">
                    <p className="pizza__detail">
                      <span class="emoji">🧀</span>300 kcal
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⏱</span>20 min
                    </p>
                    <p className="pizza__detail">
                      <span class="emoji">⭐</span>5 / 5
                    </p>
                  </div>
                </div>
                <div className="pizza__price">$9.99</div>
              </figure>
            </div>
          </div>
        );
    }
}
