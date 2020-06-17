import React from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import RecipesLogic from "./containers/RecipesLogic";
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect 
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipes</h1>
        <Route exact path="/" 
           render={(routerProps) => {
            return <Authenticate {...routerProps} />
          }}
           />
        <Route exact path="/search">
          { localStorage.token 
          ? <RecipesLogic /> 
          : <Redirect to="/" />
          }
        </Route>
      </div>
    </Router>
  );
}

export default App;
