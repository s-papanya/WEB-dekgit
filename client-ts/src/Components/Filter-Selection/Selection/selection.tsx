import "./selection.css";

function Selection() {
  return (
    <div className="filter-selection-filter">
      <div className="filter-selection-All">
        <b className="selection-All filter-selection-b">
          <span className="filter-selection-span">ALL</span>
        </b>
      </div>
      <div className="filter-selection-FirstComeFirstServe">
        <b className="selection-FirstComeFirstServe filter-selection-b">
          <span className="filter-selection-span">FIRST COME FIRST SERVE</span>
        </b>
      </div>
      <div className="filter-selection-Candidate">
        <b className="selection-Candidate filter-selection-b">
          <span className="filter-selection-span">CANDIDATE</span>
        </b>
      </div>
    </div>
  );
}

export default Selection;
