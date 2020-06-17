import React from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import RecipesLogic from "./containers/RecipesLogic";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipes</h1>
        <Route exact path="/" component={<Authenticate />} />
        <Route exact path="/search">
          <RecipesLogic />
        </Route>
      </div>
    </Router>
  );
}

export default App;
