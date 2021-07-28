import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="header">
      <h3>Amazon</h3>
      <div className="header__routes">
        <Link to="">User</Link>
        <Link to="/cartScreen">
          Cart
          {cart.cartItems && <span className="badge">{cart?.cartItems.length}</span>}
        </Link>
      </div>
    </div>
  );
}

export default Header;
