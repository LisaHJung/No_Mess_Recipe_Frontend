import React from "react";
import ShowRecipes from "./ShowRecipes";

const SearchRecipes = (props) => {
  return (
    <div>
      <form onSubmit={props.fetchRecipes}>
        <input
          className="search-box"
          name="searchInput"
          onChange={props.captureInput}
          type="text"
          placeholder="Enter ingredient here"
        />
      </form>
      <ShowRecipes
        recipes={props.recipes}
        searchInput={props.searchInput}
        captureInput={props.captureInput}
        fetchRecipes={props.fetchRecipes}
        fetchRecipeInfo={props.fetchRecipeInfo}
      />
    </div>
  );
};

export default SearchRecipes;
