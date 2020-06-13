import React from "react";
import SearchRecipes from "../components/SearchRecipes";

class Recipes extends React.Component {
  state = {
    recipes: [],
    searchInput: "",
  };

  storeRecipes = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fetchRecipes = (event) => {
    event.preventDefault();
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=[]&maxProtein=${this.state.searchInput}`
    )
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({ recipes });
      });
  };

  render() {
    return (
      <div>
        <SearchRecipes
          recipes={this.state.recipes}
          searchInput={this.state.searchInput}
          storeRecipes={this.storeRecipes}
          fetchRecipes={this.fetchRecipes}
        />
      </div>
    );
  }
}

export default Recipes;
