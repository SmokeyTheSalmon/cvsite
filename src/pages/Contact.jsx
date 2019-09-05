import React, { Component } from "react";
import githublogo from "../components/SVGS/iconmonstr-github-3.svg";
import linkedinlogo from "../components/SVGS/iconmonstr-linkedin-3.svg";
import emaillogo from "../components/SVGS/iconmonstr-email-3.svg";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Wil je me graag spreken? Stuur een berichtje!</h1>
        <a
          href="https://www.linkedin.com/in/roel-van-bakkum-726b4b89/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinlogo} className="Contact-logo" alt="linkedin"></img>
        </a>
        <a href="mailto:roelvanbakkum@gmail.com">
          <img src={emaillogo} className="Contact-logo" alt="email"></img>
        </a>
        <a
          href="https://github.com/SmokeyTheSalmon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githublogo} className="Contact-logo" alt="tentacat"></img>
        </a>
      </div>
    );
  }
}

export default Contact;
