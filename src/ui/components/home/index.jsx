import React, { Component } from "react";
import { connect } from "redux-jetpack";
import Banner from "./banner";
import Modal from "./modal";
import SignIn from "./signIn";
import LoopList from "../loops/list";
import * as readLoops from "../../actions/read-loops";
import * as modal from "../../actions/modal";

const IDE_ROOT = 'https://edit.looptype.com/s/';

class Home extends Component {
  componentWillMount() {
    readLoops.getPopularLoops();
  }

  render() {
    const { isModalOpen } = this.props;
    return (
      <div>
        <Banner />
        { isModalOpen && 
          <Modal><SignIn /></Modal> 
        }
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
