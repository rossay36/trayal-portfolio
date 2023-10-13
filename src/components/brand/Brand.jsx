import React from "react";
import "./Brand.css";
import amexpress from "../../assets/amexpress.png";
import canon from "../../assets/canon.png";
import figma from "../../assets/figma.png";
import Nestel from "../../assets/Nestle.png";
import netlix from "../../assets/netlix.png";
import starbucks from "../../assets/starbucks.png";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__text">
        <h3>Am proud to have this amazing brands as my clients</h3>
      </div>
      <div className="brand__span">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="brand__img">
        <div className="brand__image">
          <img src={amexpress} />
        </div>
        <div className="brand__image">
          <img src={netlix} />
        </div>
        <div className="brand__image">
          <img src={canon} />
        </div>
        <div className="brand__image">
          <img src={figma} />
        </div>
        <div className="brand__image">
          <img src={Nestel} />
        </div>
        <div className="brand__image">
          <img src={starbucks} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
