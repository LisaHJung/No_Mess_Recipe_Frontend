import React from "react";

function RecipePage(props) {
  const showRecipe = () => {
    return (
      <div>
        <ul>
          <li className="card">
            How to video: {props.instructions[0].strYoutube}
          </li>
          <li className="card">
            Ingredients: {props.instructions[0].strMeasure1} of{" "}
            {props.instructions[0].strIngredient1}
          </li>
          <li className="card">
            Instructions: {props.instructions[0].strInstructions}
          </li>
        </ul>
        <button> Add to Favorites</button>
        <button onClick={()=>props.history.pushState('/favorites')}> View Favorites</button>
      </div>
    );
  };
  return (
    <div>
      <h1>{props.instructions[0].strMeal}</h1>
      {props.instructions.length > 0 ? showRecipe() : null}
    </div>
  );
}
export default RecipePage;
