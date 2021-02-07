import React, { useState, Component } from 'react';
import TeamEmp from "../component/TeamEmp"
import "../component/style/teamemp.css"


class Team extends Component {
    
    render() {

        return (
            <div>
            <img src="..//img/image003.jpg"
              style={{height:"800px", width:"100%", opacity: .4 }}></img>
              <div className="topLeft">
            <TeamEmp />
            </div>
            </div>
        );

       
    }
}

export default Team;