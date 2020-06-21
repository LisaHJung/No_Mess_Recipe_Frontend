import React from "react";
import "./RecipeCard.css"

function FavoritesCard(props) {
  const handleDelete = () => {
    props.removeFavorite(props.recipe);
    props.deleteFromBackend(props.recipe);
  };

  return (
    <main>
      <ul class="card-list">
        <li>
          <article>
            <h3>{props.recipe.name || props.recipe.strMeal}</h3>
            <section>
              <img
                src={props.recipe.image || props.recipe.strMealThumb}
                alt="food"
              />
            </section>
            <button onClick={handleDelete}> Delete Favorite</button>
          </article>
        </li>
      </ul>
    </main>
  );
}

export default FavoritesCard;
