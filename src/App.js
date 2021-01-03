import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Landing from "../src/pages/Landing";
import Links from "../src/pages/Links";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";
import Team from "../src/pages/Team";
import Services from "../src/pages/Services";




function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
       </div>
      </Router>
    </React.Fragment>


  );
}

export default App;
