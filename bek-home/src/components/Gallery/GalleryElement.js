import React, { useState } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import {
  GalleryItemList,
} from './Gallery';
import GalleryBrandingList from './GalleryBrandingList';
import GalleryDesignList from './GalleryDesignList';
import GalleryDevelopmentList from './GalleryDevelopmentList';
import GalleryMarketingList from './GalleryMarketingList';
import GalleryPhotographyList from './GalleryPhotographyList';
// import GalleryBrandingItem from './GalleryBrandingItem';

const GalleryElement = ({ categories, projects }) => {
  const location = useLocation();

  return (
    <>
      <div className='gallery'>
        {console.log(GalleryItemList)}

        {location.pathname === '/projects' &&
          projects.map((item, index) => (
            <div className='gallery__card' key={index}>
              <Link to={`${item.link}/${item.id}`} className='gallery__link'>
                <div className='gallery__link--image'>
                  <div className='overlay'></div>
                  <img src={item.imageURL} alt='Gallery' />
                </div>
                <div className='gallery__link-title'>
                  <span>{item.title}</span>
                </div>
              </Link>
            </div>
          ))}

        {categories[0].clicked &&
          // !projectClicked &&
          categories[0].projects.map((project, index) => (
            <GalleryBrandingList
              categories={categories}
              project={project}
              key={project.id}
            />
          ))}

        {/* {projectClicked &&
          categories[0].projects.map((project, index) => (
            <GalleryBrandingItem
              categories={categories}
              project={project}
              key={project.id}
              handleClickBrand={handleClickBrand}
            />
          ))} */}
        {/* {categories[0].clicked && categories[0].projects} */}
        {categories[1].clicked &&
          categories[1].projects.map((project, index) => (
            <GalleryMarketingList project={project} key={project.id} />
          ))}

        {categories[2].clicked &&
          categories[2].projects.map((project, index) => (
            <GalleryDesignList project={project} key={project.id} />
          ))}
        {categories[3].clicked &&
          categories[3].projects.map((project, index) => (
            <GalleryPhotographyList project={project} key={project.id} />
          ))}

        {categories[4].clicked &&
          categories[4].projects.map((project, index) => (
            <GalleryDevelopmentList project={project} key={project.id} />
          ))}
      </div>
    </>
  );
};

export default GalleryElement;
