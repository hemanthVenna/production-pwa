import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red"
  };

  render() {
    return (
      <div className="navbar">
        <div className="headerNav">
          <a>
            <img className="hidden-xs hidden-sm abc" src="/images/logoImg.png" alt="logo" />
            <img className="hidden-md hidden-lg abc mobileLogo" src="/images/logo.png" alt="logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
