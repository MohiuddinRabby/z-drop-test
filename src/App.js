import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./app/modules/HomePage/HomePage";
import MainNav from "./app/modules/MainNav/MainNav";
import LatestBlog from "./app/modules/LatestBlog/LatestBlog";
const App = () => {
  return (
    <div className="container">
      <Router>
        <MainNav></MainNav>
        <div className="row">
          <div className="col-lg-3" id="sidebar">
            <h3>Sidebar</h3>
          </div>
          <div className="col-lg-9" id="homepage">
            <Switch>
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
        <LatestBlog></LatestBlog>
      </Router>
    </div>
  );
};

export default App;
