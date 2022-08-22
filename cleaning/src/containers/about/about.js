import './about.css';
import LogoIcon from '../../images/logo-icon.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <h1>RELIABLE</h1>
          <h2>& AFFORDABLE CLEANING LLC</h2>
          <p>has been providing cleaning solutions to fit the needs and busy lifestyles of our clients. Our friendly professionals strive to earn your loyalty every time we clean, which is why we make setting up commercial or residential cleaning services as easy as can be. Whether you are looking to request services one time or create a routine cleaning plan, you'll never have to worry about signing a contract.</p>
        </div>
        <div className='about-icon-logo'>
          <img src={LogoIcon} alt='Logo Icon' />
        </div>
      </div>
    </div>
  );
}

export default About;
