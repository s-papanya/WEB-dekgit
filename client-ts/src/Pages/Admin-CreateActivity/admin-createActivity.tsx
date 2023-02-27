import CreateActivity from "../../Components/Create-Activity/createActivity";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar/navbar";


function AdminCreateActivity() {
  const coverHome = require("../../Assets/cover_homePage/coverHome.jfif");

  return (
    <div className="home-container">
      <div className="home-h-e-a-d"></div>
      <img className="coverHome" src={coverHome} alt="cover" />
      <div className="home-m-i-d-d-l-e">
        <div className="home-main">
          <CreateActivity/>
        </div>
      </div>
      <div className="home-f-o-o-t">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
}

export default AdminCreateActivity;
