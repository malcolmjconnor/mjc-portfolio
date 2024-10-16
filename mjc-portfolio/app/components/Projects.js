'use client';
export default function Projects() {
  return (
    <section id="projects" className="h-screen mb-8 sm:mb-8 lg:mb-12 overflow-y-auto">
      <h2 className="text-3xl font-semibold text-lime-500 mb-4 border-b-2 border-gray-200 pb-2">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="border p-4 rounded-lg transform transition-all hover:scale-105 hover:border-none">
          <a href="https://umsl-bball.streamlit.app" target="_blank" rel="noopener noreferrer">
            <img src="/images/ball.svg" alt="UMSL Basketball Analysis" className="w-full h-32 object-cover rounded mb-2" />
          </a>
          <h3 className="font-bold mt-2 text-lime-500">UMSL Basketball Analysis</h3>
          <p className="mt-1">A dynamic dashboard created for the UMSL men's basketball team that allows users to visualize player performance metrics through interactive scatterplots.</p>
        </div>
        
        <div className="border p-4 rounded-lg transform transition-all hover:scale-105 hover:border-none">
          <a href="https://drive.google.com/file/d/1DxKuxnoIp5JFhC2Gdv4Pm2qyNVS5M_Wv" target="_blank" rel="noopener noreferrer">
            <img src="/images/cyber.svg" alt="Cybersecurity" className="w-full h-32 object-cover rounded mb-2" />
          </a>
          <h3 className="font-bold mt-2 text-lime-500">Cybersecurity</h3>
          <p className="mt-1">An analysis project focused on understanding the implications of cyber warfare on national security.</p>
        </div>
        
        <div className="border p-4 rounded-lg transform transition-all hover:scale-105 hover:border-none">
          <a href="URL_TO_ARTIFICIAL_INTELLIGENCE" target="_blank" rel="noopener noreferrer">
            <img src="/images/bot.svg" alt="Artificial Intelligence" className="w-full h-32 object-cover rounded mb-2" />
          </a>
          <h3 className="font-bold mt-2 text-lime-500">Artificial Intelligence</h3>
          <p className="mt-1">A project exploring various applications of AI in data analytics and how they enhance decision-making.</p>
        </div>

        <div className="border p-4 rounded-lg transform transition-all hover:scale-105 hover:border-none">
          <a href="https://medium.com/@cyberdrip" target="_blank" rel="noopener noreferrer">
            <img src="/images/blog.svg" alt="CyberDrip Blog" className="w-full h-32 object-cover rounded mb-2" />
          </a>
          <h3 className="font-bold mt-2 text-lime-500">CyberDrip</h3>
          <p className="mt-1">A blog focused on exploring the landscape of technology from a data perspective.</p>
        </div>
      </div>
    </section>
  );
}
