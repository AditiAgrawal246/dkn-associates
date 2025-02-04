import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/About.css';
import img1 from '../assets/partners/Dhiraj.jpg';
import img2 from '../assets/partners/Kaushal.jpeg';
import img3 from '../assets/partners/Akshar.jpg';
import img4 from '../assets/partners/Niraj.jpeg'

function AboutPage() {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (member) => {
    setPopupData(member);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  const teamMembers = [
    {
      img: img1,
      name: "Dhiraj Agrawal",
      role: "CA and Partner",
      fullDescription: "Over 25 years of expertise in accounting, taxation, and financial advisory. He specializes in guiding businesses through complex financial regulations and ensuring compliance while promoting sustainable growth.",
    },
    {
      img: img2,
      name: "Kaushal Surti",
      role: "CA and Partner",
      fullDescription: "Over 25 years of expertise in accounting, taxation, and financial advisory. He specializes in guiding businesses through complex financial regulations and ensuring compliance while promoting sustainable growth.",
    },
    {
      img: img4,
      name: "Niraj Agrawal",
      role: "CA and Partner",
      fullDescription: "Over 25 years of expertise in accounting, taxation, and financial advisory. He specializes in guiding businesses through complex financial regulations and ensuring compliance while promoting sustainable growth.",
    },
    {
      img: img3,
      name: "Akshar Mehta",
      role: "CA and Partner",
      fullDescription: "Over 25 years of expertise in accounting, taxation, and financial advisory. He specializes in guiding businesses through complex financial regulations and ensuring compliance while promoting sustainable growth.",
    }
  ];

  return (
    <div>
      <div className="about-page">
        <div className="about-section">
          <h2>About DKN & Associates</h2>
          <p>
            DKN & Associates is a distinguished Chartered Accountancy firm established in 2014, based in Bharuch, Gujarat. The firm is duly registered with The Institute of Chartered Accountants of India and operates under a proprietorship model.
            Located in the vibrant industrial zone of Bharuch, DKN & Associates provides a comprehensive range of services, including tax consultancy, tax return filing, audit services, and more. The firm caters to a wide array of clients across diverse sectors, offering expert financial solutions.
            DKN & Associates is committed to delivering services with the highest standards of professionalism and ethics, ensuring confidentiality, integrity, and objectivity in all engagements. The firm maintains a focus on providing timely, efficient, and quality services, while offering personal attention to every client, ensuring their unique needs are met with the utmost care and precision.
            With over 24 years of industry experience, DKN & Associates has successfully served more than 1000 clients. Our team of certified professionals is well-versed in the latest tax laws and financial regulations, ensuring up-to-date and accurate guidance.
          </p>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At DKN & Associates, our mission is to provide comprehensive and value-added financial services in the fields of accounting, auditing, taxation, and more. We are dedicated to:
          </p>
          <ul>
            <li>Upholding the highest ethical standards in all our endeavors.</li>
            <li>Delivering timely, reliable, and quality services with a focus on client satisfaction.</li>
            <li>Continuously updating our knowledge base and professional expertise to meet the evolving needs of our clients.</li>
            <li>Building a strong and reliable team to ensure exceptional service delivery and long-lasting client partnerships.</li>
          </ul>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <p>
            At DKN & Associates, we are committed to delivering exceptional services with the highest standards of integrity, excellence, and client-centricity. Our values guide us in providing reliable, timely, and innovative solutions while maintaining confidentiality and professionalism. We focus on long-term growth, both for our clients and our firm, ensuring we continuously evolve to meet their needs.
          </p>
          <ul>
            <li>Integrity: Upholding transparency and honesty in all our interactions.</li>
            <li>Excellence: Delivering high-quality services and striving for continuous improvement.</li>
            <li>Client-Centricity: Providing tailored solutions to address unique client needs.</li>
            <li>Timeliness: Ensuring efficient and on-time service delivery.</li>
            <li>Collaboration: Promoting teamwork and open communication for optimal results.</li>
          </ul>
        </div>

        <div className="team-section">
          <h2>Founders & Partners</h2>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.img} alt={`Team Member ${index + 1}`} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p className="knowmore" onClick={() => openPopup(member)}>Know More</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={popupData.img} alt={popupData.name} />
            <h3>{popupData.name}</h3>
            <p>{popupData.role}</p>
            <p>{popupData.fullDescription}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AboutPage;

