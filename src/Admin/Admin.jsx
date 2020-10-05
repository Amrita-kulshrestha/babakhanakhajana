import React from "react";
import "./Admin.css";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Admin = () => {
  return (
    <Container className="justify-content-md-center">
      <div id="login">
        <h1>
          <a href=""></a>
        </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save Password" />
          </Form.Group>
          <Button variant="info" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Admin;
