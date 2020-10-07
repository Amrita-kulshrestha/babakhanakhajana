import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
//import PageItem from "react-bootstrap/PageItem";

let active = 1;
let items = [];
for (let number = 1; number <= 10; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

export default class LocalPagination extends Component {
  render() {
    return (
      <div>
        <Pagination size="sm">{items}</Pagination>
      </div>
    );
  }
}
