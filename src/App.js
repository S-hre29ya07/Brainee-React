import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Sidebar changePage={changePage} />
        <HomePage currentPage={currentPage} />
      </div>
    </div>
  );
}

export default App;
