import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome";
import Game from "./components/desire/game";
import Recommend from "./components/desire/recommend";
// import Dance from "./components/desire/dance";
// import Blood from "./components/desire/blood";
// import Read from "./components/desire/read";
import Wall from "./components/desire/wall";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route
                    exact
                    path="/self-isolation-fun-front"
                    component={Welcome}
                />
                <Route exact path="/fun-game" component={Game} />
                <Route exact path="/fun-recommend" component={Recommend} />
                {/* <Route exact path="/fun-dance" component={Dance} /> */}
                {/* <Route exact path="/fun-blood" component={Blood} /> */}
                {/* <Route exact path="/fun-read" component={Read} /> */}
                <Route exact path="/fun-wall" component={Wall} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
