import React, { Component } from "react";
import axios from "axios";
import Kenteken from "./../Kenteken/Kenteken";
import "./Api.modules.css";

class Api extends Component {
  // Adds a class constructor that assigns the initial state values:
  constructor() {
    super();
    this.state = {
      kenteken: "",
      merk: "",
      model: "",
      voertuigsoort: "",
      aantal_zitplaatsen: "",
      eerste_kleur: "",
      cilinder_inhoud: "",
      verval_datum_apk: "",
      massa_ledig_voertuig: "",
      zuinigheidslabel: "",
      aantal_deuren: "",
      type: "",
      wam_verzekerd: "",
      datum_eerste_toelating: "",
      brandstof: "",
      gemiddeld_verbruik: "",
      brandstofverbruik_buiten: "",
      brandstofverbruik_stad: "",
      valdationMessage: "",
      submitted: false
    };
  }

  componentDidMount(event) {
    this.handleSubmit(event);
  }

  handleSubmit = event => {
    this.setState({ submitted: true });
    this.setState({ validationMessage: "" });
    if (
      this.state.kenteken.length > 8 ||
      (this.state.kenteken.length === 0 && this.state.submitted)
    ) {
      this.setState({ validationMessage: "Ingevoerde kenteken ongeldig." });
    }
    axios
      .get("8ys7-d773.json?kenteken=" + this.state.kenteken)
      .then(response => {
        this.setState({
          brandstof: response.data[0].brandstof_omschrijving,
          gemiddeld_verbruik:
            response.data[0].brandstofverbruik_gecombineerd + " l/100",
          brandstofverbruik_buiten:
            response.data[0].brandstofverbruik_buiten + " l/100",
          brandstofverbruik_stad:
            response.data[0].brandstofverbruik_stad + " l/100"
        });
      })
      // Catch any error here
      .catch(error => {
        console.log(error);
      });

    axios
      .get("m9d7-ebf2.json?kenteken=" + this.state.kenteken)
      .then(response => {
        this.setState({
          merk: response.data[0].merk,
          model: response.data[0].handelsbenaming,
          voertuigsoort: response.data[0].voertuigsoort,
          aantal_zitplaatsen: response.data[0].aantal_deuren,
          eerste_kleur: response.data[0].eerste_kleur,
          cilinder_inhoud: response.data[0].cilinderinhoud + "cc",
          verval_datum_apk: response.data[0].vervaldatum_apk,
          massa_ledig_voertuig: response.data[0].massa_ledig_voertuig + " KG",
          zuinigheidslabel: response.data[0].zuinigheidslabel,
          aantal_deuren: response.data[0].aantal_deuren + " deurs",
          type: response.data[0].type,
          wam_verzekerd: response.data[0].wam_verzekerd,
          datum_eerste_toelating: response.data[0].datum_eerste_toelating,
          submitted: false
        });
      })
      // Catch any error here
      .catch(error => {
        console.log(error);
      });
  };

  // The render method contains the JSX code which will be compiled to HTML.
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-large"
                      style={{
                        backgroundColor: "#e7ab00",
                        borderRadius: "0px",
                        fontSize: "28px",
                        textAlign: "center",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                      }}
                      type="search"
                      placeholder=""
                      name="search"
                      onChange={event =>
                        this.setState({
                          kenteken: event.target.value
                            .toUpperCase()
                            .replace(/-/g, "")
                        })
                      }
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-search" />
                    </span>
                    <span className="icon is-medium is-right">
                      <i className="fa fa-empire" />
                    </span>
                  </div>
                  <br />
                  <a
                    onClick={this.handleSubmit}
                    className="button is-primary is-outlined is-large is-fullwidth"
                  >
                    Search
                  </a>

                  <p className="Validation">{this.state.validationMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Kenteken
          merk={this.state.merk}
          model={this.state.model}
          voertuigsoort={this.state.voertuigsoort}
          aantal_zitplaatsen={this.state.aantal_zitplaatsen}
          eerste_kleur={this.state.eerste_kleur}
          cilinder_inhoud={this.state.cilinder_inhoud}
          verval_datum_apk={this.state.verval_datum_apk}
          massa_ledig_voertuig={this.state.massa_ledig_voertuig}
          zuinigheidslabel={this.state.zuinigheidslabel}
          aantal_deuren={this.state.aantal_deuren}
          type={this.state.type}
          catalogus_prijs={this.state.catalogus_prijs}
          wam_verzekerd={this.state.wam_verzekerd}
          datum_eerste_toelating={this.state.datum_eerste_toelating}
          brandstof={this.state.brandstof}
          gemiddeld_verbruik={this.state.gemiddeld_verbruik}
          brandstofverbruik_buiten={this.state.brandstofverbruik_buiten}
          brandstofverbruik_stad={this.state.brandstofverbruik_stad}
        />
        <br />
      </section>
    );
  }
}

export default Api;
