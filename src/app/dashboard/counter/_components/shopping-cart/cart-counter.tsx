'use client';

import * as React from 'react';

export const CartCounter: React.FC = () => {
  const [counter, setCounter] = React.useState(10);

  const handleIncrement = (): void => {
    setCounter(previous => previous + 1);
  };

  const handleDecrement = (): void => {
    setCounter(previous => {
      const newValue = previous - 1;
      return newValue >= 0 ? newValue : 0;
    });
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>
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
