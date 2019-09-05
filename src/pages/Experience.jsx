import React, { Component } from 'react';

class Experience extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div className="Werk-div">
        <h1>Werkervaring</h1>
        <p>AFAS Live, bar- en garderobemedewerker <br/>(2016 - 2019)</p>
        <p>CinemAsia Film Lab, Geluidsman <br/>(2018)</p>
        <p>
          Coding The Humanities (Universiteit van Amsterdam), Stagiair
          webdevelopment en educatie <br/>(2014 - 2015)
        </p>
        </div>
        <div className="Opleiding-div">
        <h1>Opleidingen</h1>
        <p>Java Traineeship bij YoungCapital NEXT <br/>(2019 - heden)</p>
        <p>MSc Culturele Antropologie, Universiteit Leiden <br/>(2016 - 2018) </p>
        <p>BA Muziekwetenschap, Universiteit van Amsterdam <br/>(2011 - 2015)</p>
        <p>Minor Computer Programming, Universiteit van Amsterdam <br/>(2014)</p>
        <p>Hbo Journalistiek, Hogeschool Utrecht <br/>(2010 - 2011)</p>
        <p>
          Vwo (Cultuur en Maatschappij), Schoter Scholengemeenschap, Haarlem
          <br/>(2003 - 2010)
        </p>
        </div>
      </div>
     );
  }
}
 
export default Experience;