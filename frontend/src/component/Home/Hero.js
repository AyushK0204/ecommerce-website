import React from "react";
import "./Hero.css";
import heroImg from "../../images/hero_img.png";

const Hero = () => {
  return (
    <div className="mainHero">
      <div className="heroLeft">
        <div className="heroLeftColor">
          <div className="heroLeftInside">
            <p className="heroLeftInsideLine"></p>
            <p className="heroLeftInsideText">OUR BESTSELLERS</p>
          </div>
          <h1 className="heroLeftInsideText2">Latest Arrivals</h1>
          <div className="heroLeftInside">
            <p className="heroLeftInsideText3">SHOP NOW</p>
            <p className="heroLeftInsideLine"></p>
          </div>
        </div>
      </div>
      <img className="heroImg" src={heroImg} alt="hero" />
    </div>
  );
};

export default Hero;
