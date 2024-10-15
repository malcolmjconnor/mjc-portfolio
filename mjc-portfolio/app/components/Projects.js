export default function Projects() {
  return (
    <section id="projects" className="h-screen mb-8 sm:mb-8 lg:mb-12 overflow-y-auto">
      <h2 className="text-3xl font-semibold text-gray-200 mb-4 border-b-2 border-lime-500 pb-2">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="border p-4 rounded-lg">
          <img src="/images/project1.jpg" alt="UMSL Basketball Analysis" className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold mt-2">UMSL Basketball Analysis</h3>
          <p className="mt-1">A dynamic dashboard created for the UMSL men's basketball team that allows users to visualize player performance metrics through interactive scatterplots.</p>
          <a href="#" className="text-lime-500 mt-2 inline-block">View Project</a>
        </div>
        
        <div className="border p-4 rounded-lg">
          <img src="/images/project2.jpg" alt="Cyberwarfare" className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold mt-2">Cyberwarfare</h3>
          <p className="mt-1">An analysis project focused on understanding the implications of cyber warfare on national security.</p>
          <a href="#" className="text-lime-500 mt-2 inline-block">View Project</a>
        </div>
        
        <div className="border p-4 rounded-lg">
          <img src="/images/project3.jpg" alt="Artificial Intelligence" className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold mt-2">Artificial Intelligence</h3>
          <p className="mt-1">A project exploring various applications of AI in data analytics and how they enhance decision-making.</p>
          <a href="#" className="text-lime-500 mt-2 inline-block">View Project</a>
        </div>

        <div className="border p-4 rounded-lg">
          <img src="/images/python-project.jpg" alt="CyberDrip Blog" className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold mt-2">CyberDrip</h3>
          <p className="mt-1">A blog focused on exploring the landscape of technology from a data perspective.</p>
          <a href="#" className="text-lime-500 mt-2 inline-block">View Project</a>
        </div>
      </div>
    </section>
  );
}
