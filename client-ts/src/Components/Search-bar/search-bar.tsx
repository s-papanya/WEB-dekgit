import "./search-bar.css";

function SearchBar() {
  return (
    <div className="search-bar-background">
      <div id="search-bar-cover">
        <div className="search-bar-tb">
          <div className="search-bar-td">
            <input
              className="search-bar-input"
              type="text"
              placeholder="Search"
              required
            />
          </div>
          <div className="search-bar-td" id="search-bar-s-cover">
            <button className="search-bar-button" type="submit">
              <div id="search-bar-s-circle"></div>
              <span className="search-bar-span">...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
