import React, { Component } from "react";
import "./App.css";
import Api from "./Api/Api";
import Contact from "./Contact/Contact";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Layout /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/home" exact component={Layout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
