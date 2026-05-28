import { Menu, X } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { label: 'Profile', href: '#hero' },
    { label: 'Equity Research', href: '#equity' },
    { label: 'Financial Modelling', href: '#modelling' },
    { label: 'Cover Letter', href: '#cover-letter' },
    { label: 'Others', href: '#others' },
    { label: 'Certificates', href: '#certificates' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Tên thương hiệu */}
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
          NA UY
        </div>

        {/* Menu cho Desktop */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Nút bấm Menu cho Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cyan-400 p-1 hover:bg-slate-900 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu xổ xuống cho Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/10 py-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
