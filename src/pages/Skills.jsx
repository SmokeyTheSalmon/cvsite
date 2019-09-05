import React, { Component } from "react";
import CxxLogo from '../components/SVGS/codelogos/c++.svg';
import PythonLogo from '../components/SVGS/codelogos/python.svg';
import IntellijLogo from '../components/SVGS/codelogos/intellij.svg';
import SpringLogo from '../components/SVGS/codelogos/spring.svg';
import JavascriptLogo from '../components/SVGS/codelogos/javascript.svg';
import RubyLogo from '../components/SVGS/codelogos/ruby.svg';
import ReactLogo from '../components/SVGS/codelogos/react.svg';
import PHPLogo from '../components/SVGS/codelogos/php.svg';
import HTML5Logo from '../components/SVGS/codelogos/html5.svg';
import AngularLogo from '../components/SVGS/codelogos/angularjs.svg';

class Skills extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="Programming-language-logos">
          <img src={CxxLogo} alt="C++"></img>
          <img src={PythonLogo} alt="Python"></img>
          <img src={JavascriptLogo} alt="Javascript"></img>
          <img src={IntellijLogo} alt="Intellij"></img>
          <img src={SpringLogo} alt="Spring"></img>
          <img src={RubyLogo} alt="Ruby"></img>
          <img src={ReactLogo} alt="React"></img>
          <img src={PHPLogo} alt="PHP"></img>
          <img src={HTML5Logo} alt="HTML"></img>
          <img src={AngularLogo} alt="Angular"></img>
        </div>
      </div>
    );
  }
}

export default Skills;
