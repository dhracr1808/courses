import { getCharacter } from "@/services/api.service";
import { useApi } from "@/hooks/useApi";
import { type Character } from "@/models";

//https://pokeapi.co/api/v2/pokemon?limit=5offset=0
export const PromiseError = ({ id }: { id: string }) => {
  const { loading, data, error, fetch } = useApi<Character, number>(
    getCharacter,
  );

  if (error) throw new Error("fallo la peticion");
  if (loading) return <p>cargandos ...</p>;
  return (
    <div>
      <h2>My Person is</h2>
      <button onClick={() => fetch(1)}>click me</button>

      {data ? (
        <div>
          <h3>
            {data.name} - {data.gender}
          </h3>
          <img src={data.image} alt={data.name} />
        </div>
      ) : (
        <p>cargango... </p>
      )}
    </div>
  );
};
