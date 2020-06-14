import React from "react";
import RecipePage from "./RecipePage"

function RecipeCard(props) {
  const viewRecipe = () => {
    props.fetchRecipeInfo(props.recipe)
    return <RecipePage />
  };

  return (
    <div className="card">
      <img src={props.recipe.strMealThumb} alt="food" />
      <h3>{props.recipe.strMeal}</h3>
      <button onClick={viewRecipe}>View Recipe</button>
    </div>
  );
}

export default RecipeCard;
