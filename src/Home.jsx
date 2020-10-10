import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Components/Banner_Carousel.css";
import Banner_Carousel from "./Components/Banner_Carousel";
import Button from "react-bootstrap/Button";

//import web from "./images";

class home extends React.Component {
  render() {
    return (
      <>
        <Banner_Carousel />
        <div className="container fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Shop at your home <strong>Baba Khana Khajana</strong>
                </h1>
                <h2>Fast Delivery on call also </h2>
                <div className="mt-3">
                  <Button variant="secondary" size="lg">
                    <a href="/Productcategory">Shop Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default home;
