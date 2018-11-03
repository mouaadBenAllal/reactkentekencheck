// import React to be used below
import React from "react";
// import reactDom to be used below
import ReactDOM from "react-dom";
// import index css
import "./index.modules.css";
// import App component
import App from "./App";
// import serviceworker.js file to be used below
import registerServiceWorker from "./registerServiceWorker";
// import axios to set baseURL below
import axios from "axios";

/* API endpoint link added as baseurl to axios, to be used in the whole application.*/
axios.defaults.baseURL = "https://opendata.rdw.nl/resource/";

/* Renders the app component into the 'root' div of index.html*/
ReactDOM.render(<App />, document.getElementById("root"));

/* Method get called to register serviceworker for PWA behaviour */
registerServiceWorker();
