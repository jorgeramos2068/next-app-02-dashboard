import { PokemonsResponse, SimplePokemon } from '@/interfaces';
import { PokemonGrid } from './_components/pokemon-grid';

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const pokemonResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then(res => res.json());
  const pokemons = pokemonResponse.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2) ?? '',
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function Page() {
  const pokemons = await getPokemons(151, 0);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons List <small>(Static)</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
