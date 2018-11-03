// import React and Component
import React, { Component } from "react";
// import kenteken icon image
import img from "./../Static/kentekenicon.png";
// import Form component to be used below
import Form from "./Form/Form";
// import Link to be used below
import { Link } from "react-router-dom";

/**
 * Contact component that loads the Form component.
 */
class Contact extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar has-shadow">
          <div className="container">
            <div className="navbar-brand">
              <Link
                to={{
                  pathname: "/",
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
        <Form />
        <footer>
          <div className="box cta">
            <div className="columns is-mobile is-centered">
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags has-addons">
                    <a
                      className="tag is-link"
                      href={"//www.linkedin.com/in/mouaad-ben-allal"}
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <span className="tag is-light">
                      <i className="fa fa-linkedin" />
                    </span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags has-addons">
                    <a
                      className="tag is-link"
                      href={"//github.com/mouaadBenAllal"}
                      target="_blank"
                    >
                      Github
                    </a>
                    <span className="tag is-light">
                      <i className="fa fa-github" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

/* Exports Contact component to be used as a module inside the application.*/
export default Contact;
