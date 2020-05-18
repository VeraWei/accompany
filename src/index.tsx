import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome";
import { Dance, Game, Recommend, UserWall } from "./components/desire";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/accompany">
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Welcome}
                />
                <Route exact path="/game" component={Game} />
                <Route exact path="/recommend" component={Recommend} />
                <Route exact path="/dance" component={Dance} />
                {/* <Route exact path="/blood" component={Blood} /> */}
                {/* <Route exact path="/read" component={Read} /> */}
                <Route exact path="/user" component={UserWall} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
