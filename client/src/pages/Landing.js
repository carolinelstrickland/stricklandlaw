import React from "react";
import LandingLayout from "../component/LandingLayout";
import Contact from "../component/Contact"
import MapContainer from "../component/MapContainer";

function Landing () {
 return (
     <div style={{backgroundColor: "#212e53", color: "#ffffe6"}}>
         <LandingLayout />
         <Contact />
         <MapContainer />
     </div>
 )
}

export default Landing;