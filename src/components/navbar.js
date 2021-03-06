import React from "react";
import logo from "../assets/logo-text-white.png";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navbar = props => {
    return (
        <nav className="navigation navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="Logo..."/> </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon="faBars" style={{ color: "#fff" }} />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">How I Work?</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    )
}

navbar.propTypes = {

}

export default navbar