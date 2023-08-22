import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click); //switching fs symbol for mobils size to opposite (bars or x)
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }; // managing brands dropdown

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/home' onClick={closeMobileMenu}>
          {/* Element MD */}
          <img className='navbar-logo'src="/images/Element_MD_logo_navbar.png" alt="Element MD logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/brands'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Partnered Brands <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/qualifying-partner'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Qualifying Partnership
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/locations'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Locations
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;