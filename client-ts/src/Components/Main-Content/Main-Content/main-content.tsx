import Activity from "../Activity/activity";

import "./main-content.css";

function MainContent() {
  return (
    <div className="main-content-container">
      <div className="main-content-redline"></div>
      <header className="main-content-topic">
        <h1 className="content-Topic">ACTIVITY</h1>
      </header>
      <div className="main-content-content">
        <Activity />
      </div>
    </div>
  );
}

export default MainContent;
