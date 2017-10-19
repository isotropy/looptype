import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as readLoops from "../../actions/read-loops";

class LoopList extends Component {
  componentWillMount() {
    readLoops.getLoopList();
  }
  render() {
    return this.props.loops
      ? <div>
          {this.props.loops.map(loop =>
            <div>
              <div>
                <div>
                  Icon
                </div>
                <div>
                  <div>
                    {loop.title}
                  </div>
                  <div>
                    by {loop.author}
                  </div>
                </div>
                <div>
                  {loop.description}
                </div>
                <div>
                  Icon {loop.installs}
                </div>
              </div>
            </div>
          )}
        </div>
      : <div>Loops Loading...</div>;
  }
}

export default connect(LoopList, state => state);
