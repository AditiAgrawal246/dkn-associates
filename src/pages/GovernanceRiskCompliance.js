import React from 'react';
import '../styles/ServiceDetail.css';
import Footer from '../components/Footer';

const GovernanceRiskCompliance = () => {
  return (
    <div>
    <div className="service-detail-page">
      <a href="/services" className="back-button">Back to Services</a>
      <h1>Governance, Risk & Compliance</h1>
      <p>Providing comprehensive solutions in internal audits, risk assessment, financial due diligence, and compliance management, ensuring businesses meet regulatory standards and safeguard their operations.</p>
      <h3>Core Services:</h3>
      <ul>
        <li>Incorporation of Public & Private Limited Companies</li>
        <li>Internal Audit</li>
        <li>Risk-Based Internal Audit</li>
        <li>Concurrent Audit</li>
        <li>Financial Due Diligence</li>
        <li>Accounting & Audit Support Services</li>
        <li>Stock & Fixed Asset Verification</li>
      </ul>
    </div>
    <Footer/> 
    </div>
  );
};

export default GovernanceRiskCompliance;
