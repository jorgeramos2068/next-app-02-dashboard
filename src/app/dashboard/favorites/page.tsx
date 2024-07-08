import { Metadata } from 'next';

import { FavoritePokemons } from './_components/favorite-pokemons';

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'Description for favorites page',
};

export default async function Page() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorites Pokemons <small className="text-blue-500">(Global State)</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
