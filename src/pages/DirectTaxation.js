import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceDetail.css';
import Footer from '../components/Footer';

const DirectTaxation = () => {
  return (
    <div>
    <div className="service-detail-page">
      <Link to="/services" className="back-button">Back to Services</Link>
      <h1>Direct Taxation</h1>
      <p>Providing end-to-end solutions for tax compliance, planning, and advisory services, ensuring accurate filings, efficient representation, and optimized tax strategies for individuals and businesses.</p>
      <h3>Compliance & Litigation</h3>
      <ul>
        <li>Representation for assessment, settlement commission, CIT (A), DRP & ITAT</li>
        <li>Filing of corporate & individual tax returns</li>
        <li>Assistance in TDS matters</li>
        <li>Obtaining certificate under section 195 & section 197</li>
      </ul>

      <h3>Advisory Services:</h3>
      <ul>
        <li>Comprehensive Corporate Tax Review (CCTR)</li>
        <li>Tax Planning for all entities & HNIs including advising on advance tax payments</li>
        <li>Transaction structuring</li>
        <li>Tax health check</li>
        <li>Opinion on tax matters</li>
        <li>Representing in search/survey matters</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default DirectTaxation;
