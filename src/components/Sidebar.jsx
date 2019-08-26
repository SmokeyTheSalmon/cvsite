import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div id="sidebar" className="Sidebar">
          <Link
            to="/bio"
            onClick={selection => this.props.routes.map(route => route.path)}
          >
            Who am I?
          </Link>
          <Link
            to="/skills"
            onClick={selection => this.props.routes.map(route => route.path)}
          >
            Skills
          </Link>
          <Link
            to="/hobbies"
            onClick={selection => this.props.routes.map(route => route.path)}
          >
            Hobbies
          </Link>
          <Link
            to="/contact"
            onClick={selection => this.props.routes.map(route => route.path)}
          >
            Contact
          </Link>
        </div>
        <div>
          {this.props.routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.main} />
          ))}
        </div>
      </Router>
    );
  }
}

//https://reacttraining.com/react-router/web/example/sidebar

export default Sidebar;
