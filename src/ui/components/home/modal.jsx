import React from "react";
import * as modal from "../../actions/modal";

export default class Modal extends React.Component {
  getStyle() {
    return {
      width: "30%",
      height: "30%",
      margin: "10% 35%",
      position: "absolute",
      textAlign: "center",
      background: "green",
      borderRadius: "20px",
      color: "white",
      zIndex: 2
    }
  }

  getOverlayStyle() {
    return {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      opacity: 0.3,
      zIndex: 1,
      background: "black"
    }
  }

  onClick() {
    modal.closeModal();
  }

  render() {
    return (
      <div className="modal">
        <div onClick={this.onClick.bind(this)} style={this.getOverlayStyle()}>
        </div>
        <div style={this.getStyle()}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
