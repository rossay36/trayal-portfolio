import React from "react";
import letterO from "../../assets/letterO.png";
import letterB from "../../assets/letterB.png";
import letterI from "../../assets/letterI.png";
import letterR from "../../assets/letterR.png";
import letterS from "../../assets/letterS.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__title">
        <h1 className="h1">Your Next Project</h1>
        <h1 className="h1">Done Right</h1>
      </div>
      <div className="Hero__img">
        <div className="Hero__img-image">
          <img src={letterO} className="Hero__image" />
          <img src={letterB} className="Hero__image" />
          <img src={letterI} className="Hero__image" />
        </div>
        <div className="Hero__img-image">
          <img src={letterR} className="Hero__image" />
          <img src={letterO} className="Hero__image" />
          <img src={letterS} className="Hero__image" />
          <img src={letterS} className="Hero__image" />
        </div>
      </div>
      <div className="Hero__dev">
        {" "}
        <h2>Frontend Developer</h2>
      </div>
      <div className="Hero__col">
        <div className="Hero__col-box">
          <h3>3 Years </h3>
          <p>of experience</p>
        </div>
        <div className="Hero__col-box">
          <h3>100+ </h3>
          <p>Project Completed</p>
        </div>
        <div className="Hero__col-box">
          <h3>100+ </h3>
          <p>Clients</p>
        </div>
        <div className="Hero__col-box">
          <h3>From 20 </h3>
          <p>Different Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
