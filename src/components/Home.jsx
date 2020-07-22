import React, { useState, useEffect } from "react";
import Search from "./Search";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import AddmovieButton from "./AddMovieButton";
import ShowWatchList from "./ShowWatchList";

// https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
export function useDebouncedValue(input, time = 500) {
  const [debouncedValue, setDebouncedValue] = useState(input);

  // every time input value has changed - set interval before it's actually commited
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, time]);

  return debouncedValue;
}

function Home() {
  const [value, setValue] = useState(undefined);
  const [show, setShow] = useState(undefined);
  const [selected, setSelected] = useState(undefined);

  const apiurl = "http://www.omdbapi.com/?apikey=66917c51&";

  const handleKeyPress = (e) => {
    console.log(value);
    value &&
      fetch(`${apiurl}s=${value}`)
        .then((res) => res.json())
        .then((res) => setShow(res))
        .catch((error) => console.log(error));
  };
  const openPopup = (id) => {
    fetch(`${apiurl}i=${id}`)
      .then((res) => res.json())
      .then((res) => setSelected(res));
  };
  const closePopup = () => {
    setSelected(undefined);
  };

  const debouncedValue = useDebouncedValue(value, 500); // this value will pick real time value, but will change it's result only when it's seattled for 500ms

  useEffect(() => {
    // this effect will be called on seattled values
    handleKeyPress(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="App">
      <Link to="/watchList">
        <button className="watchList">WatchList</button>
      </Link>
      <header>
        <h1>Movies Den</h1>
      </header>
      <main>
        <Search setValue={setValue} />
        {show && show.Search !== undefined ? (
          <section className="results">
            {show.Search.map((e) => (
              <div className="result">
                <div key={e.imdbID} onClick={() => openPopup(e.imdbID)}>
                  <img src={e.Poster} alt="Poster not available!!" />
                  <h3>{e.Title}</h3>
                </div>
                <AddmovieButton movie={e} />
              </div>
            ))}
          </section>
        ) : (
          <p>Please Try again</p>
        )}
        {selected && <Popup selected={selected} closePopup={closePopup} />}
      </main>
    </div>
  );
}

export default Home;
