import * as React from 'react';

import { SimplePokemon } from '@/interfaces';
import { PokemonCard } from './pokemon-card';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
