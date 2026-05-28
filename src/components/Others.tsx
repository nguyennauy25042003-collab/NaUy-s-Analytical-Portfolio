import { Layers, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Others() {
  const projects = [
    {
      title: "Master's Thesis: Car Loan Activities at Asia Commercial Bank (ACB)",
      category: 'Academic Research',
      icon: <GraduationCap className="text-cyan-400" size={22} />,
      description: 'An in-depth empirical study analyzing credit underwriting standards, risk management frameworks, and growth drivers within the automotive financing segment of ACB.',
      tags: ['Credit Analysis', 'Risk Management', 'Commercial Banking'],
      link: '#',
    },
    {
      title: 'Macro & Sector Deep Dives',
      category: 'Market Intelligence',
      icon: <BookOpen className="text-cyan-400" size={22} />,
      description: 'Independent research papers exploring Vietnam’s macroeconomic indicators, central bank monetary policy shifts, and systemic banking liquidity.',
      tags: ['Monetary Policy', 'Banking Sector', 'Macro Economics'],
      link: '#',
    }
  ];

  return (
    <section id="others" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Layers className="text-cyan-400" size={20} />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">ADDITIONAL INITIATIVES</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Other Research & <span className="text-gray-400 font-light">Projects</span>
        </h2>

        {/* Projects Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400/80 bg-cyan-500/5 px-2.5 py-1 border border-cyan-400/10 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-gray-100 group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags and Link Footer */}
              <div className="space-y-4 pt-4 border-t border-slate-900">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 bg-slate-900 border border-slate-800 text-gray-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 group-hover:text-cyan-400 transition-colors pt-2"
                >
                  <span>Access Research Document</span>
                  <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
