import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h3>Amazon</h3>
      <div className="header__routes">
          <a href="">User</a>
          <a href="">Cart</a>
      </div>
    </div>
  );
}

export default Header;
