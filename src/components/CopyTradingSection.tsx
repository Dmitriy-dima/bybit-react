import React, { useRef, useState, useEffect } from "react";
import "../css/CopyTrading.scss";
import avatar from "../images/bavatar.svg";
import avatar_2 from "../images/ravatar.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevIcon from "../images/prevIcon.svg";
import nextIcon from "../images/nextIcon.svg";

type SliderRef = Slider & { slickPrev: () => void; slickNext: () => void };

function CopyTradingSection() {
  const sliderRef = useRef<SliderRef | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const updateSliderSettings = () => {
    const width = window.innerWidth;
    if (width <= 490) {
      setSlidesToShow(1);
    } else if (width <= 702) {
      setSlidesToShow(2);
    } else if (width <= 930) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {

    updateSliderSettings();

    const totalSlides = sliderRef.current
      ? React.Children.count(sliderRef.current.props.children)
      : 0;
    const currentSlide =
      (sliderRef.current?.innerSlider as any)?.state?.currentSlide || 0;

    setIsPrevDisabled(currentSlide === 0);
    setIsNextDisabled(currentSlide >= totalSlides - slidesToShow);

    window.addEventListener("resize", updateSliderSettings);
    return () => window.removeEventListener("resize", updateSliderSettings);
  }, [slidesToShow]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    beforeChange: (current: number, next: number) => {
      const totalSlides = sliderRef.current
        ? React.Children.count(sliderRef.current.props.children)
        : 0;
      setIsPrevDisabled(next === 0);
      setIsNextDisabled(next >= totalSlides - slidesToShow);
    },
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
            <div className="arrow-container">
              <div
                className={`slick-arrow-custom slick-prev-custom ${
                  isPrevDisabled ? "slick-disabled" : ""
                }`}
                onClick={handlePrevClick}
              >
                <img src={prevIcon} alt="Prev Icon" />
              </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Blum</span>
                    <span className="profile-followers">12 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span className="stats-name">7D ROI</span>
                  <span className="stats-number2">397.30%</span>
                </div>
                <div className="slide-followers">
                  <span className="stats-name">7D Followers' PnL</span>
                  <span className="stats-numbe2">2,181.36</span>
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
                  <span className="stats-name">7D ROI</span>
                  <span className="stats-number">175.57%</span>
                </div>
                <div className="slide-followers">
                  <span className="stats-name">7D Followers' PnL</span>
                  <span className="stats-number">23,955.97</span>
                </div>
              </div>{" "}
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Blum</span>
                    <span className="profile-followers">12 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span className="stats-name">7D ROI</span>
                  <span className="stats-number">397.30%</span>
                </div>
                <div className="slide-followers">
                  <span className="stats-name">7D Followers' PnL</span>
                  <span className="stats-number">2,181.36</span>
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
                  <span className="stats-name">7D ROI</span>
                  <span className="stats-number">175.57%</span>
                </div>
                <div className="slide-followers">
                  <span className="stats-name">7D Followers' PnL</span>
                  <span className="stats-number">23,955.97</span>
                </div>
              </div>{" "}
              <div className="slide">
                <div className="slide-profile">
                  <img src={avatar} alt="avatar" />
                  <div className="profile-text">
                    <span className="profile-name">Blum</span>
                    <span className="profile-followers">12 Followers</span>
                  </div>
                </div>
                <div className="slide-stats">
                  <span className="stats-name">7D ROI</span>
                  <span className="stats-number">397.30%</span>
                </div>
                <div className="slide-followers">
                  <span className="stats-name">7D Followers' PnL</span>
                  <span className="stats-number">2,181.36</span>
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
                  <span className="stats-name">7D ROI</span>
                  <span className="stats-number">175.57%</span>
                </div>
                <div className="slide-followers">
                  <span className="stats-name">7D Followers' PnL</span>
                  <span className="stats-number">23,955.97</span>
                </div>
              </div>
            </Slider>
            <div className="arrow-container">
              <div
                className={`slick-arrow-custom slick-next-custom ${
                  isNextDisabled ? "slick-disabled" : ""
                }`}
                onClick={handleNextClick}
              >
                <img src={nextIcon} alt="Next Icon" />
              </div>
            </div>
          </div>
          <button className="trading-download-mobile">
            <span>Download</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CopyTradingSection;
