import React from 'react';

function App() {
  const skills = ["React", "Node JS", "Express JS", "MySQL", "Loopback API", "Python", "Tailwind CSS"];
  
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Atharv Ingavale
        </h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          MERN Stack Developer
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          Building <span className="text-blue-500">Scalable</span> Architecture & Intuitive UI/UX. [cite: 19]
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Associate MERN Developer at Comtranse Technology. [cite: 23] Focused on high-quality, 
          efficient solutions and robust backend systems. [cite: 19]
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-blue-900/40">
            View My Work
          </a>
          <button className="border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition">
            Contact: 887-914-2527 [cite: 3]
          </button>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="h-px w-12 bg-blue-500"></span> Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition group">
            <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400">Catering Website [cite: 24]</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Fully responsive platform with digital cards for interaction and ordering. [cite: 24]</p>
            <div className="flex gap-2 font-mono text-[10px] text-blue-400"><span>REACT</span> <span>UI/UX</span></div>
          </div>
          {/* Project 2 */}
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition group">
            <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400">Admin Dashboard [cite: 26]</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Real-time data management using Node.js, Express, and MySQL. [cite: 26, 27]</p>
            <div className="flex gap-2 font-mono text-[10px] text-blue-400"><span>NODE JS</span> <span>MYSQL</span></div>
          </div>
          {/* Project 3 */}
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition group">
            <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400">IT Corporate Site [cite: 25]</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Modern, accessible design built with HTML, CSS, and Bootstrap. [cite: 25]</p>
            <div className="flex gap-2 font-mono text-[10px] text-blue-400"><span>BOOTSTRAP</span></div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="py-24 bg-slate-800/20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Expertise [cite: 16]</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-xl text-sm hover:border-blue-500 transition shadow-sm">
                  {skill} [cite: 33-39]
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Education [cite: 9]</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-6">
                <p className="text-blue-400 font-bold">2020 - 2023 [cite: 10]</p>
                <p className="text-white font-semibold">BE - Mumbai University [cite: 11]</p>
                <p className="text-slate-500 text-sm">Chhatrapati Shivaji Maharaj Institute of Tech. [cite: 11]</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-6 text-slate-400">
                <p className="font-bold text-xs">2016 - 2020 [cite: 12]</p>
                <p className="text-sm font-semibold">Diploma in Computer Engineering [cite: 14]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>Ghansoli, Navi Mumbai - 400701 [cite: 7, 8]</p>
        <p className="mt-2">atharvingavale123@gmail.com [cite: 5]</p>
      </footer>
    </div>
  );
}

export default App;