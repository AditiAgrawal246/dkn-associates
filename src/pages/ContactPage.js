import Footer from '../components/Footer';
import '../styles/Contact.css';

const ContactPage = () => {
  const offices = [
    {
      address: "Office No.7/8, 2nd Floor, Shree Rang Palace, Near INOX Multiplex, Zadeshwar Road Bharuch, Gujarat, 392011",
      email: ["dhiraj@dknca.com", "niraj@dknca.com"],
      partners: ["CA Dhiraj Agrawal", "CA Niraj Agrawal"],
      contact_number: ["+91 98241 12375", "+91 94286 87870"],
    },
    {
      address: "416-417, Nexus Business Hub, Maktampur Road, Kasak, Bharuch, Gujarat, 392001",
      email: ["kaushal@dknca.com"],
      partners: ["CA Kaushal Surti"],
      contact_number: ["+91 98980 69612"],
    },
    {
      address: "10-11-12, Buddhadev Complex, Nr. Sevashram Hospital, Sevashram Road, Panchbatti, Bharuch, Gujarat, 392001.",
      email: ["akshar@dknca.com"],
      partners: ["CA Akshar Mehta"],
      contact_number: ["+91 94268 58801"],
    },
  ];

  return (
    <div>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>We have offices across multiple locations to serve you better. Please find the details below:</p>

        <div className="office-cards">
          {offices.map((office, index) => (
            <div key={index} className="office-card">
              <p>
                <h3><strong>Partners:</strong></h3>
                <ul>
                  {office.partners.map((partner, idx) => (
                    <li key={idx}>{partner}</li>
                  ))}
                </ul>
              </p>
              <p>
                <h3><strong>Address:</strong></h3>
                {office.address}
              </p>
              <p>
                <h3><strong>Email:</strong></h3>
                <ul>
                  {office.email.map((email, idx) => (
                    <li key={idx}> <a href={`mailto:${email}`}>{email}</a></li>
                  ))}
                </ul>
              </p>
              <p>
                <h3><strong>Contact Number:</strong></h3>
                <ul>
                  {office.contact_number.map((contact, idx) => (
                    <li key={idx}>{contact}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
