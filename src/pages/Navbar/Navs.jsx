import React from "react";
import Style from "./Navs.module.css";
import logo from '../../images/png/logo-no-background.png'
import { Link } from "react-router-dom";
const Navs = () => {
  
  return (
    <nav className={`navbar navbar-expand-lg`} >
      <div className={`container-fluid d-flex  ${Style.navs} `}>
        <Link className="navbar-brand d-flex justify-content-start" to="/home">
          <img className={`${Style.logo}`} src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
          <ul className="navbar-nav  mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className={`nav-link active ${Style.links}`} aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item" >
              <a className={`nav-link ${Style.links}`} href="#about" >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${Style.links}`} href="#explore">
                Explore Food
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${Style.links}`} href="#textx">
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${Style.links}`} href="#questions">
                Fag
              </a>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${Style.lastLinks}`} to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navs;
