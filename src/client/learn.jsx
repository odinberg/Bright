import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StartVideo } from "./startVideo";
import { MoveVideo } from "./moveVideo";
import { SunbellVideo } from "./sunbellVideo";
import { LearnHeader } from "./learnHeader";

export function Learn() {
    return (
      <Router>
        <LearnHeader />
        <Switch>
          <Route exact path="/startVideo">
            <StartVideo />
          </Route>
          <Route exact path="/moveVideo">
            <MoveVideo />
          </Route>
          <Route exact path="/sunbellVideo">
            <SunbellVideo />
          </Route>
        </Switch>
      </Router>
    );
  }
  
  ReactDOM.render(<Learn />, document.getElementById("root"));
