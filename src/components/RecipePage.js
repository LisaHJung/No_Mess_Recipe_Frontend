import React from "react";

function RecipePage(props) {
  const createFavorites = () => {
    props.addToFavorites(props.instructions[0])
//     fetch("http://localhost:3000/favorites", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         name: props.instructions[0].strMeal,
//         image: props.instructions[0].strMealThumb,
//         video: props.instructions[0].strYoutube,
//         ingredients: props.instructions[0].strIngredient1,
//         instructions: props.instructions[0].strInstructions,
//       }),
//     });
  };

  const showRecipe = () => {
    return (
      <div>
        <button onClick={createFavorites}> Add to Favorites</button>
        <button
          onClick={() => {
            props.history.push("/favorites");
          }}
        >
          View Favorites
        </button>
        <ul>
          <img src={props.instructions[0].strMealThumb} />
          <li className="card">{props.instructions[0].strMeal}</li>
          <li className="card">
            How-to video: {props.instructions[0].strYoutube}
          </li>
          <li className="card">
            Ingredients: {props.instructions[0].strMeasure1} of{" "}
            {props.instructions[0].strIngredient1}
          </li>
          <li className="card">
            Instructions: {props.instructions[0].strInstructions}
          </li>
        </ul>
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


