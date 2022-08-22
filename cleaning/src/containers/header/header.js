import './header.css';
import Dots from '../../images/dots.svg';
import BackgroundPicture from '../../images/clean-room.png';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <div>
            <h1 className="header-h1" >Clean Home.</h1>
            <h1 className="header-h1" >Professional Service.</h1>
            <h1 className="header-h1" >Fair Price.</h1>
          </div>
          <p className="header-p">Our mission is to make your home and business shine.</p>
          <a className="header-button" href='#contactID'>Contact Us Now!</a>
        </div>
        <img src={Dots} alt="Dots" className="dots"/>
        <img src={BackgroundPicture} alt="clean room" className="background-picture"/>
      </div>
    </div>
  );
}

export default Header;
