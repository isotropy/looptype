import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as readLoops from "../../actions/read-loops";

const Banner = () =>
  <div className="bannerContainer">
    <div className="bannerCenterContainer">
      <div>
        Icon
        <span className="bannerTitle">
          looptype
        </span>
      </div>
      <div className="bannerMainText">
        A little computer to run your apps. <i>Safely</i>.
      </div>
      <div className="bannerSubText">
        Social Networks. Blogs. Todo lists. Documents. Photos.
      </div>
    </div>
    <div className="bannerRightContainter">
      <span className="bannerLogin">LOGIN</span>
    </div>
  </div>;

export default connect(Banner, state => state);
