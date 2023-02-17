import "./activity.css";

function Activity() {
  const cover_activity = require("../../../Assets/cover_activity/activity-1.png");

  return (
    <div className="activity">
      <div className="activity-image">
        <img className="image" src={cover_activity} alt="" />
      </div>
      <div className="activity-text">
        <div className="activity-title">
          <h1 className="title">ZERO To Javascript&Typescript</h1>
        </div>
        <div className="activity-description">
          <span className="description">
            หลักสูตรใหม่ ก้าวสู่การเป็น javascript dev ในระดับ intermediate
            เรียนตั้งแต่เรื่องแรกยันเรื่องสุดท้าย เทคนิคการสอนแบบใหม่
            หลักสูตรใหม่ เนื้อหาแน่นกว่าเดิมม!!!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Activity;
