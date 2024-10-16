'use client';

import { useEffect, useState } from 'react';

const useNavigation = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isProjectsActive, setIsProjectsActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const sections = [
    { id: 'home', setActive: setIsHomeActive },
    { id: 'about', setActive: setIsAboutActive },
    { id: 'projects', setActive: setIsProjectsActive },
    { id: 'contact', setActive: setIsContactActive },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { offsetTop, clientHeight } = sectionElement;
          // Check if the scroll position is within the section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight) {
            section.setActive(true);
          } else {
            section.setActive(false);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check to set active state on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    isHomeActive,
    isAboutActive,
    isProjectsActive,
    isContactActive,
  };
};

export default useNavigation;
