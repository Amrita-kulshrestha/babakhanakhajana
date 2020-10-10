import React, { Component } from "react";
import logo from "./logo512.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class Headerlogo extends Component {
  render() {
    return (
      <Container expand="lg" variant="success" bg="light">
        <Row>
          <Col xs={6} md={4}>
            <Image src={logo} roundedCircle />
          </Col>
        </Row>
      </Container>
    );
  }
}
