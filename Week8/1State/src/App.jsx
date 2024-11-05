import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IntroToState from "./Components/IntroToState";
import FormState from "./Components/FormState";

function App() {
  //background and foreground color tracked by state
  //background starts at black foreground at white
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [foregroundColor, setForegroundColor] = useState("#ffffff");

  return (
    // styling the entire app using the state variables
    <div
      style={{ backgroundColor, color: foregroundColor, minHeight: "100vh" }}
    >
      <div>
        <label>Choose a background color</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <label>Choose a text color</label>
        <input
          type="color"
          value={foregroundColor}
          onChange={(e) => setForegroundColor(e.target.value)}
        />
      </div>
      <h1>useState</h1>
      <IntroToState />
      <FormState />
    </div>
  );
}

export default App;
