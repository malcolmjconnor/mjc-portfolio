// app/page.js
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col pt-4 sm:ml-[7.5rem] md:ml-[13.625rem] sm:border-r sm:border-zinc-700 pb-[1.25rem] px-[1rem] h-full">
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
