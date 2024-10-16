// app/components/Welcome.js
// export default function Welcome() {
//   return (
//     <section id="home" className="h-screen flex flex-col justify-center items-center">
//       <img src="/images/mlogo.svg" alt="Logo" className="w-80 h-auto mb-4 animate-pulse transition-transform transform hover:scale-110 duration-1000" />
//       <h2 className="text-3xl font-semibold text-center">
//         Welcome to my <span className="text-lime-500">portfolio</span>
//       </h2>
//       <p className="mt-2 text-center text-gray-600">
//         Exploring data science and information technology.
//       </p>
//     </section>
//   );
// }

import Link from 'next/link';

export default function Welcome() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <img src="/images/mlogo.svg" alt="Logo" className="w-80 h-auto mb-4 animate-pulse transition-transform transform hover:scale-110 duration-1000" />
      <h2 className="text-3xl font-semibold text-center">
        Welcome to my{' '}
        <Link href="#projects" className="text-lime-500">
          <span className="hover:scale-105 animate-pulse inline-block transform transition-transform duration-300">
            portfolio
          </span>
        </Link>
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Exploring data science and information technology.
      </p>
    </section>
  );
}




