'use client';
import ProjectItems from './ProjectItems';

export default function Projects() {
  return (
    <section id="projects" className="h-screen mb-8 p-6 sm:mb-8 lg:mb-12 bg-lime-500 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-3xl font-semibold text-black mb-4 border-b-2 border-black pb-2">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ProjectItems
          title="UMSL Basketball Analysis"
          description="A dynamic dashboard created for the UMSL men's basketball team that allows users to visualize player performance metrics through interactive scatterplots."
          link="https://umsl-bball.streamlit.app"
          imgSrc="/images/ball2.svg"
          altText="UMSL Basketball Analysis"
        />
        <ProjectItems
          title="Cybersecurity"
          description="An analysis project focused on understanding the implications of cyber warfare on national security."
          link="https://drive.google.com/file/d/1DxKuxnoIp5JFhC2Gdv4Pm2qyNVS5M_Wv"
          imgSrc="/images/cyber2.svg"
          altText="Cybersecurity"
        />
        <ProjectItems
          title="Artificial Intelligence"
          description="A project exploring various applications of AI in data analytics and how they enhance decision-making."
          link="URL_TO_ARTIFICIAL_INTELLIGENCE"
          imgSrc="/images/bot2.svg"
          altText="Artificial Intelligence"
        />
        <ProjectItems
          title="CyberDrip"
          description="A blog focused on exploring the landscape of technology from a data perspective."
          link="https://medium.com/@cyberdrip"
          imgSrc="/images/blog2.svg"
          altText="CyberDrip Blog"
        />
      </div>
    </section>
  );
}
