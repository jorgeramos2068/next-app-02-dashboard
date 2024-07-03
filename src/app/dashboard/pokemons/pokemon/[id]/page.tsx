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

export default async function Page({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon: {params.id}</h1>
    </div>
  );
}
