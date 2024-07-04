import * as React from 'react';
import Image from 'next/image';

import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5';

import { MenuItem } from '@/interfaces';
import { SidebarMenuItem } from './sidebar-menu-item';
import { BiFootball } from 'react-icons/bi';
import { CiFootball } from 'react-icons/ci';
import { FaFootball } from 'react-icons/fa6';

const menuItems: MenuItem[] = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualization',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Client-side Counter',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Static Generation',
  },
];

export const Sidebar: React.FC = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px] left-0">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Next Dash</span>
          <span className="text-blue-500">14</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              alt="User's picture"
              className="rounded-full w-8 h-8"
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              width={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Bruce Wayne</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map(({ path, icon, title, subtitle }) => (
          <SidebarMenuItem key={path} path={path} icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  );
};
