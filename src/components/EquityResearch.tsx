import { TrendingUp, ArrowUpRight, BarChart3, Building2, Cpu, Ship, HardHat } from 'lucide-react';

export default function EquityResearch() {
  const researchData = [
    {
      ticker: 'VPB',
      company: 'VPBank',
      sector: 'Banking',
      icon: <Building2 className="text-cyan-400" size={24} />,
      highlights: ['Credit Growth Analysis', 'NIM & NPL Optimization', 'Digital Banking Drivers'],
      link: '#', // Bạn có thể thay link Drive/PDF của bạn vào đây sau
    },
    {
      ticker: 'GMD',
      company: 'Gemadept',
      sector: 'Port & Logistics',
      icon: <Ship className="text-cyan-400" size={24} />,
      highlights: ['Deep-sea Port Capacity', 'Logistics Network Expansion', 'Trade Flow Valuation'],
      link: '#',
    },
    {
      ticker: 'HPG',
      company: 'Hoa Phat Group',
      sector: 'Building Materials',
      icon: <BarChart3 className="text-cyan-400" size={24} />,
      highlights: ['Dung Quat 2 Mega Project', 'Steel Price Cycles', 'Market Share Dominance'],
      link: '#',
    },
    {
      ticker: 'FPT',
      company: 'FPT Corporation',
      sector: 'Technology',
      icon: <Cpu className="text-cyan-400" size={24} />,
      highlights: ['Global IT Services Growth', 'AI & Semiconductor Play', 'Recurrent Software Revenue'],
      link: '#',
    },
    {
      ticker: 'CTD',
      company: 'Coteccons',
      sector: 'Construction',
      icon: <HardHat className="text-cyan-400" size={24} />,
      highlights: ['Backlog & Pipeline Valuation', 'Mega Industrial Projects', 'Margin Recovery Trends'],
      link: '#',
    },
  ];

  return (
    <section id="equity" className="py-20 px-6 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề phần */}
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="text-cyan-400" size={20} />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">VALUATION & ANALYSIS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Equity Research <span className="text-gray-400 font-light">Coverage</span>
        </h2>

        {/* Lưới hiển thị các thẻ danh mục cổ phiếu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item) => (
            <div
              key={item.ticker}
              className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Hàng đầu: Icon và Mã cổ phiếu */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold tracking-wider px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {item.ticker}
                  </span>
                </div>

                {/* Tên công ty và Ngành */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-white">{item.company}</h3>
                  <p className="text-xs text-cyan-400/80 font-medium mt-0.5">{item.sector}</p>
                </div>

                {/* Các điểm nhấn phân tích cốt lõi */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nút xem báo cáo chi tiết */}
              <a
                href={item.link}
                className="w-full py-2.5 bg-slate-900 hover:bg-cyan-500/10 text-center rounded-lg text-sm font-medium border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-1.5 text-gray-300 hover:text-cyan-400"
              >
                <span>View Full Report</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
