import "./App.css";
import CenteredCard from "./components/CenteredCard";
function App() {
  return (
    <div className="App">
      <CenteredCard children={"Card 1"} />
      <CenteredCard children={"Card 2"} />
      <CenteredCard children={"Card 3"} />
      <CenteredCard children={"Card 4"} />
      <CenteredCard children={"Card 5"} />
    </div>
  );
}

export default App;
