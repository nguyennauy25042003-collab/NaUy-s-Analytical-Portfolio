import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Các đốm sáng chuyển động mờ ở nền background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none animate-pulse duration-[8000ms]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Cột trái: Thông tin cá nhân & Học vấn */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full">
                <span className="text-cyan-400 text-sm font-medium tracking-wider">ANALYTICAL PORTFOLIO</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Nguyen Na Uy
                </span>
              </h1>
              <p className="text-xl text-gray-300 font-light tracking-wide">
                Finance & Investment Analyst
              </p>
            </div>

            {/* Khối học vấn & Chuyên môn */}
            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-xs text-cyan-400 font-bold tracking-widest mb-3">EDUCATION</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg font-bold mt-0.5">•</span>
                    <span className="text-sm md:text-base leading-relaxed">
                      <strong>Bachelor of Finance</strong> - Toulon University | HUB's Saigon International of Business
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg font-bold mt-0.5">•</span>
                    <span className="text-sm md:text-base leading-relaxed">
                      <strong>Master Candidate</strong> in Finance and Banking | Ho Chi Minh University of Banking
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-cyan-400 font-bold tracking-widest mb-3">SPECIALIZATION</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg font-bold mt-0.5">•</span>
                    <span className="text-sm md:text-base">Equity Research Analysis & Advanced Financial Modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút cuộn chuột khám phá */}
            <div className="pt-4">
              <a 
                href="#equity" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 group"
              >
                <span>Explore Portfolio</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Cột phải: Thẻ Widget Trạng thái trực quan */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-full max-w-[360px] aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl relative group hover:border-cyan-400/40 transition-all duration-500">
              {/* Vòng tròn trang trí */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-500/20 rounded-full blur-sm"></div>
              
              {/* Khối chữ N đại diện thương hiệu */}
              <div className="flex justify-center items-center h-full">
                <div className="text-center space-y-2">
                  <div className="text-7xl font-black bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-500 select-none">
                    N
                  </div>
                  <div className="text-[10px] text-gray-400 tracking-widest uppercase">System Status: Ready</div>
                  <div className="text-[11px] text-cyan-400 font-medium animate-pulse flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
                    Live and optimized
                  </div>
                </div>
              </div>

              {/* Hàng thông số thống kê mini ở đáy thẻ */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-4 mt-auto">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">5</div>
                  <p className="text-[11px] text-gray-400 tracking-wide">Industry Sectors</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-400">85%</div>
                  <p className="text-[11px] text-gray-400 tracking-wide">Avg Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
