'use client';

import React from 'react';
import Link from 'next/link';
import useNavigation from '/hook/use-navigation';
import { Icon } from '@iconify/react';

const SideNav = () => {
  const {
    isHomeActive,
    isAboutActive,
    isProjectsActive,
    isContactActive,
  } = useNavigation();

  return (
    <div className="flex-col space-y-4 py-8 hidden sm:flex border-r border-gray-700 h-full w-[7.5rem] md:w-[15.625rem] md:items-start fixed bg-stone-900">
      <Link
        href="#home"
        className="flex flex-row space-x-1 items-center hover:bg-white/10 p-4 rounded-full duration-200"
      >
        <Icon icon="bi:twitter-x" width="38" height="38" />
      </Link>

      <Link
        href="#home"
        className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10 relative ${isHomeActive ? 'bg-white/10' : ''}`}
      >
        {isHomeActive ? (
          <Icon icon="mingcute:home-5-fill" width="38" height="38" />
        ) : (
          <Icon icon="mingcute:home-5-line" width="38" height="38" />
        )}
        <span className={`text-lg ${isHomeActive ? 'font-bold' : ''}`}>
          Home
        </span>
      </Link>

      <Link
        href="#about"
        className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10 ${isAboutActive ? 'bg-white/10' : ''}`}
      >
        {isAboutActive ? (
          <Icon icon="mingcute:user-3-fill" width="38" height="38" className="stroke-current stroke-5" />
        ) : (
          <Icon icon="mingcute:user-3-line" width="38" height="38" />
        )}
        <span className={`text-lg ${isAboutActive ? 'font-bold' : ''}`}>
          About
        </span>
      </Link>

      <Link
        href="#projects"
        className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10 ${isProjectsActive ? 'bg-white/10' : ''}`}
      >
        {isProjectsActive ? (
          <Icon icon="mingcute:braces-fill" width="38" height="38" />
        ) : (
          <Icon icon="mingcute:braces-line" width="38" height="38" />
        )}
        <span className={`text-lg ${isProjectsActive ? 'font-bold' : ''}`}>
          Projects
        </span>
      </Link>

      <Link
        href="#contact"
        className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10 ${isContactActive ? 'bg-white/10' : ''}`}
      >
        {isContactActive ? (
          <Icon icon="ic:baseline-email" width="38" height="38" />
        ) : (
          <Icon icon="ic:outline-email" width="38" height="38" />
        )}
        <span className={`text-lg ${isContactActive ? 'font-bold' : ''}`}>
          Contact
        </span>
      </Link>
    </div>
  );
};

export default SideNav;
