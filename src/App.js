import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withErrorBoundary from "./HOCs/withErrorBoundary"
// import Test from "./components/test"
import LandingPage from "./pages/LandingPage"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import TypingGame from "./components/typingGame/TypingGame"

function App() {
  return (
    <Router >
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
        <Route exact path="/typing">
          <TypingGame />
        </Route>
      </Switch>
    </Router>
  );
}

export default withErrorBoundary(App);
