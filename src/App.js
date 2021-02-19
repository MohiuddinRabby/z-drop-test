import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./app/modules/HomePage/HomePage";
import MainNav from "./app/modules/MainNav/MainNav";
import { ContextProvider } from "./app/assets/context/CartContext";
import Cart from "./app/modules/Cart/Cart";
const App = () => {
  return (
    <div className="container">
      <ContextProvider>
        <Router>
          <MainNav></MainNav>
          <div className="row">
            {/* <div className="col-lg-3" id="sidebar">
              <h3>Sidebar</h3>
            </div> */}
            <div className="col-lg-12" id="homepage">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </div>
          </div>
        </Router>
      </ContextProvider>
    </div>
  );
};

export default App;
