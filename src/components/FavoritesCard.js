import React from "react";

function FavoritesCard(props) {
    const handleDelete =() =>{
        props.removeFavorite(props.recipe)
        props.deleteFromBackend(props.recipe)
    }

  return (
    <div className="card">
      <img src={props.recipe.image} alt="food" />
      <h3>{props.recipe.name}</h3>
      <button onClick={handleDelete}> Delete Favorite</button>
    </div>
  );
}

export default FavoritesCard;
