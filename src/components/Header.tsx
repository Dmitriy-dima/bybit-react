import React, { useState, useEffect } from "react";
import "../css/Header.scss";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="App-header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="bybitGif" />
          </div>

          {!isMobile && (
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
          )}
        </div>
        <div className="header-right">
          <button className="download-button">
            <span>Download </span>
          </button>

          <div className="burger-menu" onClick={toggleMenu}>
            <img src={isMenuOpen ? close : menu} alt="Menu" />
          </div>
        </div>
      </div>

      {isMenuOpen && isMobile && (
        <div className="menu-popup">
          <div className="menu-header">
            <div className="logo">
              <img src={logo} alt="bybitGif" />
            </div>
            <div className="menu-header_right">
              <button className="download-button">
                <span>Download </span>
              </button>
              <button className="close-button" onClick={toggleMenu}>
                <img src={close} alt="Close" />
              </button>
            </div>
          </div>
          <div className="menu-content">
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
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
