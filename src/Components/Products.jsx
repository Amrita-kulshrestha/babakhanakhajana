import React from "react";
import ProductsItem from "./ProductsItem.jsx";
import data from "../data.json";
import "../index.css";
import LocalPagination from "./LocalPagination.jsx";
import Filter from "./Filter.jsx";
import Cart from "../Cart.jsx";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      cate: "",
      qty: "",
    };
  }
  createOrder = (order) => {
    alert("need to save order for" + order.name);
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };

  addtoCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  sortProducts(event) {
    console.log(event.target.value);
  }
  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      if (event.target.value === "") {
        this.setState({ cate: event.target.value, product: data.products });
      } else {
        this.setState({
          cate: event.target.value,
          products: data.products.filter(
            (product) => product.category.indexOf(event.target.value) === 0
          ),
        });
      }
    }
  };
  render() {
    return (
      <div className="content">
        <div className="main">
          <Filter
            count={this.state.products.length}
            cate={this.state.cate}
            qty={this.state.qty}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
          ></Filter>

          <ProductsItem
            products={this.state.products}
            addtoCart={this.addtoCart}
          ></ProductsItem>
        </div>
        <div className="sidebar">
          <Cart
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
            createOrder={this.createOrder}
          ></Cart>
        </div>
      </div>
    );
  }
}

export default Products;
