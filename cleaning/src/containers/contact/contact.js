import './contact.css';
import CallIcon from '../../images/icons/call.svg'
import EmailIcon from '../../images/icons/email.svg'
import FacebookIcon from '../../images/icons/facebook.svg'
import InstagramIcon from '../../images/icons/instagram.svg'
import Background from '../../images/background.svg'
import MobileBackground from '../../images/mobile-background.svg'

function Contact() {
  return (
    <div className="contact-container" id='contactID'>
      <img src={Background} alt="Blue Background" className='blue-background'/>
      <img src={MobileBackground} alt="Blue Background" className='mobile-blue-background'/>
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-text">
          <div className="contact-email-now">
            <h2>Email Us:</h2>
            <a href='mailto: reliable7andaffordablecleaning@yahoo.com' className='email-information'>
              <img src={EmailIcon} alt="Email Icon" className="contact-icon"/>
              <p>reliable7andaffordablecleaning@yahoo.com</p>
            </a>
          </div>
          <div className="contact-call-now">
            <h2>Call Now:</h2>  
            <a href='tel:818-714-4081' className='email-information'>
              <img src={CallIcon} alt="Call Icon" className="contact-icon"/>
              <p>+1 (818) 714-4081 </p>
            </a>
          </div>
        </div>
        <div className='social-media-container'>
            <h2>Follow Us:</h2>
            <div className='social-media-icons'>
              <a href='https://www.facebook.com/Reliable-Affordable-Cleaning-LLC-101805375965363' target="_blank"><img src={FacebookIcon} alt="Facebook Icon" className="contact-icon"/></a>
              <a href='https://www.instagram.com/reliablecleaning2022/?igshid=YmMyMTA2M2Y%3D' target="_blank"><img src={InstagramIcon} alt="Instagram Icon" className="contact-icon"/></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
