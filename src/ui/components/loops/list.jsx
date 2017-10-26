import React, { Component } from "react";

const LoopList = ({ loopList }) =>
  <div className="loopsContainer">
    {loopList.map(loop =>
      <div className="loop" key={`loop_${loop.id}`}>
        <a
          href={`/loops/${loop.id}`}
          style={{ textDecoration: "none", color: "black" }}>
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
        </a>
      </div>
    )}
  </div>;

export default LoopList;
