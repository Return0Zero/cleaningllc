import './service-areas.css';
import ServiceMap from '../../images/map.png';

function ServiceAreas() {
  return (
    <div className="service-areas-container" id='servicesID'>
      <div className="service-areas-content">
          <div className="service-areas-text">
            <h1>Our Service Areas</h1>
            <p>Currently serving <span style={{fontWeight: 'bold'}}>Bluffton, SC</span> and the following areas:</p>
            <ul>
              <li>Hilton Head Island</li>
              <li>Hardeeville</li>
              <li>Ridgeland</li>
              <li>Beaufort</li>
            </ul>
          </div>
          <div className="services-image-container">
            <img src={ServiceMap} alt="Residential Cleaning Image" />
          </div>
      </div>
    </div>
  );
}

export default ServiceAreas;
