'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MenuItem } from '@/interfaces';

export const SidebarMenuItem: React.FC<MenuItem> = ({ path, icon, title, subtitle }) => {
  const currentPath = usePathname();

  return (
    <Link
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150 ${
        currentPath === path ? ' bg-blue-800' : ''
      }`}
      href={path}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  );
};
