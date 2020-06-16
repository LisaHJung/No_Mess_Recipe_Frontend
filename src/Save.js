import React from "react";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
// import BackgroundVideo from './components/BackgroundVideo';

const loginUrl = "Http://localhost:3000/api/v1/login";
const profileUrl = "http://localhost:3000/api/v1/profile";

class App extends React.Component {
  state = {
    user: {},
  };

  login = (user) => {
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "applicationjson",
      },
      body: JSON.stringify({ user }),
    })
      .then((response) => response.json())
      .then(console.log);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          {/* <BackgroundVideo /> */}
          <PrivateRoute exact path="/" />
          <Route
            path="/login"
            render={(props) => <Login {...props} login={this.login} />}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default App;


import React from "react";
import "./App.css";
import RecipesLogic from "./containers/RecipesLogic"

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <RecipesLogic />
      </div>
    );
  }
}

export default App;
