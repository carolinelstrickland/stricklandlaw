import React, { useState, Component } from 'react';
import TeamEmp from "../component/TeamEmp"
import "../component/style/teamemp.css"
import NavBar from '../component/NavBar';


class Team extends Component {

    render() {

        return (
            <div>
                <div>
                    <TeamEmp />
                </div>
            </div>
        );


    }
}

export default Team;