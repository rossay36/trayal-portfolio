import React from "react";
import "./Services.css";
import { GiSpiderWeb, GiAbstract061, GiDiagram } from "react-icons/gi";

const Services = () => {
  return (
    <div className="services">
      <h1>Services that i provide</h1>
      <div className="services__rows">
        <div className="services__box">
          <GiSpiderWeb className="services__icons" />
          <p>Web Develoopment</p>
        </div>
        <div className="services__box">
          <GiAbstract061 className="services__icons" />
          <p>Web Design</p>
        </div>
        <div className="services__box">
          <GiDiagram className="services__icons" />
          <p>Consultancy</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
