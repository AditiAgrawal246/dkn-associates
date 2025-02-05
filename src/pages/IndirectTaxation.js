import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceDetail.css';
import Footer from '../components/Footer';

const IndirectTaxation = () => {
  return (
    <div>
    <div className="service-detail-page">
      <Link to="/services" className="back-button">Back to Services</Link>
      <h1>Indirect Taxation</h1>
      <p>Offering complete GST compliance, advisory, and representation services, including audits, transaction structuring, and day-to-day assistance to ensure seamless tax management for businesses.</p>
      <h3>Indirect Taxation Services:</h3>
      <ul>
        <li>Drafting replies to notices, queries, and inquiries from the department</li>
        <li>Complete GST Outsourcing Model</li>
        <li>GST Audit</li>
        <li>Structuring/restructuring of transactions</li>
        <li>Entry Level Strategy</li>
        <li>Advice to optimize tax credits</li>
        <li>Assistance in drafting agreements for business transactions</li>
        <li>Taxation of Goods & Services (GST)</li>
        <li>Setting up necessary processes for compliance</li>
        <li>Day-to-day and regular compliances such as payments, filing returns, and obtaining forms</li>
        <li>Assistance in tax assessments, audits, and routine matters</li>
        <li>Assistance and representation before tax departments and authorities</li>
        <li>GST Health Check</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default IndirectTaxation;
