import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWatch } from "../redux/Action";
import { addToFav } from "../redux/Action";

function AddmovieButton(props) {
  const dispatch = useDispatch();
  return (
    <div className="elementButtonsWrap">
      <button
        className="elementButtons"
        onClick={() => dispatch(addToWatch(props.movie))}
      >
        Add to WatchList
      </button>
      <button
        className="elementButtons"
        onClick={() => dispatch(addToFav(props.movie.Title))}
      >
        Add to Favourites
      </button>
    </div>
  );
}

export default AddmovieButton;
