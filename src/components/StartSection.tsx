import React from "react";
import "../css/StartSection.scss";
import bybitGif from "../images/bybitgraphs.gif";
import bybitGif_mobile from "../images/bybitgraphs_mobile.gif";
import secondaryLight from "../images/secondary-light.svg";

function StartSection() {
  return (
    <div className="start-section">
      <div className="start-section_container">
        <div className="grid-wrapper">
          <div className="grid-pattern">
            <div className="grid-overlay"></div>
            <div className="start-content">
              <div className="start-badge">
                <span>0% commission on all transactions</span>
              </div>

                <h1 className="title">
                  <span className="title-top">Bybit Desktop Application</span>
                  <span className="title-bottom">
                    is now available for Windows
                  </span>
                </h1>

              <p className="subtitle">
                Discover a new way of trading with Bybit desktop application.
                Join us on your PC and claim the exclusive reward
              </p>
              <button className="start-button">
                <span>Download</span>
              </button>
              <div className="epsilon-highlights">
                <img className="bybitGif" src={bybitGif} alt="bybitGif" />
                <img className="bybitGif_mobile" src={bybitGif_mobile} alt="bybitGif_mobile" />
                <img
                  className="secondaryLight-first"
                  src={secondaryLight}
                  alt="secondaryLight"
                />
                <img
                  className="secondaryLight-second"
                  src={secondaryLight}
                  alt="secondaryLight"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartSection;
