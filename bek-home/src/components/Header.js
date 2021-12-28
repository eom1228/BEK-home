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
          <ul>
            {/* <li>
              <Link to='/' className='subnav_links'>
                Logo
              </Link>
            </li> */}
            <li className='nav_projects_container'>
              <Link to='/projects' className='subnav_links'>
                Projects
              </Link>
            </li>

            <li className='nav_projects_container'>
              <Link
                to='/about'
                className='subnav_links'
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='subnav_links'>
                Contact
              </Link>
            </li>
          </ul>
          {/* <li className='nav_projects-subContainer'> */}
          {/* {!isShown && (
        <ul className='subnav_projects'>
          <li className='subnav_list_items'>
            <BrandingBtn />
          </li>
          <li className='subnav_list_items'>
            <MarketingBtn />
          </li>
          <li className='subnav_list_items'>
            <MediaBtn />
          </li>
          <li className='subnav_list_items'>
            <PhotographyBtn />
          </li>
          <li className='subnav_list_items'>
            <DevelopmentBtn />
          </li>
        </ul>
      )} */}
          {/* </li> */}
        </div>
      </header>
      {!isShown && <SubHeader isShown={isShown} />}
    </>
  );
};

export default Header;
