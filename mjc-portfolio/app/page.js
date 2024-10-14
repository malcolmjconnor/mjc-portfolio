// app/page.js
import NavBar from './components/NavBar';
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="px-4 py-8">
      <NavBar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
