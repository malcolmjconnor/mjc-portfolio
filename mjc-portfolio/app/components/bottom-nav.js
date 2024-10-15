'use client';
import React from 'react';
import Link from 'next/link';
import useNavigation from '/hook/use-navigation';
//import useScrollingEffect from '/hook/use-scroll';
import { Icon } from '@iconify/react';

const BottomNav = () => {
  //const scrollDirection = useScrollingEffect(); // Use the custom hook
  //const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';
  const navClass = {};

  const {
    isHomeActive,
    isAboutActive,
    isProjectsActive,
    isContactActive,
  } = useNavigation();

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="#home" className="flex items-center relative">
          <Icon 
            icon={isHomeActive ? "mingcute:home-5-fill" : "mingcute:home-5-line"} 
            width="32" 
            height="32" 
            className={isHomeActive ? 'text-lime-500' : ''} // Apply lime color if active
          />
        </Link>
        <Link href="#about" className="flex items-center">
          <Icon 
            icon={isAboutActive ? "mingcute:user-3-fill" : "mingcute:user-3-line"} 
            width="32" 
            height="32" 
            className={`stroke-current stroke-5 ${isAboutActive ? 'text-lime-500' : ''}`} // Apply lime color if active
          />
        </Link>
        <Link href="#projects" className="flex items-center">
          <Icon 
            icon={isProjectsActive ? "mingcute:braces-fill" : "mingcute:braces-line"} 
            width="32" 
            height="32" 
            className={isProjectsActive ? 'text-lime-500' : ''} // Apply lime color if active
          />
        </Link>
        <Link href="#contact" className="flex items-center">
          <Icon 
            icon={isContactActive ? "ic:baseline-email" : "ic:outline-email"} 
            width="32" 
            height="32" 
            className={isContactActive ? 'text-lime-500' : ''} // Apply lime color if active
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
