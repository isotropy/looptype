import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/home";
import Loops from "./components/loops";

export default store => () =>
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/loops/:loopId" component={Loops} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>;
