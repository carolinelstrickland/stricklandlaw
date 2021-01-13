import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Landing from "./pages/Landing";
import Links from "./pages/Links";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Team from "./pages/Team";
import Services from "./pages/Services";




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
