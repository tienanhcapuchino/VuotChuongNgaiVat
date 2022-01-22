import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../components/signup/signup";
import Home from "../components/home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
