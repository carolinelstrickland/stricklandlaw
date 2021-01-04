import React, { useState, Component } from 'react';
import TeamEmp from "../components/TeamEmp"

class Team extends Component {
    
    render() {

        return (
            <div>
            <img src="..//img/law.JPEG"
              style={{height:"600px", width:"100%", opacity: 1 }}></img>
            <TeamEmp />
            </div>
        );

       
    }
}

export default Team;