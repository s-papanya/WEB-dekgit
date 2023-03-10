import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar/navbar";
import SearchBar from "../../Components/Search-bar/search-bar";
import FilterSelection from "../../Components/Filter-Selection/Filter-Selection/filter-selection";
import MainHistory from "../../Components/Main-History/Main-History/main-history";



function History() {
    const coverHome = require("../../Assets/cover_homePage/coverHome.png");
    return (
      <div className="home-container">
        <div className="home-h-e-a-d"></div>
        <img className="coverHome" src={coverHome} alt="cover" />
        <div className="home-m-i-d-d-l-e">
          <div className="home-main">
            <div className="home-main-content">
              <MainHistory/>
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
  
  export default History;