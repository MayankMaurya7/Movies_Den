import { ADD_MOVIE } from "./types";
import { ADD_TOFAV } from "./types";
import { REMOVE_FROM_WATCHLIST } from "./types";

export const addToWatch = (movieData) => {
  return {
    type: ADD_MOVIE,
    payload: movieData,
  };
};

export const addToFav = (movieData) => {
  return {
    type: ADD_TOFAV,
    payload: movieData,
  };
};
export const removeFromWatchlist = (movieData) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: movieData,
  };
};
