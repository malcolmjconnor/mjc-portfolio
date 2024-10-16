'use client';
import ProjectItems from './ProjectItems';

export default function Projects() {
  return (
    <section id="projects" className="h-screen mb-8 p-6 sm:mb-8 lg:mb-12 bg-lime-500 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-3xl font-semibold text-black mb-4 border-b-2 border-black pb-2">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ProjectItems
          title="UMSL Basketball Analysis"
          description="An interactive dashboard designed for the UMSL basketball team, enabling coaches and analysts to explore player performance metrics through dynamic scatterplots. This tool provides actionable insights for optimizing game strategies."
          link="https://umsl-bball.streamlit.app"
          imgSrc="/images/ball2.svg"
          altText="UMSL Basketball Analysis"
        />
        <ProjectItems
          title="Cybersecurity"
          description="A curated collection of insights and artifacts from Google's Cybersecurity Certificate, highlighting critical cybersecurity principles, real-world case studies, and best practices for safeguarding digital infrastructure."
          link="https://drive.google.com/file/d/1DxKuxnoIp5JFhC2Gdv4Pm2qyNVS5M_Wv"
          imgSrc="/images/cyber2.svg"
          altText="Cybersecurity"
        />
        <ProjectItems
          title="CyberDrip"
          description="An in-depth blog exploring the evolving landscape of technology through the lens of data. Topics include emerging trends, practical use cases, and thought-provoking discussions on the intersection of data and tech innovation."
          link="https://medium.com/@cyberdrip"
          imgSrc="/images/blog2.svg"
          altText="CyberDrip Blog"
        />
        <ProjectItems
          title="Artificial Intelligence"
          description="Project coming soon"
          // link=""
          imgSrc="/images/bot2.svg"
          altText="Artificial Intelligence"
        />
      </div>
    </section>
  );
}
