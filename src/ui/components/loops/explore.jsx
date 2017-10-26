import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as readLoops from "../../actions/read-loops";
import * as track from "../../actions/input-track";
import LoopList from "./list";

class ExploreLoops extends Component {
  constructor() {
    super();
    this.getCategorizedLoops = this.getCategorizedLoops.bind(this);
  }

  getCategorizedLoops() {
    return this.props.input
      ? readLoops.getCategorizedLoops(this.props.input.loopSearchInput)
      : null;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search loops by category"
          onChange={e => track.searchInput(e.target.value)}
        />
        <input
          type="button"
          value="Search"
          onClick={this.getCategorizedLoops}
        />
        {this.props.loops ? <LoopList loopList={this.props.loops} /> : null}
      </div>
    );
  }
}

export default connect(ExploreLoops, state => state);
