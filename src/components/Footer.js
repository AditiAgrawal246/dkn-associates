import React from 'react';
import '../styles/Footer.css';
import linkedin from '../assets/social/Linkedin.png';
import facebook from '../assets/social/facebook.png';
import twitter from '../assets/social/twitter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>DKN & Associates</h3>
          <p>Your trusted partner in financial services.</p>

          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/important-links">Resources</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Address 1:</strong> Office No.7/8, 2nd Floor, Shree Rang Palace, 
            Near INOX Multiplex, Zadeshwar Road Bharuch, Zadeshwar, Bharuch, Gujarat, 392011
          </p>
          <p>
            <strong>Address 2:</strong> 416-417, Nexus Business Hub, Maktampur Road, 
            Kasak, Bharuch, Gujarat, 392001
          </p>
          <p>
            <strong>Address 3:</strong> 10-11-12, Buddhadev Complex, Nr. Sevashram Hospital, 
            Sevashram Road, Panchbatti, Bharuch, Gujarat, 392001
          </p>
        </div>
      </div>

      <div className="footer-content">
        {/* <div className="footer-copyright">
          <ul>
            <li><strong>Follow Us</strong></li>
            <li>
              <a href="https://www.facebook.com/dknassociates" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/dknassociates" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/dknassociates" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} DKN & Associates. All rights reserved.</p>
        </div> */}

        <div className="footer-copyright">
          <div className="footer-social">
            <ul>
              <li className='text'><strong>Follow Us</strong></li>
              <li>
                <a href="https://www.facebook.com/dknassociates" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/dknassociates" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/dknassociates" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-copyright-text">
            <p>&copy; {new Date().getFullYear()} DKN & Associates. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
