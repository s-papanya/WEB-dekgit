import "./selection.css";

function Selection() {
  return (
    <div className="filter-selection-filter">
      <div className="filter-selection-All ">
        <b className="All"><span>ALL</span></b>
      </div>
      <div className="filter-selection-FirstComeFirstServe">
        <b className="FirstComeFirstServe"><span>FIRST COME FIRST SERVE</span></b>
      </div>
      <div className="filter-selection-Candidate">
        <b className="Candidate"><span>CANDIDATE</span></b>
      </div>
    </div>
  );
}

export default Selection;
