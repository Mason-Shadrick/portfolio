import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/home";
import Projects from "../components/pages/projects"
import Skills from "../components/pages/skills"
import About from "../components/pages/about"


class Router extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Projects} exact path="/" />
        <Route component={Skills} exact path="/" />
        <Route component={About} exact path="/" />
      </Switch>
    );
  }
}
export default Router;