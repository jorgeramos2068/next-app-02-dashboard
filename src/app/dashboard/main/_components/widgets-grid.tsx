'use client';

import * as React from 'react';

import { IoCafeOutline } from 'react-icons/io5';

import { SimpleWidget } from '@/components/shared';
import { useAppSelector } from '@/stores';

export const WidgetsGrid: React.FC = () => {
  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        subtitle="Counter"
        label="Counter"
        icon={<IoCafeOutline size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
