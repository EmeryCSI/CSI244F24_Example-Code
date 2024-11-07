import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IntroToEffect from "./Components/IntroToEffect";
import LocalStorage from "./Components/LocalStorage";
import PlaceholderAPI from "./Components/PlaceHolderAPI";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IntroToEffect />
      <LocalStorage />
      <PlaceholderAPI />
    </>
  );
}

export default App;
