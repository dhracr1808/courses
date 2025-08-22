import "./App.css";
import { useFetch } from "./hooks";
import { type DataPokemon, pokemonAdapter } from "./adapter/pokemon";
import { ListImage, Button } from "./components";
import { useState } from "react";
const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

function App() {
  const { data, loading, error } = useFetch<DataPokemon>(URL);
  const [showData, setShowData] = useState(true);
  const toggleData = () => {
    setShowData(!showData);
  };
  if (loading) return <p>loading...</p>;
  if (error) return <p>Upps! sucedio un error: {error.message}</p>;
  return (
    <>
      <Button label="mostrar componente" parentMethod={toggleData} />
      {showData && (
        <div>
          <ul>
            {pokemonAdapter(data).map((item) => (
              <ListImage key={item.name} {...item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
