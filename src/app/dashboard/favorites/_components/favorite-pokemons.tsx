'use client';

import { PokemonGrid } from '@/components/pokemons';
import { useAppSelector } from '@/stores';

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(store => Object.values(store.pokemons));

  return <PokemonGrid pokemons={favoritePokemons} />;
};
