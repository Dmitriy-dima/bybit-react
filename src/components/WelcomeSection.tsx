import React from "react";
import "../css/WelcomeSection.scss";

function WelcomeBonusSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-text-container">
          <div className="welcome-badge">
            <span>Welcome Bonus</span>
          </div>
          <h2>We provide users with 0% commission on all transactions</h2>
          <p>
            Celebrate the release of Bybit Desktop Application with us and get
            your welcome bonus. The bonus can be easily claimed by following
            these 3 steps
          </p>
        </div>
        <div className="welcome-steps">
          <div className="welcome-step">
            <h3>1. Install the App</h3>
            <p>
              Download the application from our website and install
              it on your PC
            </p>
          </div>
          <div className="welcome-step">
            <h3>2. Login or Register</h3>
            <p>
              Open the application and login with existing account or register
              via Bybit Desktop App
            </p>
          </div>
          <div className="welcome-step">
            <h3>3. Make a transaction</h3>
            <p>
              Open the application and login with existing account or register
              via Bybit Desktop App
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBonusSection;
