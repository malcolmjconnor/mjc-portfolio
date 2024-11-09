// app/page.js
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
