import React from "react";
import ShowRecipes from "./ShowRecipes";

const SearchRecipes = (props) => {
  return (
    <div>
      <form onSubmit={props.fetchRecipes}>
        <input
          className="search-box"
          name="searchInput"
          onChange={props.storeRecipes}
          type="text"
          placeholder="Search Recipes Here"
        />
      </form>
      <ShowRecipes
        recipes={props.recipes}
        searchInput={props.searchInput}
        storeRecipes={props.storeRecipes}
        fetchRecipes={props.fetchRecipes}
      />
    </div>
  );
};

export default SearchRecipes;
