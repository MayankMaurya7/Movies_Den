import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../redux/Action";

function ShowWatchList() {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.watchList);

  return (
    <div>
      <section className="results">
        {watchList.length &&
          watchList.map((movie) => (
            <div key={movie.imdbID} className="result">
              <img src={movie.Poster} alt="Poster not available!!" />
              <h3>{movie.Title}</h3>
              <button
                className="RemovefromWatchList"
                onClick={() => dispatch(removeFromWatchlist(movie.Title))}
              >
                Remove from WatchList
              </button>
            </div>
          ))}
      </section>
    </div>
  );
}

export default ShowWatchList;
//
{
  /* <section className="results">
{show.Search.map((e) => (
    <div
      key={e.imdbID}
      className="result"
      onClick={() => openPopup(e.imdbID)}
    >
      <img src={e.Poster} alt="Poster not available!!" />
      <h3>{e.Title}</h3>
      <AddmovieButton movie={e} />
    </div>
  ))}
</section> */
}
