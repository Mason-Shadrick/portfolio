import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/home";
import Projects from "../components/pages/projects"
import Skills from "../components/pages/skills"
import About from "../components/pages/about"
import Contact from "../components/pages/contact"

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Projects} exact path="/Projects" />
        <Route component={Skills} exact path="/Skills" />
        <Route component={About} exact path="/About" />
        <Route component={Contact} exact path="/Contact" />
      </Switch>
    );
  }
}
export default Router;