import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import withErrorBoundary from "./HOCs/withErrorBoundary"
// import Test from "./components/test"
import LandingPage from "./components/LandingPage"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Profile from "./components/Profile"


function App() {
  return (
    <Router >
      {/* can replace content here with landing page */}
      {/* <Test /> */}
      
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>

    </Router>
  );
}

export default withErrorBoundary(App);
