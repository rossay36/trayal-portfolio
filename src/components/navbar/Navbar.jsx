import { useState } from "react";
import "./Navbar.css";
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <a
          rel="noreferrer"
          href="http://youtube.com/@obiRoss75309"
          target="_blank"
        >
          <FaYoutube className="nav__icons" />
        </a>
        <a
          rel="noreferrer"
          href="http://instagram.com/fedrickpd"
          target="_blank"
        >
          <FaInstagram className="nav__icons" />
        </a>
        <a
          rel="noreferrer"
          href="http://twitter.com/@ObiRoss16"
          target="_blank"
        >
          <FaTwitter className="nav__icons" />
        </a>
        <a href="/">
          <FaGithub className="nav__icons" />
        </a>
      </div>
      <ul className={toggle ? "nav__list active" : "nav__list"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/appointments">appointments</Link>
        </li>
        <li>
          <Link to="/faqs">Faqs</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <div className="nav__name">
        <a href="/project">
          <h1 className="h1">Obi Ross</h1>
        </a>
      </div>
      <div className="nav__hamburger" onClick={handleToggle}>
        {toggle ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;
