import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/interfaces';

interface PokemonsState {
  favorites: PokemonStateFavorites;
}

interface PokemonStateFavorites {
  [key: string]: SimplePokemon;
}

// Previos function to get the initial state
// const getInitialState = (): PokemonsState => {
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites;
// };

const initialState: PokemonsState = {
  favorites: {},
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    loadFavorites(state, action: PayloadAction<PokemonStateFavorites>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFavorites, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
