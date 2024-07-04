import { notFound } from 'next/navigation';

import { Pokemon, PokemonsResponse, SimplePokemon } from '@/interfaces';

export const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const pokemonResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then(res => res.json());
  const pokemons = pokemonResponse.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2) ?? '',
    name: pokemon.name,
  }));

  return pokemons;
};

export const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache',
    }).then(res => res.json());
    return pokemon;
  } catch (error) {
    notFound();
  }
};
