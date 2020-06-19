import React from "react";
import RecipePage from "./RecipePage";
import "./RecipeCard.css";

function RecipeCard(props) {
  const viewRecipe = () => {
    props.fetchRecipeInfo(props.recipe, props.history);
  };

  return (
    <main>
      <ul class="card-list">
        <li>
          <article>
            <h3>{props.recipe.strMeal}</h3>
            <section>
              <img src={props.recipe.strMealThumb} alt="food" />
            </section>
            <button onClick={viewRecipe}>View Recipe</button>
          </article>
        </li>
      </ul>
    </main>
  );
}

export default RecipeCard;
