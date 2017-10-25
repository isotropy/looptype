import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as readLoops from "../../actions/read-loops";

class LoopList extends Component {
  componentWillMount() {
    readLoops.getLoop(this.props.match.params.loopId);
  }
  render() {
    return this.props.loops
      ? <div className="loopsContainer">
          {this.props.loops.description}
        </div>
      : <div>Loops Loading...</div>;
  }
}

export default connect(LoopList, state => state);
