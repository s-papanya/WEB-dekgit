import "./searchBox.css";

function SearchBox() {
  return (
    <div className="background">
      <div id="cover">
        <div className="tb">
          <div className="td">
            <input type="text" placeholder="Search" required />
          </div>
          <div className="td" id="s-cover">
            <button type="submit">
              <div id="s-circle"></div>
              <span>...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
