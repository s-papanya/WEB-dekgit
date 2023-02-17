import React from "react";
import Selection from "./Selection/selection";
import "./filter-selection.css";

function FilterSelection() {
  return (
    <div className="filter-selection-container">
      <div className="filter-selection-redline"></div>
      <div className="filter-selection-topic">
        <h1 className="filter-Topic">ACTIVITY TYPE</h1>
      </div>
      <Selection />
    </div>
  );
}

export default FilterSelection;
