import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <div className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>{selected.Year}</span>
        </h2>
        <h3 className="rating">{selected.imdbRating}</h3>
        <div className="plot">
          <img src={selected.Poster} alt="Poster not available!!" />
          <p>{selected.Plot}</p>
        </div>
        <button onClick={closePopup} className="primaryButton">
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
