import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-login-signup">
      <div className="header-limiter">
        <h1>
          <a href="/">
            Chat<span>On</span>
          </a>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <a className="selected">
            <Link to="/">AboutApp</Link>
          </a>
          <a>
            <Link to="/">Contact us</Link>
          </a>
        </nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
