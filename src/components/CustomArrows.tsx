import React from "react";
import prevIcon from "../images/prevIcon.svg";
import nextIcon from "../images/nextIcon.svg";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={nextIcon} alt="Next Icon" />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      
      onClick={onClick}
    >
      <img src={prevIcon} alt="Prev Icon" />
    </div>
  );
};

export { NextArrow, PrevArrow };
