import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faQuestionCircle,faBell,faCrown} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__title">Brainee</h1>
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
