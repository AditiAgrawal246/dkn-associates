import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import Footer from '../components/Footer';
import audit from '../assets/services/audit.png';
import financeIcon from '../assets/services/finance.png';
import consultingIcon from '../assets/services/consult.png';
import CooporateAlliedLawsAdvisoryIcon from '../assets/services/CooporateAlliedIcon.png';
import BFSIIcon from '../assets/services/BFSI.png';
import GovernanceRiskComplianceIcon from '../assets/services/GovernanceRiskIcon.png';


const ServicesPage = () => {
  const services = [
    { id: 1, name: 'Audit & Assurance', description: 'Comprehensive audit and compliance solutions.', link: '/services/audit-assurance', icon: audit },
    { id: 2, name: 'Direct Taxation', description: 'Expert tax compliance solutions.', link: '/services/direct-taxation', icon: financeIcon },
    { id: 3, name: 'Indirect Taxation', description: 'Comprehensive GST compliance services.', link: '/services/indirect-taxation', icon: consultingIcon },
    { id: 4, name: 'Cooporate & Allied Laws Advisory', description: 'Comprehensive legal compliance services.', link: '/services/CooporateAlliedLawsAdvisory', icon: CooporateAlliedLawsAdvisoryIcon },
    { id: 5, name: 'Banking, Financial services and Insurance(BFSI)', description: ' Specialized banking audits.', link: '/services/BFSI', icon: BFSIIcon },
    { id: 6, name: 'Governance Risk & Compliance', description: 'Strengthening business integrity.', link: '/services/GovernanceRiskCompliance', icon: GovernanceRiskComplianceIcon },

  ];

  return (
    <div>
      <div className="services-page">
        <div className="services-overview">
          <h1>Our Services</h1>
          <p>
            At DKN & Associates, we offer a wide range of financial, tax, and business consulting services. Our
            team is committed to providing tailored solutions to help your business thrive and achieve long-term
            success.
          </p>
        </div>

        <div className="service-cards">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.name} className="service-icon" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="details-link">Read More</Link>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
