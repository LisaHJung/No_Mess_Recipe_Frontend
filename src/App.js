import React from "react";
// import * as tf from '@tensorflow/tfjs';
// import * as speechCommands from '@tensorflow-models/speech-commands'
import "./App.css";
import RecipesLogic from "./containers/RecipesLogic";
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="App">
      {/* <BackgroundVideo /> */}
      <RecipesLogic />
    </div>
  );
}

export default App