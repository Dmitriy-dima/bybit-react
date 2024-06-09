import React from "react";
import "../css/StatsSection.scss";
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
          <div className="stats">
            <span className="stats-number">34.4 B</span>
            <span className="stats-name">24H Trading Volume (USD)</span>
          </div>
          <div className="stats">
            <span className="stats-number">1000+</span>
            <span className="stats-name">Cryptocurrencies Listed</span>
          </div>
          <div className="stats">
            <span className="stats-number">27.7M</span>
            <span className="stats-name">Registered Users</span>
          </div>
          <div className="stats">
            <span className="stats-number">160</span>
            <span className="stats-name">Supported Countries</span>
          </div>
      </div>
    </section>
  );
}

export default StatsSection;
