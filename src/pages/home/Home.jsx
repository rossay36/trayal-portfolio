import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Brand from "../../components/brand/Brand";
import ProjectPortfolio from "../../components/projectPortfolio/ProjectPortfolio";
import Services from "../../components/services/Services";
import Abouts from "../../components/about/Abouts";
const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Brand />
      <ProjectPortfolio />
      <Services />
      <Abouts />
      <Footer />
    </div>
  );
};

export default Home;
