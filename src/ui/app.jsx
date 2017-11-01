import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/home";
import Loops from "./components/loops";
import SearchLoops from "./components/loops/search";
import ExploreLoops from "./components/loops/explore";
import SignIn from './pages/signInPage';

export default store => () =>
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/signin/:jwt?" component={SignIn} />
            <Route path="/loops/search" component={SearchLoops} />
            <Route path="/loops/search" component={SearchLoops} />
            <Route path="/loops/explore" component={ExploreLoops} />
            <Route path="/loops/:loopId" component={Loops} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>;
