import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/interfaces';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  '1': { id: '1', name: 'bulbasaur' },
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
