import MyCard from "./Components/MyCard";
import CardStyledInComponent from "./Components/CardStyledInComponent";
import CardStyledWithProps from "./Components/CardStyledWithProps";
import "./App.css";
function App() {
  return (
    <div>
      <h1>App</h1>
      <MyCard title={"Card Title"} description="Card Description" />
      <CardStyledInComponent />
      <CardStyledWithProps
        backgroundColor="darkgreen"
        titleColor="lightseagreen"
        descriptionColor="mintcream"
        buttonColor="forestgreen"
      />
    </div>
  );
}

export default App;
