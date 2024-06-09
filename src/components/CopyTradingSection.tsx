import React from "react";
import "../css/CopyTrading.scss";
import avatar from "../images/bavatar.svg";
import avatar_2 from "../images/ravatar.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrows";

function CopyTradingSection() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="copy-trading-section">
      <div className="copy-trading_container">
        <div className="copy-trading">
          <div className="copy-trading_content">
            <div className="trading_text">
              <h3>Copy Trading</h3>
              <span>Let top traders work for you</span>
            </div>

            <div className="trading_stats">
              <div className="stats_card">
                <span className="stats_number">190K+</span>
                <span className="stats_name">Master Traders</span>
              </div>
              <div className="stats_card">
                <span className="stats_number">847K+</span>
                <span className="stats_name">Followers</span>
              </div>
            </div>
            <button className="trading-download">
              <span>Download</span>
            </button>
          </div>
          <div className="copy-trading_slider">
            <Slider {...settings}>
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Blum</span>
                    <span className="profile-followers">12 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span>7D ROI</span>
                  <span>397.30%</span>
                </div>
                <div className="slide-followers">
                  <span>7D Followers' PnL</span>
                  <span>2,181.36</span>
                </div>
              </div>
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar_2} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Rastix</span>
                    <span className="profile-followers">248 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span>7D ROI</span>
                  <span>175.57%</span>
                </div>
                <div className="slide-followers">
                  <span>7D Followers' PnL</span>
                  <span>23,955.97</span>
                </div>
              </div>
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Blum</span>
                    <span className="profile-followers">12 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span>7D ROI</span>
                  <span>397.30%</span>
                </div>
                <div className="slide-followers">
                  <span>7D Followers' PnL</span>
                  <span>2,181.36</span>
                </div>
              </div>
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar_2} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Rastix</span>
                    <span className="profile-followers">248 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span>7D ROI</span>
                  <span>175.57%</span>
                </div>
                <div className="slide-followers">
                  <span>7D Followers' PnL</span>
                  <span>23,955.97</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CopyTradingSection;
