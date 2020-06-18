import React from "react";
import YouTube from "react-youtube";

const favoritesURL = "http://localhost:4000/favorites";

function RecipePage(props) {
  const handleFavorites = () => {
    props.addToFavorites(props.instructions[0]);
    props.createFavorites(props.instructions[0]);
  };

  const showRecipe = () => {

    return (
      <div>
        <button onClick={handleFavorites}> Add to Favorites</button>

        <button
          onClick={() => {
            props.history.push("/favorites");
          }}
        >
          View Favorites
        </button>
        <div className="recipe-items">
          <span className="recipe-item-title"> Ingredients</span>
          <ul className="checkmark">
            {props.instructions.ingredientList.map(i => {
              return (
              <li>
                {i.measurement} of{" "}
                {i.ingredient}
              </li>)
            })}
          </ul>
        </div>
        <div className="instructions">
          <span className="recipe-item-title">Instructions</span>
          <ol>
          {props.instructions.normalizedDirections.map(i => {
              return (
              <li>
                {i}
              </li>)
            })}
          </ol>
        </div>
      </div>
    );
  };
  return (
    <div className="recipe-container">
      <div className="recipe-title">
        <h1>{props.instructions[0].strMeal}</h1>
      </div>
      <div className="recipe-video">
        <YouTube videoId="MWzxDFRtVbc" />
      </div>
      {props.instructions.length > 0 ? showRecipe() : null}
    </div>
  );
}
export default RecipePage;
