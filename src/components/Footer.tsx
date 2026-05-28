import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-400/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Cột 1: Giới thiệu ngắn */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-400 tracking-wider">NA UY</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Finance & Investment Analyst | MSc Finance
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h5 className="font-semibold text-gray-200 mb-3 text-sm">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Profile
                </a>
              </li>
              <li>
                <a href="#equity" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Equity Research
                </a>
              </li>
              <li>
                <a href="#modelling" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Financial Modelling
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Chuyên môn sâu */}
          <div>
            <h5 className="font-semibold text-gray-200 mb-3 text-sm">Expertise</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Equity Research Analysis</li>
              <li>Financial Modeling (Excel)</li>
              <li>Valuation Analysis</li>
              <li>Portfolio Analysis</li>
            </ul>
          </div>

          {/* Cột 4: Phạm vi phân tích ngành */}
          <div>
            <h5 className="font-semibold text-gray-200 mb-3 text-sm">Coverage</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Banking Sector</span>
                <span className="text-cyan-400 font-medium">85%</span>
              </li>
              <li className="flex justify-between">
                <span>Port & Logistics</span>
                <span className="text-cyan-400 font-medium">80%</span>
              </li>
              <li className="flex justify-between">
                <span>Building Materials</span>
                <span className="text-cyan-400 font-medium">70%</span>
              </li>
              <li className="flex justify-between">
                <span>Construction</span>
                <span className="text-cyan-400 font-medium">70%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Khối thông tin liên hệ (Contact Cards) */}
        <div className="border-t border-slate-800 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Thẻ Email */}
            <a
              href="mailto:nguyennay25042003@gmail.com"
              className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <Mail size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                  nguyennay25042003@gmail.com
                </p>
              </div>
            </a>

            {/* Thẻ Điện thoại */}
            <a
              href="tel:+84984371128"
              className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <Phone size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                  +84 984 371 128
                </p>
              </div>
            </a>

            {/* Thẻ Địa điểm */}
            <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-cyan-400/10 spatial-card">
              <MapPin size={20} className="text-cyan-400" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm text-gray-300">HCMC, Vietnam</p>
              </div>
            </div>
          </div>

          {/* Bản quyền và Mạng xã hội */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-slate-800/60 gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; 2026 Nguyen Na Uy. All rights reserved. | All research conducted personally.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <img src="" className="hidden" alt="" />
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
