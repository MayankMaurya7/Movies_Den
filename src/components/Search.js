import React from "react";

function Search(props) {
  return (
    <div className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search movie here..."
        className="searchbox"
        onChange={(e) => props.setValue(e.target.value)}
        onKeyPress={props.keypress}
      />
    </div>
  );
}

export default Search;
