export default function About() {
  return (
    <section id="about" className="h-screen mb-8 p-6 bg-gray-100 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4 border-b-2 border-lime-500 pb-2">About</h2>
      <p className="mt-2 text-gray-700 leading-relaxed">
        I am a data analyst with a passion for sports and technology. I enjoy exploring statistics and creating visualizations that make complex data accessible. My journey has led me to work with various tools and technologies, and I am always eager to learn more and improve my skills.
      </p>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        {/* Grid Item 1 */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <img src="/images/icon2.svg" alt="Icon 2" className="w-16 h-16 mb-2" />
          <h3 className="text-lg font-bold text-lime-500">Python</h3>
          <p className="text-center text-gray-700">Proficient in Python for data analysis and visualization.</p>
        </div>
        {/* Grid Item 2 */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <img src="/images/icon3.svg" alt="Icon 3" className="w-16 h-16 mb-2" />
          <h3 className="text-lg font-bold text-lime-500">Javascript</h3>
          <p className="text-center text-gray-700">Experience using front-end libraries.</p>
        </div>
            {/* Grid Item 3 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <img src="/images/icon3.svg" alt="Icon 3" className="w-16 h-16 mb-2" />
          <h3 className="text-lg font-bold text-lime-500">SQL</h3>
          <p className="text-center text-gray-700">Experienced in creating interactive dashboards and reports.</p>
        </div>
            {/* Grid Item 4 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <img src="/images/icon3.svg" alt="Icon 3" className="w-16 h-16 mb-2" />
          <h3 className="text-lg font-bold text-lime-500">Linux</h3>
          <p className="text-center text-gray-700">Experienced in creating interactive dashboards and reports.</p>
        </div>
            {/* Grid Item 5 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <img src="/images/icon3.svg" alt="Icon 3" className="w-16 h-16 mb-2" />
          <h3 className="text-lg font-bold text-lime-500">HTML</h3>
          <p className="text-center text-gray-700">Experienced in creating interactive dashboards and reports.</p>
        </div>
        {/* Grid Item 6 */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <img src="/images/icon3.svg" alt="Icon 3" className="w-16 h-16 mb-2" />
          <h3 className="text-lg font-bold text-lime-500">CSS</h3>
          <p className="text-center text-gray-700">Experienced in creating interactive dashboards and reports.</p>
        </div>
        {/* Add more grid items as needed */}
      </div>
    </section>
  );
}
