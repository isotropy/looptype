import React, { Component } from "react";
import { connect } from "redux-jetpack";
import Banner from "./banner";
import LoopList from "../loops/list";
import * as readLoops from "../../actions/read-loops";

const IDE_ROOT = 'https://edit.looptype.com/s/';

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
          </div>
          <div>
            <a href={`${IDE_ROOT}new`} style={{width: "100px", height: "45px", color: "green"}}>
              <h2>Create an App</h2>
            </a>
          </div>
        </div>
        {this.props.loops ? <LoopList loopList={this.props.loops} /> : null}
      </div>
    );
  }
}

export default connect(Home, state => state);
