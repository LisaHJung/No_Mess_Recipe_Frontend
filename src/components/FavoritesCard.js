import React from "react";

function FavoritesCard(props) {
    const handleDelete =() =>{
        props.removeFavorite(props.recipe)
    }

  return (
    <div className="card">
      <img src={props.recipe.strMealThumb} alt="food" />
      <h3>{props.recipe.strMeal}</h3>
      <button onClick={handleDelete}> Delete Favorite</button>
    </div>
  );
}

export default FavoritesCard;
