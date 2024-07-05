import * as React from 'react';
import { Metadata } from 'next';

import { CartCounter } from '@/app/dashboard/counter/_components/shopping-cart';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Description for Shopping Cart Dashboard',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in your cart</span>
      <CartCounter initialValue={20} />
    </div>
  );
}
