import React, { Component } from "react";
import d20 from '../components/SVGS/Twenty_sided_dice.svg';

class Hobbies extends Component {
  state = {};
  render() {
    return (
      <div className="Hobby-text">
        <img src={d20} className="D20" alt="d20" />
        <p>
          Ik speel al jaren basgitaar, wat ik ook in bandjes heb
          gedaan (van punk tot folk!), ofschoon die nu al een tijdje op een erg laag pitje staan.
        </p>
        <p>
          Ik ben groot fan van Dungeons & Dragons. Ik kom al jaren regelmatig
          samen met vrienden om het spel te spelen, en reis even regelmatig af
          naar Hoorn en Leiden om Adventurers League sessies bij te wonen.
        </p>
        <p>Ik heb ook een passie voor film, zij het kijken, maken, of monteren. Kijk hier mijn masterscriptie project, een documentaire over geluidstechnici: <a href="https://youtu.be/NGaA3zmxroc">The Illusion of Music</a>.</p>
      </div>
    );
  }
}

export default Hobbies;
