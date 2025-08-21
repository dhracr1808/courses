import { useEffect, useState } from "react";

import "./App.css";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

function App() {
  const [data, setData] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue);
    console.info(loadingValue);
  };

  const fechtData = async () => {
    try {
      consoleLoader(true);
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Error fetching data");
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      setError(error as string);
      console.log("Error fetching data: ", error);
    } finally {
      consoleLoader(false);
    }
  };

  // comincarnos con un endpoint
  // operacion asincronas
  // parametros de entrada
  // context
  useEffect(() => {
    fechtData();
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Upps! sucedio un error: {error}</p>;
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
