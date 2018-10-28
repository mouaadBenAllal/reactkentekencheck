import React, { Component } from "react";
import img from "./../Static/kentekenicon.png";
import { Route, Link } from "react-router-dom";
import Api from "./../Api/Api";
import Contact from "./../Contact/Contact";

class Layout extends Component {
  // The render method contains the JSX code which will be compiled to HTML.
  render() {
    return (
      <div className="">
        <nav className="navbar has-shadow">
          <div className="container">
            <div className="navbar-brand">
              <Link
                to={{
                  pathname: "/home",
                  hash: "#home"
                }}
                className="navbar-item"
              >
                <img
                  src={img}
                  alt="Bulma: a modern CSS framework based on Flexbox"
                />
                <b>KENTEKENCHECK</b>
              </Link>

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
                    <Link
                      to={{
                        pathname: "/contact",
                        hash: "#contact"
                      }}
                      className="navbar-item"
                    >
                      Contact
                    </Link>

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

export default Layout;
