import React from "react";
// import "react-bulma-components/dist/react-bulma-components.min.css";
// import "./Footer.css";
import "./style.css"

const footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="column1">
          <a href="/">
            <img src="#" alt="PropUp" />
          </a>
        </div>
        <hr></hr>
        <div className="columns is-deaktop">
          <div className="column">
            <h5 className="white-text">
              <u>
                <strong>Quick Bio</strong>
              </u>
            </h5>
            <p className="grey-text text-lighten-4">
            Problem solving focused full stack web developer with backgrounds in restaurant management and engineering design.
            </p>
          </div>
          <div className="column">
            {" "}
            <h5 className="white-text">
              <u>
                <strong>Quick Links</strong>
              </u>
            </h5>
            <ul>
              <li>
                <a className="white-text" href="/About">
                  <i className="fa fa-info-circle"></i>&nbsp;About Me
                </a>
              </li>
              <li>
                <a className="white-text" href="/Skills">
                  <i className="fa fa-sitemap"></i>&nbsp;Skills
                </a>
              </li>
              <li>
                <a className="white-text" href="/Projects">
                  <i className="fa fa-tasks"></i>&nbsp;Past Projects
                </a>
              </li>
              <li>
                <a className="white-text" href="/Contact">
                  <i className="fas fa-users"></i>&nbsp;Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h5 className="white-text">
              <u>
                <strong>Connect</strong>
              </u>
            </h5>
            <ul>
              <li>
                <a
                  className="white-text"
                  target="blank"
                  href="mailto:mason.shadrick.d@gmail.com"
                >
                  <i className="fa fa-envelope"></i>&nbsp;Email Me
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  target="blank"
                  href="https://github.com/Mason-Shadrick"
                >
                  <i className="fab fa-github"></i>&nbsp;GitHub 
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  target="blank"
                  href="https://www.linkedin.com/in/masondshadrick/"
                >
                  <i className="fab fa-linkedin"></i>&nbsp;LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </footer>
  );
};
export default footer;