import React, { Component } from "react";
import thatboy from '../components/IMAGES/sexyroel.png';
//Implement a cool thing that automatically updates my age


class Bio extends Component {
  state = {
    age: 28
  };

  render() {
    return (
      <div>
        <div><img src={thatboy} className="That-boy" alt="thatboy"></img></div>
        <div className="Bio-text">
          <p>Hoi, ik ben Roel van Bakkum, { this.state.age } jaar.</p>
          <p>Ik ben een gecertificeerd Java programmeur, afgestudeerd antropoloog, en een veelzijdige, humoristische kerel.</p>
          <p>Ik houd van dingen die onconventioneel zijn. Het rare en het wellicht licht onpraktische geeft mij een kick.</p>
          <p>Heb je een leuk idee en een programmeur nodig? Zoek contact met me op!</p>
        </div>
      </div>
    );
  }
}

export default Bio;
