import React, { useState, useEffect, useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAdd, faClapperboard,faRecordVinyl, faHome, faProjectDiagram, faFolder,faTrash,faCrown} from "@fortawesome/free-solid-svg-icons"

const Sidebar = ({ changePage }) => {
  const [showCard, setShowCard] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const cardProjectRef = useRef(null);
  const cardProjectInnerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardProjectRef.current &&
        cardProjectInnerRef.current &&
        !cardProjectRef.current.contains(event.target) &&
        !cardProjectInnerRef.current.contains(event.target)
      ) {
        setShowCard(false);
        document.body.classList.remove("overlay-active");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardProjectRef]);

  const toggleCard = () => {
    if (!showCard) {
      setShowCard(true);
      document.body.classList.add("overlay-active");
    } else {
      setShowCard(false);
      document.body.classList.remove("overlay-active");
    }
  };
  const handlePageClick = (page) => {
    changePage(page);
    setSelectedButton(page);
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
      <li className="sidebar__item admin__item">
      <div className="admin__container">
          <button className="admin__button">J</button>
          <span className="span-name">Jack Sparrow</span>
      </div>
        </li>
        <li className="sidebar__item" ref={cardProjectRef}>
          <button className="new-project-button" onClick={toggleCard}><span>New Project</span><span><FontAwesomeIcon icon={faAdd}/></span></button>
          {showCard && (
          <div className="card-project" ref={cardProjectInnerRef}>
            <li className="sidebar__subitem">
              <button className="sidebar__subbutton"><span>Upload Files</span> <span><FontAwesomeIcon icon={faClapperboard}/></span></button>
            </li>
            <li className="sidebar__subitem">
              <button className="sidebar__subbutton"><span>Record </span><span><FontAwesomeIcon icon={faRecordVinyl}/></span></button>
            </li>
        </div>
        )}
        </li>
        <li className="sidebar__item">
          <button className={`sidebar__button ${selectedButton === "Home" ? "selected" : ""}`}  onClick={() => handlePageClick("Home")}><span>Home </span><span><FontAwesomeIcon icon={faHome}/></span></button>
        </li>
        <li className="sidebar__item">
          <button className={`sidebar__button ${selectedButton === "Projects" ? "selected" : ""}`} onClick={() => handlePageClick("Projects")}><span>Projects </span><span><FontAwesomeIcon icon={faProjectDiagram}/></span></button>
        </li>
        <li className="sidebar__item">
          <button  className={`sidebar__button ${selectedButton === "Folders" ? "selected" : ""}`} onClick={() => handlePageClick("Folders")}><span>Folders </span><span><FontAwesomeIcon icon={faFolder}/></span></button>
        </li>
        <li className="sidebar__item">
          <button className={`sidebar__button ${selectedButton === "Brand Kit" ? "selected" : ""}`} onClick={() => handlePageClick("Brand Kit")}><span>Brand Kit </span><span><FontAwesomeIcon icon={faAdd}/></span></button>
        </li>
        <li className="sidebar__item">
          <button className={`sidebar__button ${selectedButton === "Trash" ? "selected" : ""}`}  onClick={() => handlePageClick("Trash")}><span>Trash </span><span><FontAwesomeIcon icon={faTrash}/></span></button>
        </li>
        <div className="card">
          <li className="sidebar__item">
            <div className="free-plan">
              <h3 className="upgrade-heading">FREE PLAN</h3>
              <hr />
              <input type="range" className="upgrade-range" min="-50" value="0"/>
              <button className="upgrade-button">UPGRADE TO PREMIUM <FontAwesomeIcon icon={faCrown} className="navbar__icon--margin"/></button>
            </div>
          </li>
        </div>
      </ul>
    </aside>
    
  );
};

export default Sidebar;
