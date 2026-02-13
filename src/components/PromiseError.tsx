import { getCharacter } from "@/services/api.service";
import { useApi } from "@/hooks/useApi";
import { type Character } from "@/models";
import { memo } from "react";

//https://pokeapi.co/api/v2/pokemon?limit=5offset=0
export const PromiseError = memo(({ id }: { id: number }) => {
  const { data, error, fetch, loading } = useApi<Character, number>(
    getCharacter,
    { autoFetch: true, params: id },
  );

  console.log("ok", " Error", error);

  const handleFetch = () => {
    fetch(id);
  };

  if (error)
    return (
      <div>
        <h2>upp error - {error.message}</h2>
      </div>
    );
  if (loading) return <p>cargandos ...</p>;
  return (
    <div>
      <h2>My Person is</h2>
      <button onClick={handleFetch}>click me</button>

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
});
