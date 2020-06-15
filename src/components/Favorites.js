import React from "react";

function Favorites(props) {
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        {" "}
        Main page
      </button>
    </div>
  );
}
export default Favorites;
