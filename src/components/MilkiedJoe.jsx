import React, { Component } from "react";
import MilkiedJoe from "./components/SVGS/milkyjoe.jpg";

class Milky extends Component {
  render() {
    return (
      <div>
        <img
          src={MilkiedJoe}
          className="Milky"
          alt="The Second Love of My Life"
        />
      </div>
    );
  }
}

// https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_map2

export default Milky;
