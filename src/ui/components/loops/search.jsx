import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as readLoops from "../../actions/read-loops";
import * as track from "../../actions/input-track";
import LoopList from "./list";

class SearchLoops extends Component {
  constructor() {
    super();
    this.searchLoops = this.searchLoops.bind(this);
  }

  searchLoops() {
    return this.props.input
      ? readLoops.searchLoops(this.props.input.loopSearchInput)
      : null;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for loops"
          onChange={e => track.searchInput(e.target.value)}
        />
        <input type="button" value="Search" onClick={this.searchLoops} />
        {this.props.loops ? <LoopList loopList={this.props.loops} /> : null}
      </div>
    );
  }
}

export default connect(SearchLoops, state => state);
