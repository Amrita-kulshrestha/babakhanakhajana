import React, { Component } from "react";
import formatCurrency from "../util.jsx";
import "../index.css";
export default class ProductsItem extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <p>Qty:{product.Quantity}</p>
                <div className="product-price">
                  <div>{formatCurrency(product.Price)}</div>
                  <button className="button primary" onClick={() => this.props.addtoCart(product)}>Add</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
