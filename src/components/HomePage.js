import React from "react";

const HomePage = ({ currentPage }) => {
  let heading = "";
  switch (currentPage) {
    case "Home":
      heading = "Welcome to brainee!";
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
      heading = "Welcome to trash";
      break;
    default:
      heading = "Welcome to brainee!";
  }

  return (
    <div className="homepage">
      <h1 className="homepage-heading">{heading}</h1>
    </div>
  );
};

export default HomePage;
