import React from "react";
//import { Form, FormControl } from "react-bootstrap";
//import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//   .navbar-brand,
//   .navbar-bar .nav-link {
//     color: #bbb;
//     &:hover {
//       color: white;
//     }
//   }
// `;

const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/productcategory"> Baba Khana Khajana</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/Productcategory">Category</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
