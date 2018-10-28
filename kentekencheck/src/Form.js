import React, { Component } from "react";

class Form extends Component {
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
                  <div class="field">
                    <div class="control">
                      <input
                        className="input is-primary"
                        type="Email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>

                  <br />
                  <div class="field">
                    <div class="control">
                      <input
                        className="input is-primary"
                        type="Text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                  </div>
                  <br />

                  <div class="field">
                    <div class="control">
                      <textarea
                        class="textarea is-primary"
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

export default Form;
