'use client';

import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '.';
import { loadFavorites } from './slices/pokemons/pokemons.slice';

interface Props {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<Props> = ({ children }) => {
  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch(loadFavorites(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
