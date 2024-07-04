import { getPokemons } from '@/helpers/functions';
import { PokemonGrid } from './_components/pokemon-grid';

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
