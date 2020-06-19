import React from "react";
import YouTube from "./YouTube";
import SpeechRecognition from "./SpeechRecognition";
import { withRouter } from "react-router-dom";
import "./RecipePage.css";

const favoritesURL = "http://localhost:4000/favorites";

class RecipePage extends React.Component {
  state = {
    instructions: [],
  };

  constructor(props) {
    super(props);
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  fetchRecipeInfo = (recipeId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((response) => response.json())
      .then((instructions) => {
        const set = instructions.meals[0];
        const keys = Object.keys(set);
        const i = keys.filter(
          (a) => a.includes("Ingredient") && set[a] !== null && set[a] !== ""
        );

        const ingredientList = i.map((i) => {
          let obj = {};

          let num = i.split("").pop();
          let measurementKey = "strMeasure" + num;
          let measurementValue = set[measurementKey];

          obj.ingredient = set[i];
          obj.measurement = measurementValue;
          return obj;
        });

        instructions.meals.ingredientList = ingredientList;
        instructions.meals.normalizedDirections = instructions.meals[0].strInstructions
          .split(".")
          .map((x) => x.trim());

        this.setState({
          instructions: instructions.meals,
        });
      });
  };

  componentDidMount() {
    const { params } = this.props.match;
    if (params.recipeId) {
      this.fetchRecipeInfo(params.recipeId);
    }
  }

  handleFavorites() {
    this.props.addToFavorites(this.state.instructions[0]);
    this.props.createFavorites(this.state.instructions[0]);
  }

  showRecipe() {
    return (
      <div>
        <div className="add-view-button">
        <button onClick={this.handleFavorites}> Add to Favorites</button>

        <button
          onClick={() => {
            this.props.history.push("/favorites");
          }}
        >
          View Favorites
        </button>
        </div>
        <div className="recipe-items">
          <span className="recipe-item-title"> Ingredients</span>
          <ul className="checkmark">
            {this.state.instructions.ingredientList.map((i) => {
              return (
                <li>
                  {i.measurement} of {i.ingredient}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="instructions">
          <span className="recipe-item-title">Instructions</span>
          <ol>
            {this.state.instructions.normalizedDirections.map((i) => {
              return <li>{i}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.instructions.length) {
      return null;
    }

    return (
      <div className="recipe-container">
        <div className="recipe-title">
          <h1>{this.state.instructions[0].strMeal}</h1>
        </div>
        <div className="recipe-banner">
          <div className="recipe-banner-column">
            <YouTube videoId="IO0issT0Rmc" />
          </div>
          <div className="recipe-banner-column">
            <SpeechRecognition />
          </div>
        </div>
        {this.state.instructions.length > 0 ? this.showRecipe() : null}
      </div>
    );
  }
}

export default withRouter(RecipePage);
