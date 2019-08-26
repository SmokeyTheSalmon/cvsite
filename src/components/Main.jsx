import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./SVGS/Twenty_sided_dice.svg";
import cat from "./SVGS/cat.svg";
import porem from "./IMAGES/POREM.png";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/",
    exact: true
  },
  {
    path: "/bio",
    main: () => <Bio />
  },
  {
    path: "/skills",
    main: () => <Skills />
  },
  {
    path: "/hobbies",
    main: () => <Hobbies />
  },
  {
    path: "/contact",
    main: () => <Contact />
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: { path: "/" },
      name: "Roel van Bakkum"
    };
  }

  render() {
    return (
      <Router>
        <div id="sidebar" className="Sidebar">
          <img
            src={porem}
            className="Porem"
            alt="Like, a surfer looking dude"
          ></img>
          <Link to="/bio">Wie ben ik?</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/hobbies">Hobbies</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div id="main" className="Main">
          <header className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <span>{this.state.name}</span>

            <div>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} component={route.main} />
              ))}
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://66.media.tumblr.com/78daf9c1e7c10cbd3bbc41fa36ab3b7a/tumblr_pa5g6gEnp31snfu9io6_1280.jpg"
            >
              <img src={cat} className="Cat-logo" alt="cat" />
            </a>
          </header>
        </div>
      </Router>
    );
  }
}

export default Main;
