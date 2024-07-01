import Image from 'next/image';

import { PokemonsResponse, SimplePokemon } from '@/interfaces';

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
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map(({ id, name }) => (
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
}
