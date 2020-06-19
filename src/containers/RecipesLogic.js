import React from "react";
import SearchRecipes from "../components/SearchRecipes";
import RecipePage from "../components/RecipePage";
import Favorites from "../components/Favorites";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const favoritesURL = "http://localhost:4000/favorites";

class Recipes extends React.Component {
  constructor() {
    super();
  }
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
        const set = instructions.meals[0];
        const keys = Object.keys(set);
        const i = keys.filter(
          (a) => a.includes("Ingredient") && set[a] !== null && set[a] !== ""
        );

        const ingredientList = i.map((i) => {
          let obj = {};

          let num = i.split("").pop();
          let measurementKey = "strMeasure" + num;
          let measurementValue = set[measurementKey];

          obj.ingredient = set[i];
          obj.measurement = measurementValue;
          return obj;
        });

        instructions.meals.ingredientList = ingredientList;
        instructions.meals.normalizedDirections = instructions.meals[0].strInstructions
          .split(".")
          .map((x) => x.trim());

        this.setState({
          instructions: instructions.meals,
        });
        history.push(`/recipe/${recipe.idMeal}`);
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
    fetch("http://localhost:4000/favorites", {
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
    console.log(recipe);
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
    console.log("recipe: ", recipe);
    const filtered = this.state.favorites.filter((PinnedRecipe) => {
      console.log("pinned recipe", PinnedRecipe);
      console.log(recipe);
      return PinnedRecipe.id !== recipe.id;
    });
    this.setState({
      favorites: filtered,
    });
  };

  deleteFromBackend = (recipe) => {
    fetch(`http://localhost:4000/favorites/${recipe.id}`, { method: "DELETE" });
  };

  render() {
    if (!localStorage.token) {
      return <Redirect to="/" />;
    }

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
              path="/recipe/:recipeId"
              render={(props) => (
                <RecipePage
                  {...props}
                  addToFavorites={this.addToFavorites}
                  createFavorites={this.createFavorites}
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
