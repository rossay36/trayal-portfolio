import "./Footer.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <ul className="footer__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/appointments">Appointment</Link>
          </li>
          <li>
            <Link to="/faqs">Faqs</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
        <div className="footer__logo">
          <a
            rel="noreferrer"
            href="http://youtube.com/@obiRoss75309"
            target="_blank"
          >
            <FaYoutube className="footer__icons" />
          </a>
          <a
            rel="noreferrer"
            href="http://instagram.com/fedrickpd"
            target="_blank"
          >
            <FaInstagram className="footer__icons" />
          </a>
          <a
            rel="noreferrer"
            href="http://twitter.com/@ObiRoss16"
            target="_blank"
          >
            <FaTwitter className="footer__icons" />
          </a>
          <Link href="/">
            <FaGithub className="footer__icons" />
          </Link>
        </div>
      </div>
      <div className="footer__foot">
        <Link to="appointments">
          <h1 className="footer__h1">Obi Ross</h1>
        </Link>
        <p>copyright reserve 2023 developmen policy and companies alliance.</p>
      </div>
    </div>
  );
};

export default Footer;
