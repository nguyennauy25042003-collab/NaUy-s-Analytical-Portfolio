import { FileText, Award, Target, Compass } from 'lucide-react';

export default function CoverLetter() {
  const pillars = [
    {
      icon: <Target className="text-cyan-400" size={20} />,
      title: 'Strategic Alignment',
      text: 'Deeply committed to driving rigorous bottom-up equity research and institutional-grade financial analysis that uncovers long-term market value.'
    },
    {
      icon: <Compass className="text-cyan-400" size={20} />,
      title: 'Analytical Rigor',
      text: 'Leveraging solid academic foundations in advanced financial banking frameworks combined with a metrics-driven approach to corporate evaluation.'
    },
    {
      icon: <Award className="text-cyan-400" size={20} />,
      title: 'Value Creation',
      text: 'Focused on transforming raw fundamental data into high-conviction investment ideas and actionable financial models to support strategic decision-making.'
    }
  ];

  return (
    <section id="cover-letter" className="py-20 px-6 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <FileText className="text-cyan-400" size={20} />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">PROFESSIONAL ETHOS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Cover Letter <span className="text-gray-400 font-light">Highlights</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Letter Body Container */}
          <div className="lg:col-span-2 bg-slate-950/60 border border-slate-800 rounded-xl p-8 space-y-6 text-gray-300 shadow-xl relative">
            <div className="absolute top-4 right-6 text-[10px] font-mono text-slate-600 tracking-wider">
              STATEMENT OF INTENT // 2026
            </div>
            
            <p className="leading-relaxed">
              Dear Partners and Recruitment Teams,
            </p>
            
            <p className="leading-relaxed">
              As a dedicated finance professional, I approach market analysis with a blend of academic rigor and structured quantitative execution. My perspective is shaped by continuous engagement with corporate valuation frameworks, ensuring that every research output is backed by transparent data structures and realistic baseline assumptions.
            </p>
            
            <p className="leading-relaxed">
              Throughout my corporate finance and equity analysis pathways, I have concentrated heavily on complex banking sector metrics, port logistics dynamics, and construction cycles. Navigating credit growth paths, non-performing loan parameters, and net interest margins has sharpened my ability to dissect banking balance sheets effectively.
            </p>
            
            <p className="leading-relaxed">
              I thrive in high-accountability environments where technical precision and deep analytical dedication are required to transform fundamental corporate statements into clear, dynamic forecasting architectures. I look forward to contributing this drive and technical discipline to your strategic investment objectives.
            </p>
            
            <p className="pt-4 font-medium text-cyan-400">
              Sincerely,
              <br />
              <span className="text-white font-bold tracking-wide mt-1 block">Nguyen Na Uy</span>
            </p>
          </div>

          {/* Right Column: Strategic Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-slate-950/40 border border-slate-800/80 rounded-xl flex gap-4 items-start hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-200 text-sm mb-1">{pillar.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
