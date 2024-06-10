import React, { useState, useEffect } from "react";
import "../css/Header.scss";
import { isWindows } from "../const";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import close from "../images/close.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
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
          <a
            className="logo"
            href="https://www.bybit.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="bybitGif" />
          </a>

          {!isMobile && (
            <nav className="menu">
              <ul>
                <li>
                  <a href="#features" onClick={closeMenu}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#bonus" onClick={closeMenu}>
                    Bonus
                  </a>
                </li>
                <li>
                  <a href="#copytrading" onClick={closeMenu}>
                    Copytrading
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={closeMenu}>
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className="header-right">
          {isWindows && (
            <button
              className="download-button"
              data-download
              onClick={(window as any).HANDLE_DOWNLOAD}
            >
              <span>Download Now</span>
            </button>
          )}

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
              <button
                className="download-button"
                data-download
                onClick={(window as any).HANDLE_DOWNLOAD}
              >
                <span>Download Now</span>
              </button>
              <button className="close-button" onClick={toggleMenu}>
                <img src={close} alt="Close" />
              </button>
            </div>
          </div>
          <div className="menu-content">
            <ul>
              <li>
                <a href="#features" onClick={closeMenu}>
                  Features
                </a>
              </li>
              <li>
                <a href="#bonus" onClick={closeMenu}>
                  Bonus
                </a>
              </li>
              <li>
                <a href="#copytrading" onClick={closeMenu}>
                  Copytrading
                </a>
              </li>
              <li>
                <a href="#faq" onClick={closeMenu}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
