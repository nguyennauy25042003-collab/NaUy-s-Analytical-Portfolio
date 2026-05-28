import { Binary, ShieldCheck, Database, LayoutGrid } from 'lucide-react';

export default function FinancialModelling() {
  const models = [
    {
      title: 'Discounted Cash Flow (DCF)',
      description: 'Advanced multi-scenario valuation models incorporating detailed revenue drivers, dynamic WACC structures, and sensitivity analysis grid layouts.',
      metrics: ['Dynamic WACC', 'Sensitivity Matrix', 'FCFF/FCFE Drivers'],
    },
    {
      title: 'M&A Merger Model',
      description: 'Accretion/dilution analysis, purchase price allocation (PPA), and structural synergy estimation models built for robust strategic evaluation.',
      metrics: ['Accretion/Dilution', 'Synergy Valuation', 'PPA Frameworks'],
    },
    {
      title: 'Leveraged Buyout (LBO)',
      description: 'Complex debt-waterfall scheduling, multi-tranche financing structures, and comprehensive IRR/MOIC sensitivity returns forecasting tables.',
      metrics: ['Debt Waterfall', 'IRR Sensitivity', 'Returns Forecasting'],
    },
  ];

  return (
    <section id="modelling" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Binary className="text-cyan-400" size={20} />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">QUANTITATIVE ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Financial Modelling <span className="text-gray-400 font-light">Capabilities</span>
        </h2>

        {/* Models Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/80 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-lg font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                {model.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Technical badges container */}
              <div className="pt-4 border-t border-slate-800/60">
                <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase flex items-center gap-1.5">
                  <Database size={10} className="text-cyan-400/60" />
                  Core Components
                </p>
                <div className="flex flex-wrap gap-2">
                  {model.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-slate-900/80 border border-slate-800 rounded-md text-gray-300 font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner at the bottom */}
        <div className="mt-12 p-6 bg-slate-950/40 border border-slate-800/60 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LayoutGrid size={22} className="text-cyan-400 shrink-0" />
            <p className="text-sm text-gray-400 text-center sm:text-left leading-relaxed">
              Models are engineered primarily using specialized structural architectures in <strong className="text-white">Microsoft Excel</strong> and automated using <strong className="text-white">Python</strong> frameworks.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 border border-cyan-400/20 rounded-lg shrink-0">
            <ShieldCheck size={14} />
            Institutional Grade
          </div>
        </div>
      </div>
    </section>
  );
}
