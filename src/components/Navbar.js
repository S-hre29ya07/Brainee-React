import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faQuestionCircle,faBell,faCrown} from "@fortawesome/free-solid-svg-icons"
import logo from '../Assets/Logo-03.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        {/* <h1 className="navbar__title">Brainee</h1> */}
        <img src={logo} alt="Logo" className="navbar__title"/>
      </div>
      <div className="navbar__right">
        {/* <FaQuestionCircle className="navbar__icon" /> */}
        <FontAwesomeIcon icon={faQuestionCircle} className="navbar__icon"/>
        <FontAwesomeIcon icon={faBell} className="navbar__icon"/>
        <button className="navbar__button">
          UPGRADE <FontAwesomeIcon icon={faCrown} className="navbar__icon--margin"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
