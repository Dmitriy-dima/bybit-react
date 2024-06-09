import React from "react";
import "../css/Header.scss";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="bybitGif" />
          </div>
          <nav className="menu">
            <nav className="menu">
              <ul>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/bonus">Bonus</Link>
                </li>
                <li>
                  <Link to="/copytrading">Copytrading</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </nav>
          </nav>
        </div>
        <div className="header-right">
          <button className="download-button">
            <span>Download </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
