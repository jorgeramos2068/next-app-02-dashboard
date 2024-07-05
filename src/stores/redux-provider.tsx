'use client';

import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '.';

interface Props {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
