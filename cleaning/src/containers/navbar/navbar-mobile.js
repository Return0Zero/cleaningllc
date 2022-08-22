import './navbar-mobile.css';
import LogoHorizontal from '../../images/horizontal-logo.png'
import HamburgerMenu from '../../images/icons/hamburger.png'
import CloseMenu from '../../images/icons/close.png'
import {useState} from 'react'
import NavLinks from './navlinks'


function NavbarMobile() {

  const [open, setOpen] = useState(false)

  const hamburgerIcon = <img src={HamburgerMenu} alt='HamburgerMenu' className='hamburger-menu'
  onClick={() => setOpen(!open)}/>

  const closeIcon = <img src={CloseMenu} alt='CloseMenu' className='close-menu'
  onClick={() => setOpen(!open)}/>

  return (
    <div className="navbar-mobile-max-width">
      <div className="navbar-mobile-container">
        <a to="/" className='link--title-logo'><img src={LogoHorizontal} alt='logo' className='logo'/></a>
        {open ? closeIcon : hamburgerIcon}

        {open && <NavLinks></NavLinks>}        
        
      </div>
    </div>
  );
}

export default NavbarMobile;
