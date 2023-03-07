import CreateActivity from "../../Components/Create-Activity/createActivity";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar/navbar";

import "./admin-createActivity.css";

function AdminCreateActivity() {
  const coverHome = require("../../Assets/cover_homePage/coverHome.jfif");

  return (
    <div className="home-container">
      <div className="home-h-e-a-d"></div>
      <img className="coverHome" src={coverHome} alt="cover" />
      <div className="home-m-i-d-d-l-e">
        <div className="home-main">
          <div className="activity-detail-from-container ">
            <div className="activity-detail-from-redline"></div>
            <header className="activity-detail-from-topic">
              <h1 className="activity-detail-from-text">Create Activity</h1>
            </header>
            <div className="admin-createActivity-con">
              <div className="admin-createActivity">
                <CreateActivity />
              </div>
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

export default AdminCreateActivity;
