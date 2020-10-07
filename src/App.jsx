import React from "react";
import Home from "./Home";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UNavbar from "./Components/UNavbar";
import Contact from "./Contact";
import Category from "./Category";
import Productcategory from "./Productcategory.jsx";
//import Footer from "./Footer";
import { BrowserRouter as Switch, Route } from "react-router-dom";
//import ULayout from "./Components/ULayout";
import Admin from "./Admin/Admin";
const App = () => {
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
            <div>Shop by Category</div>
            <Category></Category>
          </div>
        </main>
        <footer>
          <UNavbar className="footer"></UNavbar>
          All Rights is Reserved,
        </footer>
      </div>
    </React.Fragment>
  );
};

export default App;
