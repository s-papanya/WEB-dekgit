import React from 'react'
import './filter-selection.css'

function FilterSelection() {
  return (
    <div className="filter-selection-container">
      <div className="filter-selection-redline"></div>
      <div className="filter-selection-topic"></div>
      <div className="filter-selection-filter">
        <div className="filter-selection-All"></div>
        <div className="filter-selection-FirstComeFirstServe"></div>
        <div className="filter-selection-Candidate"></div>
      </div>
    </div>
  )
}

export default FilterSelection;