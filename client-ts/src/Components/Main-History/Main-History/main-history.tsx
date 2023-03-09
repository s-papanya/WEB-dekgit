import HistoryActivity from "../HistoryActivity/history-activity";
import "./main-history.css"

function MainHistory(){
    return(
        <div className="main-history-container">
      <div className="main-history-redline"></div>
      <header className="main-history-topic">
        <h1 className="main-history-text">HISTORY</h1>
      </header>
      <div className="main-history-content">
        <HistoryActivity/>
      </div>
    </div>
    );
}

export default MainHistory