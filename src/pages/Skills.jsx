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
import JavaLogo from '../components/SVGS/codelogos/java.svg';

const skills = [
  {
    name: "Java",
    logo: JavaLogo,
    experience: 0.6,
  },
  {
    name: "C++",
    logo: CxxLogo,
    experience: 0.2,
  },
  {
    name: "Python",
    logo: PythonLogo,
    experience: 0.5,
  },
  {
    name: "Javascript",
    logo: JavascriptLogo,
    experience: 0.7,
  },
  {
    name: "Intellij",
    logo: IntellijLogo,
    experience: 0.3,
  },
  {
    name: "Spring",
    logo: SpringLogo,
    experience: 0.3,
  },
  {
    name: "Ruby",
    logo: RubyLogo,
    experience: 0.4,
  },
  {
    name: "react",
    logo: ReactLogo,
    experience: 0.5,
  },
  {
    name: "PHP",
    logo: PHPLogo,
    experience: 0.4,
  },
  {
    name: "HTML5",
    logo: HTML5Logo,
    experience: 0.7,
  },
  {
    name: "Angular",
    logo: AngularLogo,
    experience: 0.6,
  }
]

class Skills extends Component {
  state = {};
  
//br fucks up at 609 screen width and works again at 398 (sort of) (c++ logo jumps out of line)

  render() {
    return (
      <div>
        <div className="Programming-language-logos">
          {skills.map((language, index) => (
                <div key={index} className="Skill-bar">
                  <img src={language.logo} alt={language.name}></img>
                  <progress value={language.experience}></progress>
                </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
