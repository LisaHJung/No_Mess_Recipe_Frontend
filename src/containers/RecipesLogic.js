import React from "react";
import SearchRecipes from "../components/SearchRecipes";
import RecipePage from "../components/RecipePage";
import Favorites from "../components/Favorites";
import FavoritesCard from "../components/FavoritesCard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Recipes extends React.Component {
  state = {
    searchInput: "",
    recipes: [],
    instructions: [],
    favorites: []
  };

  captureInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fetchRecipes = (event) => {
    event.preventDefault();
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.state.searchInput}`
    )
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({
          recipes: recipes.meals,
          ids: recipes.meals.map((meal) => meal.idMeal),
        });
      });
  };

  fetchRecipeInfo = (recipe, history) => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
    )
      .then((response) => response.json())
      .then((instructions) => {
        this.setState({
          instructions: instructions.meals,
        });
        history.push("/recipe");
      });
  };

  addToFavorites = (recipe) => {
    if(!this.state.favorites.find(PinnedRecipe => PinnedRecipe.id === recipe.idMeal))
    this.setState({
      favorites: [...this.state.favorites, recipe]
    })
  }

  removeFavorite =(recipe) =>{
    const filtered = this.state.favorites.filter(PinnedRecipe => PinnedRecipe.id === recipe.idMeal)
    this.setState({
      favorites: filtered
    })
  }


  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <SearchRecipes
                  {...props}
                  recipes={this.state.recipes}
                  instructions={this.state.recipes}
                  searchInput={this.state.searchInput}
                  captureInput={this.captureInput}
                  fetchRecipes={this.fetchRecipes}
                  fetchRecipeInfo={this.fetchRecipeInfo}
                  handleClick={this.handleClick}
                />
              )}
            />
            <Route
              path="/recipe"
              render={(props) => (
                <RecipePage
                  {...props}
                  instructions={this.state.instructions}
                  fetchRecipeInfo={this.fetchRecipeInfo}
                  favorites={this.state.favorites}
                  addToFavorites={this.addToFavorites}
                  showFavorites={this.showFavorites}
                />
              )}
            />
            <Route
              path="/favorites"
              render={(props) => <Favorites {...props} favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Recipes;
