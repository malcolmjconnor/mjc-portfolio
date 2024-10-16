'use client';

import React from 'react';
import useNavigation from '/hook/use-navigation';
import NavLink from './NavLink';

const SideNav = () => {
  const {
    isHomeActive,
    isAboutActive,
    isProjectsActive,
    isContactActive,
  } = useNavigation();

  return (
    <div className="flex-col space-y-4 py-8 hidden sm:flex border-r border-gray-400 h-full w-[11.5rem] md:w-[13.625rem] md:items-start fixed bg-stone-900">
      <div className="flex flex-row space-x-1 items-center p-4 duration-200 font-bold text-lime-500 hover:text-slate-200">
        <p>{"{malcolmjconnor}"}</p>
      </div>

      <NavLink
        href="#home"
        isActive={isHomeActive}
        iconFilled="mingcute:home-5-fill"
        iconOutlined="mingcute:home-5-line"
        text="Home"
      />

      <NavLink
        href="#projects"
        isActive={isProjectsActive}
        iconFilled="mingcute:braces-fill"
        iconOutlined="mingcute:braces-line"
        text="Projects"
      />

      <NavLink
        href="#about"
        isActive={isAboutActive}
        iconFilled="mingcute:user-3-fill"
        iconOutlined="mingcute:user-3-line"
        text="About"
      />

      <NavLink
        href="#contact"
        isActive={isContactActive}
        iconFilled="ic:baseline-email"
        iconOutlined="ic:outline-email"
        text="Contact"
      />
    </div>
  );
};

export default SideNav;


