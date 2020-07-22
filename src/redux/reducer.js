import { ADD_MOVIE } from "./types";
import { ADD_TOFAV, REMOVE_FROM_WATCHLIST } from "./types";

const initialState = {
  watchList: [],
  favouriteTitles: [],
  ////have to check what we are receiving after the dispatch
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      console.log(action);
      //
      // let tempWatchList = [...state.watchList]
      state.watchList.push(action.payload);

      return {
        ...state,
      };
      //     return {
      //     ...state
      //     watchList: state  //have to check what we are receiving after the dispatch
      // }
    }
    case ADD_TOFAV: {
      console.log(action);

      state.favouriteTitles.push(action.payload);

      return {
        ...state,
      };
    }

    // Bring only title as the payload.
    // Use the title to remove the movie from the watchlist
    // Store the updated watchlist in a new temporary variable
    // use this temporary variable to crate a new and updated state

    // movie = {
    //   Title: "asdfasdf",
    //   cast: ["asdfsda", "asdfasd"],
    //   rating: 343
    // }

    // action.payload = "asdfasdfasd"

    case REMOVE_FROM_WATCHLIST: {
      console.log(action);
      const updatedList = state.watchList.filter(
        (movie) => movie.Title !== action.payload
      );

      return {
        ...state,
        watchList: updatedList,
      };
    }

    // state = {
    //   watchList: [],
    //   favouriteTitles: [],
    //   watchList: [...updatedList]
    // }

    default:
      return state;
  }
};

// let a = {
//     b: ["12312", "ccc"]
// }

// let c = "333";

// let watchList = [...a.b, c]
// a.b = ["12312", "ccc"]
// ...a.b = "12312", "ccc"
// [...a.b] = ["12312", "ccc"]
// c = "333"
// [...a.b, c] = ["12312", "ccc","333"]
// console.log({...a, b: watchList})

export default moviesReducer;
