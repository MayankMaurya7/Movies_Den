import React from "react";

function Search(props) {
  // const [value, setValue] = useState(undefined);

  // const valueUpdate = () => {
  //   setValue(e.target.value);
  // };
  // const debounce1 = function (fn, d) {
  //   let timer;
  //   return function () {
  //     let context = this,
  //       args = arguments;
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(context, arguments);
  //     }, d);
  //     console.log(timer);
  //   };
  // };
  // const betterFuntion1 = debounce1(valueUpdate, 1000);
  return (
    <div className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search movie here..."
        className="searchbox"
        onChange={(e) => props.setValue(e.target.value)}
        // onKeyUp={props.keypress}
      />
    </div>
  );
}

export default Search;
