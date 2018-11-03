// import React and Component to be used below
import React, { Component } from "react";

/**
 * Kenteken component that receives data from Api through props.
 */
class Kenteken extends Component {
  /** The render method contains the JSX code which will be compiled to HTML.
   *  Also displays data in the right place in the DOM.
   */
  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-half is-narrow">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title">Merk</p>
                    <p className="subtitle">{this.props.merk}</p>
                    <hr />
                    <p className="title">Model</p>
                    <p className="subtitle">{this.props.model}</p>
                    <hr />
                    <p className="title">Kleur</p>
                    <p className="subtitle">{this.props.eerste_kleur}</p>
                    <hr />
                    <p className="title">Motor Inhoud</p>
                    <p className="subtitle">{this.props.cilinder_inhoud}</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">Label</p>
                    <p className="subtitle">{this.props.zuinigheidslabel}</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Wam?</p>
                    <p className="subtitle">{this.props.wam_verzekerd}</p>
                    <hr />
                    <p className="title">Eerste Toelati..</p>
                    <p className="subtitle">
                      {this.props.datum_eerste_toelating}
                    </p>
                    <hr />
                    <p className="title">Verval Datum Apk</p>
                    <p className="subtitle">{this.props.verval_datum_apk}</p>
                    <hr />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">Brandstof</p>
                  <p className="subtitle">{this.props.brandstof}</p>
                  <hr />
                  <p className="title">Verbruik gemiddeld</p>

                  <p className="subtitle">{this.props.gemiddeld_verbruik}</p>
                  <hr />
                  <p className="title">Verbruik snelweg</p>
                  <p className="subtitle">
                    {this.props.brandstofverbruik_buiten}
                  </p>
                  <hr />
                  <p className="title">Verbruik stad</p>
                  <p className="subtitle">
                    {this.props.brandstofverbruik_stad}
                  </p>
                  <div className="content" />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article
                style={{ height: "620px", width: "200px" }}
                className="tile is-child notification is-success"
              >
                <div className="content">
                  <p className="title">Aantal deuren</p>
                  <p className="subtitle">{this.props.aantal_deuren}</p>
                  <hr />
                  <p className="title">Massa leeg</p>

                  <p className="subtitle">{this.props.massa_ledig_voertuig}</p>
                  <hr />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* Exports Kenteken component to be used as a module inside the application.*/
export default Kenteken;
