export interface DataPokemon {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  img: string;
}

export const pokemonAdapter = (pokemon: DataPokemon | null): Pokemon[] => {
  if (!pokemon) return [];
  return pokemon.results.map((item, i) => ({
    ...item,
    id: i + 1,
    name: item.name.toUpperCase(),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`,
  }));
};
