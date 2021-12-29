import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandingBtn from './AboutPage/brandingBtn';
import DevelopmentBtn from './AboutPage/developmentBtn';
import MarketingBtn from './AboutPage/marketingBtn';
import MediaBtn from './AboutPage/mediaBtn';
import PhotographyBtn from './AboutPage/photographyBtn';
import './Header.scss';
import SubHeader from './SubHeader';

const Header = ({ location, history }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='header_wrapper'>
          <div className='header_logo'>
            <Link to='/' className='header_logo_link'>
              Logo
            </Link>
          </div>
          <ul className='header_projects'>
            <li className='nav_projects_container'>
              <Link to='/projects' className='subnav_links'>
                Projects
              </Link>
            </li>

            <li
              className='nav_projects_container'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <Link to='/about' className='subnav_links'>
                About
              </Link>
            </li>
            <li className='nav_projects_container'>
              <Link to='/contact' className='subnav_links'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='nav_third_element'>
            {/* <div style={{ width: '80px' }}></div> */}
          </div>
        </div>
      </header>
      {isShown ? (
        <SubHeader isShown={isShown} setIsShown={setIsShown} />
      ) : (
        <div
          className='empty_container'
          style={{ height: '40px', width: '100%' }}
        ></div>
      )}
    </>
  );
};

export default Header;
