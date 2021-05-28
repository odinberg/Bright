import React from "react";
import ReactDOM from "react-dom";
import { PageHeader } from "./pageHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Learn } from "./learn";
import { ServiceFunc } from "./ServiceFunc";
import { Help } from "./help";

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route exact path="/">
          <ServiceFunc />
        </Route>
        <Route exact path="/learn">
          <Learn />
        </Route>
        <Route exact path="/service">
          <ServiceFunc />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
