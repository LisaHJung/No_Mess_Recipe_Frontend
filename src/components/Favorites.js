import React from "react";
import FavoritesCard from "./FavoritesCard"

function Favorites(props) {
  const showFavorites =() =>{
    return props.favorites.map((recipe)=>(
      <FavoritesCard key={recipe.id} recipe={recipe} removeFavorite={props.removeFavorite}/>
    ))
  }

  return (
    <div>
      <h1>Favorites Page</h1>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Main page
      </button>
      {showFavorites()}
    </div>
  );
}
export default Favorites;
