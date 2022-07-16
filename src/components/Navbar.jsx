import React from "react";
//import Logo from "./images/react-logo.png";
export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <img
            src="./imges/react-logo.png"
            alt="React Logo"
            className="nav--Icon"
          />
          <h3 className="nav--logo_text"> ReactFacts</h3>
          <ul className="nav--title">
            <li>Home</li>
            <li>LOGIN</li>
            <li>Si</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
