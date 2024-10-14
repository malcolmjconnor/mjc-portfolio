"use client"; // Mark this as a Client Component
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons from react-icons

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-3">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden focus:outline-none transition-transform duration-300"
        >
          {isMenuOpen ? (
            <HiX className={`w-6 h-6 text-gray-700 transition-transform duration-800 transform`} />
          ) : (
            <HiMenu className={`w-6 h-6 text-gray-700 transition-transform duration-800 transform`} />
          )}
        </button>
      </div>

      <div className={`md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col md:flex-row">
          <button 
            onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
            className="text-gray-700 hover:bg-black hover:text-white p-2 transform transition-transform duration-200 hover:scale-105 rounded focus:outline-none"
          >
            Home
          </button>
          <button 
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
            className="text-gray-700 hover:bg-black hover:text-white p-2 transform transition-transform duration-200 hover:scale-105 rounded focus:outline-none"
          >
            About
          </button>
          <button 
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
            className="text-gray-700 hover:bg-black hover:text-white p-2 transform transition-transform duration-200 hover:scale-105 rounded focus:outline-none"
          >
            Projects
          </button>
          <button 
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
            className="text-gray-700 hover:bg-black hover:text-white p-2 transform transition-transform duration-200 hover:scale-105 rounded focus:outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
