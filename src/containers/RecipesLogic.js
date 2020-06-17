import React from "react";
import SearchRecipes from "../components/SearchRecipes";
import RecipePage from "../components/RecipePage";
import Favorites from "../components/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const favoritesURL = "http://localhost:4000/favorites";

class Recipes extends React.Component {
  state = {
    searchInput: "",
    recipes: [],
    instructions: [],
    favorites: [],
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

  createFavorites = (recipe) => {
    fetch(favoritesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: recipe.strMeal,
        image: recipe.strMealThumb,
        video: recipe.strYoutube,
        ingredients: recipe.strIngredient1,
        instructions: recipe.strInstructions,
      }),
    });
  };

  componentDidMount() {
    fetch("http://localhost:4000/favorites",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((favorites) => {
        this.setState({
          favorites,
        });
      });
  }

  addToFavorites = (recipe) => {
    if (
      !this.state.favorites.find(
        (PinnedRecipe) => PinnedRecipe.id === recipe.idMeal
      )
    )
      this.setState({
        favorites: [...this.state.favorites, recipe],
      });
  };

  removeFavorite = (recipe) => {
    const filtered = this.state.favorites.filter(
      (PinnedRecipe) => PinnedRecipe.id !== recipe.idMeal
    );
    this.setState({
      favorites: filtered,
    });
  };

  deleteFromBackend =(recipe)=>{
    fetch(`http://localhost:4000/favorites/${recipe.id}`, {method: "DELETE"})
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/search"
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
                  createFavorites={this.createFavorites}
                  showFavorites={this.showFavorites}
                />
              )}
            />
            <Route
              path="/favorites"
              render={(props) => (
                <Favorites
                  {...props}
                  favorites={this.state.favorites}
                  removeFavorite={this.removeFavorite}
                  deleteFromBackend={this.deleteFromBackend}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Recipes;
