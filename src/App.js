import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AuditAssurance from './pages/AuditAssurance';
import DirectTaxation from './pages/DirectTaxation';
import IndirectTaxation from './pages/IndirectTaxation';
import CooporateAlliedLawsAdvisory from './pages/CooporateAlliedLawsAdvisory';
import BFSI from './pages/BFSI';
import GovernanceRiskCompliance from './pages/GovernanceRiskCompliance';
import ImportantLinks from './pages/ImportantLinks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/audit-assurance" element={<AuditAssurance />} />
        <Route path="/services/direct-taxation" element={<DirectTaxation />} />
        <Route path="/services/indirect-taxation" element={<IndirectTaxation />} />
        <Route path="/services/CooporateAlliedLawsAdvisory" element={<CooporateAlliedLawsAdvisory />} />
        <Route path="/services/BFSI" element={<BFSI />} />
        <Route path="/services/GovernanceRiskCompliance" element={<GovernanceRiskCompliance />} />
        <Route path="/important-links" element={<ImportantLinks />} />
      </Routes>
    </Router>
  );
}

export default App;
