import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar/navbar";
import MainContent from "../../Components/Main-Content/Main-Content/main-content";
import SearchBar from "../../Components/Search-bar/search-bar";
import FilterSelection from "../../Components/Filter-Selection/Filter-Selection/filter-selection";
import "./home.css";

function Home() {
  const coverHome = require("../../Assets/cover_homePage/coverHome.png");
  return (
    <div className="home-container">
      <div className="home-h-e-a-d"></div>
      <img className="coverHome" src={coverHome} alt="cover" />
      <div className="home-m-i-d-d-l-e">
        <div className="home-main">
          <div className="home-main-content">
            <MainContent />
          </div>
          <div className="home-main-option">
            <div className="home-search-box">
              <SearchBar />
            </div>
            <div className="home-selection-filter">
              <FilterSelection />
            </div>
          </div>
        </div>
      </div>
      <div className="home-f-o-o-t">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
