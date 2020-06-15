import React from "react";
import RecipeCard from "./RecipeCard";

class ShowRecipe extends React.Component {
  showRecipes = (props) => {
    return this.props.recipes.map((recipe) => (
      <RecipeCard key={recipe.idMeal} recipe={recipe} fetchRecipeInfo={this.props.fetchRecipeInfo} history={this.props.history} />
    ));
  };

  render() {
    return <div className="card-container">{this.showRecipes()}</div>;
  }
}

export default ShowRecipe;
