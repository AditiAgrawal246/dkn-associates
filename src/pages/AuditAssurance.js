import React from 'react';
import '../styles/ServiceDetail.css';
import Footer from '../components/Footer';

const AuditAssurance = () => {
  return (
    <div>
    <div className="service-detail-page">
      <a href="/services" className="back-button">Back to Services</a>
      <h1>Audit & Assurance</h1>
      <p>Delivering comprehensive audit services, ensuring compliance with regulatory requirements, and providing accurate financial insights to support informed decision-making.</p>
      
      <h3>Services We Offer:</h3>
      <ul>
        <li>Statutory Audits as per Companies Act 2013 and Banking Regulation Act, 1949</li>
        <li>Tax Audit as per Section 44AB of the Income Tax Act, 1961</li>
        <li>IPO Support Services</li>
        <li>Compilation Services</li>
        <li>Interim Financial Reporting</li>
        <li>Certification</li>
        <li>Advisory & Support Services</li>
        <li>Special Audits undertaken on behalf of Regulatory Authorities like Income Tax & Service Tax Department or Financial Institutions or Bank</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default AuditAssurance;
