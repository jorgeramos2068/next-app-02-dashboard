export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
}
