import "./App.css";
import FilterInput from "./components/FilterInput";
import PokemonTable from "./components/PokemanTable";

function App() {

  return (
    <div className="App">
      <FilterInput />
      <PokemonTable />
    </div>
  );
}

export default App;
