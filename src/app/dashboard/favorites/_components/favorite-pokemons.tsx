'use client';

import * as React from 'react';

import { PokemonGrid } from '@/components/pokemons';
import { useAppSelector } from '@/stores';
import { NoFavorites } from './no-favorites';

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(store => Object.values(store.pokemons));
  const [pokemons, setPokemons] = React.useState(favoritePokemons);

  return <>{pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />}</>;
};
