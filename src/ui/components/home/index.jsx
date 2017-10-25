import React, { Component } from "react";

import Banner from "./banner";
import LoopList from "./loop-list";

const Home = () =>
  <div>
    <Banner />
    <div style={{textAlign:"center"}}>
      <div>
        "Install an app. It's free."
      </div>
      <div>
        Know JavaScript?
        Create an app
      </div>
    </div>
    <LoopList />
  </div>;

export default Home;
