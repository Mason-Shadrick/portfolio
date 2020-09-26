import React, { Component } from "react";
// import "./Navbar.css";
// import logo from "../toolbar/favicon.png";
// import "react-bulma-components/dist/react-bulma-components.min.css";
// import firebase from "../../auth/";
// import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
// import LoginString from "../pages/Login/LoginStrings";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="#" width="35" height="28" alt="" />
          </a>
            <label
                  role="button"
                  className="navbar-burger burger1"
                  aria-label="menu"
                  aria-expanded="false"
                  htmlFor="nav-toggle-state"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
            </label>
        </div>
          <input type="checkbox" id="nav-toggle-state" />

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/About">
              About Me&nbsp;&nbsp;
              <i className="fas fa-map-marked-alt"></i>
            </a>
            <a className="navbar-item" href="/Skills">
              Skills&nbsp;&nbsp;<i className="fas fa-home"></i>
            </a>
            <a className="navbar-item" href="/Projects">
              Past Projects&nbsp;&nbsp;<i className="fas fa-question-circle"></i>
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                More
              </a>
              <div className="navbar-dropdown">
           
                <a className="navbar-item" href="/Feedback">
                  Send Feedback
                </a>
              </div>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

export default navbar;