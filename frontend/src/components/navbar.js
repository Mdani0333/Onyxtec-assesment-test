import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar({ token }) {
  return (
    <nav className="navbar">
      <span>Grocery Store</span>
      <Link to="/store" className="links">
        Store
      </Link>
      <span>
        <button className="nav-btn">
          <Link to="/my/cart" className="icon-links">
            <BiShoppingBag />
          </Link>
        </button>
        {token ? (
          <span className="greenSpan">You are Logged In</span>
        ) : (
          <span className="redSpan">
            You are not Logged In. Login <Link to="/login">here</Link>
          </span>
        )}
      </span>
    </nav>
  );
}
