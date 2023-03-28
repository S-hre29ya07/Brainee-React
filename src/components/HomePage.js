import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"

const HomePage = ({ currentPage }) => {
  let heading = "";
  switch (currentPage) {
    case "Home":
      heading = (
        <div className="search-container">
          <input type="text" placeholder="Search Your Projects" className="search-bar" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        );
      break;
    case "Projects":
      heading = "Welcome to projects";
      break;
    case "Folders":
      heading = "Welcome to folders";
      break;
    case "Brand Kit":
      heading = "Welcome to Brand kit";
      break;
    case "Trash":
      heading = "Trash";
      break;
    default:
      heading = (
        <div className="search-container">
        <input type="text" placeholder="Search Your Projects" className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
        );
  }

  return (
    <div className="homepage">
      <h1 className="homepage-heading">{heading}</h1>
    </div>
  );
};

export default HomePage;
