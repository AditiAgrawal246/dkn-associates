import React from 'react';
// import '../styles/BFSI.css'
import '../styles/ServiceDetail.css';
import Footer from '../components/Footer';

const BFSI = () => {
  return (
    <div>
    <div className="service-detail-page">
      <a href="/services" className="back-button">Back to Services</a>
      <h1>Banking, Financial Services, and Insurance (BFSI)</h1>
      <p>Delivering expert audit services, including statutory, internal, and compliance audits for banks and financial institutions, ensuring operational efficiency and regulatory adherence.</p>
      <h3>Core Services:</h3>
      <ul>
        <li>Branch Statutory Audit of Public Sector Banks</li>
        <li>Internal Audit of Cooperative Banks</li>
        <li>Concurrent Audit</li>
        <li>Stock Audit</li>
        <li>Revenue Audit</li>
        <li>"Know Your Customer" (KYC) Audit</li>
        <li>Transaction-Based Audit in Private Banks</li>
        <li>Certification Work</li>
      </ul>
    </div>
    <Footer/> 
    </div>
  );
};

export default BFSI;