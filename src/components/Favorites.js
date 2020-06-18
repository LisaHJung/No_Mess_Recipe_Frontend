import React from "react";
import FavoritesCard from "./FavoritesCard"

function Favorites(props) {
  const showFavorites =() =>{
    console.log('favorites: ', props.favorites);
    return props.favorites.map((recipe)=>(
      <FavoritesCard key={recipe.id} recipe={recipe} removeFavorite={props.removeFavorite} deleteFromBackend={props.deleteFromBackend}/>
    ))
  }

  return (
    <div>
      <h1>Favorites Page</h1>
      <button
        onClick={() => {
          props.history.push("/search");
        }}
      >
        Main page
      </button>
      {showFavorites()}
    </div>
  );
}
export default Favorites;