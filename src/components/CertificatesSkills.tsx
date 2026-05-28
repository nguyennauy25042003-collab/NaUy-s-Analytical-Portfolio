import { Award, CheckCircle2, Star } from 'lucide-react';

export default function CertificatesSkills() {
  const certificates = [
    {
      title: 'CFA Program - Candidate',
      issuer: 'CFA Institute',
      status: 'Active Cycle',
    },
    {
      title: 'IELTS International English Certificate',
      issuer: 'IDP / British Council',
      status: 'Overall 5.5 | Reading 6.5',
    },
  ];

  const skillGroups = [
    {
      category: 'Financial Analysis',
      skills: ['Special Mention Loans (SML) Tracking', 'NPL & NIM Analysis', 'Credit Growth Forecasting', 'Financial Statement Analysis (FSA)']
    },
    {
      category: 'Valuation & Modelling',
      skills: ['Discounted Cash Flow (DCF)', 'M&A Merger Models', 'LBO Architecture', 'Scenario & Sensitivity Analysis']
    },
    {
      category: 'Technical Stack',
      skills: ['Advanced Microsoft Excel', 'Python (Data Processing)', 'Financial Automation', 'Data Architecture']
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Award className="text-cyan-400" size={20} />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">CREDENTIALS & EXPERTISE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Certificates & <span className="text-gray-400 font-light">Skills</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Certificates (Spans 1 column on large screens) */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2">
              <Star size={14} className="text-cyan-400" /> Professional Credentials
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="p-5 bg-slate-950/60 border border-slate-800 rounded-xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full pointer-events-none"></div>
                  <h4 className="font-bold text-gray-100 text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">{cert.issuer}</p>
                  <span className="inline-block text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 border border-cyan-400/20 rounded">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skill Matrix (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> {group.category}
                </h3>
                <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-5 space-y-3 h-full">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-sm text-gray-400 group">
                      <CheckCircle2 size={14} className="text-cyan-500/60 mt-0.5 shrink-0 group-hover:text-cyan-400 transition-colors" />
                      <span className="group-hover:text-gray-200 transition-colors leading-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
