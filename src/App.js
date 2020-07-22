import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowWatchList from "./components/ShowWatchList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/watchList">
            <ShowWatchList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
