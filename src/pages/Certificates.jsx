import React, { Component } from 'react';
import PSM1 from '../components/SVGS/badge-psmi.svg';
import OCA from '../components/SVGS/Certified-Associate-JAVA-SE8-PROGRAMMER.png';

class Certificates extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            <h1>Behaalde Certificaten!</h1>
            <div className="Certdiv1">
                <img src={PSM1} className="Scrum-logo" alt="Psm1"></img>
                <p>Scrum.org PSM1</p>
            </div>
            <div className="Certdiv2">
                <img src={OCA} className="OCA-logo" alt="OCA"></img>
                <p>1ZO-808 Java SE8 Programmer (OCA)</p>
            </div>
        </div>
        );
    }
}
 
export default Certificates;