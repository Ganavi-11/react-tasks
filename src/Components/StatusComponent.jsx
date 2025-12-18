import React, { Component } from "react";

class StatusComponent extends Component {

  render() {
    const { status } = this.props;

    let style = {};

    if (status === "success") {
      style = { color: "green", fontWeight: "bold" };
    } else if (status === "error") {
      style = { color: "red", fontWeight: "bold" };
    } else if (status === "warning") {
      style = { color: "orange", fontWeight: "bold" };
    }

    return (
      <h3 style={style}>
        Status: {status}
      </h3>
    );
  }
}

export default StatusComponent;
