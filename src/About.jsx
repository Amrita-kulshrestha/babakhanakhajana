import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Headerlogo from "./Components/Headerlogo.jsx";
const About = () => {
  return (
    <>
      {" "}
      <Container>
        <h1 className="success">About Baba Khana Khajana</h1>
        <p className="mb-0">
          Baba Khana Khazana is an online E-commerce market place to buy the
          daily usage Grocery products with an option to choose from not only
          top brands of India and abroad but also have a wide list of local
          products directly available from farms with rich taste and nutrition.
          Here, we take care about your well being, so we provide the facility
          of home delivery in accordance to the essential measures of COVID -
          19.
        </p>
        <Headerlogo></Headerlogo>
      </Container>
    </>
  );
};

export default About;
