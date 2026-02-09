import { useEffect, useState } from "react";

export const PromiseError = () => {
  const [data, setData] = useState<{ name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        throw new Error("la promesa se fue a la uppp");
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        setData(data.results);
      } catch (error) {
        setError("error");
      }
    };
    getData("https://pokeapi.co/api/v2/pokemon?limit=5offset=0");
  }, []);
  if (error) throw new Error("fallo la peticion");
  return (
    <div>
      <h2>PromiseError</h2>
      <ul>
        {data.map((ele) => (
          <li key={ele.name}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
};
