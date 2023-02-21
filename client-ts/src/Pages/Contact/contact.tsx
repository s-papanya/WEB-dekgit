import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import MainContent from "../../Components/Main-Content/main-content";
import SearchBar from "../../Components/Search-bar/search-bar";
import FilterSelection from "../../Components/Filter-Selection/filter-selection";
import "./contact.css"

function Contact() {
    const coverHome = require("../../Assets/cover_homePage/coverHome.jfif");
    return (
      <div className="home-container">
        <div className="home-h-e-a-d"></div>
        <img className="coverHome" src={coverHome} alt="cover" />
        <div className="home-m-i-d-d-l-e">
          <div className="home-main">
            <div className="home-main-option">
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
  
  export default Contact ;