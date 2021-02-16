import React, { useState, Component } from 'react';
import TeamEmp from "../component/TeamEmp"
import "../component/style/teamemp.css"


class Team extends Component {
    
    render() {

        return (
            <div style={{backgroundColor:"#212e53" }}>
              
            <TeamEmp />
            
            </div>
        );

       
    }
}

export default Team;