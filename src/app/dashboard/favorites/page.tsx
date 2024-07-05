import { getPokemons } from '@/helpers/functions';
import { PokemonGrid } from '../pokemons/_components/pokemon-grid';

export default async function Page() {
  const pokemons = await getPokemons(151, 0);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorites Pokemons <small className="text-blue-500">(Global State)</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
