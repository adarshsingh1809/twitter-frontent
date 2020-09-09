import React from "react";
import "./App.css";
import Inputform from "./components/inputForm/inputform.component";
import TweetsContainer from "./components/tweetsContainer/tweetsContainer.component";

function App() {
  return (
    <div className="App">
      <Inputform />
      <TweetsContainer />
    </div>
  );
}

export default App;
