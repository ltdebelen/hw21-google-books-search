import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import BooksContainer from "./components/BooksContainer";
import SavedBooks from "./pages/SavedBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Navbar />
              <Jumbotron />
              <BooksContainer />
            </Fragment>
          )}
        ></Route>
        <Route exact path="/saved" component={SavedBooks}></Route>
      </Switch>
    </Router>
  );
}

export default App;
