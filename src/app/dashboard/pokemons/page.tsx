import { PokemonGrid } from '@/components/pokemons';
import { getPokemons } from '@/helpers/functions';

export default async function Page() {
  const pokemons = await getPokemons(151, 0);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons List <small className="text-blue-500">(Static)</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
