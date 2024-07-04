import { Metadata } from 'next';

import { Pokemon } from '@/interfaces';

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  }).then(res => res.json());
  return pokemon;
};

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `Pokemons | ${name}`,
    description: `Page for ${name} with id = ${id}`,
  };
}

export default async function Page({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon: {pokemon.name}</h1>
    </div>
  );
}
