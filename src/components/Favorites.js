import React from "react";
import FavoritesCard from "./FavoritesCard";

function Favorites(props) {
  const showFavorites = () => {
    console.log("favorites: ", props.favorites);
    return props.favorites.map((recipe) => (
      <FavoritesCard
        key={recipe.id}
        recipe={recipe}
        removeFavorite={props.removeFavorite}
        deleteFromBackend={props.deleteFromBackend}
      />
    ));
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark fixed-top">
          {/* <div className="favorites">
            <h1>Favorites Page</h1>
          </div> */}
        </nav>
        {/* <button
          onClick={() => {
            props.history.push("/search");
          }}
        >
          Main page
        </button> */}
      </div>
      <div className="card-container">{showFavorites()}</div>
    </div>
  );
}
export default Favorites;
