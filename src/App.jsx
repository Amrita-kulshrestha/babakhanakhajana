import React from "react";
import Home from "./Home";
import About from "./About";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UNavbar from "./Components/UNavbar";
import Contact from "./Contact";
import Category from "./Category";
import Productcategory from "./Productcategory.jsx";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import { Component } from "react";
 class App extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="grid-container">
        <header>
          {" "}
          <UNavbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/productcategory" component={Productcategory} />
            <Route exact path="/" component={Home} />
          </Switch>
          <div className="HomeCategory">
            <div className="App-link">Shop by Category
              And Cash On Delivery
            </div>
          </div>
        </main>
        <footer>
          <UNavbar className="footer"></UNavbar>
          @2020 All Rights is Reserved, Designed by Katal Enough &#9728;
        </footer>
      </div>
    </React.Fragment>    
    )
  }
}
export default App;
