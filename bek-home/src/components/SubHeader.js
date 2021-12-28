import React from 'react';
import BrandingBtn from './AboutPage/brandingBtn';
import MarketingBtn from './AboutPage/marketingBtn';
import MediaBtn from './AboutPage/mediaBtn';
import PhotographyBtn from './AboutPage/photographyBtn';
import DevelopmentBtn from './AboutPage/developmentBtn';
import './SubHeader.scss';
import { Link } from 'react-router-dom';
const SubHeader = ({ isShown }) => {
  return (
    <>
      {/* {isShown && ( */}
      <header className='subHeader'>
        <ul className='subnav_projects'>
          <li className='subnav_list_items'>
            {/* <BrandingBtn /> */}
            <Link to='/about/branding' className='list_item_links'>
              Branding
            </Link>
          </li>
          <li className='subnav_list_items'>
            {/* <MarketingBtn /> */}
            <Link to='/about/marketing' className='list_item_links'>
              Marketing
            </Link>
          </li>
          <li className='subnav_list_items'>
            {/* <MediaBtn /> */}
            <Link to='/about/media' className='list_item_links'>
              Media
            </Link>
          </li>
          <li className='subnav_list_items'>
            {/* <PhotographyBtn /> */}
            <Link to='/about/photography' className='list_item_links'>
              Photography
            </Link>
          </li>
          <li className='subnav_list_items'>
            {/* <DevelopmentBtn /> */}
            <Link to='/about/development' className='list_item_links'>
              Development
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default SubHeader;
