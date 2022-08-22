import './services.css';
import ResidentialImage from '../../images/residential.png';
import CommercialImage from '../../images/commercial.png';

function Services() {
  return (
    <div className="services-container" id='servicesID'>
      <div className="services-content">
        <div className="services-title">
          <h1>Check Our Services</h1>
          <h2>When things need to be cleaned, hire us.</h2>
        </div>
        <div className="cleaning-services">
          <div className="services-image-residential">
            <img src={ResidentialImage} alt="Residential Cleaning Image" />
          </div>
          <div className="cleaning-services-text">
            <h1>Residential Services</h1>
              <div className="mobile-services-image-residential">
                <img src={ResidentialImage} alt="Residential Cleaning Image" />
              </div>
            <p>We are very passionate and committed to routinely offering an affordable price range for all our house cleaning services. From One-Time Cleaning to Recurring Cleaning Services, we can provide the best service for your specific need.</p>
          </div>
        </div>
        <div className="cleaning-services">
          <div className="cleaning-services-text">
            <h1>Commercial Services</h1>
              <div className="mobile-services-image-commercial">
                <img src={CommercialImage} alt="Commercial Cleaning Image" />
              </div>
            <p>Your office environment requires more than a one-size-fits-all cleaning approach. We can create a customized program that includes dusting, wiping, floor care and trash removal, paying special attention to high-traffic areas like lobbies, conference rooms and restrooms.</p>
          </div>
          <div className="services-image-commercial">
            <img src={CommercialImage} alt="Commercial Cleaning Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
