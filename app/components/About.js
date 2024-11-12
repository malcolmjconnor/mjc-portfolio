'use client';
import { faPython, faJsSquare, faLinux, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import from the solid icons package
import AboutItems from './AboutItems';

export default function About() {
  return (
    <section id="about" className="mb-8 p-6 bg-white rounded-lg shadow-md pt-14">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4 border-b-2 border-lime-500 pb-2">About</h2>
      <p className="mt-2 text-black leading-relaxed">
      I am a data analytics specialist with a passion for technology and a proven track record in transforming complex data into accessible insights. I excel at utilizing various tools that drive informed decision-making. My journey has equipped me with a diverse skill set, and I am committed to continuous learning and improvement, always seeking to enhance my expertise in the ever-evolving fields of data analytics and technology. Some of the programming tools I have worked with include:
      </p>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        <AboutItems
          icon={faPython}
          iconClass="text-slate-900"
          title="Python"
          description="Proficient in Python for data analysis and visualization."
        />
        <AboutItems
          icon={faJsSquare}
          iconClass="text-slate-900"
          title="JavaScript"
          description="Experience using front-end libraries like React and Next for web development."
        />
        <AboutItems
          icon={faDatabase}
          iconClass="text-slate-900"
          title="SQL"
          description="Proficient in creating complex queries to extract insights from databases."
        />
        <AboutItems
          icon={faLinux}
          iconClass="text-slate-900"
          title="Linux"
          description="Proficient in using Linux for development and other tech hobbies like Cybersecurity and IoT."
        />
        <AboutItems
          icon={faHtml5}
          iconClass="text-slate-900"
          title="HTML"
          description="Experienced in building responsive web pages."
        />
        <AboutItems
          icon={faCss3Alt}
          iconClass="text-slate-900"
          title="CSS"
          description="Experienced in designing visually appealing websites."
        />
      </div>
    </section>
  );
}
