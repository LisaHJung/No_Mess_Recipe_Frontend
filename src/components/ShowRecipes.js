import React from "react";
import RecipeCard from "./RecipeCard";

class ShowRecipe extends React.Component {
  showRecipes = (props) => {
    return this.props.recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ));
  };

  render() {
    return <div className="card-container">{this.showRecipes()}</div>;
  }
}

export default ShowRecipe;
