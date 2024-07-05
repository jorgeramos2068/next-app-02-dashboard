'use client';

import * as React from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { decrement, increment, initState } from '@/stores/counter/counter-slice';

interface Props {
  initialValue?: number;
}

export const CartCounter: React.FC<Props> = ({ initialValue = 0 }) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrement = (): void => {
    dispatch(increment());
  };

  const handleDecrement = (): void => {
    dispatch(decrement());
  };

  React.useEffect(() => {
    dispatch(initState(initialValue));
  }, [dispatch, initialValue]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p1- rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p1- rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={handleIncrement}
        >
          +1
        </button>
      </div>
    </>
  );
};
