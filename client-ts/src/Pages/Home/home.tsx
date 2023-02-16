import React from "react";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import "./home.css";

function Home() {
  const coverHome = require("../../Assets/cover_homePage/coverHome.png");
  return (
    <div className="home-container">
      
      <div className="home-h-e-a-d">
        
        <Navbar />
      </div>
      <img className="coverHome" src={coverHome} alt="cover" />
      <div className="home-m-i-d-d-l-e">
        <div className="home-main">
          <div className="home-main-content"></div>
          <div className="home-main-option">
            <div className="home-search-box"></div>
            <div className="home-selection-filter"></div>
          </div>
        </div>
      </div>
      <div className="home-f-o-o-t">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
