import React, { Component } from "react";
import "./index.css";
export default class FigureItem extends Component {
  render() {
    return (
      <div>
        <ul className="prop">
          {this.props.figures.map((product) => (
            <li key={product}>
              <div className="pro">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.alt}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
