import React, { Component } from "react";

//Implement a cool thing that automatically updates my age


class Bio extends Component {
  state = {
    age: 28
  };

  render() {
    return (
      <div className="Bio-text">
        <p>
          Hoi, ik ben Roel van Bakkum, { this.state.age } jaar.
          Ik ben een veelzijdige jongen met een apart gevoel voor humor. 
          Ik houd van dingen die onconventioneel zijn. Het rare en het wellicht licht onpraktische geeft mij een kick.
        </p>
      </div>
    );
  }
}

export default Bio;
