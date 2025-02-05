import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceDetail.css';
import Footer from '../components/Footer';

const CooporateAlliedLawsAdvisory = () => {
  return (
    <div>
    <div className="service-detail-page">
      <Link to="/services" className="back-button">Back to Services</Link>
      <h1>Corporate & Allied Laws Advisory</h1>
      <p>Providing expert guidance on company incorporation, regulatory compliance, due diligence, and consulting on corporate laws, ensuring seamless adherence to legal and statutory requirements.</p>
      <h3>Services We Offer:</h3>
      <ul>
        <li>Incorporation of Public & Private Limited Companies, Limited Liability Partnership (LLP), and conversion of existing business entities into Company/LLP</li>
        <li>ROC & MCA compliances like filing of various forms and returns, including XBRL filings</li>
        <li>Advisory and Opinions</li>
        <li>Assistance in SME Listing</li>
        <li>Registrations and enrolment under various acts like MSMED Act, Shops & Establishment Act, etc.</li>
        <li>Due Diligence</li>
      </ul>

      <h3>Representation & Liaisoning:</h3>
      <ul>
        <li>Ministry of Corporate Affairs</li>
        <li>Regional Director(s)</li>
        <li>Registrar of Companies</li>
      </ul>

      <h3>Consulting:</h3>
      <ul>
        <li>Rules and regulations governed by Companies Act, Stock Exchanges, SEBI, FDI, FIPB, ROC, and other regulatory bodies</li>
        <li>Revival of Defunct Company</li>
        <li>Assistance in Takeover / Acquisition</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default CooporateAlliedLawsAdvisory;
