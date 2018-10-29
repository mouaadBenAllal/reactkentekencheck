import React, { Component } from "react";
import "./App.modules.css";
import Contact from "./Contact/Contact";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

/**
 * App component is the main compoment that acts as a container for all other components
 */
class App extends Component {
  render() {
    /* Renders different components on specific routes */
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Layout} />
        </div>
      </BrowserRouter>
    );
  }
}

/* Exports App to be used as a module inside the application.*/
export default App;
