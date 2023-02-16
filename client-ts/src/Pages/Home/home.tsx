import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-h-e-a-d">
        <Navbar />
      </div>
      <div className="home-m-i-d-d-l-e">
        <div className="home-main">
          <div className="home-main-content"></div>
          <div className="home-main-option">
            <div className="home-search-box"></div>
            <div className="home-selection-filter"></div>
          </div>
        </div>
      </div>
      <div className="home-f-o-o-t"></div>
    </div>
  );
}

export default Home;
