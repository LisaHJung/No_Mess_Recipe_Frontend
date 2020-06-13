import React from "react";

function RecipeCard(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.recipe.image} alt="food" />
      <h3>{props.recipe.title}</h3>
      <p>
        calories:{props.recipe.calories} carbs:{props.recipe.carbs}
      </p>
      <p>
        fat:{props.recipe.fat} protein:{props.recipe.protein}
      </p>
    </div>
  );
}

export default RecipeCard;
