export default function Projects() {
    return (
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-lg">
            <img src="/images/project1.jpg" alt="UMSL Basketball Analysis" className="w-full h-32 object-cover rounded" />
            <h3 className="font-bold mt-2">UMSL Basketball Analysis</h3>
            <p className="mt-1">A dynamic dashboard created for the UMSL men's basketball team that allows users to visualize player performance metrics through interactive scatterplots.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a>
          </div>
          
          <div className="border p-4 rounded-lg">
            <img src="/images/project2.jpg" alt="Cyberwarfare" className="w-full h-32 object-cover rounded" />
            <h3 className="font-bold mt-2">Cyberwarfare</h3>
            <p className="mt-1">An analysis project focused on understanding the implications of cyber warfare on national security.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a>
          </div>
          
          <div className="border p-4 rounded-lg">
            <img src="/images/project3.jpg" alt="Artificial Intelligence" className="w-full h-32 object-cover rounded" />
            <h3 className="font-bold mt-2">Artificial Intelligence</h3>
            <p className="mt-1">A project exploring various applications of AI in data analytics and how they enhance decision-making.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a>
          </div>
  
          <div className="border p-4 rounded-lg">
            <img src="/images/python-project.jpg" alt="Python Project" className="w-full h-32 object-cover rounded" />
            <h3 className="font-bold mt-2">Python Project</h3>
            <p className="mt-1">A project focused on building data analysis tools using Python and various libraries like Pandas and Matplotlib.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a>
          </div>
        </div>
      </section>
    );
  }
  