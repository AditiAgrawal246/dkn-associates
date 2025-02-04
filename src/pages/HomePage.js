import React from 'react';
import '../styles/Home.css'
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

function HomePage() {
  return (
    <div>
      <section className="hero-section">
      <Carousel /> 
      </section>

      <section className="intro">
      <h1>Welcome to DKN & Associates</h1>
      <p>
        DKN & Associates is a premier Chartered Accountancy and financial advisory firm based in Bharuch and Ankleshwar, India. 
        With a legacy of trust and excellence, the firm is committed to delivering top-tier financial, tax, and audit services 
        to businesses and individuals alike.
      </p>
      <h2>Why Choose DKN & Associates?</h2>
      <ul>
        <li><strong>Comprehensive Services:</strong> From tax consulting to auditing and financial planning, we cover all aspects of financial management.</li>
        <li><strong>Expertise Across Sectors:</strong> Our diverse experience allows us to cater to a wide range of industries, ensuring tailored solutions for every client.</li>
        <li><strong>Commitment to Growth:</strong> At DKN & Associates, we believe in fostering growth for our clients by providing insights and strategies that help their businesses thrive.</li>
        <li><strong>Integrity and Trust:</strong> Built on a foundation of ethical practices, we prioritize long-term relationships and transparent services.</li>
      </ul>
      <p>
        Whether you’re a small business, a large corporation, or an individual, DKN & Associates is your partner in achieving financial 
        success and compliance. Let us simplify your financial journey while you focus on what matters most—growing your business.
      </p>
      </section>

      <section className="achievements">
        <h2>Our Achievements</h2>
        <div className="achievement-boxes">
          <div className="achievement-box">
            <h3>25+ Years</h3>
            <p>Experience in the industry</p>
          </div>
          <div className="achievement-box">
            <h3>1000+</h3>
            <p>Clients served</p>
          </div>
          <div className="achievement-box">
            <h3>Certified Professionals</h3>
            <p>Up-to-date knowledge on tax laws</p>
          </div>
          <div className="achievement-box">
            <h3>Global Reach</h3>
            <p>Serving clients across multiple countries</p>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
}

export default HomePage;
