import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-slate-800 shadow-lg border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400 tracking-tight">Atharv Ingavale</h1>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition cursor-pointer">About</a>
          <a href="#experience" className="hover:text-blue-400 transition cursor-pointer">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition cursor-pointer">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-28 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-blue-500/20">
          ASSOCIATE MERN STACK DEVELOPER
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
          Building <span className="text-blue-500">Scalable</span> Architecture <br /> 
          & Intuitive UI/UX.
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed">
          Associate MERN Developer at Comtranse Technology. Passionate about 
          crafting high-performance web applications and robust backend systems.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            View My Projects
          </button>
          <button className="border border-slate-600 hover:bg-slate-800 text-slate-300 px-10 py-4 rounded-xl font-bold transition-all active:scale-95">
            Call: 8879142527
          </button>
        </div>
      </header>

      {/* Quick Skills Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="group">
            <p className="text-4xl font-black text-blue-500 group-hover:scale-110 transition">BE</p>
            <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">Mumbai Univ.</p>
          </div>
          <div className="group">
            <p className="text-4xl font-black text-blue-500 group-hover:scale-110 transition">React</p>
            <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">Frontend</p>
          </div>
          <div className="group">
            <p className="text-4xl font-black text-blue-500 group-hover:scale-110 transition">NodeJS</p>
            <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">Backend</p>
          </div>
          <div className="group">
            <p className="text-4xl font-black text-blue-500 group-hover:scale-110 transition">MySQL</p>
            <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">Database</p>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="bg-slate-800/30 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Professional Background</h3>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-left">
            <h4 className="text-xl font-bold text-blue-400">Associate MERN Developer</h4>
            <p className="text-gray-300 font-medium">Comtranse Technology PVT LTD</p>
            <ul className="mt-4 text-gray-400 space-y-2 list-disc list-inside">
              <li>Developing interactive Catering Management interfaces.</li>
              <li>Managing complex Admin Dashboards using Node.js and MySQL.</li>
              <li>Implementing Loopback API and Python-based logic for business systems.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;