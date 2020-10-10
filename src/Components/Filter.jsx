import React, { Component } from "react";
import "../index.css";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Type of category
          <select value={this.props.cate} onChange={this.props.filterProducts}>
            <option selected>
              select category...
            </option>
            <option value="1">Dal and Pulses</option>
            <option value="2">Dry Fruits</option>
            <option value="3">Oil And Refined</option>
            <option value="4">Flour and Grains</option>
            <option value="5">Rice and Rice Product</option>
            <option value="6">Spices</option>
            <option value="7">Sugar Salt</option>
            <option value="8">Packed Foods</option>
            <option value="9">Personal Care</option>
            <option value="10">Detergents</option>
            <option value="11">Bevarages</option>
          </select>
        </div>
        <div className="filter-size">
          Filter
          <select value={this.props.qty} onChange={this.props.sortProducts}>
            <option value="" selected>
              All
            </option>
            <option value="100g">100g</option>
            <option value="500g">500g</option>
            <option value="1kg">1kg</option>
            <option value="2kg">2kg</option>
            <option value="5kg">5kg</option>
            <option value="10kg">10kg</option>
            <option value="20kg">20kg</option>
          </select>
        </div>
      </div>
    );
  }
}
