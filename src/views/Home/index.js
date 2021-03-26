import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <h4 className="section-title-1">
          Buying local builds thriving, sustainable communities.
        </h4>
        <div class="grid-container">
          <div class="section1-pic">
            <img
              className="woman-farming img-fluid"
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="woman-farming"
            />
          </div>
          <div class="section1-text">
            <h5>
              <h4>Invest in your community</h4>
              For every dollar spent on local food, $0.76 stays in the
              community. Comparatively, each dollar spent on food from outside
              your region results in only $0.28 remaining in the local economy.
            </h5>
          </div>
          <div class="section2-pic">
            <h5>
              <h4>Give the Earth a break</h4>
              Reduce the carbon footprint of your food by buying directly from
              local producers. Community supported agriculture is the future of
              farming. Buying direct from our online farmers marketplace means
              food travels fewer miles to arrive on your plate, significantly
              reducing the carbon footprint.
            </h5>
          </div>
          <div class="section2-text">
            <div class="section1-pic">
              <img
                className="vegetable-pic img-fluid"
                src="https://images.unsplash.com/photo-1591184510259-b6f1be3d7aff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="vegetables"
              />
            </div>
          </div>
          <div class="section3-pic">
            <img
              className="vegetable-pic img-fluid"
              src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
              alt="garden"
            />
          </div>
          <div class="section3-text">
            <h5>
              <h4>Support your hardworking neighbor</h4>
              When you buy through Rootin 4' Us, food producers receive money
              directly from you. Because of this direct connection, local
              producers achieve a higher rate of profitability allowing their
              operations to thrive.
            </h5>
          </div>
        </div>
      </>
    );
    
  }
}
