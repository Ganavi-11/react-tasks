import React, { Component } from "react";

class ColorButton extends Component {

  state = {
    isBlue: true
  };

  // TOGGLE COLOR
  handleClick = () => {
    this.setState({ isBlue: !this.state.isBlue });
  };

  render() {
    const buttonStyle = {
      backgroundColor: this.state.isBlue ? "blue" : "green",
      color: "white",
      padding: "12px 25px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    };

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button style={buttonStyle} onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ColorButton;
