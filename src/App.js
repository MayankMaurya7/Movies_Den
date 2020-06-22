import React, { useState } from "react";
import Search from "./components/Search";
import Popup from "./components/Popup";

function App() {
  const [value, setValue] = useState(undefined);
  const [show, setShow] = useState(undefined);
  const [selected, setSelected] = useState(undefined);

  const apiurl = "http://www.omdbapi.com/?apikey=66917c51&";

  const Handelkeypress = (e) => {
    if (e.key === "Enter") {
      console.log(value);
      fetch(`${apiurl}s=${value}`)
        .then((res) => res.json())
        .then((res) => setShow(res));
    }
  };
  const openPopup = (id) => {
    fetch(`${apiurl}i=${id}`)
      .then((res) => res.json())
      .then((res) => setSelected(res));
  };
  const closePopup = () => {
    setSelected(undefined);
  };
  return (
    <div className="App">
      <header>
        <h1>Movies Den</h1>
      </header>
      <main>
        <Search setValue={setValue} keypress={Handelkeypress} />
        {show && (
          <section className="results">
            {show.Search.map((e) => (
              <div
                key={e.imdbID}
                className="result"
                onClick={() => openPopup(e.imdbID)}
              >
                <img src={e.Poster} alt="Poster not available!!" />
                <h3>{e.Title}</h3>
              </div>
            ))}
          </section>
        )}
        {selected && <Popup selected={selected} closePopup={closePopup} />}
      </main>
    </div>
  );
}

export default App;
