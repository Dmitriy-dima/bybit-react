import React from "react";
import "../css/Footer.scss";
import { Link } from "react-router-dom";

import logoIcon from "../images/logo-dark.svg";
import facebookIcon from "../images/facebook.svg";
import instaIcon from "../images/instagram.svg";
import twitterIcon from "../images/x-twitter.svg";
import linkedinIcon from "../images/linkedin.svg";

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoIcon} alt="logoIcon" />
          </div>

          <ul className="footer-bottom_links">
            <li>
              {" "}
              <Link to="/features"> About </Link>
            </li>
            <li>
              <Link to="/blog"> Blog</Link>
            </li>
            <li>
              {" "}
              <Link to="/announcements"> Announcements</Link>
            </li>
            <li>
              {" "}
              <Link to="/careers"> Careers</Link>
            </li>
            <li>
              {" "}
              <Link to="/audit"> Audit</Link>
            </li>
            <li>
              {" "}
              <Link to="/help"> Help Center</Link>
            </li>
          </ul>
          <div className="footer-socials">
            <img src={facebookIcon} alt="facebookIcon" />
            <img src={instaIcon} alt="instaIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
            <img src={linkedinIcon} alt="linkedinIcon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">
          © 2018-2024 Bybit.com. All rights reserved.
        </span>
        
        <ul className="footer-bottom_links">
          <li><Link to="/terms"> Terms of Service </Link></li>
          <li><Link to="/privacy"> Privacy Terms </Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
