import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandingBtn from './AboutPage/brandingBtn';
import DevelopmentBtn from './AboutPage/developmentBtn';
import MarketingBtn from './AboutPage/marketingBtn';
import MediaBtn from './AboutPage/mediaBtn';
import PhotographyBtn from './AboutPage/photographyBtn';
import './Header.scss';
import SubHeader from './SubHeader';
import { Menu, Close } from '@material-ui/icons';
import Logo from '../images/bek_logo_white.png';
//
const Header = ({ history, handleClick, categories }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [headerBgBlack, setHeaderBgBlack] = useState(false);
  const [click, setClick] = useState(false);

  const location = useLocation();
  // const ref = useRef();
  // const location = useLocation();
  const handleClickMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', updateScroll);
    }
  }, []);
  // var x = window.scrollX,
  //   y = window.scrollY;
  // if (location.href === '/' && y >= 200) {
  //   setHeaderBgBlack((prevState) => !prevState);
  // }
  return (
    <>
      <header
        className='header fixed-top'
        style={
          scrollPosition > 500 ||
          window.location.href.indexOf('projects') > -1 ||
          location.pathname === '/projects' ||
          location.pathname === '/about' ||
          location.pathname === '/contact'
            ? {
                background: '#000',
                borderBottom: '1px solid #fff',
              }
            : { background: 'transparent' }
        }
      >
        <div className='header_wrapper'>
          <div className='header_logo'>
            <Link to='/' className='header_logo_link'>
              <img width='60px' src={Logo} alt='BEK Studio logo' />
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClickMenu}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'header_projects active' : 'header_projects'}>
            <li className='nav_projects_container'>
              <Link
                to='/projects'
                value='projects'
                className='subnav_links'
                onClick={((e) => handleClick(e.target.value), closeMobileMenu)}
              >
                Projects
              </Link>
            </li>

            <li
              className='nav_projects_container'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <Link
                to='/about'
                className='subnav_links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav_projects_container'>
              <Link
                to='/contact'
                className='subnav_links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='nav_third_element'>
            {/* <div style={{ width: '80px' }}></div> */}
          </div>
        </div>
      </header>
      {/* {isShown ? (
        <SubHeader isShown={isShown} setIsShown={setIsShown} />
      ) : (
        <div
          className='empty_container'
          style={{ height: '40px', width: '100%' }}
        ></div>
      )} */}
    </>
  );
};

export default Header;
