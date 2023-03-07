import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar/navbar";
import ActivityDetailForm from "../../Components/Activity-Detail-Form/activityDetailForm";

function ActivityDetail() {
  const coverHome = require("../../Assets/cover_detail_activity/CoverDetail.png");
  return (
    <div className="home-container">
      <div className="home-h-e-a-d"></div>
      <img className="coverHome" src={coverHome} alt="cover" />
      <div className="home-m-i-d-d-l-e">
        <ActivityDetailForm />
      </div>
      <div className="home-f-o-o-t">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
}

export default ActivityDetail;
