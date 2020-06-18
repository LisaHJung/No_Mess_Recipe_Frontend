import React from "react";

function FavoritesCard(props) {
    const handleDelete =() =>{
        props.removeFavorite(props.recipe)
        props.deleteFromBackend(props.recipe)
    }

  return (
    <div className="card-container">
      <div className="card">
        <img src={props.recipe.image || props.recipe.strMealThumb} alt="food" />
        <h3>{props.recipe.name || props.recipe.strMeal}</h3>
        <button onClick={handleDelete}> Delete Favorite</button>
      </div>
    </div>
  );
}

export default FavoritesCard;