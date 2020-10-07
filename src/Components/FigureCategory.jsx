import React from "react";
import FigureItem from "./FigureItem";
import figure from "../figure.json";
import "../index.css";

class FigureCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      figures: figure.figures,
      width: "",
      height: "",
      alt: "",
    };
  }
  render() {
    return (
      <div className="content">
        <div className="main">
          <FigureItem figures={this.state.figures}></FigureItem>
        </div>
        <div className="sidebar">marquee</div>
      </div>
    );
  }
}
export default FigureCategory;
