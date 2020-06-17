import React from "react";
import RecipesLogic from "../containers/RecipesLogic";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  return <Route {...props} render={(routerProps) => {
        return localStorage.token ? <RecipesLogic {...routerProps} /> : <Redirect to="/login" />
      }} />
}
export default PrivateRoute;
