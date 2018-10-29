import React from "react";
import ReactDOM from "react-dom";
import "./index.modules.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

/* API endpoint link added as baseurl to axios, to be used in the whole application.*/
axios.defaults.baseURL = "https://opendata.rdw.nl/resource/";

/* Renders the app component into the root div of index.html*/
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
