'use client';
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <section id="contact" className="h-screen mb-8 bg-lime-600 p-6 flex flex-col justify-center items-center shadow-lg text-center">
      <h2 className="text-5xl font-bold text-zinc-800">Let's Work Together</h2>
      
      <div className="mt-6 flex space-x-6">
        {/* Email Button */}
        <button 
          onClick={() => window.location.href = 'mailto:malcolmjconnor01@gmail.com'} 
          className="flex flex-col items-center hover:bg-zinc-800 rounded p-2 transition duration-300"
        >
          <Icon icon="ic:baseline-email" width={60} height={60} className="transition duration-300 hover:text-lime-500 hover:scale-110" />
        </button>

        {/* LinkedIn Button */}
        <button 
          onClick={() => window.open('https://www.linkedin.com/in/malcolmjconnor', '_blank')} 
          className="flex flex-col items-center hover:bg-zinc-800 rounded p-2 transition duration-300"
        >
          <Icon icon="akar-icons:linkedin-fill" width={60} height={60} className="transition duration-300 hover:text-lime-500 hover:scale-110" />
        </button>

        {/* GitHub Button */}
        <button 
          onClick={() => window.open('https://github.com/malcolmjconnor', '_blank')} 
          className="flex flex-col items-center hover:bg-zinc-800 rounded p-2 transition duration-300"
        >
          <Icon icon="akar-icons:github-fill" width={60} height={60} className="transition duration-300 hover:text-lime-500 hover:scale-110" />
        </button>
      </div>
    </section>
  );
}
