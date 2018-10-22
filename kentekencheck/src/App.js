import React, { Component } from "react";
import "./App.css";
import img from "./Static/kentekenicon.png";
import Api from "./Api/Api";

class App extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar has-shadow">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <img
                  src={img}
                  alt="Bulma: a modern CSS framework based on Flexbox"
                />
                <b>KENTEKENCHECK</b>
              </a>
              <div className="navbar-burger burger" data-target="navMenu">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="navbar-menu" id="navMenu">
              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Account</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">Dashboard</a>
                    <a className="navbar-item">Profile</a>
                    <a className="navbar-item">Settings</a>
                    <hr className="navbar-divider" />
                    <div className="navbar-item">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Api />
        <br />

        <footer>
          <div className="box cta">
            <div className="columns is-mobile is-centered">
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags has-addons">
                    <a
                      className="tag is-link"
                      href="https://linkedin.com/mouaadbenallal"
                    >
                      LinkedIn
                    </a>
                    <span className="tag is-light">
                      Mouaad Ben Allal <i className="fa fa-linkedin" />
                    </span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags has-addons">
                    <a className="tag is-link">Github</a>
                    <span className="tag is-light">
                      Mouaad Ben Allal
                      <i className="fa fa-github" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="../js/bulma.js" />
      </div>
    );
  }
}

export default App;
