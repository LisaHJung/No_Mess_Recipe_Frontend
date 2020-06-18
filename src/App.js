"use strict";
import React from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import RecipesLogic from "./containers/RecipesLogic";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => {
                return <Authenticate {...routerProps} />;
              }}
            />
            <Route>
              <RecipesLogic />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    width: "60px",
    height: "60px",
    background: "lightblue",
    borderRadius: "50%",
    margin: "6em 0 2em 0",
  },
  interim: {
    color: "gray",
    border: "#ccc 1px solid",
    padding: "1em",
    margin: "1em",
    width: "300px",
  },
  final: {
    color: "black",
    border: "#ccc 1px solid",
    padding: "1em",
    margin: "1em",
    width: "300px",
  },
};

const { container, button, interim, final } = styles;
