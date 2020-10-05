import React from "react";
import ProductsItem from "./ProductsItem";
import data from "../data.json";
import "./index.css";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="content">
        <div className="main">
          <ProductsItem products={this.state.products}></ProductsItem>
        </div>
        <div className="sidebar">cart Item</div>
      </div>
    );
  }
}

export default Products;
