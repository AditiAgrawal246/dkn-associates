import React from 'react';
import '../styles/ImportantLinks.css';
import Footer from '../components/Footer';
import incometax from '../assets/resources/tax.png';
import gst from '../assets/resources/gst.png';
import downloadIcon from '../assets/resources/downloadicon.png'; 
import blackmoneyundisclosedicon from '../assets/resources/blackmoneyundisclosed.png'
import e_filingicon from '../assets/resources/e-filing_tax.png'
import it_financebill from '../assets/resources/incometaxfinancebill.png'
import it_citculars from '../assets/resources/ITcirculars.png'
import it_notification from '../assets/resources/ITnotification.png'
import it_rules from '../assets/resources/ITRules.png'
import ministryofcorporateaffairs from '../assets/resources/ministryofcorporateaffairs.png'
import prohibitionofbenamiproperty from '../assets/resources/prohibitionofbenamiproperty.png'

import panCardNewFile from '../assets/resources/downloads/PAN_CARD_NEW_FORM.pdf';
import panCorrectionFile from '../assets/resources/downloads/PAN_CORRECTION_NEW.pdf';
import tanNumberFile from '../assets/resources/downloads/TAN_NO._fORM.pdf';

const importantLinks = [
  {
    title: 'Income Tax E-Filing',
    description: 'Official portal for Income Tax Login and E-Filing',
    link: 'https://www.incometax.gov.in/iec/foportal/',
    icon: e_filingicon
  },
  {
    title: 'GST Portal',
    description: 'Official portal for Goods and Services Tax (GST) filing and details.',
    link: 'https://www.gst.gov.in/',
    icon: gst
  },
  {
    title: 'Ministry Of Coporate Affairs',
    description: 'Offical portal for Company and LLP Filing',
    link: 'https://www.mca.gov.in/content/mca/global/en/home.html',
    icon: ministryofcorporateaffairs
  },
  
  {
    title: 'Income Tax Act,1961',
    description: 'Offical portal for Income Tax Act,1961',
    link: 'https://incometaxindia.gov.in/Pages/acts/income-tax-act.aspx',
    icon: incometax
  },
  {
    title: 'Income Tax Black Money Undisclosed Act',
    description: 'Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015',
    link: 'https://incometaxindia.gov.in/pages/acts/black-money-undisclosed-income-act.aspx',
    icon: blackmoneyundisclosedicon
  },
  {
    title: 'Prohibition of Benami Property Transactions Act, 1988',
    description: 'Prohibition of Benami Property Transactions Act, 1988',
    link: 'https://incometaxindia.gov.in/pages/acts/prohibition-of-benami-property-transactions-act-1988.aspx',
    icon: prohibitionofbenamiproperty
  },
  {
    title: 'Income Tax Rules, 1962',
    description: 'Official portal of Income Tax Rules, 1962',
    link: 'https://incometaxindia.gov.in/Pages/rules/income-tax-rules-1962.aspx',
    icon: it_rules
  },
  {
    title: 'Income Tax Circulars',
    description: 'Official portal of Income Tax Circulars',
    link: 'https://incometaxindia.gov.in/Pages/communications/circulars.aspx',
    icon: it_citculars
  },
  {
    title: 'Income Tax Notifications',
    description: 'Official portal of Income Tax Notifications',
    link: 'https://incometaxindia.gov.in/Pages/communications/notifications.aspx',
    icon: it_notification
  },
  {
    title: 'Income Tax Finance-Bill',
    description: 'Official portal for Income Tax Finance-Bill',
    link: 'https://incometaxindia.gov.in/Pages/budget-and-bills/finance-bill.aspx',
    icon: it_financebill
  },
];

const downloads = [
  {
    title: 'PAN Card New',
    description: 'Download the Form for application form to apply for a new PAN Card',
    file: panCardNewFile,
    icon: downloadIcon
  },
  {
    title: 'PAN Correction',
    description: 'Download the Form for application form to apply for correction of PAN Card',
    file: panCorrectionFile,
    icon: downloadIcon
  },
  {
    title: 'TAN number',
    description: 'Download the Form for application form to apply for a new TAN Number',
    file: tanNumberFile,
    icon: downloadIcon
  },
];

const ImportantLinks = () => {
  return (
    <div>
      <div className="important-links-container">
        <h2 className="important-links-title">Resources</h2>

        <div className="important-links-list">
          <h3 className="section-title">Useful Links</h3>
          {importantLinks.map((item, index) => (
            <div key={index} className="important-link-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-item">
                <img src={item.icon} alt={item.title} className="link-icon" />
                <div className="link-details">
                  <h4 className="link-title">{item.title}</h4>
                  <p className="link-description">{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="downloads-list">
          <h3 className="section-title">Downloads</h3>
          {downloads.map((item, index) => (
            <div key={index} className="download-item">
              <a href={item.file} download className="download-link">
                <div className="download-details">
                  <h4 className="download-title">{item.title}</h4>
                  <p className="download-description">{item.description}</p>
                </div>
                <img src={item.icon} alt={item.title} className="download-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImportantLinks;
