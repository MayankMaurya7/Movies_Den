import React, { useState } from "react";
import Search from "./components/Search";
import Popup from "./components/Popup";

function App() {
  const [value, setValue] = useState(undefined);
  const [show, setShow] = useState(undefined);
  const [selected, setSelected] = useState(undefined);

  const apiurl = "http://www.omdbapi.com/?apikey=66917c51&";

  const Handelkeypress = (e) => {
    console.log(value);
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

  // const debounce = function (fn, d) {
  //   let timer;
  //   return function () {
  //     let context = this,
  //       args = arguments;
  //     console.log("timeout");
  //     clearTimeout(timer);
  //     console.log(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(context, arguments);
  //     }, d);
  //     console.log(timer);
  //   };
  // };
  // const betterFuntion = debounce(Handelkeypress, 1000);
  const valueUpdate = (e) => {
    setValue(e);
  };
  const debounce1 = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, arguments);
      }, d);
      // console.log(timer);
    };
  };
  const betterFuntion1 = debounce1(valueUpdate, 1500);

  return (
    <div className="App">
      <header>
        <h1>Movies Den</h1>
      </header>
      <main>
        <Search setValue={betterFuntion1} keypress={Handelkeypress} />

        {show && show.Search !== undefined ? (
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
        ) : (
          <p>Please Try again</p>
        )}
        {selected && <Popup selected={selected} closePopup={closePopup} />}
      </main>
    </div>
  );
}

export default App;
