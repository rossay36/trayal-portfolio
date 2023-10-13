import "./ProjectPortfolio.css";
import project from "../../assets/project.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";
import project11 from "../../assets/project11.png";
import project13 from "../../assets/project13.png";
import project14 from "../../assets/project14.png";
import project15 from "../../assets/project15.png";
import project16 from "../../assets/project16.png";
import project17 from "../../assets/project17.png";
import project18 from "../../assets/project18.png";
import project19 from "../../assets/project19.png";
import project20 from "../../assets/project20.png";
import project12 from "../../assets/project12.png";

const ProjectPortfolio = () => {
  return (
    <div className="projectPortfolio">
      <div className="projectPortfolio__headings">
        <h2>Some of my works</h2>
      </div>
      <div className="projectPortfolio__images-col">
        <div className="ProjectPortfolio__img-rows">
          <div className="ProjectPortfolio__img">
            <img src={project} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project1} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project2} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project3} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project4} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project5} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project6} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project7} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project8} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project9} />
          </div>
        </div>
        <div className="ProjectPortfolio__img-rows">
          <div className="ProjectPortfolio__img">
            <img src={project11} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project12} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project13} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project20} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project14} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project15} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project16} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project17} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project18} />
          </div>
          <div className="ProjectPortfolio__img">
            <img src={project19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
