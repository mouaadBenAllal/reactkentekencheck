// import React and Component to be used below
import React, { Component } from "react";

/**
 * Form component that calls the Opendata-api and passes data to Kenteken component.
 */
class Form extends Component {
  // The render method contains the JSX code which will be compiled to HTML.
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <h1 style={{ fontSize: "35px" }}>Contact us!</h1>
                <br />
                <div className="content">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-primary"
                        type="Email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>

                  <br />
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-primary"
                        type="Text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                  </div>
                  <br />

                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea is-primary"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                </div>

                <a className="button is-info is-outlined">Submit</a>
              </div>
            </div>
          </div>
        </div>

        <br />
      </section>
    );
  }
}

/* Exports Api component to be used as a module inside the application.*/
export default Form;
