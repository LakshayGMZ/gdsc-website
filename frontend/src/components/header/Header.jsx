import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [navStatus, setNavStatus] = useState(false);
  const toggleNav = () => {
    setNavStatus(!navStatus);
    if (!navStatus && window.innerWidth <= 850) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav>
      <div className="nav-flex">
        <div>
          <Link to="/" className="nav-logo">
            <img src="/footer/gdsc.png" alt="GDSC Logo" />
            <span>
              Google Developer Student <br />
              ADGIPS
            </span>
          </Link>
        </div>
        <div className={navStatus ? "nav-close" : "nav-open"}>
          <Link onClick={toggleNav} to="/">
            Home
          </Link>
          <Link onClick={toggleNav} to="/events">
            Event
          </Link>
          <Link onClick={toggleNav} to="/team">
            Team
          </Link>
          <Link onClick={toggleNav} to="/blogs">
            Blog
          </Link>
          <a onClick={toggleNav} href="#resources-section">
            Resources
          </a>
          <a onClick={toggleNav} className="links">
            Contact Us
          </a>
          <a onClick={toggleNav} className="links">
            Join Community
          </a>
        </div>
        <div>
          <Link
            to="https://linktr.ee/gdsc.adgips"
            className="nav-bt1"
            target="_blank"
          >
            Contact Us
          </Link>
          <Link
            to="https://gdsc.community.dev/dr-akhilesh-das-gupta-institute-of-professional-studies-new-delhi-india/"
            className="nav-bt2"
            target="_blank"
          >
            Join Community
          </Link>
        </div>
        <a onClick={toggleNav} className="bars">
          <FontAwesomeIcon size="2xl" icon={faBars} />
        </a>
      </div>
    </nav>
  );
}
