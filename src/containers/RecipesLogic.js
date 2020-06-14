import React from "react";
import SearchRecipes from "../components/SearchRecipes";

class Recipes extends React.Component {
  state = {
    searchInput: "",
    recipes: [],
    instructions: []
  };

  captureInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fetchRecipes = (event) => {
    event.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.state.searchInput}`)
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({ 
            recipes: recipes.meals,
            ids: recipes.meals.map(meal => meal.idMeal)
         });
      });
  };

  fetchRecipeInfo = (recipe) =>{
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
        .then(response => response.json())
        .then(instructions =>{
            this.setState({
                instructions: instructions.meals
            })
        })
  }

  render() {
    return (
      <div>
        <h1> Find your next dish</h1>
        <SearchRecipes
          recipes={this.state.recipes}
          instructions={this.state.recipes}
          searchInput={this.state.searchInput}
          captureInput={this.captureInput}
          fetchRecipes={this.fetchRecipes}
          fetchRecipeInfo={this.fetchRecipeInfo}
        />
      </div>
    );
  }
}

export default Recipes;
