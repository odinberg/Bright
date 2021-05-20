import React from "react"
import ReactDOM from "react-dom"
import {PageHeader} from "./pageHeader";
import {Home} from "./home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Learn} from "./learn";
import {Service} from "./service";
import {Help} from "./help";
import {Scan} from "./scan";


function App() {
    return (
        <Router>
            <PageHeader/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/learn">
                        <Learn />
                    </Route>
                    <Route exact path="/scan">
                        <Scan />
                    </Route>
                    <Route exact path="/service">
                        <Service />
                    </Route>
                    <Route exact path="/help">
                        <Help/>
                    </Route>
                </Switch>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))