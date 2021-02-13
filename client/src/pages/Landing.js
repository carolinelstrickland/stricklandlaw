import React from "react";
import LandingLayout from "../component/LandingLayout";
import Contact from "../component/Contact"
import MapContainer from "../component/MapContainer";

function Landing () {
 return (
     <div>
         <LandingLayout />
         <Contact />
         <MapContainer />
     </div>
 )
}

export default Landing;