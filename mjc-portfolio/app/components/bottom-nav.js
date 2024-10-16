'use client';
import React from 'react';
import NavLink from './NavLink';
import useNavigation from '/hook/use-navigation';

const BottomNav = () => {
  const { isHomeActive, isAboutActive, isProjectsActive, isContactActive } = useNavigation();

  return (
    <div className="fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-stone-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden">
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <NavLink
          href="#home"
          isActive={isHomeActive}
          iconFilled="mingcute:home-5-fill"
          iconOutlined="mingcute:home-5-line"
        />
        <NavLink
          href="#projects"
          isActive={isProjectsActive}
          iconFilled="mingcute:braces-fill"
          iconOutlined="mingcute:braces-line"
        />
        <NavLink
          href="#about"
          isActive={isAboutActive}
          iconFilled="mingcute:user-3-fill"
          iconOutlined="mingcute:user-3-line"
        />
        <NavLink
          href="#contact"
          isActive={isContactActive}
          iconFilled="ic:baseline-email"
          iconOutlined="ic:outline-email"
        />
      </div>
    </div>
  );
};

export default BottomNav;
