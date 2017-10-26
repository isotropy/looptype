import React, { Component } from "react";
import { connect } from "redux-jetpack";
import Banner from "./banner";
import LoopList from "../loops/list";
import * as readLoops from "../../actions/read-loops";

class Home extends Component {
  componentWillMount() {
    readLoops.getPopularLoops();
  }

  render() {
    return (
      <div>
        <Banner />
        <div style={{ textAlign: "center" }}>
          <div>
            "Install an app. It's free."
          </div>
          <div>
            Know JavaScript?
            Create an app
          </div>
        </div>
        {this.props.loops ? <LoopList loopList={this.props.loops} /> : null}
      </div>
    );
  }
}

export default connect(Home, state => state);
