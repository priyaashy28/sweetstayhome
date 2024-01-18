import "./navbar.css";

import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <div className="brand-name">
        <img src="/navbarLogo.png" alt="logo" height="54px"></img>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="booking">
              BOOKING
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
