import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import EquityResearch from './components/EquityResearch';
import FinancialModelling from './components/FinancialModelling';
import CoverLetter from './components/CoverLetter';
import Others from './components/Others';
import CertificatesSkills from './components/CertificatesSkills';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <EquityResearch />
      <FinancialModelling />
      <CoverLetter />
      <Others />
      <CertificatesSkills />
      <Footer />
    </div>
  );
}

export default App;
